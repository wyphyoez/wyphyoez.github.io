<script>
	// Wai Yan Phyoe visual system: use a dark, high-contrast hero with a compact mobile rhythm, blue annotation accents, and clear action hierarchy.
	export let name;
	export let handle;
	export let jobDescription;
	export let location;
</script>

<section
	id="top"
	class="hero relative overflow-hidden rounded-[2rem] bg-[#101114] px-4 py-16 text-white shadow-2xl shadow-black/10 minmd:px-8 minmd:py-24 min-lg:rounded-[2.75rem] min-lg:px-12 min-lg:py-28"
>
	<div
		class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue/20 blur-3xl"
		aria-hidden="true"
	/>
	<div
		class="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-purple-bright/10 blur-3xl"
		aria-hidden="true"
	/>
	<div
		class="relative z-10 grid w-full min-w-0 items-end gap-12 min-lg:grid-cols-[1.2fr_0.8fr] min-lg:gap-20"
	>
		<div class="min-w-0 max-w-4xl">
			<p
				class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue minmd:text-sm"
			>
				<span class="h-px w-8 bg-blue" aria-hidden="true" />
				{jobDescription}
			</p>
			<h1
				class="max-w-full break-words font-outfit text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.07em] text-white minmd:text-7xl min-lg:text-[7.5rem]"
			>
				{name}<span class="text-blue">.</span>
			</h1>
			<p
				class="mt-6 max-w-xl font-outfit text-xl font-medium leading-tight text-zinc-300 minmd:text-3xl"
			>
				<span class="text-zinc-100">{handle}</span>
				<span class="mx-2 text-blue" aria-hidden="true">/</span>
				I build things for the web.
			</p>
			<p class="mt-8 max-w-2xl text-base leading-8 text-zinc-400 minmd:text-lg">
				I design and develop clear, useful interfaces for products that need to work in the real
				world—not just look good in a screenshot.
			</p>
			<div class="mt-9 flex flex-col items-stretch gap-3 minmd:flex-row minmd:items-center">
				<a
					href="/#about"
					class="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-dark shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-[#101114]"
				>
					Explore the work <span aria-hidden="true">↓</span>
				</a>
				<a
					href="mailto:ask@wyphyoez.cyou"
					class="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-[#101114]"
				>
					Email @wyphyoez <span aria-hidden="true">↗</span>
				</a>
			</div>
		</div>
		<aside
			class="max-w-sm justify-self-stretch rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl min-lg:justify-self-end"
		>
			<p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Currently</p>
			<p class="mt-4 font-outfit text-2xl font-semibold leading-tight text-white">
				Building with intention.
			</p>
			<div class="mt-6 flex items-center gap-3 text-sm text-zinc-300">
				<span
					class="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]"
					aria-hidden="true"
				/>
				{location}
			</div>
			<div class="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-zinc-400">
				Open to thoughtful product work, collaborative teams, and problems worth solving.
			</div>
		</aside>
	</div>
</section>
