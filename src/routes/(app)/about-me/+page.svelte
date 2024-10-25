<script lang="ts">
	import {
		SendHorizontalIcon,
		FileUserIcon,
		ExternalLink,
		ArrowRightIcon,
		MoveRight,
		MessageCircleCode
	} from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<main class="space-24 container">
	<!-- Web Development Projects -->
	<div class="-mt-4 space-y-4">
		<div>
			<h1 class="text-slate-400">About Me</h1>
		</div>
		<div>
			<div class="text-lg font-bold text-primary md:text-3xl">
				Hi, I'm Paul Allan Palacio, a passionate Web Developer and UI/UX Designer. My journey began
				with C# and VB.NET, but over time, I discovered a deep love for crafting beautiful,
				user-centered interfaces and websites. I thrive on blending creativity with functionality to
				create engaging digital experiences.
			</div>
		</div>
		<div>
			<Separator class=" my-12 " />
		</div>
		<div class=" grid grid-cols-7 gap-6 py-4">
			<div
				class="col-span-2 row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
				style="background-attachment: /readi/dashboard-air.png;"
			>
				<div
					class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
					style="text-decoration-thickness: 1.5px"
				>
					<a
						href="https://drive.google.com/file/d/1Brjs4gfIb75Aq7qjVFu0hqq9vsH-cg-q/view?usp=drive_link"
						target="_blank">View CV/Resume</a
					><FileUserIcon />
				</div>
			</div>
			<div
				class="col-span-2 row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
			>
				<div
					class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
					style="text-decoration-thickness: 1.5px"
				>
					<a href="mailto:palaciopaulbermudez@gmail.com" target="_blank">Send a Message</a
					><MessageCircleCode />
				</div>
			</div>
			<div class="col-span-3 row-span-4 transition duration-300 ease-in-out hover:scale-105">
				<div
					class="flex items-center justify-center gap-4 px-24 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
					style="text-decoration-thickness: 1.5px"
				>
					<a href="/web-dev">Tools I Use</a><MoveRight />
				</div>
			</div>
		</div>
	</div>
</main>
