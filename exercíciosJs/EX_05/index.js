ShowPrompt = () =>{
    n = parseFloat(window.prompt(`Entre com qualquer valor`, 0));
    document.getElementById("result").innerHTML =`Este valor é ${n > 100 ? "É MAIOR QUE 100!": n < 100 ? "NÃO É MAIOR QUE 100!" : "É 100!"}`
}