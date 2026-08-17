<script>
	import { info } from '$lib/utils/info';
	import Head from '$lib/components/head.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<Head
	name={`${info.name} ${info.handle} | Projects`}
	description="Selected web projects by Wai Yan Phyoe."
	path="/projects"
/>

<section class="mx-auto max-w-5xl py-20 minmd:py-28">
	<header class="max-w-3xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Selected work</p>
		<h1
			class="mt-4 font-outfit text-5xl font-semibold tracking-tight text-dark minmd:text-7xl dark:text-white"
		>
			Projects with a point of view.
		</h1>
		<p class="mt-7 text-xl leading-9 text-zinc-600 dark:text-zinc-400">
			A small collection of interfaces and experiments built to learn something, solve something, or
			make something clearer.
		</p>
	</header>
	<div class="mt-16 grid gap-6 min-lg:grid-cols-2">
		{#each info.projects as project}
			<ProjectCard projectDetail={project} />
		{/each}
	</div>
</section>
