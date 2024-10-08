<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	const images = [
		'/readi/dashboard.png',
		'/readi/dashboard-air.png',
		'/readi/report.png',
		'/readi/deploy.png',
		'/readi/evacuation.png',
		'/readi/add-evacuation.png',
		'/readi/splash.png',
		'/readi/home.png',
		'/readi/report-mobile.png',
		'/readi/evac-mobile.png'
	];

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<!-- plugins={[plugin]} -->
<Carousel.Root class="w-full max-w-6xl" on:mousenter={plugin.stop} on:mouseleave={plugin.reset}>
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
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
