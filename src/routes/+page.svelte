<script>
	import { info } from '$lib/utils/info';
	import Head from '$lib/components/head.svelte';
	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Experience from '$lib/sections/experience.svelte';
	import ProjectsWrapper from '../lib/components/ProjectsWrapper.svelte';
	import Contact from '$lib/sections/contact.svelte';
</script>

<Head name="Wai Yan Phyoe" />

<Hero name={info.name} />
<About bio={info.about} />
<ProjectsWrapper projects={info.projects} />
<Experience title={'EXPERIENCE'} details={info.experience} />
<Contact email={info.socialMedia.email} socialMedia={info.socialMedia} />
