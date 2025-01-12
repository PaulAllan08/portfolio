<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/app/sidebar/sidebar.svelte';

	let { children } = $props();
</script>

<Sidebar />

<div class="flex min-h-screen flex-col md:ml-48">
	<main class="flex-1 py-10">
		{@render children()}
	</main>
</div>
