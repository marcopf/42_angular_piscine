let arr = {
    username:false,
    email:false,
    phone:false,
    password:false
}

function check_string(str, len)
{
    for(let i = 0; i < len; i++)
    {
        if (!/^[a-z]$/i.test(str[i]))
            return (1)
    }
    return (0);
}

function letter_check() {
    let letter = document.querySelector("#string") as HTMLInputElement;
    let lenght = document.querySelector(".lenght") as HTMLHeadingElement;
    let letter_val = letter?.value;
    if (lenght)
    {
        let string_icon = document.querySelector(".is_blank_ok") as HTMLSpanElement | null;
        lenght.innerHTML = String(letter_val === null || letter_val === void 0 ? void 0 : letter_val.length);
        if (letter_val.length == 0)
		{
            if (string_icon)
                string_icon.innerHTML = "❌";
		}
        else
        {
            if (string_icon)
                string_icon.innerHTML = "✅";
        }
        let letter_icon = document.querySelector(".is_ok") as HTMLSpanElement | null;
        if (check_string(letter_val, letter_val.length))
        {
            if (letter_icon)
                letter_icon.innerHTML = "❌";
        }
        else
        {
            if (letter_icon)
                letter_icon.innerHTML = "✅";         
        }

    }
}


function float_check()
{
    let letter = document.querySelector("#floating") as HTMLInputElement;
    let float_icon = document.querySelector(".floating_icon") as HTMLSpanElement
    let letter_val = letter?.value;
    if (Number.isInteger(Number(letter_val)) || isNaN(Number(letter_val)))
    float_icon.innerHTML = "❌";
    else
    float_icon.innerHTML = "✅";
}

function letter_find(str, len)
{
    for (let i = 0; i < len; i++) {
        if (!/^[a-z]$/i.test(str[i]))
        {
            if (str[i] < '0' || str[i] > '9')
                return (1);
            else
                return (0);
        }
    }
    return (0);
}


function ln()
{
    let letter = document.querySelector("#letter_number") as HTMLInputElement;
    let letter_val = letter?.value;
    let ln_icon = document.querySelector(".ln_icon") as HTMLSpanElement;
    let tester = /\d/;
    let chara = /[a-zA-Z]/;
    if (tester.test(letter_val) && chara.test(letter_val) && letter && ln_icon)
        ln_icon.innerHTML = "✅";
    else
        ln_icon.innerHTML = "❌";
}

function email_check()
{
    let letter = document.querySelector("#email") as HTMLInputElement;
    let letter_val = letter?.value;
    let email_icon = document.querySelector(".email_icon") as HTMLSpanElement;

    if (letter_val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && email_icon)
        email_icon.innerHTML = "✅";
    else
        email_icon.innerHTML = "❌";
}

function phone_check()
{
    let letter = document.querySelector("#phone") as HTMLInputElement;
    let letter_val = letter?.value;
    let phone_icon = document.querySelector(".phone_icon") as HTMLSpanElement;
    if (letter_val.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/) && phone_icon)
    {
        phone_icon.innerHTML = "✅";
    }
    else
        phone_icon.innerHTML = "❌";
}

function valDate(date) {
    // Matching the date through regular expression      
        let operator = date.split('-');

        // Extract the string into month, date and year      
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('-');
        }
        let year = parseInt(datepart[0]);
        let month = parseInt(datepart[1]);
        let day = parseInt(datepart[2]);

        // Create a list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range
                console.log("Invalid date")     
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) {
                console.log("Invalid date")
                return false;
            }
            else
                if ((leapYear == true) && (day > 29)) {
                    console.log('Invalid date format!');
                    return false;
                }
        }
    return true;
}

function date_check()
{
    let letter = document.querySelector("#date") as HTMLInputElement;
    let letter_val = letter?.value;
    let date_icon = document.querySelector(".date_icon") as HTMLSpanElement;
    if (valDate(letter_val) && date_icon)
        date_icon.innerHTML = "✅";
    else
        date_icon.innerHTML = "❌";
}

function validate_password(str)
{
    let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    let capital = /[QWERTYUIOPASDFGHJKLZXCVBNM]/;
    let number = /[1234567890]/
    if (!specialChars.test(str) || !capital.test(str) || !number.test(str))
       return (false);
    return (true);
}

function password_check()
{
    let letter = document.querySelector("#password") as HTMLInputElement;
    let letter_val = letter?.value;
    let password_icon = document.querySelector(".password_icon") as HTMLSpanElement;
    if (validate_password(letter_val))
        password_icon.innerHTML = "✅";
    else
        password_icon.innerHTML = "❌";
}

function ip_check()
{
    let ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    let letter = document.querySelector("#ip") as HTMLInputElement;
    let letter_val = letter?.value;
    let ip_icon = document.querySelector(".ip_icon") as HTMLSpanElement;
    if (ip.test(letter_val) && ip_icon)
        ip_icon.innerHTML = "✅";
    else
        ip_icon.innerHTML = "❌";
}

function number_check()
{
    let letter = document.querySelector("#number") as HTMLInputElement;
    let letter_val = letter?.value;
    let number_icon = document.querySelector(".number_icon") as HTMLSpanElement;
    let number = /^\d+$/
    if (number.test(letter_val) && number_icon)
        number_icon.innerHTML = "✅";
    else
        number_icon.innerHTML = "❌";

}

//-------------------------------

let letter = document.querySelector("#letter_number") as HTMLInputElement;
letter.addEventListener("keyup", ()=>{
    let ln_icon = document.querySelector(".ln_icon") as HTMLSpanElement;
    let letter_val = letter?.value;
    let tester = /\d/;
    let chara = /[a-zA-Z]/;
    if (tester.test(letter_val) && chara.test(letter_val))
    {
        arr.username = true;
        letter.style.outline = "none";
    }
    else
    {
        arr.username = false;
        letter.style.outline = "2px solid red";
        letter.style.borderRadius = "5px";
    }
})

let email = document.querySelector("#email") as HTMLInputElement;
email.addEventListener("keyup", ()=>{
    let letter_val = email?.value;
    let email_icon = document.querySelector(".email_icon") as HTMLSpanElement;
    
    if (letter_val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        arr.email = true;
        email.style.outline = "none";
    }
    else
    {
        arr.email = false;
        email.style.outline = "2px solid red";
        email.style.borderRadius = "5px";
    }
})

let phone = document.querySelector("#phone") as HTMLInputElement;
phone.addEventListener("keyup", ()=>{
    let letter_val = phone?.value;
    let phone_icon = document.querySelector(".phone_icon") as HTMLSpanElement;
    if (letter_val.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/))
    {
        arr.phone = true;
        phone.style.outline = "none";
    }
    else
    {
        arr.phone = false;
        phone.style.outline = "2px solid red";
        phone.style.borderRadius = "5px";
    }
})

let pass = document.querySelector("#password") as HTMLInputElement;
pass.addEventListener("keyup", ()=>{
    let letter_val = pass?.value;
    let password_icon = document.querySelector(".password_icon") as HTMLSpanElement;
    if (validate_password(letter_val))
    {
        arr.password = true;
        pass.style.outline = "none";
    }
    else
    {
        arr.password = false;
        pass.style.outline = "2px solid red";
        pass.style.borderRadius = "5px";
    }
})



window.addEventListener("submit", (event)=>{
    event.preventDefault();
    let base = window.location.href.split("/");
    let letter = document.querySelector("#letter_number") as HTMLInputElement;
    let desc = document.querySelector("#Description") as HTMLInputElement;
    let imgUrl = document.querySelector("#imgUrl") as HTMLInputElement;
    let name = document.querySelector("#name") as HTMLInputElement;
    for (let [key, value] of Object.entries(arr))
    {
        if (!value || name.value == "" || imgUrl.value == "" || desc.value == ""){
            if (value)
                alert("error valori mancanti\ncontrolla i valori inseriti!!!")
            else
                alert(key + ": error\ncontrolla i valori inseriti!!!");
            return ;
        }
    }
    window.location.replace(base[0] + "profile.html?username=" + letter.value + "&description=" + desc.value + "&imageUrl=" + imgUrl.value)
})