<script lang="ts">
	import { datos } from "../js/db.js";
/* 	import Icon from "svelte-awesome";
	import {
		github,
		codepen,
		gitlab,
		twitter,
		instagram,
		camera,
		beer,
		refresh,
		comment,
		codeFork,
		ban,
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
		@apply py-3;
	}
	.Telefono {
		@apply m-auto text-3xl font-bold leading-relaxed text-center
				text-amarillo;
	}
/* 	.DALogo {
		transition-duration: 0.8s;
		transition-property: transform;
		overflow: hidden;
	}

	.DALogo,
	.DALogo img {
		cursor: pointer;
	}
	.flip-container {
		perspective: 1000;
	}
	.flip-container.active-hover:hover .flipper,
	.flip-container.hover .flipper {
		transform: rotateY(180deg);
	}
	.flipper {
		transition: 0.6s;
		transform-style: preserve-3d;
		position: relative;
	} */
</style>

<footer class="">
	<div id="Pagos" class="items-center justify-center grid ">
		<p class="pPagos">
			{@html datos.formas_de_pago}
		</p>
		<img class="imagenPagos" src={datos.pagos} alt="logo pagos" />
	</div>

	<div id="Contactos" class="flex items-center justify-center">
		<img class="Contacto" src={datos.contacto} alt="logo contactos" />
	</div>

	<div id="Redes" class="flex items-center justify-center">
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
	<div id="Telefono" class="flex items-center justify-center">
		<a class="Telefono" target="" href={datos.telefono_url}>
			{datos.telefono}
		</a>
	</div>
	<p class="mb-3 text-center text-amarillo">JCC Producciones - (c) 2020 Version 2.0.0</p>
</footer>
<!--<div class="mt-1">
	<div class="px-2">
		<div
			class="flex flex-wrap -mx-2 text-xs text-center uppercase font-hairline tracking-wide">
			<div class="w-full py-5 flex justify-around">
				<div>
					<p class="mb-3 text-amarillo">GitHub</p>
					<a
						href="https://github.com/davidangel"
						target="_blank"
						class="text-amarillo hover:text-white text-2xl">
						<Icon data={github} /></a>
				</div>
				<div>
					<p class="mb-3 text-amarillo">CodePen</p>
					<a
						href="https://codepen.io/davidangel"
						target="_blank"
						class="text-amarillo hover:text-white text-2xl">
						<Icon data={codepen} /></a>
				</div>
				<div>
					<p class="mb-3 text-amarillo">GitLab</p>
					<a
						href="https://gitlab.com/davidangel"
						target="_blank"
						class="text-amarillo hover:text-white text-2xl">
						<Icon data={gitlab} /></a>
				</div>
			</div>
			<div class="py-5 w-full">
				<div class="logo flex items-center p-1 md:p-4">
					<div class="mx-auto">
						<div class="DALogo" style="width:75px;height:75px;">
							<div
								class="flip-container hover"
								style="width:75;height:size;">
								<div
									class="flipper"
									style="height:size; width:75; transition:0.5s;">
									<div
										class="front"
										style="height:size;width:75;transition:0.5s;">
		
									</div>
								</div>
								<div
									class="back"
									style="height:size;width:75;transition:0.5s;">
									<div>
										<img
											src="assets/icons/logo_svelte.svg"
											width="75"
											height="75"
											alt="Julio Cesar Corbazl"
											title="Julio Cesar Corbaz"
											class="rounded-full border-2 border-solid border-amarillo" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="py-5 flex justify-around w-full">
			<div>
				<p class="mb-3 text-amarillo">Twitter</p>
				<a
					href="https://twitter.com/davidius"
					target="_blank"
					class="text-amarillo hover:text-white text-2xl">
					<Icon data={twitter} />
				</a>
			</div>
			<div>
				<p class="mb-3 text-amarillo">Instagram</p>
				<a
					href="https://instagram.com/davidius"
					target="_blank"
					class="text-amarillo hover:text-white text-2xl">
					<Icon data={instagram} />
				</a>
			</div>
			<div>
				<p class="mb-3 text-amarillo">Unsplash</p>
				<a
					href="https://unsplash.com/@davidangel"
					target="_blank"
					class="text-amarillo hover:text-white text-2xl">
					<Icon data={camera} />
				</a>
			</div>
		</div>
	</div>
</div>
<div class="flex items-center text-amarillo p-12">
	<span class="mx-auto">© 2020 by Julio Corbaz</span>
</div>
 basic 
<Icon class="text-red-600" data={beer} />-->

<!-- with options 
<Icon class="text-amarillo" data={refresh} scale="2" />
<Icon class="text-amarillo" data={comment} flip="horizontal" />
<Icon class="text-amarillo" data={codeFork} label="Forked Repository" />-->


