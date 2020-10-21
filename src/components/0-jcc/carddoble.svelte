<!--
	<div class="grid m-16 pb-20 gap-16 bg-black 
		grid-cols-1
		sm:grid-cols-2 
		lg:grid-cols-3 
		xxl:grid-cols-4">
		<CARDDOBLE _id="mercado1" imgFront="/assets/img/MercadoPago.png" />
		<CARDDOBLE _id="mercado2" imgFront="/assets/img/MercadoPago.png" _classFront="card-black" />
		<CARDDOBLE _id="mercado3" imgFront="/assets/img/MercadoPago.png" _classFront="card-blue" />
		<CARDDOBLE _id="mercado4" imgFront="/assets/img/MercadoPago.png" _classFront="card-gray" />
		<CARDDOBLE _id="mercado5" imgFront="/assets/img/MercadoPago.png" _classFront="card-green" />
		<CARDDOBLE _id="mercado6" imgFront="/assets/img/MercadoPago.png" _classFront="card-indigo" />
		<CARDDOBLE _id="mercado7" imgFront="/assets/img/MercadoPago.png" _classFront="card-orange" />
		<CARDDOBLE _id="mercado8" imgFront="/assets/img/MercadoPago.png" _classFront="card-pink" />
		<CARDDOBLE _id="mercado9" imgFront="/assets/img/MercadoPago.png" _classFront="card-purple" />
		<CARDDOBLE _id="mercado10" imgFront="/assets/img/MercadoPago.png" _classFront="card-red" />
		<CARDDOBLE _id="mercado11" imgFront="/assets/img/MercadoPago.png" _classFront="card-teal" />
		<CARDDOBLE _id="mercado12" imgFront="/assets/img/MercadoPago.png" _classFront="card-transparent" />
		<CARDDOBLE _id="mercado13" imgFront="/assets/img/MercadoPago.png" _classFront="card-white" />
		<CARDDOBLE _id="mercado14" imgFront="/assets/img/MercadoPago.png" _classFront="card-yellow" />
	</div>

	import CARDDOBLE from "../components/0-jcc/carddoble.svelte";
-->
<script lang="ts">
	function altura() {
		let frontH = document.getElementById("front" + _id).clientHeight;

		let frontW = document.getElementById("front" + _id).clientWidth;

		document.getElementById("back" + _id).style.overflowY = "auto";
		document.getElementById("back" + _id).style.height = frontH + "px";
		document.getElementById("back" + _id).style.width = frontW + "px";
	};

	export let _id: string = "";

	export let _classFront: string = "";
	export let topicFront: string = "Info:";
	export let imgFront: string = "";
	export let mensajeFront: string =
		"{screen}: prefix to any existing background color utility. For example, use md:bg-green-500 to apply the bg-green-500 utility at only medium screen sizes and above.";

	export let _classBack: string = "";
	export let topicBack: string = "Info:";
	export let imgBack: string = "";
	export let mensajeBack: string =
		"Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias. Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias";
	export let htmlBack="";
</script>

<style lang="postcss">
	.card-border {
		@apply rounded shadow-3xl;
	}
	.card-font {
		@apply text-md font-robot;
	}
	.card-m-p {
		@apply m-0 p-6 text-justify;
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
		@apply card bg-transparent  border-gray-400 text-gray-600;
	}
	.card-white {
		@apply card bg-white border-gray-400 text-gray-700;
	}
	.card-yellow {
		@apply card bg-yellow-200 border-yellow-400 text-yellow-700;
	}
	.card-amarillo {
		@apply card bg-amarillo border-white text-black;
	}
	.card-black-amarillo {
		@apply card bg-black border-amarillo text-amarillo;
	}
	.Contenedor {
		position: relative;
		-webkit-perspective: 1000px;
		-moz-perspective: 1000px;
	}
	.Contenedor:hover .Tarjetero {
		transform: rotateY(180deg);
	}

	.Tarjetero {
		-webkit-transform-style: preserve-3d;
		-webkit-transition: 0.5s;
		-moz-transform-style: preserve-3d;
		-moz-transition: 0.5s;
	}

	.Tarjetero .front {
		z-index: 2;
		top: 0;
		left: 0;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
	}
	.Tarjetero .back {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		-webkit-transform: rotateY(180deg);
		-webkit-backface-visibility: hidden;
		-moz-transform: rotateY(180deg);
		-moz-backface-visibility: hidden;
	}
</style>

<div class="Contenedor">
	<div class="Tarjetero">
		<div
			id="front{_id}"
			class="front {_classFront ? _classFront : 'card-red'}"
			on:mouseover="{altura}">
			{#if imgFront}
				<img src={imgFront} class="mx-auto py-2" alt="" />
			{/if}
			<div class="text-center">
				<strong class="text-xl">{topicFront.toLocaleUpperCase()}&nbsp;</strong>
				<h1 class="text-3xl font-bold">{mensajeFront}</h1>
			</div>
		</div>
		<div
			id="back{_id}"
			class="back {_classBack ? _classBack : 'card-black'}">
			{#if imgBack}<img src={imgBack} alt=""/>{/if}
			<strong>{topicBack.toLocaleUpperCase()}&nbsp;</strong>{mensajeBack}
			{#if htmlBack}
				{@html htmlBack}
			{/if}
		</div>
	</div>
</div>
