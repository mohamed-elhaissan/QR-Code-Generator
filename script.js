const inputext = document.querySelector("input");
const img = document.querySelector("img");
const button = document.querySelector("button");
const downloadButton = document.getElementById("btn")
var api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
img.style.display = 'none'
button.onclick =  () =>{
    if (inputext.value) {
        var data = inputext.value;
        img.src = api + data;
        img.style.display = 'block';
    }
    else {
        img.style.display = 'none'
    }
}

