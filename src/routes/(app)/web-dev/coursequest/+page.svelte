<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Zoom from 'svelte-medium-image-zoom';
	import 'svelte-medium-image-zoom/dist/styles.css';
	import Icon from '@iconify/svelte';
	import { Badge } from '$lib/components/ui/badge';
</script>

<main class="container space-y-24">
	<div class="-mt-4 space-y-4">
		<div>
			<h1 class="text-slate-400">Web Development Projects</h1>
		</div>
		<div class="space-y-2">
			<div class="text-2xl font-bold text-primary md:text-3xl">CourseQuest LMS</div>
			<h1 class="font-medium text-slate-400">
				A learning management system for IT courses my CAPSTONE Project that I developed and propose
				for DICT Bataan (Department of Information and Communication Technology). CourseQuest is
				built in sveltekit framework with svelte, tailwindCSS, shadcnUI for frontend and typescript,
				drizzle ORM and supabase for backend .
			</h1>
			<div class="grid grid-cols-1 gap-4 py-4 md:grid-cols-4">
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
			</div>
		</div>

		<div>
			<Separator class="  my-12 " />
		</div>
		<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-3">
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/login.png"
							alt="Project 01"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Login</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/reg.png"
							alt="Project 02"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Register</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/prev.png"
							alt="Project 03"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Course Preview</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/dashboard.png"
							alt="Project 04"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Dashboard</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/course-crud.png"
							alt="Project 03"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Admin Course CRUD</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/cat-crud.png"
							alt="Project 03"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Admin Category CRUD</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
			<div class="row-span-12 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/landing.png"
							alt="Project 04"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Landing Page</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/learn-course.png"
							alt="Project 03"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Learn Course</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-12 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class=" rounded-lg border bg-white shadow-md">
						<img
							src="/coursequest/course-page.png"
							alt="Project 04"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Courses Page</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 rounded-lg border bg-white px-24 py-12 font-bold text-slate-400 shadow-md transition duration-300 ease-in-out hover:text-primary hover:underline"
					style="text-decoration-thickness: 1.5px"
				>
					<!-- <a href="https://coursequest.vercel.app/" target="_blank"
						>coursequest.vercel.app
					</a><ExternalLink /> -->
					coursequest
					<ExternalLink />
				</div>
				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Website URL</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>
		</div>
	</div>
</main>
