<!-- Ejemplos:
		<ALERT />
		<ALERT _class="alert-border
			 bg-blue-900 border-yellow-700 text-amarillo-900
			 text-justify text-tiny w-64 m-auto p-5" 
			 topic="Tema:"/>
		<ALERT _class="alert 
			bg-purple-600 border-gray-500 text-white"
			topic="TOPIC:"/>
		<ALERT _class="alert-black" />
		<ALERT _class="alert-blue" />
		<ALERT _class="alert-gray" />
		<ALERT _class="alert-green" />
		<ALERT _class="alert-indigo" />
		<ALERT _class="alert-orange" />
		<ALERT _class="alert-pink" />
		<ALERT _class="alert-purple" />
		<ALERT _class="alert-red" />
		<ALERT _class="alert-teal" />
		<ALERT _class="alert-transparent" />
		<ALERT _class="alert-white" />
		<ALERT _class="alert-yellow" />
-->
<script lang="ts">
	export let _class: string = "";
	export let topic: string = "Alert:";
	export let mensaje: string = " Cuidado";
</script>

<style lang="postcss">
	.alert-border {
		@apply  border rounded;
	}
	.alert-font {
		@apply text-base font-robot;
	}
	.alert-m-p {
		@apply  mx-16 my-auto p-4 flex items-center justify-start;
		height: 50px;
	}
	.alert {
		@apply alert-border alert-font alert-m-p;
	}

	.alert-black {
		@apply alert bg-black border-gray-400 text-white ;
	}
	.alert-blue {
		@apply alert bg-blue-100 border-blue-400 text-blue-800;
	}
	.alert-gray {
		@apply alert bg-gray-100 border-gray-400 text-gray-800;
	}
	.alert-green {
		@apply alert bg-green-100 border-green-400 text-green-800;
	}
	.alert-indigo {
		@apply alert bg-indigo-100 border-indigo-400 text-indigo-800;
	}

	.alert-pink {
		@apply alert bg-pink-100 border-pink-400 text-pink-800;
	}
	.alert-purple {
		@apply alert bg-purple-100 border-purple-400 text-purple-800;
	}
	.alert-red {
		@apply alert bg-red-100 border-red-400 text-red-700;
	}

	.alert-transparent {
		@apply alert bg-transparent border-purple-400 text-indigo-600;
	}
	.alert-white {
		@apply alert bg-white border-gray-400 text-black;
	}
	.alert-yellow {
		@apply alert bg-yellow-100 border-yellow-400 text-yellow-800;
	}
</style>

<div class="{_class ? _class : 'alert-red'} ">
	<strong>{topic.toLocaleUpperCase()}&nbsp;</strong>{mensaje}
</div>
