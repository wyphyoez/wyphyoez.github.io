<script>
	import { info } from '$lib/utils/info';
	import Head from '$lib/components/head.svelte';
	import Hero from '$lib/sections/hero.svelte';
	import Experience from '$lib/sections/experience.svelte';
	import ProjectsWrapper from '$lib/components/ProjectsWrapper.svelte';
</script>

<Head name={`${info.name} ${info.handle}`} description={info.about} />

<Hero
	name={info.name}
	handle={info.handle}
	jobDescription={info.jobDescription}
	location={info.location}
/>

<section
	id="about"
	class="grid gap-10 border-t border-zinc-200/80 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] dark:border-white/10"
>
	<div>
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">01 / About</p>
		<h2
			class="mt-4 font-outfit text-4xl font-semibold tracking-tight text-dark sm:text-5xl dark:text-white"
		>
			Useful software, carefully made.
		</h2>
	</div>
	<div class="max-w-2xl">
		<p class="text-xl leading-9 text-zinc-700 dark:text-zinc-300">{info.about}</p>
		<div class="mt-8 grid gap-4 sm:grid-cols-3">
			<div
				class="rounded-2xl border border-zinc-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Focus</p>
				<p class="mt-2 font-outfit font-semibold text-dark dark:text-white">Interfaces</p>
			</div>
			<div
				class="rounded-2xl border border-zinc-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Strength</p>
				<p class="mt-2 font-outfit font-semibold text-dark dark:text-white">Front-end craft</p>
			</div>
			<div
				class="rounded-2xl border border-zinc-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Mode</p>
				<p class="mt-2 font-outfit font-semibold text-dark dark:text-white">Always learning</p>
			</div>
		</div>
	</div>
</section>

<Experience title="LEARNING" details={info.education} />
<ProjectsWrapper projects={info.projects} />

<section class="mb-12 rounded-[2rem] bg-dark p-8 text-white sm:p-12 dark:bg-white dark:text-dark">
	<div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
		<div class="max-w-xl">
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
				Let’s make something useful
			</p>
			<h2 class="mt-4 font-outfit text-4xl font-semibold leading-tight sm:text-5xl">
				Have a problem worth working on?
			</h2>
		</div>
		<a
			href={`mailto:${info.socialMedia.email}`}
			class="inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-dark transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue dark:bg-dark dark:text-white dark:hover:bg-blue"
		>
			Email {info.handle} <span aria-hidden="true">↗</span>
		</a>
	</div>
</section>
