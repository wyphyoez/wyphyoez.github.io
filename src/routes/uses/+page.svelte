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

<section class="mx-auto max-w-4xl py-20 sm:py-28">
	<header class="max-w-2xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">The workbench</p>
		<h1
			class="mt-4 font-outfit text-5xl font-semibold tracking-tight text-dark sm:text-7xl dark:text-white"
		>
			Tools I reach for.
		</h1>
		<p class="mt-7 text-xl leading-9 text-zinc-600 dark:text-zinc-400">
			A living list of the tools, platforms, and habits that make the day-to-day work more
			deliberate.
		</p>
	</header>
	<div
		class="mt-16 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-white/10 dark:border-white/10"
	>
		{#each tools as tool, index}
			<section class="grid gap-4 py-8 sm:grid-cols-[6rem_1fr] sm:gap-8">
				<span class="font-mono text-sm text-zinc-400">0{index + 1}</span>
				<div>
					<h2 class="font-outfit text-2xl font-semibold text-dark dark:text-white">{tool.group}</h2>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each tool.items as item}
							<span
								class="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600 dark:bg-white/10 dark:text-zinc-300"
								>{item}</span
							>
						{/each}
					</div>
				</div>
			</section>
		{/each}
	</div>
</section>
