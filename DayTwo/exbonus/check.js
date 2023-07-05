function check_name(name) {
    let i = -1;
    while (++i < name.length) {
        if (name[i] >= '0' && name[i] <= '9')
            return 0
    }
    return (1);
}

function check_zip(name) {
    let i = -1;
    while (++i < name.length) {
        if (name[i] < '0' || name[i] > '9')
            return 0
    }
    return (1);
}

window.addEventListener("keyup", event => {
    let name = document.getElementById("name").value;
    if (!check_name(name) || name.length > 50) {
        if (name.length > 50)
            alert("name must be under 50 character");
        else
            alert("number not allowed");
        document.getElementById("name").value = "";
    }
    let surname = document.getElementById("surname").value;
    if (!check_name(surname) || surname.length > 50) {
        if (surname.length > 50)
            alert("surname must be under 50 character");
        else
            alert("number not allowed");
        document.getElementById("surname").value = "";
    }
    let zip = document.getElementById("zip").value;
    if ((zip.length != 5 && zip.length != 0) || !check_zip(zip))
        document.getElementById("zip_lab").innerHTML = "supposed to be 5 digit long";
    else
        document.getElementById("zip_lab").innerHTML = "ZIP Code: ";
    let job = document.querySelector("#job").value;
    if (job.length > 80)
        alert("job description must bel less than 80 character");
});

let form = document.querySelector("#form_id").addEventListener("submit", event => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    if (name == "")
        alert("name cannot be blank")
    let surname = document.getElementById("surname").value;
    if (surname == "")
        alert("surname cannot be blank");
    if (document.querySelector("#university").value == "University")
        alert("university is not selected!");
    if (!document.querySelector("#male").checked && !document.querySelector("#female").checked)
        alert("select your gender!");
    if (document.querySelector("#checkbox_id").checked) {

        if (document.querySelector("#job").value == "")
            alert("fill job description area pls");
    }
})

function reload()
{
    location.reload();
}