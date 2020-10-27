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
	<div class="grid mx-16 py-8 gap-16 bg-black 
			grid-cols-1
			sm:grid-cols-2 
			xxl:grid-cols-4">
			{#each articulos as item}
				<CARDDOBLE
					_id={"art_"+item.title}

					_classFront="card-black-amarillo border-2" 
					topicFront="{item.title}"
					imgFront="{item.imagen}"
					mensajeFront="{item.precio}"
					
					_classBack="{item.cardcolor} border-2"
					topicBack="Descripcion:"
					mensajeBack="{item.descripcion}"
					htmlBack= "{item.html}">
				</CARDDOBLE>
			{/each}
	</div>
</section>
