<script>
	export let name;
	export let className = 'h-4 w-4';
</script>

<svg
	aria-hidden="true"
	viewBox="0 0 24 24"
	class={className}
	fill="none"
	stroke="currentColor"
	stroke-width="1.8"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	{#if name === 'sun'}
		<circle cx="12" cy="12" r="3.5" />
		<path
			d="M12 2.5v2M12 19.5v2M4.58 4.58 6 6M18 18l1.42 1.42M2.5 12h2M19.5 12h2M4.58 19.42 6 18M18 6l1.42-1.42"
		/>
	{:else if name === 'moon'}
		<path d="M20 15.4A8.5 8.5 0 0 1 8.6 4a8.5 8.5 0 1 0 11.4 11.4Z" />
	{:else if name === 'menu'}
		<path d="M4 7h16M4 12h16M4 17h16" />
	{:else if name === 'close'}
		<path d="m6 6 12 12M18 6 6 18" />
	{:else if name === 'github'}
		<path
			d="M9 19.5c-4.2 1.2-4.2-2.1-5.8-2.6M14.8 22v-3.3a2.9 2.9 0 0 0-.8-2.2c2.8-.3 5.7-1.4 5.7-6.2a4.8 4.8 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.4s-1.1-.4-3.5 1.3a12 12 0 0 0-6.4 0C6 3.1 4.9 3.5 4.9 3.5a4.5 4.5 0 0 0-.1 3.4 4.8 4.8 0 0 0-1.3 3.4c0 4.8 2.9 5.9 5.7 6.2a2.9 2.9 0 0 0-.8 2.2V22"
		/>
	{:else if name === 'arrowUpRight'}
		<path d="M7 17 17 7M8 7h9v9" />
	{:else if name === 'arrowRight'}
		<path d="M5 12h13M13 6l6 6-6 6" />
	{:else if name === 'arrowLeft'}
		<path d="M19 12H6M11 6l-6 6 6 6" />
	{:else if name === 'calendar'}
		<rect x="3.5" y="5" width="17" height="15" rx="2" />
		<path d="M7 3.5v3M17 3.5v3M3.5 9h17" />
	{:else if name === 'clock'}
		<circle cx="12" cy="12" r="8.5" />
		<path d="M12 7v5l3 2" />
	{/if}
</svg>
