<script lang="ts">
	import { datos } from "../js/db.js";
	window.onscroll = () => {
		window.scrollY > 99
			? (	document.getElementById('ScrollTop').style.display = "Block")
			: (	document.getElementById('ScrollTop').style.display = "none");
	};

	function scrollTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

</script>
<style lang="postcss"></style>
<div
	id="ScrollTop"
	class="fixed bottom-0 right-0 pb-24 mr-2 text-sm font-bold
		cursor-pointer text-center text-amarillo hidden">
	{datos.top}
	<img
		id="logo_up"
		height="39px"
		width="38px"
		class="py-2 mx-auto"
		src={datos.top_png}
		alt="logo scrolltop"
		on:click={scrollTop} />
</div>
