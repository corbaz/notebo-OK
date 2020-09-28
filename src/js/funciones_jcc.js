// .container	None	width: 100%;
// sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;

function rand(min, max) {
	/* 	src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} */
	let randomNum = Math.random() * (max - min) + min;
	return Math.round(randomNum);
}
