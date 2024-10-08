<script lang="ts">
	import '../app.css';
	import { writable } from 'svelte/store';
	import { AlignJustifyIcon } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	const isMenuOpen = writable(false);

	function toggleMenu() {
		isMenuOpen.update((v) => !v);
	}

	let { children } = $props();

	function isActive(href: string): boolean {
		return $page.url.pathname === href;
	}
</script>

<nav class="bg-transparent">
	<div
		class="container flex flex-col items-end justify-end border-b bg-transparent py-6 md:flex-row md:items-center md:justify-center"
	>
		<button
			class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-primary focus:bg-primary focus:outline-none md:hidden"
			onclick={toggleMenu}
			aria-label="Main menu"
			aria-expanded={$isMenuOpen}
		>
			<AlignJustifyIcon class="h-6 w-6" />
		</button>

		<div class="hidden gap-12 bg-transparent text-white md:flex">
			<a
				href="/app/landingpage"
				class={cn(
					'relative hover:text-purple-500',
					isActive('/app/landingpage')
						? 'text-purple-400 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-purple-400 hover:after:bg-purple-500'
						: ''
				)}>Home</a
			>
			<a
				href="/app/projects"
				class={cn(
					'relative hover:text-purple-500',
					isActive('/app/projects')
						? 'text-purple-400 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-purple-400 hover:after:bg-purple-500'
						: ''
				)}>Projects</a
			>
			<a
				href="#about-me"
				class={cn(
					'relative hover:text-purple-500',
					isActive('#about-me')
						? 'text-purple-400 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-purple-400 hover:after:bg-purple-500'
						: ''
				)}>About me</a
			>
		</div>
	</div>

	{#if $isMenuOpen}
		<div class="flex flex-col items-center space-y-4 py-4 md:hidden">
			<a href="/" class="block px-4 py-2 text-white hover:text-purple-500">Home</a>
			<a href="/app/projects" class="block px-4 py-2 text-white hover:text-purple-500">Projects</a>
			<a href="/" class="block px-4 py-2 text-white hover:text-purple-500">About me</a>
		</div>
	{/if}
</nav>

{@render children()}
<footer></footer>
