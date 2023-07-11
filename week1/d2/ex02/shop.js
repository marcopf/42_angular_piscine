let data1 = [
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
for (let i = 0; i < data1.length; i++)
{
	let test = clone.cloneNode(clone);
	test.querySelector(".id_prod h1").innerHTML = i
	test.querySelector(".image img").src = data1[i].image
	test.querySelector(".title h3").innerHTML = data1[i].title
	test.querySelector(".description h6").innerHTML = data1[i].description
	test.querySelector(".category h3").innerHTML = data1[i].category
	test.querySelector(".price h3").innerHTML = data1[i].price + "$"
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
			test.querySelector(".id_prod h1").innerHTML = data[i].id + data1.length -1
			test.querySelector(".image img").src = data[i].image
			test.querySelector(".title h3").innerHTML = data[i].title
			test.querySelector(".description h6").innerHTML = data[i].description
			test.querySelector(".category h3").innerHTML = data[i].category
			test.querySelector(".price h3").innerHTML = data[i].price + "$"
			document.querySelector(".card_container").appendChild(test)
		}
		clone.remove();
	});
let card_body, clone2;
let view = "card";
card_body = document.querySelector(".card_container");
clone2 = card_body.cloneNode(card_body);

function list()
{
	if (view == "card")
	{
		let cards = document.querySelectorAll(".card_body");
		document.querySelector(".card_container").classList.add("container_list");
		document.querySelector(".card_container").classList.remove("container_card");
		document.querySelector("#switcher").innerHTML = "Cards";
		for (let i = 0; i < cards.length; i++)
		{
			cards[i].classList.add("list");
			cards[i].classList.remove("card");
		}
		view = "list";
	}
	else
	{
		document.querySelector("#switcher").innerHTML = "List";
		document.querySelector(".card_container").classList.remove("container_list");
		document.querySelector(".card_container").classList.add("container_card");
		let cards = document.querySelectorAll(".card_body");
		for (let i = 0; i < cards.length; i++)
		{
			cards[i].classList.add("card");
			cards[i].classList.remove("list");
		}
		// document.querySelector("body").appendChild(clone2);
		view = "card";
		// let clone = document.querySelector(".card_body");
		//clone.remove();
	}
}

clone.remove();