<script lang="ts">
	import {
		SendHorizontalIcon,
		FileUserIcon,
		ExternalLink,
		MoveRight,
		MoveLeft
	} from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<main class="space-24 container">
	<!-- Web Development Projects -->
	<div class="-mt-4 space-y-4">
		<div class="flex justify-between">
			<a
				class="flex gap-4 text-slate-400 transition-all duration-300 ease-in-out hover:text-primary hover:underline"
				style="text-decoration-thickness: 1.5px;"
				href="./readi"
				><MoveLeft />Go Back
			</a>
			<a
				class="flex gap-4 text-slate-400 transition-all duration-300 ease-in-out hover:text-primary hover:underline"
				style="text-decoration-thickness: 1.5px;"
				href="./para-po">Next Project in Figma <MoveRight /></a
			>
		</div>
		<div>
			<div class="text-3xl font-bold text-primary">CALMITY Application</div>
			<h1 class="font-medium text-slate-400">
				CALMITY and READi app have some similar features but in calmity you report about natural
				disasters. CALMITY is an application I design for a competition called APPCON 2023 that
				luckily got in to top 20 out of 200 schools in the philippines. You can find the Figma link
				below.
			</h1>
		</div>
		<div>
			<Separator class="  my-12 " />
		</div>
		<div class="grid grid-cols-3 gap-6 py-4">
			<div class="row-span-2 transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 rounded-lg border bg-white px-24 py-12 font-bold text-slate-400 shadow-md transition duration-300 ease-in-out hover:text-primary hover:underline"
					style="text-decoration-thickness: 1.5px"
				>
					<a
						href="https://www.figma.com/proto/D43PotCLLD8kevTaPX5Y9g/READi?node-id=591-1212&t=Po0WXy2FWHnlA5Z2-1"
						target="_blank">View Design in Figma</a
					><ExternalLink />
				</div>
				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Prototype Link</h1>
					<h1 class="font-medium text-slate-400">2023</h1>
				</div>
			</div>

			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img
						src="/calmity/calmity2.png"
						alt="Project 03"
						class="h-full w-full rounded-lg object-cover"
					/>
				</div>

				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Prototype Link</h1>
					<h1 class="font-medium text-slate-400">2023</h1>
				</div>
			</div>
			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img
						src="/calmity/calmity2.png"
						alt="Project 03"
						class="h-full w-full rounded-lg object-cover"
					/>
				</div>

				<div class="mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Prototype Link</h1>
					<h1 class="font-medium text-slate-400">2023</h1>
				</div>
			</div>
			<div
				class="row-span-6 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/readi/mobile.png"
					alt="Project 05"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img
						src="/calmity/calmity2.png"
						alt="Project 03"
						class="h-full w-full rounded-lg object-cover"
					/>
				</div>

				<div class=" mt-2 flex justify-between">
					<h1 class=" font-medium text-slate-400">Prototype Link</h1>
					<h1 class="font-medium text-slate-400">2023</h1>
				</div>
			</div>

			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img
						src="/calmity/calmity2.png"
						alt="Project 03"
						class="h-full w-full rounded-lg object-cover"
					/>
				</div>

				<div class=" mt-2 flex justify-between">
					<h1 class=" font-medium text-slate-400">Prototype Link</h1>
					<h1 class="font-medium text-slate-400">2023</h1>
				</div>
			</div>
		</div>
	</div>
</main>
