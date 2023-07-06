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
		clone.remove();
	});