<script>
	export let title;
	export let details;
</script>

<section
	class="grid gap-10 border-t border-zinc-200/80 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] dark:border-white/10"
>
	<div>
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">02 / {title}</p>
		<h2
			class="mt-4 font-outfit text-4xl font-semibold tracking-tight text-dark sm:text-5xl dark:text-white"
		>
			A practice of staying curious.
		</h2>
	</div>
	<div
		class="divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-white/10 dark:border-white/10"
	>
		{#each details as item, index}
			<div class="grid gap-4 py-7 sm:grid-cols-[5rem_1fr] sm:gap-8">
				<span class="font-mono text-sm text-zinc-400">0{index + 1}</span>
				<div>
					<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
						<h3 class="font-outfit text-xl font-semibold text-dark dark:text-white">{item.name}</h3>
						<p class="text-sm text-zinc-400">{item.startDate} — {item.endDate}</p>
					</div>
					<p class="mt-2 text-sm font-medium text-blue">{item.location}</p>
					<ul class="mt-4 space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
						{#each item.description as point}
							<li class="flex gap-3">
								<span class="text-blue" aria-hidden="true">↳</span><span>{point}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>
