<script>
	import { info } from '$lib/utils/info.js';
	import ArticleData from '$lib/components/ArticleData.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: isFirstPage = data.page === 1;
	$: hasNextPage = Boolean(data.articles[data.articles.length - 1]?.previous);
</script>

<svelte:head>
	<title>{info.name} {info.handle} | Articles</title>
	<meta name="description" content={`Notes on building software by ${info.name}.`} />
</svelte:head>

<section class="mx-auto max-w-4xl py-20 minmd:py-28">
	<header class="max-w-2xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Field notes</p>
		<h1
			class="mt-4 font-outfit text-5xl font-semibold tracking-tight text-dark minmd:text-7xl dark:text-white"
		>
			Articles
		</h1>
		<p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
			Small observations about interfaces, tools, and the work of making software feel less
			confusing.
		</p>
	</header>

	<div
		class="mt-16 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-white/10 dark:border-white/10"
	>
		{#each data.articles as article, index}
			<a
				href={`/article/${article.slug}`}
				class="group block py-8 transition focus:outline-none focus:ring-2 focus:ring-blue focus:ring-inset"
			>
				<div class="grid gap-4 minmd:grid-cols-[7rem_1fr_auto] minmd:items-start minmd:gap-8">
					<span class="font-mono text-sm text-zinc-400">{String(index + 1).padStart(2, '0')}</span>
					<div>
						<h2
							class="font-outfit text-2xl font-semibold tracking-tight text-dark transition group-hover:text-blue minmd:text-3xl dark:text-white"
						>
							{article.title}
						</h2>
						<div class="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
							{@html article.preview.html}
						</div>
						<ArticleData
							post={article}
							collapsed={true}
							class="mt-4 text-xs uppercase tracking-[0.14em]"
						/>
					</div>
					<span
						class="text-xl text-zinc-300 transition group-hover:translate-x-1 group-hover:text-blue"
						aria-hidden="true">↗</span
					>
				</div>
			</a>
		{:else}
			<p class="py-12 text-zinc-500 dark:text-zinc-400">
				No articles have been published yet. Check back soon.
			</p>
		{/each}
	</div>

	<nav class="mt-8 flex items-center justify-between" aria-label="Article pagination">
		{#if isFirstPage}
			<span class="text-sm text-zinc-300 dark:text-zinc-700">Previous</span>
		{:else}
			<a
				href={data.page === 2 ? '/articles' : `/articles/${data.page - 1}`}
				class="text-sm font-semibold text-zinc-500 hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
				>← Previous</a
			>
		{/if}
		<span class="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">Page {data.page}</span
		>
		{#if hasNextPage}
			<a
				href={`/articles/${data.page + 1}`}
				class="text-sm font-semibold text-zinc-500 hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
				>Next →</a
			>
		{:else}
			<span class="text-sm text-zinc-300 dark:text-zinc-700">Next</span>
		{/if}
	</nav>
</section>
