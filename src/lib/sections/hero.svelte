<script>
	export let name;
	export let handle;
	export let jobDescription;
	export let location;
</script>

<section
	id="top"
	class="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden py-24 minmd:py-28"
>
	<div
		class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue/10 blur-3xl dark:bg-blue/20"
		aria-hidden="true"
	/>
	<div
		class="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-fuchsia-300/10 blur-3xl dark:bg-fuchsia-500/10"
		aria-hidden="true"
	/>
	<div
		class="relative z-10 grid w-full min-w-0 items-end gap-10 min-lg:grid-cols-[1.2fr_0.8fr] min-lg:gap-20"
	>
		<div class="max-w-4xl">
			<p
				class="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue"
			>
				<span class="h-px w-8 bg-blue" aria-hidden="true" />
				{jobDescription}
			</p>
			<h1
				class="max-w-full break-words font-outfit text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.06em] text-dark minmd:text-7xl min-lg:text-[7.5rem] dark:text-white"
			>
				{name}<span class="text-blue">.</span>
			</h1>
			<p
				class="mt-5 font-outfit text-xl font-medium text-zinc-500 minmd:text-2xl dark:text-zinc-300"
			>
				{handle} <span class="mx-2 text-blue" aria-hidden="true">/</span> I build things for the web.
			</p>
			<p class="mt-8 max-w-2xl text-base leading-8 text-zinc-600 minmd:text-lg dark:text-zinc-400">
				I design and develop clear, useful interfaces for products that need to work in the real
				world—not just look good in a screenshot.
			</p>
			<div class="mt-9 flex flex-wrap items-center gap-3">
				<a
					href="/#about"
					class="inline-flex items-center gap-3 rounded-full bg-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue dark:bg-white dark:text-dark dark:hover:bg-blue dark:hover:text-white"
				>
					Explore the work <span aria-hidden="true">↓</span>
				</a>
				<a
					href="mailto:ask@wyphyoez.cyou"
					class="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-blue hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue dark:border-white/15 dark:text-zinc-200 dark:hover:border-blue dark:hover:text-blue"
				>
					Start a conversation
				</a>
			</div>
		</div>

		<aside
			class="max-w-sm justify-self-start rounded-[2rem] border border-zinc-200/80 bg-white/70 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl min-lg:justify-self-end dark:border-white/10 dark:bg-white/5"
		>
			<p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Currently</p>
			<p class="mt-4 font-outfit text-2xl font-semibold leading-tight text-dark dark:text-white">
				Building with intention.
			</p>
			<div class="mt-6 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
				<span
					class="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]"
					aria-hidden="true"
				/>
				{location}
			</div>
			<div
				class="mt-4 border-t border-zinc-200/80 pt-4 text-sm leading-6 text-zinc-500 dark:border-white/10 dark:text-zinc-400"
			>
				Open to thoughtful product work, collaborative teams, and problems worth solving.
			</div>
		</aside>
	</div>
</section>
