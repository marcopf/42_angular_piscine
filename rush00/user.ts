let userName = document.querySelector(".name") as HTMLHeadingElement;
let post = document.querySelector(".post") as HTMLSpanElement;
let follower = document.querySelector(".follower") as HTMLSpanElement;
let following = document.querySelector(".following") as HTMLSpanElement;
let posts = document.querySelector(".posts") as HTMLDivElement;
let modalImg = document.querySelector(".modalImg") as HTMLImageElement;
let modal = document.getElementById("myModal") as HTMLDivElement;
let postNumber = Math.ceil(Math.random() * 1000);

async function getUser() {
	const response = await fetch("https://randomuser.me/api/");
	const user = await response.json();
	userName.innerHTML = user.results[0].name.first + "_" + user.results[0].name.last
	post.innerHTML = String(postNumber);
	follower.innerHTML = String(Math.ceil(Math.random() * 1000));
	following.innerHTML = String(Math.ceil(Math.random() * 1000));
	while (postNumber--)
	{
		let newEl = document.createElement("img");
		let newDiv = document.createElement("div");
		const img = await fetch("https://random.imagecdn.app/500/500");
		newEl.src = img.url;
		newEl.classList.add("randomImg");
		newDiv.appendChild(newEl);
		newDiv.classList.add("postDiv")
		posts.appendChild(newDiv);
		newEl.addEventListener("click", (e)=>{
			let imgSrc = e.target as HTMLImageElement
			modalImg.src = imgSrc.src;
			modal.style.display = "flex";
		})
		newDiv.addEventListener("mouseenter", (e)=>{
			let h1Fill = document.createElement("h1");
			h1Fill.innerHTML = "💬" + String(Math.ceil(Math.random() * 1000)) + "❤️" + String(Math.ceil(Math.random() * 1000));
			let toAppend = e.target as HTMLDivElement;
			console.log(toAppend)
			toAppend.appendChild(h1Fill);
		})
		newDiv.addEventListener("mouseleave", (e)=>{
			let el = e.target as HTMLHeadingElement;
			let toRemove = el.querySelector("h1");
			toRemove?.remove();
		})
	}
}

window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
}
getUser()