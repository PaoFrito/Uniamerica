ShowPrompt = () =>{

    let time = [{nome: "",gols: 0},{nome: "",gols: 0}]

    for(let i = 0; i < 2; i++){
        time[i].nome = window.prompt(`Insira o nome do ${i+1}º time`)
        time[i].gols = parseInt(window.prompt(`Quantos gols o time ${time[i].nome} fez?`))
    }
    
    time[0].gols > time[1].gols ?
        document.getElementById("result").innerHTML = `O time ${time[0].nome} ganhou do time ${time[1].nome} por um placar de ${time[0].gols}x${time[1].gols}` :
        time[0].gols == time[1].gols ?
            document.getElementById("result").innerHTML = `EMPATE: ${time[0].nome} ${time[0].gols}x${time[1].gols} ${time[1].nome}` :
            document.getElementById("result").innerHTML = `O time ${time[1].nome} ganhou do time ${time[0].nome} por um placar de ${time[1].gols}x${time[0].gols}`
 }