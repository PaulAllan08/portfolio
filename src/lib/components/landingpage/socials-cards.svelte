<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Icon from '@iconify/svelte';
</script>

<div class="container z-10 flex flex-col justify-between gap-4 md:flex-row">
	<Card.Root
		class=" w-full bg-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500"
	>
		<Card.Header>
			<a href="https://www.linkedin.com/in/paulallanpalacio/" target="_blank">
				<Card.Title class="flex flex-col items-center gap-4 p-24 text-center text-2xl"
					><Icon icon="ri:linkedin-fill" class="h-8 w-8" />Linkedin</Card.Title
				>
			</a>
		</Card.Header>
	</Card.Root>

	<Card.Root
		class="w-full bg-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500"
	>
		<Card.Header>
			<a href="https://dribbble.com/Saul_08" target="_blank">
				<Card.Title class="flex flex-col items-center gap-4 p-24 text-center text-2xl"
					><Icon icon="icon-park-outline:dribble" class="h-8 w-8" />Dribble
				</Card.Title>
			</a>
		</Card.Header>
	</Card.Root>

	<Card.Root
		class="w-full bg-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500"
	>
		<Card.Header>
			<a href="https://github.com/PaulAllan08" target="_blank">
				<Card.Title class="flex flex-col items-center gap-4 p-24 text-center text-2xl"
					><Icon icon="mdi:github" class="h-8 w-8" />Github
				</Card.Title>
			</a>
		</Card.Header>
	</Card.Root>
</div>
<div class="absolute z-0 md:right-0 md:top-0">
	<div
		class="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-15 blur-3xl"
	></div>
</div>
