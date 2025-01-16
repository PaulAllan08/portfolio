<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Zoom from 'svelte-medium-image-zoom';
	import 'svelte-medium-image-zoom/dist/styles.css';
</script>

<main class="space-24 container">
	<div class="-mt-4 space-y-4">
		<h1 class="text-slate-400">UI/UX Design Projects</h1>
		<div class="space-y-2">
			<div class="text-2xl font-bold text-primary md:text-3xl">Framer</div>
			<h1 class="font-medium text-slate-400">
				Here are some of the personal project designs that I made using Framer.
			</h1>
		</div>
		<div>
			<Separator class="  my-12 " />
		</div>
		<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
			<div
				class="row-span-10 overflow-hidden rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/framer/food-mockup-whole.png"
					alt="para po"
					class="h-full w-full rounded-lg object-cover md:h-[120svh]"
				/>
			</div>
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/framer/food-mockup.png"
							alt="para po"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Fast Food Delivery in Framer</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/framer/food-mockup-device.png"
							alt="para po"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Fast Food Delivery</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div class="row-span-2 transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 overflow-hidden rounded-lg border bg-white px-12 py-12 font-bold text-slate-400 shadow-md transition duration-300 ease-in-out hover:text-primary hover:underline md:px-24"
					style="text-decoration-thickness: 1.5px"
				>
					Fast Food Delivery Website
				</div>
				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Fast Food Delivery in Framer</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/framer/mobile-mockup.png"
							alt="para po"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Portfolio</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>

			<div
				class="row-span-10 overflow-hidden rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="/framer/mockup-whole.png"
					alt="para po"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<div class="row-span-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
				<Zoom>
					<div class="rounded-lg border bg-white shadow-md">
						<img
							src="/framer/web-mockup.png"
							alt="para po"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<div class=" mt-2 flex justify-between">
						<h1 class="font-medium text-slate-400">Portfolio</h1>
						<h1 class="font-medium text-slate-400">2024</h1>
					</div>
				</Zoom>
			</div>
			<div class="row-span-2 transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 overflow-hidden rounded-lg border bg-white px-12 py-12 font-bold text-slate-400 shadow-md transition duration-300 ease-in-out hover:text-primary hover:underline md:px-24"
					style="text-decoration-thickness: 1.5px"
				>
					Portfolio Website in Framer
				</div>
				<div class=" mt-2 flex justify-between">
					<h1 class="font-medium text-slate-400">Portfolio</h1>
					<h1 class="font-medium text-slate-400">2024</h1>
				</div>
			</div>
		</div>
	</div>
</main>
