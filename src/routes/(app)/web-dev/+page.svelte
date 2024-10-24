<script lang="ts">
	import { SendHorizontalIcon, FileUserIcon, ExternalLink } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<main class="space-24 container">
	<!-- Web Development Projects -->
	<div class="-mt-4 space-y-4">
		<div>
			<h1 class="text-slate-400">Web Development Projects</h1>
		</div>
		<div>
			<div class="text-3xl font-bold text-primary">CourseQuest</div>
			<h1 class="font-medium text-primary">
				A course management system for IT courses that I develoed for DICT (Department of
				Information and Communication Technology). CourseQuest is built in svelte framework with
				typescript, drizzle ORM and supabase for server side. CourseQuest is currently deployed in
				vercel you can find the website URL below.
			</h1>
		</div>
		<div>
			<Separator class="  my-12 " />
		</div>
		<div class="grid grid-cols-3 gap-6 py-4">
			<div
				class="row-span-4 rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/coursequest/login.png"
					alt="Project 01"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div
				class="row-span-12 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/coursequest/landing2.png"
					alt="Project 02"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div
				class="row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/coursequest/add-course.png"
					alt="Project 03"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-primary">Login</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-primary">Admin Add Course</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div
				class="row-span-12 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/coursequest/course-page.png"
					alt="Project 04"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
			<div
				class="row-span-12 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/coursequest/course-prev.png"
					alt="Project 05"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-primary">Landing Page</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div
				class=" row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<a href="https://coursequest.vercel.app/" target="_blank"
					><div
						class="flex items-center justify-center gap-4 px-24 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary"
					>
						coursequest.vercel.app<ExternalLink />
					</div></a
				>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-primary">Courses Page</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-primary">Website URL</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-primary">Course Preview Page</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
		</div>
	</div>
</main>
