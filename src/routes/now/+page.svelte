<script>
	import Head from '$lib/components/head.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { info } from '$lib/utils/info.js';

	const now = info.now;
	const updatedDate = new Intl.DateTimeFormat('en', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	}).format(new Date(`${now.updated}T00:00:00Z`));

	const notes = [now.building, now.focus, now.learning];
</script>

<Head
	name={`${info.name} ${info.handle} | Now`}
	description={`What ${info.name} is currently focusing on: thoughtful interface work, clearer project storytelling, and useful front-end details.`}
	path="/now"
/>

<section class="mx-auto max-w-5xl py-20 minmd:py-28">
	<div class="grid gap-12 min-lg:grid-cols-[0.8fr_1.2fr] min-lg:gap-20">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Now / {now.updated}</p>
			<h1
				class="mt-4 font-outfit text-5xl font-semibold leading-[0.98] tracking-tight text-dark minmd:text-7xl dark:text-white"
			>
				{now.headline}
			</h1>
			<p class="mt-7 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">{now.intro}</p>
			<p class="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
				Last updated <time datetime={now.updated}>{updatedDate}</time>. This page changes when the
				focus changes.
			</p>
		</div>

		<div class="grid gap-4">
			{#each notes as note, index}
				<article
					class="rounded-[1.75rem] border border-zinc-200/80 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:border-blue/50 dark:border-white/10 dark:bg-white/[0.035] minmd:p-7"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
						0{index + 1} / Current note
					</p>
					<h2
						class="mt-4 font-outfit text-2xl font-semibold tracking-tight text-dark dark:text-white"
					>
						{note.title}
					</h2>
					<p class="mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
						{note.text}
					</p>
				</article>
			{/each}
		</div>
	</div>

	<div
		class="mt-16 grid gap-5 border-t border-zinc-200/80 pt-10 minmd:grid-cols-[1fr_auto] minmd:items-center dark:border-white/10 minmd:mt-24"
	>
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Availability</p>
			<p class="mt-3 font-outfit text-3xl font-semibold tracking-tight text-dark dark:text-white">
				{info.availability}
			</p>
			<p class="mt-3 text-base text-zinc-600 dark:text-zinc-400">
				Based in {info.location}, working remotely with thoughtful teams and focused problems.
			</p>
		</div>
		<a
			href="/contact"
			class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-dark px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 dark:bg-white dark:text-dark"
			>Start a brief <Icon name="arrowUpRight" className="h-4 w-4" /></a
		>
	</div>
</section>
