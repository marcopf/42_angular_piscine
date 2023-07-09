var modal = document.querySelector(".modal");
var counter = 0;
function add_to_cart() {
    if (modal)
        modal.style.display = "flex";
}
function close_modal() {
    if (modal)
        modal.style.display = "none";
}
function add_item() {
    counter++;
    var cart_counter = document.querySelector(".cart_count");
    if (cart_counter) {
        cart_counter.innerHTML = String(counter);
        if (modal)
            modal.style.display = "none";
    }
}
var data1;
var clone = document.querySelector(".card_body");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products", true);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data1 = JSON.parse(this.responseText);
        for (var i = 0; i < data1.length; i++) {
            if (clone == null)
                continue;
            var test = clone.cloneNode(true);
            var img = test.querySelector(".image img");
            var id_prod_h1 = test.querySelector(".id_prod h1");
            var title_h3 = test.querySelector(".title h3");
            var description_h6 = test.querySelector(".description h6");
            var category_h3 = test.querySelector(".category h3");
            var price_h3 = test.querySelector(".price h3");
            var c_container = document.querySelector(".card_container");
            if (id_prod_h1 && title_h3 && description_h6 && category_h3 && price_h3 && c_container) {
                id_prod_h1.innerHTML = String(i);
                img.src = data1[i].image;
                title_h3.innerHTML = data1[i].title;
                description_h6.innerHTML = data1[i].description;
                category_h3.innerHTML = data1[i].category;
                price_h3.innerHTML = data1[i].price + "$";
                c_container === null || c_container === void 0 ? void 0 : c_container.appendChild(test);
            }
        }
    }
};
xhr.send();
if (clone)
    clone.remove();
var card_body;
var view = "card";
card_body = document.querySelector(".card_container");
function list() {
    var card_cont = document.querySelector(".card_container");
    var switcher = document.querySelector("#switcher");
    if (view == "card" && card_cont) {
        var cards = document.querySelectorAll(".card_body");
        card_cont.classList.remove("container_card");
        card_cont.classList.add("container_list");
        if (switcher)
            switcher.innerHTML = "Cards";
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.add("list");
            cards[i].classList.remove("card");
        }
        view = "list";
    }
    else {
        if (switcher)
            switcher.innerHTML = "List";
        if (card_cont) {
            card_cont.classList.add("container_card");
            card_cont.classList.remove("container_list");
        }
        var cards = document.querySelectorAll(".card_body");
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.add("card");
            cards[i].classList.remove("list");
        }
        view = "card";
    }
}
if (clone)
    clone.remove();
