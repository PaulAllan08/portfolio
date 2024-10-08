<script lang="ts">
	import CoursequestCarousel from '$lib/components/projects/coursequest-carousel.svelte';
	import MobileCarousel from '$lib/components/projects/mobile-carousel.svelte';
	import ReadiCarousel from '$lib/components/projects/readi-carousel.svelte';
	import WebCarousel from '$lib/components/projects/web-carousel.svelte';
</script>

<main>
	<section
		class="container relative mt-24 flex flex-col items-center justify-between space-y-12 py-12"
	>
		<div class="flex flex-col gap-6">
			<div>
				<h1 class="text-center text-3xl font-bold text-white md:text-start md:text-6xl">
					Full Stack Web Development Projects
				</h1>
			</div>
		</div>

		<div class="  flex flex-col items-center justify-between space-y-4">
			<div class="absolute z-0">
				<div
					class="h-[200px] w-[300px] scale-110 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:mt-24 md:h-[400px] md:w-[600px]"
				></div>
			</div>
			<div class="z-10 space-y-4 text-center text-white md:text-center">
				<h1 class="text-3xl font-bold md:text-3xl">CourseQuest (DICT)</h1>
				<p>
					CourseQuest is a learning management system for DICT that I built in sveltekit framework <br
					/>Link: 👉
					<a
						href="https://coursequest.vercel.app/"
						target="_blank"
						class="hover:underline"
						style="text-decoration-thickness: 1.5px">coursequest.vercel.app</a
					>
					👈
				</p>
				<p></p>
			</div>
		</div>
		<CoursequestCarousel />
	</section>

	<section
		class="container relative mt-24 flex flex-col items-center justify-between space-y-12 py-12"
	>
		<div class="flex flex-col gap-6">
			<div>
				<h1 class="text-center text-3xl font-bold text-white md:text-start md:text-6xl">
					UI/UX Design Projects
				</h1>
			</div>
		</div>

		<div class=" flex flex-col items-center justify-between space-y-4">
			<div class="absolute z-0">
				<div
					class="h-[200px] w-[300px] scale-110 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:mt-24 md:h-[400px] md:w-[600px]"
				></div>
			</div>
			<div class="z-10 mt-4 space-y-4 text-center text-white md:text-center">
				<h1 class="text-3xl font-bold md:text-4xl">READi (PDRRMO)</h1>
				<p>READi is an incident report app with internal system I design for PDRRMO</p>
			</div>
		</div>
		<ReadiCarousel />
		<div class=" flex flex-col items-center justify-between space-y-4">
			<div class="absolute z-0">
				<div
					class="h-[200px] w-[300px] scale-110 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:mt-24 md:h-[400px] md:w-[600px]"
				></div>
			</div>
			<div class="z-10 mt-4 space-y-4 text-center text-white md:text-center">
				<h1 class="text-3xl font-bold md:text-4xl">Mobile Designs</h1>
				<p>My other mobile design projects</p>
			</div>
		</div>
		<MobileCarousel />
		<div class=" flex flex-col items-center justify-between space-y-4">
			<div class="absolute z-0">
				<div
					class="h-[200px] w-[300px] scale-110 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl md:mt-24 md:h-[400px] md:w-[600px]"
				></div>
			</div>
			<div class="z-10 mt-4 space-y-4 text-center text-white md:text-center">
				<h1 class="text-3xl font-bold md:text-4xl">Web Designs</h1>
				<p>My other web design projects</p>
			</div>
		</div>
		<WebCarousel />
	</section>
</main>
