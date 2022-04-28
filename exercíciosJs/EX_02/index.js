ShowPrompt = () =>{
    let base = parseFloat(window.prompt("Qual o tamanho da base do retangulo?", 0))
    let altura = parseFloat(window.prompt("Qual a altura do retangulo?", 0))
    document.getElementById("result").innerHTML =`A área do retangulo de base ${base} e altura ${altura} é: ${(base * altura) / 2}`
}