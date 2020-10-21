<script lang="ts">
	import { datos } from "../js/db.js";
</script>

<style lang="postcss">
	.pPagos {
		@apply pb-6 pt-0 px-16 text-3xl font-bold leading-relaxed text-center	text-amarillo;
	}
	.imagenPagos {
		@apply mx-auto px-16;
	}
	.Contacto {
		@apply mx-auto py-4 px-16;
	}
	.imagenRedes {
		@apply mx-3;
		height: 64px;
		width: 64px;
	}
	#Telefono {
		@apply py-3;
	}
	.Telefono {
		@apply m-auto text-3xl font-bold leading-relaxed text-center
				text-amarillo;
	}
</style>

<footer class="">
	<div id="Pagos" class="items-center justify-center grid ">
		<p class="pPagos">
			{@html datos.formas_de_pago}
		</p>
		<img class="imagenPagos" 
				  src={datos.pagos} 
				  alt="logo pagos" />
	</div>

	<div id="Contactos"class="flex items-center justify-center">
		<img
			class="Contacto"
			src={datos.contacto}
			alt="logo contactos" />
	</div>

	<div id="Redes" class="flex items-center justify-center">
		<a href={datos.email} target="_blank">
			<img class="pt-3 imagenRedes" 
					 src={datos.gmail} 
					 alt="logo gmail"/>
		</a>
		<!-- 			
			<a href={datos.whatsapp} target="_blank">
				<img
					class="imagenRedes"
					src={datos.whatsapp_png}
					alt="logo whatsapp" />
			</a>
		  -->
		<a href={datos.facebook} target="_blank">
			<img
				class="imagenRedes"
				src={datos.facebook_png}
				alt="logo facebook" />
		</a>
		<a href={datos.instagram} target="_blank">
			<img
				class="imagenRedes"
				src={datos.instagram_png}
				alt="logo instagram" />
		</a>
	</div>
	<div id="Telefono" class="flex items-center justify-center">
		<a class="Telefono" 
			target=""
			href={datos.telefono_url} >
			{datos.telefono}
		</a>
	</div>
</footer>
