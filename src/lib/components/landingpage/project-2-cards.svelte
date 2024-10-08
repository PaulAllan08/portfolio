<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { goto } from '$app/navigation';

	function handleProjects() {
		goto('/app/projects');
	}
</script>

<Card.Root
	class="z-10 w-auto bg-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500 md:w-[500px]"
>
	<Card.Header>
		<Card.Title>UI/UX Design Projects</Card.Title>
	</Card.Header>
	<Card.Content>
		<img src="/figma.png" alt="thumbnail" class="h-auto w-auto rounded-lg" />
	</Card.Content>
	<Card.Footer class="flex">
		<Button class="z-10 w-full p-6 " onclick={handleProjects}>View project</Button>
	</Card.Footer>
</Card.Root>
