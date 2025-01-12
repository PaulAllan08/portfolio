<script lang="ts">
	import { FileUserIcon, MoveRight, MessageCircleCode, MoveLeft } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Icon from '@iconify/svelte';

	let section = 'about';

	function toggleSection(nextSection: string) {
		section = nextSection;
	}
</script>

<main class=" container">
	<div class="-mt-4 space-y-4">
		<div>
			<h1 class="text-slate-400">About Me</h1>
		</div>

		<div>
			<div class="text-xl font-bold text-primary md:text-3xl">
				Hi, I'm Paul Allan Palacio, a passionate Web Developer and UI/UX Designer. My journey began
				with C# and VB.NET, but over time, I discovered a deep love for crafting beautiful,
				user-centered interfaces and websites. I thrive on blending creativity with functionality to
				create engaging digital experiences.
			</div>
		</div>
		<div>
			<Separator class=" my-12 " />
		</div>
		<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-7">
			<div
				class="col-span-2 row-span-4 rounded-lg border bg-white shadow-md transition hover:scale-105"
			>
				<div
					class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary hover:underline"
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
					class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary hover:underline"
				>
					<a href="mailto:palaciopaulbermudez@gmail.com" target="_blank"> Send a Message </a>
					<MessageCircleCode />
				</div>
			</div>
		</div>

		<div class=" pt-24">
			<div class="text-xl font-bold text-primary md:text-3xl">Tech Stack</div>
			<div>
				<Separator class=" my-12 " />
			</div>
			<div class="grid grid-cols-2 gap-4 rounded-lg p-4 md:grid-cols-4">
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
					class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-red-600 hover:text-red-600"
					variant="outline"
				>
					<Icon icon="ri:svelte-fill" class="h-4 w-4" />Sveltekit
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
					class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-sky-700 hover:text-sky-700"
					variant="outline"
				>
					<Icon icon="tabler:brand-typescript" class="h-4 w-4" />Javascript
				</Badge>
				<Badge
					class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500 hover:text-purple-500"
					variant="outline"><Icon icon="nonicons:c-sharp-16" class="h-4 w-4" />C#</Badge
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
					variant="outline"><Icon icon="simple-icons:drizzle" class="h-4 w-4" />Drizzle ORM</Badge
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
				<!-- <Badge
					class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary hover:text-primary"
					variant="outline"><Icon icon="gg:vercel" class="h-4 w-4" />z.com</Badge
				> -->
			</div>
		</div>

		<div class=" pt-24">
			<div class="text-xl font-bold text-primary md:text-3xl">Design Tools</div>
			<div>
				<Separator class=" my-12 " />
			</div>

			<div class=" grid grid-cols-2 gap-4 rounded-lg p-4 md:grid-cols-4">
				<Badge
					class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500 hover:text-purple-500"
					variant="outline"><Icon icon="solar:figma-outline" class="h-4 w-4 " />Figma</Badge
				>
				<Badge
					class="flex items-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-500 hover:text-blue-500"
					variant="outline"><Icon icon="teenyicons:framer-outline" class="h-4 w-4" />Framer</Badge
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
		</div>
	</div>
</main>
