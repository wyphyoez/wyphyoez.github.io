<script>
	import Head from '$lib/components/head.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { info } from '$lib/utils/info.js';

	let name = '';
	let email = '';
	let projectType = '';
	let budget = '';
	let timeline = '';
	let message = '';

	const projectTypes = [
		'New product interface',
		'Frontend build or refinement',
		'Portfolio or case-study work',
		'Something else'
	];

	const budgetRanges = [
		'Under $1,000',
		'$1,000–$3,000',
		'$3,000–$5,000',
		'$5,000+',
		'Not sure yet'
	];
	const timelines = ['Within 2 weeks', 'This month', 'Next 1–3 months', 'Exploring options'];

	function submitBrief() {
		const subject = encodeURIComponent(`Project brief from ${name}`);
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\n\nWhat I’m looking to build:\n${message}`
		);

		window.location.href = `mailto:${info.socialMedia.email}?subject=${subject}&body=${body}`;
	}
</script>

<Head
	name={`${info.name} ${info.handle} | Contact`}
	description={`Start a project conversation with ${info.name} by sharing a short brief, timeline, and the kind of support you need.`}
	path="/contact"
/>

<section class="mx-auto max-w-5xl py-20 minmd:py-28">
	<div class="grid gap-12 min-lg:grid-cols-[0.76fr_1.24fr] min-lg:gap-20">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Start a conversation</p>
			<h1
				class="mt-4 font-outfit text-5xl font-semibold leading-[0.98] tracking-tight text-dark minmd:text-7xl dark:text-white"
			>
				A good brief gives the work a useful start.
			</h1>
			<p class="mt-7 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
				Share the shape of the problem, even if the details are still moving. I’ll receive a
				prepared email with your brief and reply from there.
			</p>

			<div
				class="mt-10 rounded-[1.5rem] border border-zinc-200/80 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/[0.035]"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
					A useful first note
				</p>
				<ul class="mt-5 grid gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />What
						needs to change or become easier?
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />Who is
						it for, and what should they be able to do?
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />What
						timing or constraints should shape the work?
					</li>
				</ul>
			</div>

			<p class="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
				Prefer email? Write directly to
				<a
					class="font-semibold text-dark underline decoration-zinc-300 underline-offset-4 transition hover:text-blue dark:text-white dark:decoration-white/20"
					href={`mailto:${info.socialMedia.email}`}>{info.socialMedia.email}</a
				>.
			</p>
		</div>

		<form
			on:submit|preventDefault={submitBrief}
			class="rounded-[2rem] border border-zinc-200/80 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] minmd:p-8 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none"
		>
			<div class="grid gap-6 minmd:grid-cols-2">
				<label class="grid gap-2 text-sm font-semibold text-dark dark:text-white">
					Your name
					<input
						bind:value={name}
						required
						autocomplete="name"
						class="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-base font-normal text-dark outline-none transition placeholder:text-zinc-400 focus:border-blue focus:ring-2 focus:ring-blue/20 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
						placeholder="Your name"
					/>
				</label>
				<label class="grid gap-2 text-sm font-semibold text-dark dark:text-white">
					Email address
					<input
						bind:value={email}
						required
						type="email"
						autocomplete="email"
						class="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-base font-normal text-dark outline-none transition placeholder:text-zinc-400 focus:border-blue focus:ring-2 focus:ring-blue/20 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
						placeholder="you@example.com"
					/>
				</label>
			</div>

			<div class="mt-6 grid gap-6 minmd:grid-cols-3">
				<label class="grid gap-2 text-sm font-semibold text-dark dark:text-white">
					Project type
					<select
						bind:value={projectType}
						required
						class="h-12 rounded-xl border border-zinc-200 bg-white px-3 text-sm font-normal text-dark outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
					>
						<option value="" disabled>Select one</option>
						{#each projectTypes as option}<option value={option}>{option}</option>{/each}
					</select>
				</label>
				<label class="grid gap-2 text-sm font-semibold text-dark dark:text-white">
					Budget range
					<select
						bind:value={budget}
						required
						class="h-12 rounded-xl border border-zinc-200 bg-white px-3 text-sm font-normal text-dark outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
					>
						<option value="" disabled>Select one</option>
						{#each budgetRanges as option}<option value={option}>{option}</option>{/each}
					</select>
				</label>
				<label class="grid gap-2 text-sm font-semibold text-dark dark:text-white">
					Ideal timing
					<select
						bind:value={timeline}
						required
						class="h-12 rounded-xl border border-zinc-200 bg-white px-3 text-sm font-normal text-dark outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
					>
						<option value="" disabled>Select one</option>
						{#each timelines as option}<option value={option}>{option}</option>{/each}
					</select>
				</label>
			</div>

			<label class="mt-6 grid gap-2 text-sm font-semibold text-dark dark:text-white">
				What would you like to make or improve?
				<textarea
					bind:value={message}
					required
					rows="7"
					class="resize-y rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base font-normal leading-7 text-dark outline-none transition placeholder:text-zinc-400 focus:border-blue focus:ring-2 focus:ring-blue/20 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
					placeholder="A short description of the goal, the people using it, and any useful context."
				/>
			</label>

			<div
				class="mt-7 flex flex-col gap-4 border-t border-zinc-200/80 pt-6 minmd:flex-row minmd:items-center minmd:justify-between dark:border-white/10"
			>
				<p class="max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-400">
					Submitting opens your email app with this brief already formatted. Nothing is stored on
					the website.
				</p>
				<button
					type="submit"
					class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-dark px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 dark:bg-white dark:text-dark dark:focus:ring-offset-zinc-950"
					>Prepare email <Icon name="arrowUpRight" className="h-4 w-4" /></button
				>
			</div>
		</form>
	</div>
</section>
