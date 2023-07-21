var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let userName = document.querySelector(".name");
let post = document.querySelector(".post");
let follower = document.querySelector(".follower");
let following = document.querySelector(".following");
let posts = document.querySelector(".posts");
let modalImg = document.querySelector(".modalImg");
let modal = document.getElementById("myModal");
let postNumber = Math.ceil(Math.random() * 1000);
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://randomuser.me/api/");
        const user = yield response.json();
        userName.innerHTML = user.results[0].name.first + "_" + user.results[0].name.last;
        post.innerHTML = String(postNumber);
        follower.innerHTML = String(Math.ceil(Math.random() * 1000));
        following.innerHTML = String(Math.ceil(Math.random() * 1000));
        while (postNumber--) {
            let newEl = document.createElement("img");
            let newDiv = document.createElement("div");
            const img = yield fetch("https://random.imagecdn.app/500/500");
            newEl.src = img.url;
            newEl.classList.add("randomImg");
            newDiv.appendChild(newEl);
            newDiv.classList.add("postDiv");
            posts.appendChild(newDiv);
            newEl.addEventListener("click", (e) => {
                let imgSrc = e.target;
                modalImg.src = imgSrc.src;
                modal.style.display = "flex";
            });
            newDiv.addEventListener("mouseenter", (e) => {
                let h1Fill = document.createElement("h1");
                h1Fill.innerHTML = "💬" + String(Math.ceil(Math.random() * 1000)) + "❤️" + String(Math.ceil(Math.random() * 1000));
                let toAppend = e.target;
                console.log(toAppend);
                toAppend.appendChild(h1Fill);
            });
            newDiv.addEventListener("mouseleave", (e) => {
                let el = e.target;
                let toRemove = el.querySelector("h1");
                toRemove === null || toRemove === void 0 ? void 0 : toRemove.remove();
            });
        }
    });
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
getUser();
