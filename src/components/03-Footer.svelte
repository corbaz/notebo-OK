<script lang="ts">
	import { datos } from "../js/db.js";
	import { version } from "../js/version.js";

	/* 	import Icon from "svelte-awesome";
	import {
		github,
		codepen,
		gitlab,
		twitter,
		instagram,
		camera,
	} from "svelte-awesome/icons"; */
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
		@apply pt-3 flex items-center justify-center;
	}
	.Telefono {
		@apply mx-16 text-2xl font-bold leading-relaxed text-center
				text-amarillo;
	}
</style>

<footer>
	<div id="Pagos" class="items-center justify-center grid ">
		<p class="pPagos">
			{@html datos.formas_de_pago}
		</p>
		<img class="imagenPagos" src={datos.pagos} alt="logo pagos" />
	</div>

	<div id="Contactos" class="flex items-center justify-center">
		<img class="Contacto" src={datos.contacto} alt="logo contactos" />
	</div>

	<div id="Redes" class="flex items-center justify-center mx-16">
		<a href={datos.email} target="_blank">
			<img class="pt-3 imagenRedes" src={datos.gmail} alt="logo gmail" />
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

	<div id="Telefono">
		<a class="Telefono" target="" href={datos.telefono_url}>
			{datos.telefono}
		</a>
	</div>
	<div id="Version" class="mx-16">
		<p class="text-center text-sm text-amarillo">
			by JCC Produccione © 2020
		</p>
		<p class="text-center text-sm text-amarillo">
			Version {version}
		</p>
	</div>
</footer>
