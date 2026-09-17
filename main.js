const show = document.getElementById("show");
const hidden = document.getElementById("hide");
const text = document.getElementById("text");
const score = document.getElementById("score");
const timer = document.getElementById("timer");

let picture = "vojta.jpg";
let points = 0;
let teleport;

let gameTimer;
let startTime = 0;

const randomPosition = (catchPic) => {
    const maxX = window.innerWidth - catchPic.offsetWidth;
    const maxY = window.innerHeight - catchPic.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    catchPic.style.left = `${randomX}px`;
    catchPic.style.top = `${randomY}px`;
};

const startTimer = () => {
    clearInterval(gameTimer);

    startTime = Date.now();

    timer.innerHTML = "Čas: 0.0 s";

    gameTimer = setInterval(() => {
        const time = (Date.now() - startTime) / 1000;

        timer.innerHTML = `Čas: ${time.toFixed(1)} s`;
    }, 100);
};

show.onclick = () => {
    clearInterval(teleport);
    clearInterval(gameTimer);

    points = 0;
    score.innerHTML = "Skore: 0/20";

    text.innerHTML = `
        <button id="catchPic">
            <img src="${picture}">
        </button>
    `;

    const catchPic = document.getElementById("catchPic");

    randomPosition(catchPic);

    startTimer();

    teleport = setInterval(() => {
        randomPosition(catchPic);
    }, 1000);

    catchPic.onclick = () => {
        points++;

        score.innerHTML = `Skore: ${points}/20`;

        randomPosition(catchPic);

        if(points === 20){
            clearInterval(teleport);
            clearInterval(gameTimer);

            const finalTime = (Date.now() - startTime) / 1000;

            text.innerHTML = "";
            score.innerHTML = "Vyhrál jsi!";
            timer.innerHTML = `Čas: ${finalTime.toFixed(1)} s`;

            points = 0;
        }
    };
};

hidden.onclick = () => {
    clearInterval(teleport);
    clearInterval(gameTimer);

    text.innerHTML = "";
    points = 0;

    score.innerHTML = "Skore: 0/20";
    timer.innerHTML = "Čas: 0.0 s";
};