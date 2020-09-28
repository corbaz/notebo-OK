<script lang="ts">
	import { datos } from "../js/db.js";
</script>
<style lang="postcss"></style>
<div
	id="Chat"
	class="z-40 fixed bottom-0 right-0 pb-4 mr-2 text-sm font-bold text-center
		text-amarillo">
	<a href={datos.whatsapp} target="_blank">
		<img
			id="logo"
			height="39px"
			width="38px"
			class="py-2 mx-auto"
			src={datos.chat_png}
			alt="logo chat whatsapp" />{datos.chat}
	</a>
</div>
