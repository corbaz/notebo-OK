<script lang="ts">
	import { datos } from '../js/db.js';
</script>
<style lang="postcss"></style>
<div id="logo" class="pb-5">
	<img class="hidden md:flex md:mx-auto" src={datos.logo_PC} alt="logo PC" />
	<img class="flex mx-auto md:hidden" src={datos.logo_Movil} alt="logo movil" />
</div>