<script>
	import { format, parseISO } from 'date-fns';
	import Icon from '$lib/components/Icon.svelte';

	export let decorate;
	export let post;
	export let collapsed = false;

	let _class;
	export { _class as class };
</script>

<div
	class={[
		'relative z-10 order-first mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-500 dark:text-zinc-400',
		_class
	].join(' ')}
	class:pl-3.5={decorate}
>
	{#if decorate}
		<span class="absolute inset-y-0 left-0 flex items-center py-0.5" aria-hidden="true">
			<span class="h-full w-0.5 rounded-full bg-blue/70" />
		</span>
	{/if}
	<span class="inline-flex items-center gap-1.5">
		<Icon name="calendar" className="h-3.5 w-3.5 text-blue" />
		<time datetime={post.date}>{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}</time>
	</span>
	<span class="inline-flex items-center gap-1.5">
		<Icon name="clock" className="h-3.5 w-3.5 text-blue" />
		<span>{post.readingTime}</span>
	</span>
</div>
