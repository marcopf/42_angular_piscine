function dooperation() : void
{
	const l_input = document.querySelector(".left") as HTMLInputElement | null;
	const r_input = document.querySelector(".right") as HTMLInputElement | null;
	const op_input = document.querySelector("#op") as HTMLInputElement | null;
	const box = document.querySelector(".result") as HTMLElement | null;

	const left = l_input?.value === "" ? Math.floor(Math.random() * 1000) :Number(l_input?.value);
	const right = r_input?.value === "" ? Math.floor(Math.random() * 1000) :Number(r_input?.value);
	const op = op_input?.value;
	if (isNaN(left) || isNaN(right))
		alert("hey input some number pls");
	else
	{
		if (op == "+" && box)
		{
			box.innerHTML = String(left + right);
			console.log(left + right);
		}
		if (op == "-" && box)
		{
			box.innerHTML = String(left - right);
			console.log(left - right);
		}
		if (op == "*" && box)
		{
			box.innerHTML = String(left * right);
			console.log(left * right);
		}
		if (op == "/" && box)
		{
			if (left == 0 || right == 0)
			{
				const video = document.querySelector("#video") as HTMLElement
				video.style.visibility = "visible";
				const video2 = document.querySelector("#video") as HTMLIFrameElement
				video2.src = "https://www.youtube.com/embed/T2U07KFqmew?&autoplay=1&mute=1";
			}
			box.innerHTML = String(left / right);
			console.log(left / right);
		}	
	}

}