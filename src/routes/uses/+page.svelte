<script>
	import { info } from '$lib/utils/info';
	import Head from '$lib/components/head.svelte';

	const tools = [
		{ group: 'Editor', items: ['VS Code', 'Prettier', 'Git'] },
		{ group: 'Build', items: ['SvelteKit', 'React', 'Tailwind CSS', 'Vite'] },
		{ group: 'Ship', items: ['GitHub', 'Cloudflare Pages', 'Vercel'] },
		{ group: 'Keep learning', items: ['MDN Web Docs', 'Product writing', 'Open-source projects'] }
	];
</script>

<Head
	name={`${info.name} ${info.handle} | Uses`}
	description="A practical list of tools and platforms used by Wai Yan Phyoe."
	path="/uses"
/>

<section class="mx-auto max-w-4xl py-20 minmd:py-28">
	<header class="max-w-2xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">The workbench</p>
		<h1
			class="mt-4 font-outfit text-5xl font-semibold tracking-tight text-dark minmd:text-7xl dark:text-white"
		>
			Tools I reach for.
		</h1>
		<p class="mt-7 text-xl leading-9 text-zinc-600 dark:text-zinc-400">
			A living list of the tools, platforms, and habits that make the day-to-day work more
			deliberate.
		</p>
	</header>
	<div class="mt-14 grid gap-4 minmd:grid-cols-2 minmd:gap-5">
		{#each tools as tool, index}
			<section
				class="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white p-6 shadow-lg shadow-zinc-900/[0.03] transition duration-300 hover:-translate-y-0.5 hover:border-blue/35 hover:shadow-xl hover:shadow-blue/[0.06] dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-blue/50 dark:hover:bg-white/[0.055] minmd:p-7"
			>
				<div class="flex items-start justify-between gap-4">
					<div>
						<span class="font-mono text-xs font-medium tracking-[0.14em] text-blue"
							>0{index + 1}</span
						>
						<h2
							class="mt-3 font-outfit text-2xl font-semibold tracking-tight text-dark dark:text-white"
						>
							{tool.group}
						</h2>
					</div>
					<span
						class="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-zinc-500"
						>{tool.items.length} tools</span
					>
				</div>
				<div
					class="mt-6 flex flex-wrap gap-2.5 border-t border-zinc-200/80 pt-5 dark:border-white/10"
				>
					{#each tool.items as item}
						<span
							class="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-600 transition group-hover:border-zinc-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300 dark:group-hover:border-white/20"
							><span class="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />{item}</span
						>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</section>
