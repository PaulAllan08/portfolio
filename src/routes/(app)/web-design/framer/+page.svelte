<script lang="ts">
	import { SendHorizontalIcon, FileUserIcon, ExternalLink } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<main class="space-24 container">
	<!-- Web Development Projects -->
	<div class="-mt-4 space-y-4">
		<div>
			<h1 class="text-slate-400">Web Design Projects</h1>
		</div>
		<div>
			<div class="text-3xl font-bold text-primary">FRAMER Personal Projects</div>
			<h1 class="font-medium text-slate-400">
				A incindent report application with internal system that I design for PDRRMO (Provincial
				Disaster Risk Reduction Management Office). READi app and internal system is designed in
				Figma and currently under development. You can find the Figma link below.
			</h1>
		</div>
		<div>
			<Separator class="  my-12 " />
		</div>
		<div class="grid grid-cols-3 gap-6 py-4">
			<div
				class="row-span-2 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<div
					class="flex items-center justify-center gap-4 px-24 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
					style="text-decoration-thickness: 1.5px"
				>
					<a
						href="https://www.figma.com/proto/D43PotCLLD8kevTaPX5Y9g/READi?node-id=591-1212&t=Po0WXy2FWHnlA5Z2-1"
						target="_blank">View Design in Figma</a
					><ExternalLink />
				</div>
			</div>

			<div
				class="row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/readi/dashboard-air.png"
					alt="Project 02"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div
				class="row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/readi/report.png"
					alt="Project 03"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-slate-400">Prototype Link</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>

			<div
				class="row-span-6 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/readi/mobile.png"
					alt="Project 02"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-slate-400">Admin Dashboard</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-slate-400">Admin Responders Deployment</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div
				class="row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/readi/deploy.png"
					alt="Project 05"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div
				class="row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/readi/mobile-screens.png"
					alt="Project 05"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-slate-400">READi App</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-slate-400">Admin Responders Deployment</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
			<div class="-mt-4 flex justify-between">
				<h1 class="font-medium text-slate-400">READi App Features</h1>
				<h1 class="font-medium text-slate-400">2024</h1>
			</div>
		</div>
	</div>
</main>
