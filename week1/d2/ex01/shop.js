let data = [
	{
		"image": "https://m.media-amazon.com/images/I/61j3SEUjMJL._AC_SX679_.jpg",
		"title": "Echo Dot",
		"description": "Il nostro Echo Dot con il migliore audio di sempre",
		"category": "Audio",
		"price": "64,99$"
	},
	{
		"image": "https://m.media-amazon.com/images/I/91KA8TMeWRL.__AC_SX300_SY300_QL70_ML2_.jpg",
		"title": "pokemon violetto",
		"description": "Pokémon Scarlatto e Pokémon Violetto sono gli ultimissimi videogiochi della serie Pokémon",
		"category": "Videogiochi",
		"price": "49,50$"
	}
	,
	{
		"image": "https://m.media-amazon.com/images/I/61xhzvDIRKL.__AC_SX300_SY300_QL70_ML2_.jpg",
		"title": "Nintendo Switch: Pro Controller",
		"description": "Take your game sessions up a notch with the Nintendo Switch Pro Controller",
		"category": "Videogiochi",
		"price": "59,39$"
	}
	,
	{
		"image": "https://m.media-amazon.com/images/I/71cQYybJC7L._AC_SX679_.jpg",
		"title": "HyperX Alloy Origins Core",
		"description": "Switch meccanici HyperX con capacità nominale di 80 milioni di sequenze di tasti",
		"category": "Pc/Computer",
		"price": "69,99$"
	}
	,
	{
		"image": "https://m.media-amazon.com/images/I/61j3SEUjMJL._AC_SX679_.jpg",
		"title": "Echo Dot",
		"description": "Il nostro Echo Dot con il migliore audio di sempre",
		"category": "Audio",
		"price": "64,99$"
	},
	{
		"image": "https://m.media-amazon.com/images/I/91KA8TMeWRL.__AC_SX300_SY300_QL70_ML2_.jpg",
		"title": "pokemon violetto",
		"description": "Pokémon Scarlatto e Pokémon Violetto sono gli ultimissimi videogiochi della serie Pokémon",
		"category": "Videogiochi",
		"price": "49,50$"
	}
	,
	{
		"image": "https://m.media-amazon.com/images/I/61xhzvDIRKL.__AC_SX300_SY300_QL70_ML2_.jpg",
		"title": "Nintendo Switch: Pro Controller",
		"description": "Take your game sessions up a notch with the Nintendo Switch Pro Controller",
		"category": "Videogiochi",
		"price": "59,39$"
	}
	,
	{
		"image": "https://m.media-amazon.com/images/I/71cQYybJC7L._AC_SX679_.jpg",
		"title": "HyperX Alloy Origins Core",
		"description": "Switch meccanici HyperX con capacità nominale di 80 milioni di sequenze di tasti",
		"category": "Pc/Computer",
		"price": "69,99$"
	}
]
let clone = document.querySelector(".card_body");
for (let i = 0; i < data.length; i++)
{
	let test = clone.cloneNode(clone);
	test.querySelector(".image img").src = data[i].image
	test.querySelector(".title h2").innerHTML = data[i].title
	test.querySelector(".description h3").innerHTML = data[i].description
	test.querySelector(".category h3").innerHTML = data[i].category
	test.querySelector(".price h3").innerHTML = data[i].price
	document.querySelector(".card_container").appendChild(test)
}
clone.remove();

fetch("store.json")
  .then(response => response.json())
  .then(data =>
	{
		let clone = document.querySelector(".card_body");
		for (let i = 0; i < data.length; i++)
		{
			let test = clone.cloneNode(clone);
			test.querySelector(".image img").src = data[i].image
			test.querySelector(".title h2").innerHTML = data[i].title
			test.querySelector(".description h3").innerHTML = data[i].description
			test.querySelector(".category h3").innerHTML = data[i].category
			test.querySelector(".price h3").innerHTML = data[i].price
			document.querySelector(".card_container").appendChild(test)
		}
	})
