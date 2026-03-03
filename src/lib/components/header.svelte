<script>
	import { info } from '$lib/utils/info';
	import { browser } from '$app/environment';

	let scrolled = false;
	let mobileMenuOpen = false;

	if (browser) {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
		});
	}

	const navLinks = [
		{ title: 'About', href: '#about' },
		{ title: 'Projects', href: '#projects' },
		{ title: 'Experience', href: '#experience' },
		{ title: 'Contact', href: '#contact' }
	];
</script>

<svelte:window />

<header
	class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
		scrolled ? 'glass-morphism py-3' : 'py-6'
	}`}
>
	<nav class="max-w-7xl mx-auto px-4 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
				WP
			</div>
			<span class="hidden sm:inline text-lg font-semibold gradient-text">Wai Yan Phyoe</span>
		</div>

		<ul class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="text-sm transition-colors hover:text-[hsl(var(--primary-light))] relative group"
					>
						{link.title}
						<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-4">
			<a href="#contact" class="btn-primary hidden md:inline-block text-sm">Get In Touch</a>
			<button
				class="md:hidden p-2 rounded-lg glass-morphism"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			</button>
		</div>
	</nav>

	{#if mobileMenuOpen}
		<div class="absolute top-full left-0 right-0 glass-morphism m-4 rounded-xl mt-2 md:hidden">
			<div class="flex flex-col gap-4 p-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm transition-colors hover:text-[hsl(var(--primary-light))]"
						on:click={() => (mobileMenuOpen = false)}
					>
						{link.title}
					</a>
				{/each}
				<a href="#contact" class="btn-primary text-sm">Get In Touch</a>
			</div>
		</div>
	{/if}
</header>
