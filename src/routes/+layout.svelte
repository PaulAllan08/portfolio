<script lang="ts">
	import '../app.css';
	import { cn } from '$lib/utils';
	import Button from '$lib/components/ui/button/button.svelte';
	import { AlignJustifyIcon } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let sidebarOpen = $state(false);

	let { children } = $props();

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	function isActive(href: string): boolean {
		return $page.url.pathname === href;
	}
</script>

<aside
	class={cn(
		' fixed left-0 top-0 z-50 flex min-h-screen w-48 -translate-x-full flex-col border-r bg-white p-4 transition-transform md:translate-x-0 md:bg-transparent',
		sidebarOpen ? 'translate-x-0' : '-translate-x-full'
	)}
>
	<div class="flex flex-col space-y-5">
		<div class="flex-1 overflow-y-auto">
			<h1 class="py-2 text-sm text-slate-400">About Me</h1>
			<ul class=" text-sm">
				<li>
					<a
						href="/about-me"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Introduction</span>
					</a>
				</li>
				<li>
					<a
						href="/about-me"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>CV</span>
					</a>
				</li>
				<li>
					<a
						href="/about-me"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Contact</span>
					</a>
				</li>
			</ul>
		</div>
		<Separator class="my-4" />
		<div class="flex-1 overflow-y-auto">
			<h1 class="py-2 text-sm text-slate-400">Web Development</h1>
			<ul class=" text-sm">
				<li>
					<a
						href="/web-dev/coursequest"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Full Stack</span>
					</a>
				</li>
			</ul>
		</div>
		<Separator class="my-4" />
		<div class="flex-1 overflow-y-auto">
			<h1 class="py-2 text-sm text-slate-400">Web Designs</h1>
			<ul class=" text-sm">
				<li>
					<a
						href="/web-design/figma/readi"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Figma</span>
					</a>
				</li>
				<li>
					<a
						href="/web-design/framer"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/categories') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Framer</span>
					</a>
				</li>
			</ul>
		</div>
		<Separator class="my-4" />
		<div class="flex-1 overflow-y-auto">
			<h1 class="py-2 text-sm text-slate-400">Socials</h1>
			<ul class=" text-sm">
				<li>
					<a
						href="/socials"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Dribble</span>
					</a>
				</li>
				<li>
					<a
						href="/socials"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Github</span>
					</a>
				</li>
				<li>
					<a
						href="/socials"
						class={cn(
							'flex items-center space-x-2 rounded p-1 font-medium hover:bg-secondary',
							isActive('/admin/dashboard') ? 'bg-sky-400 text-white hover:bg-sky-400' : ''
						)}
					>
						<span>Linkedin</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</aside>

<div class="flex min-h-screen flex-col md:ml-48">
	<header class="flex h-20 w-full border-b bg-white md:hidden">
		<div class="container flex h-full items-center justify-between">
			<a href="/">
				<h1 class="text-3xl font-bold">CourseQuest</h1>
			</a>

			<Button size="icon" variant="ghost" onclick={toggleSidebar}>
				<AlignJustifyIcon />
			</Button>
		</div>
	</header>

	<main class="flex-1 py-10">
		{@render children()}
	</main>
</div>
