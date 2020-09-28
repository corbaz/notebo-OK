<script lang="ts">
	import { datos } from "../js/db.js";
	function scrollUp() {
		let a = window.scrollY;
		window.scrollTo(
			{ 	
				top: a - 100, 
				left: 0, 
				behavior: "smooth" 
			}
		);
	}
	function scrollDown() {
		let a = window.scrollY;
		window.scrollTo(
			{ 	
				top: a + 100, 
				left: 0, 
				behavior: "smooth" 
			}
		);
	}

	let stickerClass = "w-10 mt-2 bg-amarillo rounded-l-lg cursor-pointer";
</script>
<style lang="postcss"></style>
<div
	id="stickers"
	class="w-10 top-0 right-0 fixed mt-48 px-0 py-0 text-tiny font-bold
		text-center text-black">

	<div id="phone" class="{stickerClass}">
		<a href={datos.telefono_url}>
			<img
				id="logo_phone"
				width="24px"
				height="32px"
				class="py-1 mx-auto "
				src={datos.call_png}
				alt="Llamar"/>
			{@html datos.call}
		</a>
	</div>

	<div id="sms" class={stickerClass}>
		<a href={datos.sms_url}>
			<img
				id="logo_phone"
				width="32px"
				height="32px"
				class="py-1 mx-auto"
				src={datos.sms_png}
				alt="Mensaje SMS" />
			{@html datos.sms}
		</a>
	</div>

	<div id="up" class={stickerClass}>
		<img
			id="logo_up"
			width="32px"
			height="32px"
			class="py-1 mx-auto"
			src={datos.up_png}
			alt="Mensaje SMS"
			on:click={scrollUp} />
		{@html datos.up}
	</div>

	<div id="down" class={stickerClass}>
		<img
			id="logo_down"
			width="32px"
			height="32px"
			class="py-1 mx-auto"
			src={datos.down_png}
			alt="Mensaje SMS"
			on:click={scrollDown} />
		{@html datos.down}
	</div>
</div>
