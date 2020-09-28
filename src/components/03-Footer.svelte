<script lang="ts">
	import { datos } from "../js/db.js";
</script>
<style lang="postcss"></style>
<footer class="">
	<div id="Pagos">
		<p
			class="py-6 text-2xl font-bold leading-relaxed text-center
				text-amarillo">
			{@html datos.formas_de_pago}
		</p>
		<img
			class="flex mx-auto"
			height="168px"
			width="362px"
			src={datos.pagos}
			alt="logo pagos" />
	</div>
	<div id="Contactos">
		<img
			class="flex py-5 mx-auto"
			src={datos.contacto}
			alt="logo contactos" />
	</div>
	<div id="Redes" class="flex justify-center pb-2">
		<a href={datos.email} target="_blank">
			<img
				class="pt-2 mx-3"
				height="64px"
				width="64px"
				src={datos.gmail}
				alt="logo gmail" />
		</a>
		<a href={datos.instagram} target="_blank">
			<img
				class="mx-3"
				height="64px"
				width="64px"
				src={datos.instagram_png}
				alt="logo instagram" />
		</a>
		<!-- 			´
			<a href={datos.whatsapp} target="_blank">
				<img
					class="mx-3"
					height="64px"
					width="64px"
					src={datos.whatsapp_png}
					alt="logo whatsapp" />
			</a>
		  -->
		<a href={datos.facebook} target="_blank">
			<img
				class="mx-3"
				height="64px"
				width="64px"
				src={datos.facebook_png}
				alt="logo facebook" />
		</a>
	</div>
	<div id="Telefono" class="py-3">
		<a href={datos.telefono_url} target="">
			<p class="text-3xl font-bold text-center text-amarillo ">
				{datos.telefono}
			</p>
		</a>
	</div>
</footer>
