var i = 1
const letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]


function ShowPrompt(){
    setInterval(function() {
        let color = getRandomNumber()
        const div = document.createElement("div")
        div.style.color = color
        div.style.transition = "0.5s"
        div.addEventListener("mouseover", () => { 
            div.style.fontSize = "50px"
        })
        div.innerHTML = `${i} `
        document.getElementById("result").appendChild(div)
        i++
    }, 30)
}

function getRandomNumber(){
    let color = "#"
    for(let j = 0; j < 6; j++){
        color += letters[Math.floor(Math.random() * 16)] 
    }
    return color
}