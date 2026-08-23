<script>
	import Icon from '$lib/components/Icon.svelte';
	import Head from '$lib/components/head.svelte';
	import { info } from '$lib/utils/info';
</script>

<Head
	name={`${info.name} ${info.handle} | About`}
	description={`About ${info.name}, a ${info.jobDescription.toLowerCase()} based in ${
		info.location
	}.`}
	path="/about"
/>

<section class="mx-auto max-w-5xl py-20 minmd:py-28">
	<div class="max-w-3xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">About the work</p>
		<h1
			class="mt-4 font-outfit text-5xl font-semibold leading-tight tracking-tight text-dark minmd:text-7xl dark:text-white"
		>
			A practical builder with a soft spot for good details.
		</h1>
		<p class="mt-8 text-xl leading-9 text-zinc-600 dark:text-zinc-400">{info.about}</p>
	</div>

	<div class="mt-20 grid gap-6 min-lg:grid-cols-3">
		<div
			class="rounded-[1.75rem] border border-zinc-200/80 bg-white/60 p-7 dark:border-white/10 dark:bg-white/5"
		>
			<p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue">01</p>
			<h2 class="mt-5 font-outfit text-2xl font-semibold text-dark dark:text-white">Interfaces</h2>
			<p class="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
				I care about hierarchy, responsive behavior, and making the next action obvious.
			</p>
		</div>
		<div
			class="rounded-[1.75rem] border border-zinc-200/80 bg-white/60 p-7 dark:border-white/10 dark:bg-white/5"
		>
			<p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue">02</p>
			<h2 class="mt-5 font-outfit text-2xl font-semibold text-dark dark:text-white">Systems</h2>
			<p class="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
				I build reusable components and patterns that help teams move with confidence.
			</p>
		</div>
		<div
			class="rounded-[1.75rem] border border-zinc-200/80 bg-white/60 p-7 dark:border-white/10 dark:bg-white/5"
		>
			<p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue">03</p>
			<h2 class="mt-5 font-outfit text-2xl font-semibold text-dark dark:text-white">Learning</h2>
			<p class="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
				I keep learning in public through projects, articles, and the questions work raises.
			</p>
		</div>
	</div>

	<section
		class="mt-20 grid gap-10 border-t border-zinc-200/80 pt-10 min-lg:grid-cols-[0.72fr_1.28fr] min-lg:gap-16 dark:border-white/10"
	>
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.18em] text-blue">Collaboration fit</p>
			<h2 class="mt-4 font-outfit text-4xl font-semibold tracking-tight text-dark dark:text-white">
				Clear scope, steady progress.
			</h2>
			<p class="mt-5 max-w-md text-base leading-8 text-zinc-600 dark:text-zinc-400">
				I work best with people who value a focused problem, thoughtful feedback, and a useful
				outcome over unnecessary ceremony.
			</p>
		</div>
		<div class="grid gap-4 minmd:grid-cols-3">
			<div
				class="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/[0.035]"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Can help with</p>
				<p class="mt-3 font-outfit text-xl font-semibold text-dark dark:text-white">
					Product interfaces
				</p>
				<p class="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
					Responsive frontend builds, interface refinement, and practical component systems.
				</p>
			</div>
			<div
				class="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/[0.035]"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Working style</p>
				<p class="mt-3 font-outfit text-xl font-semibold text-dark dark:text-white">
					Thoughtful iteration
				</p>
				<p class="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
					Small, testable steps with direct communication and attention to the details that affect
					real use.
				</p>
			</div>
			<div
				class="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/[0.035]"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Good fit</p>
				<p class="mt-3 font-outfit text-xl font-semibold text-dark dark:text-white">
					Useful product work
				</p>
				<p class="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
					Teams improving a live interface, building a focused new experience, or bringing clarity
					to a complex flow.
				</p>
			</div>
		</div>
	</section>

	<div class="mt-20 border-t border-zinc-200/80 pt-10 dark:border-white/10">
		<div class="flex flex-col gap-5 minmd:flex-row minmd:items-center minmd:justify-between">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Availability</p>
				<p class="mt-2 font-outfit text-2xl font-semibold text-dark dark:text-white">
					{info.availability}
				</p>
			</div>
			<a
				href={`mailto:${info.socialMedia.email}`}
				class="inline-flex w-fit rounded-full bg-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue dark:bg-white dark:text-dark"
				>Say hello <Icon name="arrowUpRight" className="h-4 w-4" /></a
			>
		</div>
	</div>
</section>
