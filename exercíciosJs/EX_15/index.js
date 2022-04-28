ShowPrompt = () =>{
    n = []
    for(let i = 1; i < 11; i ++){
        n[i] = parseInt(window.prompt("Digite um número"))
        n[i] > 0 ? text = `É positivo!` : text = `É negativo!`
        document.getElementById(`row${i}`).innerHTML = `${n[i]} ${text}`
    }

    document.getElementById("table").style.display = "flex";
}