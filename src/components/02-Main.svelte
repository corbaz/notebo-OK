<script lang="ts">
	import { articulos, datos } from "../js/db.js";
</script>

<style lang="postcss">
	.sectionArticulos {
		@apply mx-auto text-amarillo;
	}
	.imgServicios {
		@apply flex pb-6 mx-auto;
	}
	.divArticulo {
		@apply gap-4 mx-24 grid grid-cols-1;
	}
	@screen sm {
		.divArticulo {
			@apply mx-20 grid-cols-2;
		}
	}

	@screen lg {
		.divArticulo {
			@apply mx-8 grid-cols-4;
		}
	}
</style>

<section id="Articulos" class="sectionArticulos">
	<img class="imgServicios" src={datos.servicios} alt="logo servicios" />
	<div id="Articulo" class="divArticulo">
		{#each articulos as item}
			<div class="py-6 border-0 border-amarillo rounded-lg">
				<img
					class="mx-auto"
					height={item.pixel}
					width={item.pixel}
					src={item.imagen}
					alt={item.title} />
				<div class="text-xl text-center font-bold leading-relaxed">
					<p class="pt-2">{item.title}</p>
					<p class="">{item.precio}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
