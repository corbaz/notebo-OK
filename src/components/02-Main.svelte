<script lang="ts">
	import { articulos, datos } from "../js/db.js";
</script>
<style lang="postcss"></style>
<section id="Articulos" class="mx-auto text-amarillo">
	<img class="flex pb-3 mx-auto" src={datos.servicios} alt="logo servicios" />
	<div
		id="Articulo"
		class="gap-4 
		mx-24 grid grid-cols-1
		sm:mx-20 sm:grid-cols-2 
		lg:mx-8 lg:grid-cols-4">
		{#each articulos as item}
			<div class="py-6 border-0 border-amarillo rounded-lg">
				<img
					class="mx-auto"
					height={item.pixel}
					width={item.pixel}
					src={item.imagen}
					alt={item.title} />
				<div class="font-bold leading-relaxed text-center">
					<p class="pt-2 text-xl">{item.title}</p>
					<p class="text-3xl">{item.precio}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
