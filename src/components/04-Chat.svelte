<script lang="ts">
	import { datos } from "../js/db.js";
</script>
<style lang="postcss">
	#Chat{
		z-index: 10002;
	}
</style>
<div
	id="Chat"
	class="fixed bottom-0 right-0 pb-4 mr-2 
			   font-lato text-sm text-center text-amarillo-900">
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
