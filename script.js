const buttonDraw = document.querySelector(".draw-button")
const resultDraw = document.querySelector(".result-draw")
const divResultDraw = document.querySelector(".div-result")

function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
        return;
    }


    const result = Math.floor(Math.random() * (max - min + 1)) + min; 

    resultDraw.innerHTML = `O número sorteado é = ${result}`

    buttonDraw.style.marginTop = "45px"
    divResultDraw.style.visibility = 'visible'

 }

 buttonDraw.addEventListener("click", generateNumber)
