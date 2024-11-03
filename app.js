let rollBtn = document.getElementById("rollBtn")
let hold = document.getElementById("hold")
let newGame = document.querySelector("#newgame")
let img = document.getElementById("img")
let player1Area = document.getElementById("player1Area")
let player2Area = document.getElementById("player2Area")
let userOneScore = document.getElementById("userOneScore")
let userTwoScore = document.getElementById("userTwoScore")
let userOneRes = document.getElementById("userOneres")
let userTwoRes = document.getElementById("userTwores")
let winner = document.getElementById("winner")
let switchPlayer = true
let score1 = 0
let score2 = 0
let totalScore1 = 0
let totalScore2 = 0

const togglePlayer = () => {
    switchPlayer = !switchPlayer;

    player1Area.style.background = switchPlayer 
        ? '#d6a2ae' 
        : '#b56c80';

    player2Area.style.background = switchPlayer 
        ? '#b56c80' 
        : '#d6a2ae';

};

rollBtn.addEventListener('click', () => {
    img.style.display = "block";
    let diceValue = Math.floor(Math.random() * 6 + 1);
    img.src = `./assets/${diceValue}.png`;

    if (diceValue === 1) {
        score1 = score2 = 0;
        userOneScore.innerHTML = score1;
        userTwoScore.innerHTML = score2;
        togglePlayer();
    } else {
        if (switchPlayer) {
            score1 += diceValue;
            userOneScore.innerHTML = score1;
        } else {
            score2 += diceValue;
            userTwoScore.innerHTML = score2;
        }
    }
});

hold.addEventListener('click', () => {
    totalScore1 += score1;
    totalScore2 += score2;
    userOneRes.innerHTML = totalScore1;
    userTwoRes.innerHTML = totalScore2;
    score1 = score2 = 0;
    userOneScore.innerHTML = score1;
    userTwoScore.innerHTML = score2;

    if (totalScore1 >= 100 || totalScore2 >= 100) {
        document.querySelector('.mainArea').style.display = 'none'
        if (totalScore1 >= 100) {
            winner.innerHTML = 'Player one is winner'
        } else if (totalScore2 >= 100) {
            winner.innerHTML = 'Player 2 is Winner'
        }
        winner.style.display = "block";
    } else {
        togglePlayer();
    }
});

newGame.addEventListener('click', () => {
    document.querySelector('.mainArea').style.display = 'flex'
    switchPlayer = false;
    togglePlayer();
    totalScore1 = totalScore2 = score1 = score2 = 0;
    userOneRes.innerHTML = totalScore1;
    userTwoRes.innerHTML = totalScore2;
    userOneScore.innerHTML = score1;
    userTwoScore.innerHTML = score2;
    winner.style.display = "none";
});
