<script>
	import Icon from '$lib/components/Icon.svelte';

	export let projectDetail;
	export let index = 0;
	const { title, label, description, stack, thumbnail, liveUrl, githubUrl } = projectDetail;
</script>

<article
	class="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white shadow-xl shadow-zinc-900/5 transition duration-500 hover:-translate-y-1 hover:border-blue/40 hover:shadow-2xl hover:shadow-blue/10 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-blue/50 dark:hover:bg-white/[0.055]"
>
	<div class="relative isolate overflow-hidden bg-zinc-100 dark:bg-zinc-900">
		<img
			src={thumbnail}
			class="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
			loading="lazy"
			width="960"
			height="600"
			alt={`${title} project preview`}
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
		/>
		<div class="absolute inset-x-0 top-0 flex items-center justify-between p-4 minmd:p-5">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md"
				>{label}</span
			>
			{#if githubUrl || liveUrl}
				<div class="flex items-center gap-2">
					{#if githubUrl}
						<a
							href={githubUrl}
							class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-blue focus:outline-none focus:ring-2 focus:ring-white"
							aria-label={`View ${title} source code on GitHub`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon name="github" className="h-4 w-4" />
						</a>
					{/if}
					{#if liveUrl}
						<a
							href={liveUrl}
							class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-blue focus:outline-none focus:ring-2 focus:ring-white"
							aria-label={`Open ${title} live preview`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon name="arrowUpRight" className="h-4 w-4" />
						</a>
					{/if}
				</div>
			{/if}
		</div>
		<div
			class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-medium text-white/80 minmd:bottom-5 minmd:left-5 minmd:right-5"
		>
			<span class="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 backdrop-blur-sm"
				>Case study</span
			>
			<span>{String(index + 1).padStart(2, '0')}</span>
		</div>
	</div>
	<div class="p-6 minmd:p-7">
		<div class="flex items-start justify-between gap-4">
			<h3 class="font-outfit text-2xl font-semibold tracking-tight text-dark dark:text-white">
				{title}
			</h3>
			<span
				class="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-zinc-500"
				aria-hidden="true">Selected</span
			>
		</div>
		<p class="mt-3 max-w-[34rem] text-sm leading-7 text-zinc-600 dark:text-zinc-400">
			{description}
		</p>
		<div class="mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-5 dark:border-white/10">
			{#each stack as item}
				<span
					class="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
					><span class="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />{item}</span
				>
			{/each}
		</div>
	</div>
</article>
