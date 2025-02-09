<script lang="ts">
	import { ExternalLink, MoveRight } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Zoom from 'svelte-medium-image-zoom';
	import 'svelte-medium-image-zoom/dist/styles.css';

	let iframeLoaded = false;
</script>

<main class="space-24 container">
	<div class="-mt-4 space-y-4">
		<div class="flex justify-between">
			<h1 class="text-slate-400">UI/UX Design Projects</h1>
			<a
				class="flex gap-4 text-primary transition-all duration-300 ease-in-out hover:text-primary hover:underline"
				style="text-decoration-thickness: 1.5px;"
				href="./para-po">Next <MoveRight /></a
			>
		</div>
		<div class="space-y-2">
			<div class="text-2xl font-bold text-primary md:text-3xl">READi Application</div>
			<h1 class="font-medium text-slate-400">
				A incident report application with an internal system that I designed during my internship
				in the Provincial Information and Technology Office for PDRRMO (Provincial Disaster Risk
				Reduction Management Office). The READi app and internal system were designed in Figma.
			</h1>
		</div>
		<div>
			<Separator class="  my-12 " />
		</div>

		{#if !iframeLoaded}
			<Skeleton class="mx-auto my-auto h-96 w-full rounded-lg md:h-screen" />
		{/if}
		<iframe
			width="640"
			height="480"
			title="READI Application"
			class="mx-auto my-auto h-96 w-full rounded-lg md:h-screen"
			src="https://drive.google.com/file/d/1lgWN9OVqWrhvmNAlhofiu9hysN3EAYHp/preview"
			frameborder="0"
			allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			on:load={() => (iframeLoaded = true)}
			style="display: {iframeLoaded ? 'block' : 'none'};"
		></iframe>

		<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-3">
			<div class="row-span-2 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 rounded-lg border bg-white px-12 py-12 font-bold text-slate-400 shadow-md transition duration-300 ease-in-out hover:text-primary hover:underline md:px-24"
					style="text-decoration-thickness: 1.5px"
				>
					<a href="https://www.figma.com/@SaulDesign08" target="_blank">My Figma Profile</a
					><ExternalLink />
				</div>
				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Community Profile Link</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
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
				</Zoom>
			</div>
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/readi/report.png"
							alt="READi"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class="mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Admin Responders Deployment</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
			<div
				class="row-span-6 overflow-hidden rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img src="/readi/mobile.png" alt="READi" class="h-full w-full rounded-lg object-cover" />
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/readi/deploy.png"
							alt="READi"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class="mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Admin Responders Deployment</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
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
				</Zoom>
			</div>
		</div>
	</div>
</main>
