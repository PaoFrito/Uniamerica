ShowPrompt = () =>{
    let notas = []
    for (let i = 0; i < 3; i++) {
        notas[i] = parseFloat(window.prompt(`Entre com a ${i}a nota do aluno:`))
    }
    document.getElementById("result").innerHTML =`A nota final é: ${((notas[0] * 2) + (notas[1] * 3) + (notas[2] * 5)) / 10}`
}   