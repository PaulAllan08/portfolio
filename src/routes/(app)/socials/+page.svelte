<script lang="ts">
	import {
		SendHorizontalIcon,
		FileUserIcon,
		ExternalLink,
		ArrowRightIcon,
		MoveRight
	} from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Icon from '@iconify/svelte';
</script>

<main class="container">
	<!-- Web Development Projects -->
	<div class="-mt-4 space-y-4">
		<div>
			<h1 class="text-slate-400">Socials</h1>
		</div>
		<div>
			<div class="text-xl font-bold text-primary md:text-3xl">
				You can visit my socials. View my other design projects in Dribble, View my code related
				projects in github and you can check my credentials in linkedin
			</div>
			<div>
				<Separator class=" my-12 " />
			</div>
			<div class="grid grid-cols-1 gap-6 py-4 md:grid-cols-3">
				<div
					class=" row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
				>
					<div
						class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
						style="text-decoration-thickness: 1.5px"
					>
						<a href="https://www.figma.com/@SaulDesign08" target="_blank">Figma Profile</a><Icon
							icon="solar:figma-bold-duotone"
							class="mb-1 h-7 w-7"
						/>
					</div>
				</div>

				<div
					class=" row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
				>
					<div
						class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
						style="text-decoration-thickness: 1.5px"
					>
						<a href="https://github.com/PaulAllan08" target="_blank">Github</a><Icon
							icon="mdi:github"
							class="h-8 w-8"
						/>
					</div>
				</div>
				<div
					class=" row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
				>
					<div
						class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
						style="text-decoration-thickness: 1.5px"
					>
						<a href="https://www.linkedin.com/in/paulallanpalacio/" target="_blank">Linkedin</a
						><Icon icon="ri:linkedin-fill" class="mb-1 h-7 w-7" />
					</div>
				</div>
				<div
					class=" row-span-4 rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:scale-105"
				>
					<div
						class="flex items-center justify-center gap-4 px-0 py-12 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline"
						style="text-decoration-thickness: 1.5px"
					>
						<a href="https://dribbble.com/Saul_08" target="_blank">Dribble</a><Icon
							icon="icon-park-outline:dribble"
							class=" h-7 w-7"
						/>
					</div>
				</div>

				<div class=" row-span-4 transition duration-300 ease-in-out hover:scale-105">
					<div
						class="flex items-center justify-center gap-4 px-12 py-8 font-bold text-slate-400 transition duration-300 ease-in-out hover:text-primary hover:underline md:px-24"
						style="text-decoration-thickness: 1.5px"
					>
						Thank you for visiting my portfolio
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
