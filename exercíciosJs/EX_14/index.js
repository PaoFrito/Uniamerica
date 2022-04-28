ShowPrompt = () =>{
    n = parseInt(window.prompt("Digite um número"))
    row = "row"
    for(let i = 1; i < 11; i ++){
        document.getElementById(`${row}${i}`).innerHTML = `${n} x ${i} = ${n*i}`
    }

    document.getElementById("table").style.display = "flex";
}