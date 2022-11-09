let dom = document.getElementById("contador")

function contador(worldCup){

    let date = new Date();

    let worldTime = new Date(worldCup);

    let time = worldTime - date;

    let realTime = (time+1000)/1000

    let seconds = ("0" + Math.floor(realTime % 60)).slice(-2)
    let minutes = ("0" + Math.floor(realTime / 60 % 60)).slice(-2)
    let hours = ("0" + Math.floor(realTime / 3600 % 24)).slice(-2)
    let days = Math.floor(realTime / (3600*24))

    let string = `D: ${days} H: ${hours} M: ${minutes} S: ${seconds} `

    dom.innerHTML = `${string}`
}


setInterval(()=>{contador("Nov 20 2022")},1000)