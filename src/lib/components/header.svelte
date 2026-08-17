<script>
	import { onMount } from 'svelte';
	import { info } from '$lib/utils/info';
	import profile from '$lib/images/profile.jpg';
	import { browser } from '$app/environment';

	let show = false;
	let menu = false;
	let isDarkMode = true;

	function handler() {
		show = window.scrollY > 32;
	}

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		localStorage.setItem('isDarkMode', isDarkMode.toString());
		document.documentElement.classList.toggle('dark', isDarkMode);
	}

	onMount(() => {
		const stored = localStorage.getItem('isDarkMode');
		isDarkMode = stored === null ? true : stored === 'true';
		document.documentElement.classList.toggle('dark', isDarkMode);
	});
</script>

<svelte:window on:scroll={handler} />

<header class="fixed left-0 right-0 top-0 z-30 px-4 pt-4 lg:pt-3">
	<nav
		aria-label="Primary navigation"
		class={`mx-auto flex h-14 max-w-5xl items-center rounded-full border px-3 transition duration-300 ${
			show
				? 'border-zinc-200/80 bg-white/80 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80'
				: 'border-transparent bg-white/30 backdrop-blur-md dark:bg-zinc-950/20'
		}`}
	>
		<div class="flex min-w-0 flex-1 items-center gap-3">
			<a
				href="/"
				class="flex items-center gap-3 rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-blue"
				aria-label="Wai Yan Phyoe home"
			>
				<img
					src={profile}
					alt="Portrait of Wai Yan Phyoe"
					class="h-9 w-9 rounded-full object-cover"
				/>
				<span
					class="hidden font-outfit text-sm font-semibold tracking-tight sm:inline dark:text-white"
				>
					{info.handle}
				</span>
			</a>
		</div>

		<ul class="hidden items-center gap-1 md:flex">
			{#each info.navLinks as navLink}
				<li>
					<a
						href={navLink.path}
						class="rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-dark focus:outline-none focus:ring-2 focus:ring-blue dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
					>
						{navLink.title}
					</a>
				</li>
			{/each}
		</ul>

		<div class="ml-auto flex items-center gap-2 md:ml-4">
			<a
				href={info.socialMedia.github}
				target="_blank"
				rel="noopener noreferrer"
				class="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-blue hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue dark:border-white/10 dark:text-zinc-100 dark:hover:border-blue dark:hover:text-blue md:inline-flex"
			>
				GitHub
			</a>
			<button
				type="button"
				role="switch"
				aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
				aria-checked={isDarkMode}
				on:click={toggleTheme}
				class="rounded-full bg-zinc-100 p-2 text-zinc-700 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/20"
			>
				{#if isDarkMode}
					<span aria-hidden="true">☼</span>
				{:else}
					<span aria-hidden="true">◐</span>
				{/if}
			</button>
			<button
				type="button"
				aria-label={menu ? 'Close menu' : 'Open menu'}
				aria-expanded={menu}
				aria-controls="mobile-menu"
				on:click={() => (menu = !menu)}
				class="rounded-full bg-zinc-100 p-2 text-zinc-700 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/20 md:hidden"
			>
				<span aria-hidden="true">{menu ? '×' : '☰'}</span>
			</button>
		</div>
	</nav>

	{#if menu}
		<div id="mobile-menu" class="mx-auto mt-2 max-w-5xl md:hidden">
			<div
				class="rounded-3xl border border-zinc-200/80 bg-white/95 p-3 shadow-xl shadow-zinc-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/95"
			>
				<ul class="grid gap-1">
					{#each info.navLinks as navLink}
						<li>
							<a
								href={navLink.path}
								on:click={() => (menu = false)}
								class="block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-blue dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-blue"
							>
								{navLink.title}
							</a>
						</li>
					{/each}
					<li>
						<a
							href={info.socialMedia.github}
							target="_blank"
							rel="noopener noreferrer"
							class="block rounded-2xl bg-dark px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-dark"
						>
							View GitHub profile
						</a>
					</li>
				</ul>
			</div>
		</div>
	{/if}
</header>
