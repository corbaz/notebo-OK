<script lang="ts">
	/* import TailwindStyles from './TailwindStyles.svelte'; */
	/* 	import { articulos, datos } from "./js/db.js"; */

	/* 	import MENU from "./components/00-Menu.svelte"; */
	import HEADER from "./components/01-Header.svelte";
	import MAIN from "./components/02-Main.svelte";
	import FOOTER from "./components/03-Footer.svelte";
	import CHAT from "./components/04-Chat.svelte";
	import SCROLLTOP from "./components/05-ScrollTop.svelte";
	import CALL from "./components/06-Sticker.svelte";
	import MODAL from "./components/07-Modal.svelte";
	// import MODAL2 from "./components/08-Modal2.svelte";
	// import CARDDOBLE from "./components/0-jcc/carddoble.svelte";
	// import CARD from "./components/0-jcc/card.svelte";

	let principalClass =
		"flex flex-col justify-between h-screen mx-auto bg-yellow-500";
</script>

<div id="principal" class:principalClass>
	<MODAL />
	<!-- 	<MENU /> -->
	<HEADER />
	<MAIN />
	<FOOTER />
	<CHAT />
	<SCROLLTOP />
	<CALL />
</div>
