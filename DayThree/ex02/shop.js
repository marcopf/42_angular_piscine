fetch("store.json")
  .then(response => response.json())
  .then(data =>
	{
		let clone = document.querySelector(".card_body");
		for (let i = 0; i < data.length; i++)
		{
			let test = clone.cloneNode(clone);
			test.querySelector(".id_prod h1").innerHTML = data[i].id
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