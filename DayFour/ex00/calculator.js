function dooperation() {
    var l_input = document.querySelector(".left");
    var r_input = document.querySelector(".right");
    var op_input = document.querySelector("#op");
    var box = document.querySelector(".result");
    var left = (l_input === null || l_input === void 0 ? void 0 : l_input.value) === "" ? Math.floor(Math.random() * 1000) : Number(l_input === null || l_input === void 0 ? void 0 : l_input.value);
    var right = (r_input === null || r_input === void 0 ? void 0 : r_input.value) === "" ? Math.floor(Math.random() * 1000) : Number(r_input === null || r_input === void 0 ? void 0 : r_input.value);
    var op = op_input === null || op_input === void 0 ? void 0 : op_input.value;
    if (isNaN(left) || isNaN(right))
        alert("hey input some number pls");
    else {
        if (op == "+" && box) {
            box.innerHTML = String(left + right);
            console.log(left + right);
        }
        if (op == "-" && box) {
            box.innerHTML = String(left - right);
            console.log(left - right);
        }
        if (op == "*" && box) {
            box.innerHTML = String(left * right);
            console.log(left * right);
        }
        if (op == "/" && box) {
            if (left == 0 || right == 0) {
                var video = document.querySelector("#video");
                video.style.visibility = "visible";
                var video2 = document.querySelector("#video");
                video2.src = "https://www.youtube.com/embed/T2U07KFqmew?&autoplay=1&mute=1";
            }
            box.innerHTML = String(left / right);
            console.log(left / right);
        }
    }
}
