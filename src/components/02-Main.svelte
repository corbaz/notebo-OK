<script lang="ts">
	import { articulos, datos } from "../js/db.js";
	import CARDDOBLE from "../components/0-jcc/carddoble.svelte";
</script>

<style lang="postcss">
	.sectionArticulos {
		@apply mx-auto mb-0 text-amarillo;
	}
	.imgServicios {
		@apply flex  mx-auto px-16;
	}
</style>

<section id="Articulos" class="sectionArticulos">
	<img class="imgServicios" src={datos.servicios} alt="logo servicios" />
	<div
		class="grid mx-16 py-8 gap-16 bg-black
			grid-cols-1
			sm:grid-cols-2 
			xxl:grid-cols-4">
		{#each articulos as item}
			<CARDDOBLE
				_id={'art_' + item.title}
				_classFront="card-black-amarillo border-2"
				topicFront=""
				mensajeFront=""
				htmlFront="
					<div>
						<h1 class='text-xl'>{item.title}</h1>
						<h1 class='text-xl'>{item.precio}</h1>
						</br>
						<img class='mx-auto' src={item.imagen} alt=''/>
					</div>
				"
				_classBack="{item.cardcolor} border-2"
				topicBack=""
				mensajeBack=""
				htmlBack="
					<div >
						<h1 class='text-xl text-right'>{item.title}</h1>
						<h1 class='text-xl text-right'>{item.precio}</h1>
						<img class='mx-auto pb-2' src={item.imagen} height=96 width=96  alt='' />
						<p class='text-justify'>{item.descripcion}</p>
					</div>
				"/>
		{/each}
	</div>
</section>
