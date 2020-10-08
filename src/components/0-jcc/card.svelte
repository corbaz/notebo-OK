<!-- Ejemplos:
	<div class="grid grid-cols-1 gap-16
		sm:grid-cols-2 
		lg:grid-cols-3 
		xxl:grid-cols-4 
		bg-white py-20">
		<CARD />
		<CARD _class="card-border
			 bg-blue-900 border-yellow-700 text-amarillo 
			 text-justify text-tiny w-64 m-auto p-5" 
			 topic="Tema"/>
		<CARD _class="card 
			bg-purple-600 border-gray-500 text-white"
			topic="TOPIC"/>
		<CARD _class="card-black" />
		<CARD _class="card-blue" />
		<CARD _class="card-gray" />
		<CARD _class="card-green" />
		<CARD _class="card-indigo" />
		<CARD _class="card-orange" />
		<CARD _class="card-pink" />
		<CARD _class="card-purple" />
		<CARD _class="card-red" />
		<CARD _class="card-teal" />
		<CARD _class="card-transparent" />
		<CARD _class="card-white" />
		<CARD _class="card-yellow" />
	</div>

    import CARD from "./components/0-jcc/card.svelte";
    <CARD _class="card-white" topic='Info' mensaje="JCC Producciones"/>
-->
<script lang="ts">
	export let _class: string = "";
	export let topic: string = "Info:";
    export let mensaje: string = 
    `{screen}: prefix to any existing background color utility. For example, use md:bg-green-500 to apply the bg-green-500 utility at only medium screen sizes and above.`;
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
	}
	.card {
		@apply card-border card-font card-m-p;
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
	.card-orange {
		@apply card bg-orange-200 border-orange-400 text-orange-700;
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
	.card-teal {
		@apply card bg-teal-200 border-teal-400 text-teal-700;
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
</style>

<div class="{_class ? _class : 'card-red'} ">
	<strong>{topic.toLocaleUpperCase()}&nbsp;</strong>{mensaje}
</div>
