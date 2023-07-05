let score = 0;

const holes = document.getElementsByClassName('hole');
const userScore = document.getElementById('score');
const gameArea = document.getElementById('hit-a-mole');

gameArea.addEventListener('click', function (clickEvent) {
    if (clickEvent.target.matches('.mole')) {
        score++;
        userScore.textContent = score; //update user score
        clickEvent.target.classList.remove('mole'); //remove mole when clicked
    }
});

function showMole() {
    for (let hole of holes) {
        hole.classList.remove('mole'); //clear any existing moles that haven't been hit
    }
    
    const randomHoleIndex = Math.floor(Math.random() * holes.length); //select a random hole
    
    holes[randomHoleIndex].classList.add('mole'); //show a mole in the selected hole
}

setInterval(showMole, 1000);