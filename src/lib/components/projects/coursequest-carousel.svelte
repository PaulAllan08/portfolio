<script lang="ts">
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

<!-- plugins={[plugin]} -->
<Carousel.Root class="w-full md:max-w-6xl " on:mousenter={plugin.stop} on:mouseleave={plugin.reset}>
	<Carousel.Content>
		{#each images as image, i (i)}
			<Carousel.Item>
				<div class="p-1">
					<Card.Root class="bg-transparent">
						<ScrollArea class="h-[200px] w-full md:h-[600px]" orientation="vertical">
							<Card.Content class="flex aspect-auto items-center justify-center px-4 md:p-12">
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

	<Carousel.Previous
		class="absolute left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 md:-left-16  md:h-12 md:w-12"
	/>

	<Carousel.Next
		class="absolute right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 md:-right-16 md:h-12 md:w-12"
	/>
</Carousel.Root>
