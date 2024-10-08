<script lang="ts">
	import CoursequestCards from '$lib/components/projects/coursequest-cards.svelte';
	import MobileCards from '$lib/components/projects/mobile-cards.svelte';
	import ReadiCards from '$lib/components/projects/readi-cards.svelte';
	import WebCards from '$lib/components/projects/web-cards.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	const images = [
		'/coursequest/landing.png',
		'/coursequest/login.png',
		'/coursequest/reg.png',
		'/coursequest/courses.png',
		'/coursequest/prev.png',
		'/coursequest/enroll.png',
		'/coursequest/enrolled.png',
		'/coursequest/learn.png',
		'/coursequest/dashboard.png',
		'/coursequest/add-cat.png',
		'/coursequest/cat-table.png',
		'/coursequest/add-course.png',
		'/coursequest/course-table.png'
	];

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<main>
	<section
		class="container relative mt-24 flex flex-col items-center justify-between space-y-24 py-12"
	>
		<div class="flex flex-col gap-6">
			<div>
				<h1 class="text-center text-3xl font-bold text-white md:text-start md:text-6xl">
					Full Stack Web Development Projects
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

			<Carousel.Root
				class="w-full md:max-w-6xl "
				on:mousenter={plugin.stop}
				on:mouseleave={plugin.reset}
			>
				<Carousel.Content>
					{#each images as image, i (i)}
						<Carousel.Item>
							<div class="p-1">
								<Card.Root class="bg-transparent">
									<ScrollArea class="h-[600px] w-full" orientation="vertical">
										<Card.Content class="flex aspect-auto items-center justify-center p-12">
											<img
												src={image}
												alt={`Project ${i + 1}`}
												class="h-auto w-full rounded-lg object-cover"
											/>
										</Card.Content>
									</ScrollArea>
								</Card.Root>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		</div>
	</section>

	<section
		class="container relative mt-24 flex flex-col items-center justify-between space-y-24 py-12"
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

			<ReadiCards />
		</div>

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

			<MobileCards />
		</div>

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

			<WebCards />
		</div>
	</section>
</main>
