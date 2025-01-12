<script lang="ts">
	import { ExternalLink, MoveRight, MoveLeft } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Zoom from 'svelte-medium-image-zoom';
	import 'svelte-medium-image-zoom/dist/styles.css';
</script>

<main class="space-24 container">
	<div class="-mt-4 space-y-4">
		<div class="flex justify-between">
			<a
				class="flex gap-4 text-primary transition-all duration-300 ease-in-out hover:text-primary hover:underline"
				style="text-decoration-thickness: 1.5px;"
				href="./readi"
				><MoveLeft />Go Back
			</a>
			<a
				class="flex gap-4 text-primary transition-all duration-300 ease-in-out hover:text-primary hover:underline"
				style="text-decoration-thickness: 1.5px;"
				href="./para-po">Next <MoveRight /></a
			>
		</div>
		<div class="space-y-2">
			<div class="text-2xl font-bold text-primary md:text-3xl">CALMITY Application</div>
			<h1 class="font-medium text-slate-400">
				CALMITY and READi app have some similar features but in calmity you report about natural
				disasters. CALMITY is an application I design for a competition called APPCON 2023 that we
				developed in android studio it luckily got in to top 20 out of 200 schools here in the
				philippines. You can find the Figma link below.
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
					<!-- <a
						href="https://www.figma.com/proto/YploQNqD3aTLnKdviicCb0/CALMITY?node-id=0-1&t=VvNk2lml04iBr4fL-1"
						target="_blank">View Design in Figma</a
					> -->
					View Design in Figma<ExternalLink />
				</div>
				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Prototype Link</h1>
					<h1 class="font-medium text-slate-400">2023</h1>
				</div>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/calmity/mobile-screens-1.png"
							alt="calmity"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Community & Realtime Alerts</h1>
						<h1 class="font-medium text-slate-400">2023</h1>
					</div>
				</Zoom>
			</div>
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/calmity/mobile-screens-3.png"
							alt="calmity"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class="mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Send Reports</h1>
						<h1 class="font-medium text-slate-400">2023</h1>
					</div>
				</Zoom>
			</div>
			<div
				class="row-span-6 overflow-hidden rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/calmity/mobile.png"
					alt="calmity"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/calmity/mobile-screens-2.png"
							alt="calmity"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class=" font-medium text-slate-400">Reports & Evacuation Location</h1>
						<h1 class="font-medium text-slate-400">2023</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/calmity/mobile-screens-4.png"
							alt="calmity"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class=" font-medium text-slate-400">Login & Home</h1>
						<h1 class="font-medium text-slate-400">2023</h1>
					</div>
				</Zoom>
			</div>
		</div>
	</div>
</main>
