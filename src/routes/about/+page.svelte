<script>
	import Icon from '$lib/components/Icon.svelte';
	import { info } from '$lib/utils/info';
</script>

<svelte:head>
	<title>{info.name} {info.handle} | About</title>
	<meta
		name="description"
		content={`About ${info.name}, a ${info.jobDescription.toLowerCase()} based in ${
			info.location
		}.`}
	/>
</svelte:head>

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
