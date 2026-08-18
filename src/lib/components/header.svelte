<script>
	import { onMount } from 'svelte';
	import { info } from '$lib/utils/info';
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';

	let show = false;
	let menu = false;
	let isDarkMode = true;

	$: headerSurface = show
		? 'border-zinc-200/80 text-zinc-700 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:text-zinc-100'
		: isDarkMode
		? 'border-transparent bg-transparent text-white shadow-none backdrop-blur-none'
		: 'border-transparent bg-transparent text-zinc-800 shadow-none backdrop-blur-none';

	$: sharedSurfaceColor = isDarkMode ? '#18181b' : '#ffffff';

	$: controlSurface = show
		? 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/20'
		: isDarkMode
		? 'border-white/10 bg-white/10 text-white hover:bg-white/15'
		: 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200';

	$: menuSurface = isDarkMode
		? 'border-white/10 shadow-2xl shadow-black/35'
		: 'border-zinc-200/90 shadow-xl shadow-zinc-900/10';

	$: menuDivider = isDarkMode ? 'border-white/10' : 'border-zinc-200/80';

	$: menuSocials = [
		{ label: 'GitHub', href: info.socialMedia.github, icon: 'github' },
		{ label: 'LinkedIn', href: info.socialMedia.linkedin, icon: 'linkedin' },
		{ label: 'Instagram', href: info.socialMedia.instagram, icon: 'instagram' },
		{ label: 'X', href: info.socialMedia.x, icon: 'x' }
	];

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
		class={`mx-auto flex h-14 max-w-5xl items-center rounded-full border px-1.5 transition duration-300 ${headerSurface}`}
		style={`background-color: ${show ? sharedSurfaceColor : 'transparent'}`}
	>
		<div class="flex min-w-0 flex-1 items-center gap-3">
			<a
				href="/"
				class="flex h-11 items-center gap-2.5 rounded-full select-none [-webkit-tap-highlight-color:transparent] focus:outline-none"
				aria-label="Wai Yan Phyoe home"
			>
				<span
					class={`brand-mark inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${controlSurface}`}
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
						show ? 'text-zinc-800 dark:text-white' : isDarkMode ? 'text-white' : 'text-zinc-800'
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
								: isDarkMode
								? 'text-white/85 hover:bg-white/10 hover:text-white'
								: 'text-zinc-700 hover:bg-zinc-100 hover:text-dark'
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
						: isDarkMode
						? 'border-white/40 text-white hover:border-white hover:text-white'
						: 'border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:text-dark'
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
				class={`inline-flex h-11 w-11 shrink-0 touch-manipulation select-none items-center justify-center rounded-full border appearance-none transition active:scale-[0.96] [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${controlSurface}`}
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
				class={`inline-flex h-11 w-11 shrink-0 touch-manipulation select-none items-center justify-center rounded-full border appearance-none transition active:scale-[0.96] [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue minmd:hidden ${controlSurface}`}
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
				class={`overflow-hidden rounded-[1.75rem] border p-1.5 ${menuSurface}`}
				style={`background-color: ${sharedSurfaceColor}`}
			>
				<div class={`border-b px-3.5 pb-2.5 pt-2 ${menuDivider}`}>
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-400">
						Navigation
					</p>
				</div>
				<ul class="grid gap-1 px-1 py-2">
					{#each info.navLinks as navLink}
						<li>
							<a
								href={navLink.path}
								on:click={() => (menu = false)}
								class="block rounded-2xl px-3.5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-blue dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-blue"
							>
								{navLink.title}
							</a>
						</li>
					{/each}
				</ul>
				<div class={`border-t px-1 pt-2 ${menuDivider}`}>
					<div class="grid grid-cols-4 gap-2">
						{#each menuSocials as social}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Open ${social.label} profile`}
								title={social.label}
								class="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 text-zinc-700 transition hover:border-blue hover:bg-blue hover:text-white [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-blue dark:hover:bg-blue"
								style="min-height: 48px"
							>
								<Icon name={social.icon} className="h-5 w-5" />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
