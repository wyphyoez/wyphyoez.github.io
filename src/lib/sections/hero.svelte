<script>
	// Wai Yan Phyoe visual system: an editorial dark hero with blue annotation accents, compact mobile rhythm, and information-rich but focused actions.
	export let name;
	export let handle;
	export let jobDescription;
	export let location;
</script>

<section
	id="top"
	class="hero relative overflow-hidden rounded-[2rem] bg-[#101114] px-5 py-14 text-white shadow-2xl shadow-black/10 minmd:px-8 minmd:py-24 min-lg:rounded-[2.75rem] min-lg:px-12 min-lg:py-28"
>
	<div
		class="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue/20 blur-3xl"
		aria-hidden="true"
	/>
	<div
		class="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-purple-bright/10 blur-3xl"
		aria-hidden="true"
	/>

	<div
		class="relative z-10 grid w-full min-w-0 items-end gap-12 min-lg:grid-cols-[1.15fr_0.85fr] min-lg:gap-20"
	>
		<div class="min-w-0 max-w-4xl">
			<div
				class="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-blue minmd:text-xs"
			>
				<span class="inline-flex items-center gap-2">
					<span class="h-px w-8 bg-blue" aria-hidden="true" />
					{jobDescription}
				</span>
				<span class="text-zinc-500" aria-hidden="true">/</span>
				<span class="text-zinc-400">Independent builder</span>
			</div>

			<h1
				class="mt-6 max-w-full break-words font-outfit text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.07em] text-white minmd:text-7xl min-lg:mt-8 min-lg:text-[7.5rem]"
			>
				{name}<span class="text-blue">.</span>
			</h1>
			<p
				class="mt-6 max-w-2xl font-outfit text-xl font-medium leading-tight text-zinc-200 minmd:text-3xl"
			>
				<span class="text-white">{handle}</span>
				<span class="mx-2 text-blue" aria-hidden="true">/</span>
				I build things for the web.
			</p>
			<p class="mt-7 max-w-2xl text-base leading-8 text-zinc-400 minmd:mt-8 minmd:text-lg">
				I design and develop clear, useful interfaces for products that need to work in the real
				world—not just look good in a screenshot.
			</p>

			<div
				class="mt-8 grid grid-cols-1 gap-3 border-y border-white/10 py-4 text-sm minmd:grid-cols-3 minmd:gap-5"
			>
				<div>
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
						Based in
					</p>
					<p class="mt-1 font-medium text-zinc-200">{location}</p>
				</div>
				<div>
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
						Focus
					</p>
					<p class="mt-1 font-medium text-zinc-200">Interfaces + APIs</p>
				</div>
				<div>
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
						Open to
					</p>
					<p class="mt-1 font-medium text-zinc-200">Thoughtful product work</p>
				</div>
			</div>

			<div class="mt-8 flex flex-col items-stretch gap-3 minmd:flex-row minmd:items-center">
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
					ask@wyphyoez.cyou <span aria-hidden="true">↗</span>
				</a>
			</div>
		</div>

		<aside
			class="max-w-sm justify-self-stretch rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl min-lg:justify-self-end min-lg:p-7"
		>
			<div class="flex items-center justify-between gap-4">
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Currently</p>
				<span class="inline-flex items-center gap-2 text-xs font-medium text-emerald-300">
					<span
						class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]"
						aria-hidden="true"
					/>
					Available
				</span>
			</div>
			<p class="mt-5 font-outfit text-2xl font-semibold leading-tight text-white minmd:text-3xl">
				Building with intention.
			</p>
			<p class="mt-4 text-sm leading-6 text-zinc-400">
				Open to thoughtful product work, collaborative teams, and problems worth solving.
			</p>
			<div class="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm">
				<div>
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">Mode</p>
					<p class="mt-1 text-zinc-200">Always learning</p>
				</div>
				<div>
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
						Status
					</p>
					<p class="mt-1 text-zinc-200">Open to work</p>
				</div>
			</div>
		</aside>
	</div>
</section>
