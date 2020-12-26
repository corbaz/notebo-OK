<script lang="ts">
	export let _id = "";
	export let _class: string = "";
	export let topic: string = "Info:";
	export let mensaje: string =
		"{screen}: prefix to any existing background color utility. For example, use md:bg-green-500 to apply the bg-green-500 utility at only medium screen sizes and above.";
	export let htmlFront: string = `
		<h1 class=' text-red-600 text-right'>Hola Mundo</h1>
		<img class="mx-auto" src="favicon.png"/>
	`;
</script>

<style lang="postcss">
	.card-border {
		@apply border rounded shadow-3xl;
	}
	.card-font {
		@apply text-md font-robot;
	}
	.card-m-p {
		@apply mx-16 my-2 p-6 text-justify;
		@apply m-0 p-6 text-justify;
	}
	.card {
		@apply card-border card-font card-m-p m-16;
	}

	.card-black {
		@apply card bg-black border-gray-400 text-gray-500;
	}
	.card-blue {
		@apply card bg-blue-200 border-blue-400 text-blue-700;
	}
	.card-gray {
		@apply card bg-gray-200 border-gray-400 text-gray-700;
	}
	.card-green {
		@apply card bg-green-200 border-green-400 text-green-700;
	}
	.card-indigo {
		@apply card bg-indigo-200 border-indigo-400 text-indigo-700;
	}
	.card-pink {
		@apply card bg-pink-200 border-pink-400 text-pink-700;
	}
	.card-purple {
		@apply card bg-purple-200 border-purple-400 text-purple-700;
	}
	.card-red {
		@apply card bg-red-200 border-red-400 text-red-700;
	}

	.card-transparent {
		@apply card  bg-transparent  border-gray-400 text-gray-600;
	}
	.card-white {
		@apply card bg-white border-gray-400 text-gray-700;
	}
	.card-yellow {
		@apply card bg-yellow-200 border-yellow-400 text-yellow-700;
	}
	.card-amarillo {
		@apply card bg-amarillo-100 border-white text-black;
	}
	.card-black-amarillo {
		@apply card bg-black border-amarillo-100 text-amarillo-900;
	}
</style>

<div id={_id} class="{_class ? _class : 'card-red'} ">
	{#if topic}<strong>{topic.toLocaleUpperCase()}&nbsp;</strong><br />{/if}

	{#if mensaje}{mensaje}{/if}

	{#if htmlFront}
		{@html htmlFront}
	{/if}
</div>
