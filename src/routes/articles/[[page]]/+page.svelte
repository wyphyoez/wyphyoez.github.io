<script>
	import { info } from '$lib/utils/info.js';
	import ArticleData from '$lib/components/ArticleData.svelte';
	import Icon from '$lib/components/Icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: isFirstPage = data.page === 1;
	$: hasNextPage = Boolean(data.articles[data.articles.length - 1]?.previous);
</script>

<svelte:head>
	<title>{info.name} {info.handle} | Articles</title>
	<meta name="description" content={`Notes on building software by ${info.name}.`} />
</svelte:head>

<section class="mx-auto max-w-5xl py-8 minmd:py-12">
	<header
		class="grid gap-8 border-b border-zinc-200/80 pb-10 min-lg:grid-cols-[1fr_0.8fr] min-lg:items-end dark:border-white/10"
	>
		<div class="max-w-3xl">
			<p class="text-xs font-semibold uppercase tracking-[0.22em] text-blue">
				Field notes / {String(data.page).padStart(2, '0')}
			</p>
			<h1
				class="mt-4 font-outfit text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-dark minmd:text-7xl dark:text-white"
			>
				Articles
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
				Small observations about interfaces, tools, and the work of making software feel less
				confusing.
			</p>
		</div>
		<div
			class="rounded-3xl border border-zinc-200/80 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/[0.04]"
		>
			<p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Reading list</p>
			<p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
				Practical notes, short experiments, and lessons gathered while building for the web.
			</p>
		</div>
	</header>

	<div
		class="mt-10 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-white/10 dark:border-white/10"
	>
		{#each data.articles as article, index}
			<a
				href={`/article/${article.slug}`}
				class="group block py-8 transition focus:outline-none focus:ring-2 focus:ring-blue focus:ring-inset minmd:py-10"
			>
				<div class="grid gap-4 minmd:grid-cols-[5rem_1fr_auto] minmd:items-start minmd:gap-8">
					<span class="font-mono text-sm text-zinc-400">{String(index + 1).padStart(2, '0')}</span>
					<div class="min-w-0">
						<h2
							class="font-outfit text-2xl font-semibold leading-tight tracking-tight text-dark transition group-hover:text-blue minmd:text-3xl dark:text-white"
						>
							{article.title}
						</h2>
						<div class="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
							{@html article.preview.html}
						</div>
						<ArticleData post={article} collapsed={true} class="mt-5 text-xs" />
					</div>
					<span
						class="hidden h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:border-blue group-hover:text-blue minmd:inline-flex dark:border-white/10"
						aria-hidden="true"><Icon name="arrowUpRight" className="h-4 w-4" /></span
					>
				</div>
			</a>
		{:else}
			<p class="py-12 text-zinc-500 dark:text-zinc-400">
				No articles have been published yet. Check back soon.
			</p>
		{/each}
	</div>

	<nav
		class="mt-8 flex flex-wrap items-center justify-between gap-4"
		aria-label="Article pagination"
	>
		{#if isFirstPage}
			<span class="text-sm text-zinc-300 dark:text-zinc-700">Previous</span>
		{:else}
			<a
				href={data.page === 2 ? '/articles' : `/articles/${data.page - 1}`}
				class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
				><Icon name="arrowLeft" className="h-4 w-4" /> Previous</a
			>
		{/if}
		<span class="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">Page {data.page}</span
		>
		{#if hasNextPage}
			<a
				href={`/articles/${data.page + 1}`}
				class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
				>Next <Icon name="arrowRight" className="h-4 w-4" /></a
			>
		{:else}
			<span class="text-sm text-zinc-300 dark:text-zinc-700">Next</span>
		{/if}
	</nav>
</section>
