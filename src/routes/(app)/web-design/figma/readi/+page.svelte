<script lang="ts">
	import { ExternalLink, MoveRight } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<main class="space-24 container">
	<!-- Web Development Projects -->
	<div class="-mt-4 space-y-4">
		<div class="flex justify-between">
			<h1 class="text-slate-400">Web Design Projects</h1>
			<a
				class="flex gap-4 text-slate-400 transition-all duration-300 ease-in-out hover:text-primary hover:underline"
				style="text-decoration-thickness: 1.5px;"
				href="./calmity">Next <MoveRight /></a
			>
		</div>
		<div class="space-y-2">
			<div class="text-2xl font-bold text-primary md:text-3xl">READi Application</div>
			<h1 class="font-medium text-slate-400">
				A incindent report application with internal system that I design for PDRRMO (Provincial
				Disaster Risk Reduction Management Office). READi app and internal system is designed in
				figma. You can find the Figma link below.
			</h1>
		</div>
		<div>
			<Separator class="  my-12 " />
		</div>

		<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-3">
			<div class="row-span-2 transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 rounded-lg border bg-white px-12 py-12 font-bold text-slate-400 shadow-md transition duration-300 ease-in-out hover:text-primary hover:underline md:px-24"
					style="text-decoration-thickness: 1.5px"
				>
					<a
						href="https://www.figma.com/proto/D43PotCLLD8kevTaPX5Y9g/READi?node-id=591-1212&t=Po0WXy2FWHnlA5Z2-1"
						target="_blank">View Design in Figma</a
					><ExternalLink />
				</div>
				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Prototype Link</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>

			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img
						src="/readi/dashboard-air.png"
						alt="READi"
						class="h-full w-full rounded-lg object-cover"
					/>
				</div>

				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Admin Dashboard</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>
			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img src="/readi/report.png" alt="READi" class="h-full w-full rounded-lg object-cover" />
				</div>

				<div class="mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Admin Responders Deployment</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>
			<div
				class="row-span-6 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img src="/readi/mobile.png" alt="READi" class="h-full w-full rounded-lg object-cover" />
			</div>

			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img src="/readi/deploy.png" alt="READi" class="h-full w-full rounded-lg object-cover" />
				</div>

				<div class="mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Admin Responders Deployment</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>

			<div class="row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div class="rounded-lg border bg-white shadow-md">
					<img
						src="/readi/mobile-screens.png"
						alt="READi"
						class="h-full w-full rounded-lg object-cover"
					/>
				</div>

				<div class="mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">READi App</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>
		</div>
	</div>
</main>
