<script lang="ts">
	import {
		SendHorizontalIcon,
		FileUserIcon,
		ExternalLink,
		ArrowRightIcon,
		MoveRight,
		MessageCircleCode,
		MoveLeft
	} from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Icon from '@iconify/svelte';

	let section = 'about';

	function toggleSection(nextSection: string) {
		section = nextSection;
	}
</script>

<main class="space-24 container">
	<div class="-mt-4 space-y-4">
		<div>
			<h1 class="text-slate-400">About Me</h1>
		</div>
		{#if section === 'about'}
			<div>
				<div class="text-lg font-bold text-primary md:text-3xl">
					Hi, I'm Paul Allan Palacio, a passionate Web Developer and UI/UX Designer. My journey
					began with C# and VB.NET, but over time, I discovered a deep love for crafting beautiful,
					user-centered interfaces and websites. I thrive on blending creativity with functionality
					to create engaging digital experiences.
				</div>
			</div>
			<div>
				<Separator class=" my-12 " />
			</div>
			<div class="grid grid-cols-7 gap-6 py-4">
				<div
					class="col-span-2 row-span-4 rounded-lg border bg-white shadow-md transition hover:scale-105"
				>
					<div
						class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 hover:text-primary hover:underline"
					>
						<a
							href="https://drive.google.com/file/d/1Brjs4gfIb75Aq7qjVFu0hqq9vsH-cg-q/view?usp=drive_link"
							target="_blank"
						>
							View CV/Resume
						</a>
						<FileUserIcon />
					</div>
				</div>
				<div
					class="col-span-2 row-span-4 rounded-lg border bg-white shadow-md transition hover:scale-105"
				>
					<div
						class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 hover:text-primary hover:underline"
					>
						<a href="mailto:palaciopaulbermudez@gmail.com" target="_blank"> Send a Message </a>
						<MessageCircleCode />
					</div>
				</div>
				<button
					class="col-span-3 row-span-4 transition hover:scale-105 focus:outline-none"
					onclick={() => toggleSection('buildingTools')}
				>
					<div
						class="flex cursor-pointer items-center justify-center gap-4 px-24 py-12 font-bold text-slate-400 hover:text-primary hover:underline"
					>
						Tools I Use for Building a Website
						<MoveRight />
					</div>
				</button>
			</div>
		{:else if section === 'buildingTools'}
			<div class="slide-in transform transition-transform">
				<div class="text-lg font-bold text-primary md:text-3xl">
					Here are the languages & tools I use for building websites:
				</div>
				<div>
					<Separator class=" my-12 " />
				</div>

				<div class="grid grid-cols-7 gap-6 py-4">
					<div class="col-span-4 row-span-4 grid grid-cols-3 gap-4 rounded-lg p-4">
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-500 hover:text-orange-500"
							variant="outline"
						>
							<Icon icon="flowbite:html-solid" class=" h-4 w-4" />HTML
						</Badge>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-500 hover:text-blue-500"
							variant="outline"
						>
							<Icon icon="flowbite:css-solid" class="h-4 w-4" />CSS
						</Badge>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-red-600 hover:text-red-600"
							variant="outline"
						>
							<Icon icon="ri:svelte-fill" class="h-4 w-4" />Svelte
						</Badge>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-sky-400 hover:text-sky-400"
							variant="outline"
						>
							<Icon icon="mdi:tailwind" class="h-4 w-4" />Tailwind CSS
						</Badge>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-sky-700 hover:text-sky-700"
							variant="outline"
						>
							<Icon icon="tabler:brand-typescript" class="h-4 w-4" />Typescript
						</Badge>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500 hover:text-purple-500"
							variant="outline"><Icon icon="nonicons:c-sharp-16" class="h-4 w-4" />C#</Badge
						>

						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-red-600 hover:text-red-600"
							variant="outline"><Icon icon="mdi:git" class="h-4 w-4" />Git</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary hover:text-primary"
							variant="outline"><Icon icon="mdi:github" class="h-4 w-4" />Github</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary hover:text-primary"
							variant="outline"><Icon icon="gg:vercel" class="h-4 w-4" />Vercel</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary hover:text-primary"
							variant="outline"><Icon icon="simple-icons:shadcnui" class="h-4 w-4" />Shadcn</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-green-500 hover:text-green-500"
							variant="outline"><Icon icon="ri:supabase-line" class="h-4 w-4" />Supabase</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-lime-500 hover:text-lime-500"
							variant="outline"
							><Icon icon="simple-icons:drizzle" class="h-4 w-4" />Drizzle ORM</Badge
						>
					</div>

					<button
						class="col-span-3 row-span-4 transition hover:scale-105 focus:outline-none"
						onclick={() => toggleSection('designingTools')}
					>
						<div
							class="flex cursor-pointer items-center justify-center gap-4 px-24 py-12 font-bold text-slate-400 hover:text-primary hover:underline"
						>
							Tools I Use for Designing a Website
							<MoveRight />
						</div>
					</button>
				</div>
			</div>
		{:else if section === 'designingTools'}
			<div class="slide-in transform transition-transform">
				<div class="text-lg font-bold text-primary md:text-3xl">
					Here are the tools I use for designing websites:
				</div>
				<div>
					<Separator class=" my-12 " />
				</div>

				<div class="grid grid-cols-7 gap-6 py-4">
					<div class="col-span-4 row-span-3 grid grid-cols-3 gap-4 rounded-lg p-4">
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500 hover:text-purple-500"
							variant="outline"><Icon icon="solar:figma-outline" class="h-4 w-4 " />Figma</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-500 hover:text-blue-500"
							variant="outline"
							><Icon icon="teenyicons:framer-outline" class="h-4 w-4" />Framer</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500 hover:text-purple-500"
							variant="outline"><Icon icon="hugeicons:adobe-xd" class="h-4 w-4" />Adobe XD</Badge
						>
						<Badge
							class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-500 hover:text-orange-500"
							variant="outline"><Icon icon="solar:figma-outline" class="h-4 w-4 " />Figjam</Badge
						>
					</div>

					<button
						class="col-span-3 row-span-4 transition hover:scale-105 focus:outline-none"
						onclick={() => toggleSection('about')}
					>
						<div
							class="flex cursor-pointer items-center justify-center gap-4 px-24 py-12 font-bold text-slate-400 hover:text-primary hover:underline"
						>
							<MoveLeft />About Me
						</div>
					</button>
				</div>
			</div>
		{/if}
	</div>
</main>

<style>
	.slide-in {
		animation: slideIn 0.5s ease-in-out forwards;
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>
