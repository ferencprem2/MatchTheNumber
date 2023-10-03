let gameHeight = document.getElementById("gameHeight")
let generateButtton = document.getElementById("generateButton")

gameHeight.addEventListener("input", () => {
    const container = document.querySelector(".gamePlace")
    container.innerHTML = ""
    const n = gameHeight.value
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    console.log(n)
    let numbers = []
    for (let i = 1; i < n * n / 2; i++) {
        numbers.push(i)   
        numbers.push(i)   
    }

    function CorrectNumber(value) {
        return value
    }
    for (let i = 0; i < n * n; i++){
        const tiles = document.createElement("div");
        tiles.classList.add('tiles');
        tiles.addEventListener("click", () => {
            if (tiles.className == "tiles") {
                tiles.classList.remove("tiles")
                tiles.classList.add("clicked")
                const number = document.createElement("p")
                let randomNumber = Math.floor(Math.random() * numbers.length + 1)
                number.innerText = numbers[randomNumber]
                numbers.pop(randomNumber)
                // count ? ((count = numbers.filter(x => x == randomNumber).length >= 2), number.innerText = randomNumber) : 
                tiles.appendChild(number)
            } else {
                tiles.classList.remove("clicked")
                tiles.classList.add("tiles")
                // tiles.removeChild("p")
                tiles.innerHTML = ""
            }
            
        })
        container.appendChild(tiles)
    }
})