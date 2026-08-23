import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { info } from '$lib/utils/info.js';

const contactPagePath = fileURLToPath(new URL('./routes/contact/+page.svelte', import.meta.url));

describe('portfolio contact and now content', () => {
	it('keeps Now and Contact discoverable in the primary navigation', () => {
		expect(info.navLinks).toEqual(
			expect.arrayContaining([
				{ path: '/now', title: 'Now' },
				{ path: '/contact', title: 'Contact' }
			])
		);
	});

	it('provides editable Now focus content with a transparent update date', () => {
		expect(info.now).toMatchObject({
			updated: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
			headline: expect.any(String),
			building: { title: expect.any(String), text: expect.any(String) },
			focus: { title: expect.any(String), text: expect.any(String) },
			learning: { title: expect.any(String), text: expect.any(String) }
		});
	});

	it('keeps only verified portfolio projects and exposes the KyarBo game board asset', () => {
		const kyarBo = info.projects.find((project) => project.slug === 'kyarbo');

		expect(kyarBo).toMatchObject({
			title: 'KyarBo',
			label: 'Myanmar checkers game',
			thumbnail:
				'https://files.manuscdn.com/user_upload_by_module/session_file/310519663886508705/pYnmdFZscjtINLtA.webp',
			stack: ['React', 'TypeScript', 'Supabase']
		});
		expect(info.projects.some((project) => project.slug === 'astro-portfolio')).toBe(false);
	});

	it('formats a client-side mailto brief without a persistence endpoint', async () => {
		const source = await readFile(contactPagePath, 'utf8');

		expect(source).toContain('function submitBrief()');
		expect(source).toContain(
			'window.location.href = `mailto:${info.socialMedia.email}?subject=${subject}&body=${body}`'
		);
		expect(source).toContain(
			'Submitting opens your email app with this brief already formatted. Nothing is stored on'
		);
		expect(source).not.toMatch(/\bfetch\s*\(|\baxios\b|\/api\//);
	});
});
