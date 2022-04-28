ShowPrompt = () =>{
    n1 = parseFloat(window.prompt(`Valor 1:`, 0));
    n2 = parseFloat(window.prompt(`Valor 2:`, 0));
    document.getElementById("result").innerHTML =`${n1} é ${n1 > n2 ? "MAIOR" : "MENOR"} que ${n2}`
}