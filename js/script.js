let order = []
let clickedOrder = []
let score = 0

// * 0 = VERDE
// ! 1 = VERMELHO
// 2 = AMARELO
//? 3 = AZUL

const blue = document.querySelector(".blue")
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow")

// ORDEM ALEATÓRIA

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

// ACENDE A COR

let lightColor = (element, number) =>{
    number = number * 500
    setTimeout(() =>{
        element.classList.add("selected")
    }, number -250)
    setTimeout(() =>{
        element.classlist.remove("selected")
    })
}

//CHECA OS BOTÕES CLICADOS COM A ORDEM

let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próxima fase!`)
        nextLevel()
    }
}

//FUNÇÃO PARA O CLIQUE DO USUÁRIO

let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add("selected")
    setTimeout(() => {
        creatColorElement(color).classList.remove("selected")
        checkOrder()
    }, 250)
}

//FUNÇÃO QUE RETORNA AS CORES

let creatColorElement = () =>{
    if(color == 0){
        return green
    } else if(color == 1){
        return red
    } else if(color == 2){
        return yellow
    } else if(color == 3){
        return blue
    }
}

//FUNÇÃO PARA PRÓXIMO NÍVEL

let nextLevel = () => {
    score++;
    shuffleOrder()
}

//FUNÇÃO PARA GAME OVER

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK para recomeçar o jogo!`)
    order = []
    clickedOrder = []
    playGame()
}

//FUNÇÃO PARA INICIAR O JOGO

let playGame = () =>{
    alert("Bem vindo ao Genius! Iniciando novo jogo!")
    score = 0
    nextLevel()
}

//FUNÇÃO PARA MAPEAR OS CLIQUES

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()