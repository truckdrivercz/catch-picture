const show = document.getElementById("show");
const hidden = document.getElementById("hide");
const text = document.getElementById("text");
const score = document.getElementById("score");

let picture = "vojta.jpg";
let points = 0;
let teleport;

const randomPosition = (catchPic) => {
    const maxX = window.innerWidth - catchPic.offsetWidth;
    const maxY = window.innerHeight - catchPic.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    catchPic.style.left = `${randomX}px`;
    catchPic.style.top = `${randomY}px`;
};

show.onclick = () => {
    clearInterval(teleport);

    points = 0;
    score.innerHTML = "Skore: 0/20";

    text.innerHTML = `
        <button id="catchPic">
            <img src="${picture}">
        </button>
    `;

    const catchPic = document.getElementById("catchPic");

    randomPosition(catchPic);

    teleport = setInterval(() => {
        randomPosition(catchPic);
    }, 1000);

    catchPic.onclick = () => {
        points++;

        score.innerHTML = `Skore: ${points}/20`;

        randomPosition(catchPic);

        if(points === 20){
            clearInterval(teleport);

            text.innerHTML = "";
            score.innerHTML = "Vyhrál jsi!";
            points = 0;
        }
    };
};

hidden.onclick = () => {
    clearInterval(teleport);

    text.innerHTML = "";
    points = 0;
    score.innerHTML = "Skore: 0/20";
};