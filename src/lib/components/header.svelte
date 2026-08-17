<script>
	import { onMount } from 'svelte';
	import { info } from '$lib/utils/info';
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';

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
				? 'border-zinc-200/80 bg-white/80 text-zinc-700 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-100'
				: 'border-transparent bg-transparent text-white shadow-none backdrop-blur-none'
		}`}
	>
		<div class="flex min-w-0 flex-1 items-center gap-3">
			<a
				href="/"
				class="flex items-center gap-3 rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-blue"
				aria-label="Wai Yan Phyoe home"
			>
				<span
					class="brand-mark inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#15161a] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_6px_18px_rgba(36,138,255,0.18)]"
					aria-hidden="true"
				>
					<svg viewBox="0 0 40 40" class="h-7 w-7" fill="none">
						<path
							d="M10 28.5 17.5 11l5 11 3-6 4.5 12.5"
							stroke="currentColor"
							stroke-width="3.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<circle cx="29.5" cy="12" r="3" fill="#248aff" />
					</svg>
				</span>
				<span
					class={`font-outfit text-sm font-semibold tracking-tight ${
						show ? 'text-zinc-800 dark:text-white' : 'text-white'
					}`}
				>
					{info.handle}
				</span>
			</a>
		</div>

		<ul class="hidden items-center gap-1 minmd:flex">
			{#each info.navLinks as navLink}
				<li>
					<a
						href={navLink.path}
						class={`rounded-full px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue ${
							show
								? 'text-zinc-600 hover:bg-zinc-100 hover:text-dark dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white'
								: 'text-white/85 hover:bg-white/10 hover:text-white'
						}`}
					>
						{navLink.title}
					</a>
				</li>
			{/each}
		</ul>

		<div class="ml-auto flex items-center gap-2 minmd:ml-4">
			<a
				href={info.socialMedia.github}
				target="_blank"
				rel="noopener noreferrer"
				class={`hidden rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-blue hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue minmd:inline-flex ${
					show
						? 'border-zinc-200 text-zinc-700 dark:border-white/10 dark:text-zinc-100'
						: 'border-white/40 text-white hover:border-white hover:text-white'
				}`}
			>
				GitHub
			</a>
			<button
				type="button"
				role="switch"
				aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
				aria-checked={isDarkMode}
				on:click={toggleTheme}
				class={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue ${
					show
						? 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/20'
						: 'bg-white/10 text-white hover:bg-white/20'
				}`}
			>
				{#if isDarkMode}
					<Icon name="sun" className="h-4 w-4" />
				{:else}
					<Icon name="moon" className="h-4 w-4" />
				{/if}
			</button>
			<button
				type="button"
				aria-label={menu ? 'Close menu' : 'Open menu'}
				aria-expanded={menu}
				aria-controls="mobile-menu"
				on:click={() => (menu = !menu)}
				class={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue minmd:hidden ${
					show
						? 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/20'
						: 'bg-white/10 text-white hover:bg-white/20'
				}`}
			>
				{#if menu}
					<Icon name="close" className="h-5 w-5" />
				{:else}
					<Icon name="menu" className="h-5 w-5" />
				{/if}
			</button>
		</div>
	</nav>

	{#if menu}
		<div id="mobile-menu" class="mx-auto mt-2 max-w-5xl minmd:hidden">
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
