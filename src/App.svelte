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
	import CARD from "./components/0-jcc/card.svelte";

	let principalClass =
		"flex flex-col justify-between h-screen mx-auto bg-yellow-500";
</script>

<div id="principal" class:principalClass>
	<!-- 	<MENU /> -->
	<HEADER />;
	<MAIN />
	<FOOTER />
	<CHAT />
	<SCROLLTOP />
	<CALL />
	<MODAL />

	<div class="grid grid-cols-1 gap-16
		sm:grid-cols-2 
		lg:grid-cols-3 
		xxl:grid-cols-4 
		bg-white py-20">
		<CARD />
		<CARD _class="card-border
			 bg-blue-900 border-yellow-700 text-amarillo 
			 text-justify text-tiny w-64 m-auto p-5" 
			 topic="Tema"/>
		<CARD _class="card 
			bg-purple-600 border-gray-500 text-white"
			topic="TOPIC"/>
		<CARD _class="card-black" />
		<CARD _class="card-blue" />
		<CARD _class="card-gray" />
		<CARD _class="card-green" />
		<CARD _class="card-indigo" />
		<CARD _class="card-orange" />
		<CARD _class="card-pink" />
		<CARD _class="card-purple" />
		<CARD _class="card-red" />
		<CARD _class="card-teal" />
		<CARD _class="card-transparent" />
		<CARD _class="card-white" />
		<CARD _class="card-yellow" />
	</div>
</div>
