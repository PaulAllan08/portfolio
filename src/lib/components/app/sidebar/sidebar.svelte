<script lang="ts">
	import { cn } from '$lib/utils';
	import Button from '$lib/components/ui/button/button.svelte';
	import { AlignJustifyIcon } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let sidebarOpen = $state(false);

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
						onclick={toggleSidebar}
						href="/about-me"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>Introduction</span>
					</a>
				</li>
				<li>
					<a
						onclick={toggleSidebar}
						href="/about-me"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>CV</span>
					</a>
				</li>
				<li>
					<a
						onclick={toggleSidebar}
						href="/about-me"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
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
						onclick={toggleSidebar}
						href="/web-dev/coursequest"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>Full Stack</span>
					</a>
				</li>
			</ul>
		</div>
		<Separator class="my-4" />
		<div class="flex-1 overflow-y-auto">
			<h1 class="py-2 text-sm text-slate-400">UI/UX Design</h1>
			<ul class=" text-sm">
				<li>
					<a
						onclick={toggleSidebar}
						href="/design/figma/readi"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>Figma</span>
					</a>
				</li>
				<li>
					<a
						onclick={toggleSidebar}
						href="/design/framer"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
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
						onclick={toggleSidebar}
						href="/socials"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>Figma Profile</span>
					</a>
				</li>

				<li>
					<a
						onclick={toggleSidebar}
						href="/socials"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>Github</span>
					</a>
				</li>
				<li>
					<a
						onclick={toggleSidebar}
						href="/socials"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>Linkedin</span>
					</a>
				</li>
				<li>
					<a
						onclick={toggleSidebar}
						href="/socials"
						class="flex items-center space-x-2 rounded p-1 font-medium transition-all duration-200 ease-in-out hover:bg-secondary"
					>
						<span>Dribble</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</aside>

<header class="flex h-20 w-full border-b bg-white md:hidden">
	<div class="container flex h-full items-center justify-between">
		<a href="/">
			<h1 class="text-3xl font-bold">Portfolio</h1>
		</a>

		<Button size="icon" variant="ghost" onclick={toggleSidebar}>
			<AlignJustifyIcon />
		</Button>
	</div>
</header>
