import { error } from '@sveltejs/kit';
import { info } from '$lib/utils/info';

export function load({ params }) {
	const project = info.projects.find((item) => item.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}
