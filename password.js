let pass = document.getElementById("password");
let txt = document.getElementById("text");
let spn = document.getElementById("spn");
let upper = document.getElementById("upper");
let symbol = document.getElementById("symbol");
let more = document.getElementById("more");
pass.onkeyup = function () {
    if (pass.value.length > 0) {
        txt.style.display = "block";
        if (pass.value.length < 4) {
            spn.innerHTML = "weak";
            txt.style.color = "red";
            pass.style.borderColor = "red"
        }
        if (pass.value.length > 4 && pass.value.length < 6) {
            spn.innerHTML = "medium";
            txt.style.color = "plum";
            pass.style.borderColor = "plum"
        }

        if (pass.value.length >= 8) {
            spn.innerHTML = "medium";
            txt.style.color = "plum";
            more.style.color = 'yellow'
            more.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        }
        else {
            more.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
            more.style.color = 'red'
        }
        let Symbols = /[!@#$%^&*(),.?":{}|<>+/-]/.test(pass.value);//regex
        let firstCharIsUpperCase = pass.value.charAt(0) === pass.value.charAt(0).toUpperCase();
        if (Symbols && firstCharIsUpperCase) {
            spn.innerHTML = "strong";
            txt.style.color = "yellow";
            pass.style.borderColor = "yellow"
        }
        if (Symbols) {
            symbol.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
            symbol.style.color = 'yellow'
        }
        else {
            symbol.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
            symbol.style.color = 'red'
        }
        if (firstCharIsUpperCase) {
            upper.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
            upper.style.color = 'yellow'
        }
        else {
            upper.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
            upper.style.color = 'red'
        }
    }
    else {
        txt.style.display = "none";
    }
}
let eye = document.getElementById("eye");
eye.onclick = function () {
    if (pass.type == "password") {
        pass.type = "text";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
    else {
        pass.type = "password";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
};
