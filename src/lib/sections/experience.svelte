<script>
	export let title;
	export let details;
</script>

<section class="py-20" id="experience">
	<div class="max-w-7xl mx-auto px-4">
		<h2 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">{title}</h2>

		<div class="relative">
			<!-- Timeline line -->
			<div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent" />

			<div class="space-y-12 md:space-y-20">
				{#each details as item, idx}
					<div class="relative md:w-1/2 {idx % 2 === 0 ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'}">
						<!-- Timeline dot -->
						<div
							class="absolute {idx % 2 === 0 ? '-left-2.5 md:right-0' : '-left-2.5 md:left-0'} top-2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 glow-accent border-4 border-[hsl(var(--background))]"
						/>

						<!-- Card -->
						<div class="glass-morphism rounded-xl p-6 md:p-8 glow-border hover:glow-accent transition-all duration-300 translate-y-0 hover:-translate-y-2">
							<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
								<h3 class="text-xl md:text-2xl font-bold text-[hsl(var(--primary-light))]">
									{item.name}
								</h3>
								<p class="text-sm text-gray-400 mt-2 md:mt-0">
									{item.startDate} - {item.endDate}
								</p>
							</div>

							<p class="text-sm text-[hsl(var(--secondary-light))] mb-4">
								📍 {item.location}
							</p>

							<ul class="space-y-2 text-gray-300">
								{#each item.description as desc}
									<li class="text-sm leading-relaxed flex gap-3">
										<span class="text-[hsl(var(--primary))] flex-shrink-0">▸</span>
										<span>{desc.replace('- ', '').replace('✓ ', '')}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
