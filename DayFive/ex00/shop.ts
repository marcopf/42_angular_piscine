const modal = document.querySelector(".modal") as HTMLElement;
let counter = 0;
function add_to_cart() : void
{
  if (modal)
    modal.style.display = "flex";
}

function close_modal() : void
{
  if (modal)
    modal.style.display = "none";
}

function add_item():void
{
  counter++;
  let cart_counter = document.querySelector(".cart_count") as HTMLElement | null;
  if (cart_counter)
  {
    cart_counter.innerHTML = String(counter);
    if (modal)
      modal.style.display = "none";
  }
}

interface validate
{
  id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
  rating: any

}

interface validates extends Array<validate>{}

let data1 : validates;
const clone = document.querySelector(".card_body") as HTMLElement | null;

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://fakestoreapi.com/products", true);

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200){
      data1 = JSON.parse(this.responseText);
      for (let i = 0; i < data1.length; i++)
      {
        if (clone == null)
          continue;
          let test = clone.cloneNode(true) as HTMLElement;
          const img = test.querySelector(".image img") as HTMLImageElement;
          let id_prod_h1 = test.querySelector(".id_prod h1") as HTMLElement | null;
          let title_h3 = test.querySelector(".title h3") as HTMLElement | null;
          let description_h6 = test.querySelector(".description h6") as HTMLElement | null;
          let category_h3 = test.querySelector(".category h3") as HTMLElement | null;
          let price_h3 = test.querySelector(".price h3") as HTMLElement | null;
          let c_container = document.querySelector(".card_container") as HTMLElement | null;
          if (id_prod_h1 && title_h3 && description_h6 && category_h3 && price_h3 && c_container)
          {
            id_prod_h1.innerHTML = String(i);
            img.src = data1[i].image;
            title_h3.innerHTML = data1[i].title
            description_h6.innerHTML = data1[i].description;
            category_h3.innerHTML = data1[i].category;
            price_h3.innerHTML = data1[i].price + "$";
            c_container?.appendChild(test);
          }
      }
  }
}

xhr.send();
if (clone)
  clone.remove();
let card_body : Element | null
let view = "card";
card_body = document.querySelector(".card_container");

function list()
{
  const card_cont = document.querySelector(".card_container");
  const switcher =  document.querySelector("#switcher");
	if (view == "card" && card_cont)
	{
		let cards = document.querySelectorAll(".card_body");
    card_cont.classList.remove("container_card");
    card_cont.classList.add("container_list");
    if (switcher)
      switcher.innerHTML = "Cards";
		for (let i = 0; i < cards.length; i++)
		{
			cards[i].classList.add("list");
			cards[i].classList.remove("card");
		}
		view = "list";
	}
	else
	{
    if (switcher)
      switcher.innerHTML = "List";
    if (card_cont)
    {
      card_cont.classList.add("container_card");
      card_cont.classList.remove("container_list");
    }
		let cards = document.querySelectorAll(".card_body");
		for (let i = 0; i < cards.length; i++)
		{
			cards[i].classList.add("card");
			cards[i].classList.remove("list");
		}
		view = "card";
	}
}
if (clone)
  clone.remove();
