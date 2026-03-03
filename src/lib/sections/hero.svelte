<script>
	export let name;
	let mousePos = { x: 0, y: 0 };

	function handleMouseMove(e) {
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section
	class="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20"
	id="hero"
>
	<!-- Animated gradient orb - mouse follow -->
	<div
		class="absolute w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
		style="background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%); left: {mousePos.x - 192}px; top: {mousePos.y - 192}px; transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);"
	/>

	<div class="max-w-7xl mx-auto px-4 w-full">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Left: Content -->
			<div class="space-y-8 animate-fade-in">
				<div class="space-y-4">
					<p class="text-[hsl(var(--primary-light))] text-lg font-medium">Frontend Engineer & Interactive Developer</p>
					<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
						<span class="block">Build</span>
						<span class="gradient-text">Immersive</span>
						<span class="block">Web</span>
						<span class="gradient-text">Experiences</span>
					</h1>
				</div>

				<p class="text-lg text-gray-300 max-w-xl leading-relaxed">
					Specialized in SvelteKit, TypeScript, and WebGL. Creating cinematic frontend experiences with depth, 
					interactivity, and meticulous attention to detail.
				</p>

				<div class="flex flex-col sm:flex-row gap-4 pt-4">
					<a href="#projects" class="btn-primary text-center">Explore Projects</a>
					<a href="#contact" class="btn-outline text-center">Get In Touch</a>
				</div>

				<!-- Tech Stack -->
				<div class="pt-8 border-t border-white/10">
					<p class="text-sm text-gray-400 mb-4">Specialized In</p>
					<div class="flex flex-wrap gap-2">
						{#each ['SvelteKit', 'TypeScript', 'WebGL', 'Three.js', 'React', 'Tailwind'] as tech}
							<span class="skill-chip">{tech}</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- Right: 3D Canvas Placeholder -->
			<div class="hidden md:flex items-center justify-center h-full">
				<div
					class="relative w-full aspect-square max-w-lg glass-morphism rounded-2xl glow-accent overflow-hidden group"
				>
					<!-- Placeholder for Three.js canvas -->
					<div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
					<div
						class="absolute inset-0 flex items-center justify-center text-center px-8"
					>
						<div class="space-y-4">
							<div class="text-5xl">🎨</div>
							<p class="text-sm text-gray-300">
								Interactive WebGL Canvas
								<br />
								<span class="text-xs text-gray-500">(Three.js integration ready)</span>
							</p>
						</div>
					</div>

					<!-- Animated border -->
					<div
						class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						style="border: 1px solid; border-image: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5)) 1;"
					/>
				</div>
			</div>
		</div>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
			<span class="text-xs text-gray-400">Scroll to explore</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				class="text-[hsl(var(--primary))]"
			>
				<path d="M12 5v14M19 12l-7 7-7-7" />
			</svg>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(.animate-fade-in) {
		animation: fade-in 0.8s ease-out;
	}
</style>
