ShowPrompt = () =>{
    n = parseFloat(window.prompt(`Entre com qualquer valor`, 0));
    document.getElementById("result").innerHTML =`${n} ${n >= 0 ? "É POSITIVO!": "É NEGATIVO!"}`
}