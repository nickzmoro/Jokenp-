// Selecionando elementos do DOM
const rock = document.querySelector("button#rock");
const paper = document.querySelector("button#paper");
const scissors = document.querySelector("button#scissors");
const result = document.querySelector("#result");

const endGameContent = document.querySelector(".container-end");
const mask = document.querySelector(".mask");
const showResult = document.querySelector(".showResult");
const showScoreboard = document.querySelector(".showScoreboard");
const returnGame = document.querySelector("#return-game");

let myScore = document.querySelector(".my-point");
myScore.value = 0;

let computerScore = document.querySelector(".your-point");
computerScore.value = 0;

// Opções possíveis
const values = [rock, paper, scissors]

// Função para gerar a escolha do computador
function computerChoice() {
    const sorteio = Math.floor(Math.random() * values.length);
    return values[sorteio];
}

// Função para gerar a escolha do player
function playerChoice() {
    const sorteio = Math.floor(Math.random() * values.length);
    return values[sorteio];
}

// Função para determinar o vencedor
function determinateWinner(player, computer) {
    computer = computerChoice();
    player = playerChoice();

    if (player === computer) {
        result.innerHTML = "Empate.."
    } else if (
        (player === rock && computer === scissors) ||
        (player === paper && computer === rock) ||
        (player === scissors && computer == paper)
    ) {
        result.innerHTML = "Você GANHOU essa!"
        myScore.value += 1;
        myScore.innerHTML = myScore.value
    } else {
        result.innerHTML = "Você PERDEU essa.."
        computerScore.value += 1;
        computerScore.innerHTML = computerScore.value
    }

}

// Função para resetar os pontos
function reset() {
    myScore.value = 0;
    myScore.innerHTML = myScore.value

    computerScore.value = 0;
    computerScore.innerHTML = computerScore.value
}

// Função para finalizar o jogo
function endGame() {
    endGameContent.style.visibility = "visible";
    endGameContent.style.opacity = "1";

    mask.style.visibility = "visible";
    mask.style.opacity = "1";

    if (myScore.value > computerScore.value) {
        showResult.innerHTML = "Você ganhou! 👏"
    } else if (myScore.value === computerScore.value) {
        showResult.innerHTML = "Deu empate! 🤝"
    } else {
        showResult.innerHTML = "Você perdeu! 😓"
    }

    showScoreboard.innerHTML = `${myScore.value} (você) x ${computerScore.value} (computador)`
}

// Função para voltar ao jogo após finalizá-lo
function returningGame() {
    endGameContent.style.visibility = "hidden";
    endGameContent.style.opacity = "0";

    mask.style.visibility = "hidden";
    mask.style.opacity = "0";

    reset()
}

// Adicionando eventos de clique para cada botão
rock.addEventListener("click", () => playerChoice("rock"))
paper.addEventListener("click", () => playerChoice("paper"))
scissors.addEventListener("click", () => playerChoice("scissors"))