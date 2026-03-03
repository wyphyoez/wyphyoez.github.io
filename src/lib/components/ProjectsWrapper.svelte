<script>
	export let projects;
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="py-20" id="projects">
	<div class="max-w-7xl mx-auto px-4">
		<div class="mb-16">
			<h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
			<p class="text-lg text-gray-400 max-w-2xl">
				A selection of interactive experiences and web applications built with cutting-edge technologies.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each projects as project (project.title)}
				<div class="animate-fade-in-delay" style="animation-delay: {projects.indexOf(project) * 0.1}s">
					<ProjectCard projectDetail={project} />
				</div>
			{/each}
		</div>

		<!-- View More -->
		<div class="text-center mt-16">
			<a href="#contact" class="btn-primary">Explore More Projects</a>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in-delay {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(.animate-fade-in-delay) {
		animation: fade-in-delay 0.6s ease-out forwards;
	}
</style>
