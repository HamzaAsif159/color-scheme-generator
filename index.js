const seedColor = document.getElementById("seed-color");
const getSchemeBtn = document.getElementById("get-scheme");
const colorMode = document.getElementById("mode");
const colorPalletes = document.querySelectorAll('.pallete');
const codes= document.querySelectorAll('.color-codes');

const getColorScheme = (schemeArr) => {
    schemeArr.map((schemeColor, i) => {

        colorPalletes[i].innerHTML = `
        <div class="pallete" style='background-color:${schemeColor.hex.value}'></div>
        <div class="color-codes flex">
        <div>${schemeColor.hex.value}</div> 
        `
    })

}

function sendColor(){
    const colorPicker = seedColor.value.replace("#", '');
    const modePicker = colorMode.value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${modePicker}&count=5`)
        .then(res => res.json())
        .then(data => {getColorScheme(data.colors)});
}


getSchemeBtn.addEventListener("click", sendColor);