<script lang="ts">
	import '../app.css';
	import { writable } from 'svelte/store';
	import { AlignJustifyIcon } from 'lucide-svelte';

	// State for toggling the mobile menu
	const isMenuOpen = writable(false);

	function toggleMenu() {
		isMenuOpen.update((v) => !v);
	}

	let { children } = $props();
</script>

<nav class="bg-transparent">
	<div
		class="container flex flex-col items-end justify-end border-b bg-transparent py-6 md:flex-row md:items-center md:justify-center"
	>
		<!-- Mobile Menu Button -->
		<button
			class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none md:hidden"
			onclick={toggleMenu}
			aria-label="Main menu"
			aria-expanded={$isMenuOpen}
		>
			<AlignJustifyIcon class="h-6 w-6" />
		</button>

		<!-- Navbar Links -->
		<div class="hidden gap-12 bg-transparent text-white md:flex">
			<a href="/" class="hover:text-purple-500">Home</a>
			<a href="/" class="hover:text-purple-500">Projects</a>
			<a href="/" class="hover:text-purple-500">About me</a>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if $isMenuOpen}
		<div class="flex flex-col items-center space-y-4 py-4 md:hidden">
			<a href="/" class="block px-4 py-2 text-white hover:text-purple-500">Home</a>
			<a href="/" class="block px-4 py-2 text-white hover:text-purple-500">Projects</a>
			<a href="/" class="block px-4 py-2 text-white hover:text-purple-500">About me</a>
		</div>
	{/if}
</nav>

{@render children()}
<footer></footer>
