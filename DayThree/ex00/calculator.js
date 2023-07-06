function check(num)
{
	if (num < 0 || isNaN(num))
		return (1);
	return 0;
}

let flag = 0;

function doop()
{
	let left = Number(document.querySelector(".left").value);
	let right = Number(document.querySelector(".right").value);
	let op = document.querySelector("#op").value;
	let box = document.querySelector(".result");
	if (check(left) || check(right))
		alert("input must be positive integer no negative number or letter is allowed here!!!")
	else
	{
		if (op == "+")
		{
			box.innerHTML = left + right;
			console.log(left + right);
		}
		if (op == "-")
		{
			box.innerHTML = left - right;
			console.log(left - right);
		}
		if (op == "*")
		{
			box.innerHTML = left * right;
			console.log(left * right);
		}
		if (op == "/")
		{
			if (left == 0 || right == 0)
			{
				document.querySelector("#video").style.visibility = "visible";
				flag = 1;
				document.querySelector("#video").src = "https://www.youtube.com/embed/T2U07KFqmew?&autoplay=1&mute=1";
			}
			box.innerHTML = left / right;
			console.log(left / right);
		}	
	}
}

let temp = setInterval(function(){
	alert("please use me");
}, 30000);