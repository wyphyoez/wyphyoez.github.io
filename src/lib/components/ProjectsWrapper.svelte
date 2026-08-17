<script>
	export let projects;
	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="py-20 sm:py-28">
	<div class="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Selected work</p>
			<h2
				class="mt-3 font-outfit text-4xl font-semibold tracking-tight text-dark sm:text-5xl dark:text-white"
			>
				A few things I’ve built.
			</h2>
		</div>
		<a
			href="/projects"
			class="text-sm font-semibold text-zinc-500 transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue dark:text-zinc-400"
			>View all projects <span aria-hidden="true">↗</span></a
		>
	</div>
	<div class="grid gap-6 lg:grid-cols-2">
		{#each projects as project, index}
			<ProjectCard projectDetail={project} {index} />
		{/each}
	</div>
</section>
