function clone() {
    let card = document.getElementById("test");
    let clone = card.cloneNode(card);
    document.getElementById("corpo").appendChild(clone);
}

function reveal() {
    let photos = document.getElementsByClassName("img_id");
    for (let i = 0; i < photos.length; i++) {
        photos[i].src = "https://i.ytimg.com/vi/zpWYQ1YtgnI/maxresdefault.jpg"
    }
    let names = document.querySelectorAll("#name");
    for (let i = 0; i < names.length; i++) {
        names[i].innerHTML = "Sherek"
    }
}