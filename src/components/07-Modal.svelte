<script lang="ts">
	function cerrar() {
		document.getElementById("FondoModal").style.display = "none";
		document.body.style.overflowY = "visible";
	}

	/* let rotar = "animate-spin-slow"; */
</script>

<style lang="postcss">
	#FondoModal {
		z-index: 100000;
	}
	.rotar {
		@apply animate-spin-slow;
	}
</style>

<div
	id="FondoModal"
	class="z-40 fixed top-0 left-0 w-screen h-screen flex items-center
		justify-center bg-amarillo bg-opacity-25 transition duration-1000
		ease-out-in hover:bg-black transform
		hover:scale-110">
	<div
		id="Modal"
		class="mx-auto my-auto px-12 py-4 bg-white rounded-lg border-black	border-0 bg-modal bg-no-repeat bg-contain bg-top-left
		md:px-32 md:py-8 ">
		<div
			id="cerrarX"
			class="flex justify-end font-lato text-lg text-black
				hover:text-amarillo-900 -mr-8 pb-6 md:-mr-24"
			alt="CERRAR">
			<svg
				class="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				on:click={cerrar}
				xmlns="http://www.w3.org/2000/svg">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</div>

		<div id="titulo" class="">
			<h1
				class="text-center text-3xl font-bold text-amarillo-900 texto-borde pb-8">
				BIENVENIDOS
			</h1>
		</div>

		<div id="mensaje" class="flex-block justify-center">
			<img
				alt=""
				id="logo"
				src="assetsjcc/icons/android-chrome-192x192.png"
				class="rotar mx-auto" />
			<p class="text-2xl font-giorgio text-center text-black p-4">
				notebo-OK
			</p><br />
		</div>

		<div
			id="cerrarBoton"
			class="items-center  justify-center  grid grid-cols-1">
			<button
				class="font-lato text-md text-center mx-auto mb-2
				 	bg-black text-amarillo-900
					border-black border-2 rounded 
					hover:bg-white hover:text-black hover:border-black 
					cursor-pointer px-5 py-2"
				on:click={cerrar}>
				Cerrar
			</button>
		</div>
	</div>
</div>
