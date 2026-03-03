<script>
	export let bio;
</script>

<section class="py-20" id="about">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Image -->
			<div class="hidden md:flex justify-center">
				<div class="relative w-80 h-80 glass-morphism rounded-2xl glow-accent overflow-hidden group">
					<div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="text-center space-y-4">
							<div class="text-7xl">👨‍💻</div>
							<p class="text-sm text-gray-300">Frontend Engineer</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Content -->
			<div class="space-y-8">
				<div>
					<h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
					<p class="text-lg text-gray-300 leading-relaxed">{bio}</p>
				</div>

				<!-- Skills -->
				<div>
					<h3 class="text-xl font-bold mb-4">Core Competencies</h3>
					<div class="grid grid-cols-2 gap-3">
						{#each ['SvelteKit', 'TypeScript', 'React', 'Next.js', 'WebGL', 'Three.js', 'Tailwind CSS', 'Node.js', 'Firebase', 'Responsive Design', 'Web Performance', 'Interactive UX'] as skill}
							<div class="skill-chip text-center justify-center">{skill}</div>
						{/each}
					</div>
				</div>

				<!-- Stats -->
				<div class="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
					<div class="text-center">
						<p class="text-3xl font-bold gradient-text">3+</p>
						<p class="text-sm text-gray-400">Years Experience</p>
					</div>
					<div class="text-center">
						<p class="text-3xl font-bold gradient-text">20+</p>
						<p class="text-sm text-gray-400">Projects Completed</p>
					</div>
					<div class="text-center">
						<p class="text-3xl font-bold gradient-text">100%</p>
						<p class="text-sm text-gray-400">Client Satisfaction</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
