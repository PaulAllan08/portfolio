<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import SocialsCards from '$lib/components/landingpage/socials-cards.svelte';
	import Project_1Cards from '$lib/components/landingpage/project-1-cards.svelte';
	import Project_2Cards from '$lib/components/landingpage/project-2-cards.svelte';

	function handleProjects() {
		goto('/app/projects');
	}
</script>

<main>
	<hero>
		<!-- Combined oblong glow -->
		<div class="container flex min-h-screen justify-center overflow-hidden">
			<div class="absolute z-0">
				<div
					class="mt-48 h-[200px] w-[300px] scale-110 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:mt-24 md:h-[400px] md:w-[600px]"
				></div>
			</div>

			<!-- Content (Placed on top) -->
			<div class="absolute z-10 mt-32 space-y-8 text-center">
				<div class="flex flex-col items-center justify-center gap-2 text-center">
					<h1
						class="px-4 text-center text-5xl font-bold text-white md:px-0 md:text-start md:text-6xl"
					>
						Hi, I'm Paul Allan Palacio
					</h1>
					<p class="mt-2 w-auto px-6 text-white md:max-w-2xl">
						a graduating IT student specializing in Frontend Coding & UI/UX design.
					</p>
				</div>
				<div class="flex justify-center gap-4">
					<Button class=" p-6">Download CV</Button>
				</div>
				<!-- Hero Images -->
				<div class="flex items-center justify-center overflow-hidden px-4">
					<img src="/PDRRMO.png" alt="img" class="h-32 w-auto opacity-50 md:h-96" />
					<img
						src="/coursequest.png"
						alt="img"
						class="h-auto w-auto rounded-xl md:max-w-4xl md:rounded-lg md:px-0"
					/>
					<img src="/calmity.png" alt="img" class="h-32 w-auto opacity-50 md:h-96" />
				</div>
			</div>
		</div>
	</hero>

	<section
		class="container relative mt-24 flex flex-col items-center justify-between space-y-8 py-12 md:mt-48 md:flex-row md:space-y-0"
	>
		<div class="flex flex-col gap-6">
			<div>
				<h1 class=" text-center text-3xl font-bold text-white md:text-start md:text-6xl">
					Full Stack Web <br />Developemt Projects
				</h1>
			</div>
			<div class="flex flex-col justify-center md:gap-2">
				<div class="space-y-2 text-center md:text-start">
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="ri:svelte-fill" class="h-4 w-4" />Svelte</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="mdi:tailwind" class="h-4 w-4" />Tailwind CSS</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="tabler:brand-typescript" class="h-4 w-4" />Typescript</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="simple-icons:drizzle" class="h-4 w-4" />Drizzle ORM</Badge
					>
				</div>
				<div class="space-y-2 text-center md:text-start">
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="ri:supabase-line" class="h-4 w-4" />Supabase</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="mdi:github" class="h-4 w-4" />Github</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="mdi:git" class="h-4 w-4" />Git</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="gg:vercel" class="h-4 w-4" />Vercel</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="simple-icons:shadcnui" class="h-4 w-4" />Shadcn</Badge
					>
				</div>
			</div>
		</div>

		<Project_1Cards />

		<div class="absolute z-0 md:right-0 md:top-0">
			<div
				class="h-[200px] w-[300px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:h-[500px] md:w-[500px]"
			></div>
		</div>
	</section>

	<section
		class="container relative mt-24 flex flex-col-reverse items-center justify-between space-y-8 py-12 md:mt-48 md:flex-row md:space-y-0"
	>
		<div class="absolute z-0 md:left-0 md:top-0 md:-translate-x-1/4">
			<div
				class="mt-24 h-[200px] w-[300px] scale-110 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:h-[400px] md:w-[600px]"
			></div>
		</div>

		<Project_2Cards />

		<div class="flex flex-col gap-6">
			<div>
				<h1 class=" text-center text-3xl font-bold text-white md:text-end md:text-6xl">
					Web & Mobile <br /> UI/UX Designs in Figma
				</h1>
			</div>
			<div class="flex justify-center gap-2 md:justify-end">
				<div>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="solar:figma-outline" class="h-4 w-4" />Figma</Badge
					>
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="teenyicons:framer-outline" class="h-4 w-4" />Framer</Badge
					>
				</div>
			</div>
		</div>
	</section>

	<section
		class="container relative mt-48 flex flex-col items-center justify-between space-y-12 py-12"
	>
		<div class="flex flex-col gap-6">
			<div>
				<h1 class=" text-center text-3xl font-bold text-white md:text-start md:text-6xl">
					Socials
				</h1>
			</div>
		</div>
		<SocialsCards />
	</section>

	<section>
		<div class="mt-48 flex min-h-screen justify-center overflow-hidden">
			<div class="absolute z-0">
				<div
					class="mt-48 h-[200px] w-[300px] scale-110 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:h-[200px] md:w-[600px]"
				></div>
			</div>
			<div class="absolute z-10 mt-48 space-y-12 text-center">
				<div class="flex flex-col items-center justify-center gap-2 text-center">
					<Badge class="items-center gap-2 px-4 py-2" variant="outline"
						><Icon icon="material-symbols:circle" class=" h-4 w-4" color="lime" />Open for work</Badge
					>
					<h1 class=" text-center text-3xl font-bold text-white md:text-start md:text-6xl">
						Get in touch
					</h1>
				</div>
				<div class="flex justify-center gap-4">
					<Button class=" items-center gap-2 p-6"
						><Icon icon="mingcute:send-line" class="h-5 w-5" /><a
							href="mailto:palaciopaulbermudez@gmail.com"
							target="_blank"
						>
							Send a Message</a
						></Button
					>
				</div>
			</div>
		</div>
	</section>
</main>
