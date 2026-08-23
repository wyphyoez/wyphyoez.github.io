<script>
	import Head from '$lib/components/head.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let data;
	$: project = data.project;
	$: study = project.caseStudy;
</script>

<Head
	name={`${project.title} | ${project.label}`}
	description={project.description}
	path={`/projects/${project.slug}`}
/>

<article class="mx-auto max-w-5xl pb-24 pt-16 minmd:pb-32 minmd:pt-24">
	<nav
		aria-label="Breadcrumb"
		class="mb-12 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
	>
		<a class="transition hover:text-blue" href="/projects">Projects</a>
		<Icon name="arrowRight" className="h-4 w-4" />
		<span class="text-dark dark:text-white">{project.title}</span>
	</nav>

	<header class="grid gap-10 min-lg:grid-cols-[1.1fr_0.9fr] min-lg:items-end min-lg:gap-16">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">{project.label}</p>
			<h1
				class="mt-5 max-w-3xl font-outfit text-5xl font-semibold tracking-tight text-dark minmd:text-7xl dark:text-white"
			>
				{project.title}
			</h1>
			<p class="mt-7 max-w-2xl text-xl leading-9 text-zinc-600 dark:text-zinc-400">
				{study.overview}
			</p>
		</div>
		<div class="grid grid-cols-2 gap-3 border-y border-zinc-200 py-5 text-sm dark:border-white/10">
			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Role</p>
				<p class="mt-2 font-medium text-dark dark:text-white">{project.role}</p>
			</div>
			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Year</p>
				<p class="mt-2 font-medium text-dark dark:text-white">{project.year}</p>
			</div>
		</div>
	</header>

	<div
		class="relative mt-12 overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-zinc-100 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:bg-zinc-900 dark:shadow-none minmd:mt-16"
	>
		<img
			src={project.thumbnail}
			alt={`${project.title} project preview`}
			class="aspect-[16/9] w-full object-cover"
			width="1280"
			height="720"
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
		/>
	</div>

	<div class="mt-16 grid gap-14 min-lg:grid-cols-[0.72fr_1.28fr] min-lg:gap-20 min-lg:mt-24">
		<aside class="min-lg:sticky min-lg:top-28 min-lg:self-start">
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Case study</p>
			<p class="mt-4 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
				A closer look at the decisions behind {project.title}.
			</p>
			<div class="mt-7 flex flex-wrap gap-2">
				{#each project.stack as item}
					<span
						class="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />{item}
					</span>
				{/each}
			</div>
			<div class="mt-8 flex flex-wrap gap-3">
				{#if project.githubUrl}
					<a
						class="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-200 px-4 text-sm font-semibold text-dark transition hover:border-blue hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue dark:border-white/15 dark:text-white"
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						View source <Icon name="github" className="h-4 w-4" />
					</a>
				{/if}
				{#if project.liveUrl}
					<a
						class="inline-flex min-h-11 items-center gap-2 rounded-full bg-dark px-4 text-sm font-semibold text-white transition hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue dark:bg-white dark:text-dark"
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						Open live <Icon name="arrowUpRight" className="h-4 w-4" />
					</a>
				{/if}
			</div>
		</aside>

		<div class="space-y-14 minmd:space-y-20">
			<section>
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
					01 / The challenge
				</p>
				<h2
					class="mt-4 font-outfit text-3xl font-semibold tracking-tight text-dark dark:text-white"
				>
					Make the important part feel clear.
				</h2>
				<p class="mt-5 text-lg leading-9 text-zinc-600 dark:text-zinc-400">{study.challenge}</p>
			</section>

			<section>
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
					02 / The approach
				</p>
				<div class="mt-6 space-y-4">
					{#each study.approach as item, index}
						<div class="flex gap-4 border-t border-zinc-200 pt-4 dark:border-white/10">
							<span class="font-mono text-sm text-blue">0{index + 1}</span>
							<p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{item}</p>
						</div>
					{/each}
				</div>
			</section>

			<section>
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
					03 / The implementation
				</p>
				<ul class="mt-6 space-y-3">
					{#each study.implementation as item}
						<li class="flex items-start gap-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
							<span
								class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
								aria-hidden="true"
							/>{item}
						</li>
					{/each}
				</ul>
			</section>

			<section class="border-y border-zinc-200 py-10 dark:border-white/10 minmd:py-14">
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
					04 / The outcome
				</p>
				<p class="mt-5 font-outfit text-2xl leading-10 text-dark dark:text-white">
					{study.outcome}
				</p>
			</section>

			<section>
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
					05 / Next step
				</p>
				<p class="mt-5 text-lg leading-9 text-zinc-600 dark:text-zinc-400">{study.nextStep}</p>
			</section>
		</div>
	</div>

	<footer class="mt-16 border-t border-zinc-200 pt-8 dark:border-white/10 minmd:mt-24">
		<a
			class="inline-flex items-center gap-2 text-sm font-semibold text-dark transition hover:gap-3 hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue dark:text-white"
			href="/projects"
		>
			<Icon name="arrowLeft" className="h-4 w-4" /> Back to all projects
		</a>
	</footer>
</article>
