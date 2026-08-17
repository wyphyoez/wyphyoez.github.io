<script>
	export let projectDetail;
	export let index = 0;
	const { title, label, description, stack, thumbnail, liveUrl, githubUrl } = projectDetail;
</script>

<article
	class="group overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white shadow-lg shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue/10 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
>
	<div class="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
		<img
			src={thumbnail}
			class="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
			loading="lazy"
			width="960"
			height="600"
			alt={`${title} project preview`}
		/>
		<div class="absolute inset-x-0 top-0 flex items-center justify-between p-4">
			<span
				class="rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md"
				>{label}</span
			>
			<div class="flex items-center gap-2">
				<a
					href={githubUrl}
					class="rounded-full bg-black/55 p-3 text-white backdrop-blur-md transition hover:bg-blue focus:outline-none focus:ring-2 focus:ring-white"
					aria-label={`View ${title} source code on GitHub`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span aria-hidden="true">⌘</span>
				</a>
				<a
					href={liveUrl}
					class="rounded-full bg-black/55 p-3 text-white backdrop-blur-md transition hover:bg-blue focus:outline-none focus:ring-2 focus:ring-white"
					aria-label={`Open ${title} live preview`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span aria-hidden="true">↗</span>
				</a>
			</div>
		</div>
	</div>
	<div class="p-6 minmd:p-7">
		<div class="flex items-start justify-between gap-4">
			<h3 class="font-outfit text-2xl font-semibold tracking-tight text-dark dark:text-white">
				{title}
			</h3>
			<span class="text-sm text-zinc-400" aria-hidden="true"
				>{String(index + 1).padStart(2, '0')}</span
			>
		</div>
		<p class="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{description}</p>
		<div class="mt-5 flex flex-wrap gap-2">
			{#each stack as item}
				<span
					class="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-white/10 dark:text-zinc-300"
					>{item}</span
				>
			{/each}
		</div>
	</div>
</article>
