<script lang="ts">
	import { ExternalLink, MoveLeft, MoveRight } from 'lucide-svelte';
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
				href="./calmity">Next <MoveRight /></a
			>
		</div>
		<div class="space-y-2">
			<div class="text-2xl font-bold text-primary md:text-3xl">PARA PO Application</div>
			<h1 class="font-medium text-slate-400">
				PARA PO is an application for PWD's that enables them to travel safely to their destination.
				I designed PARA PO for a start up competition called Founders Live. PARA PO app is designed
				in figma. you can view the figma link below.
			</h1>
		</div>
		<div>
			<Separator class="  my-12 " />
		</div>
		<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
			<div class="row-span-2 transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 overflow-hidden rounded-lg border bg-white px-12 py-12 font-bold text-slate-400 shadow-md transition duration-300 ease-in-out hover:text-primary hover:underline md:px-24"
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
							src="/para-po/mobile-screens-1.png"
							alt="para po"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Drivers App</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div
				class="row-span-6 overflow-hidden rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/para-po/mobile.png"
					alt="para po"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/para-po/mobile-screens-2.png"
							alt="para po"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class=" font-medium text-slate-400">PWDs App</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
		</div>
	</div>
</main>
