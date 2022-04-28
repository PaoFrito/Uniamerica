ShowPrompt = () =>{
    clock = 300
    document.getElementById("result").innerHTML = ""
    for(let i = 0; i < 10; i++){
        setTimeout(()=>{
            document.getElementById("result").innerHTML += `${i+1} `
        }, clock)

        clock += 200    
    }
}