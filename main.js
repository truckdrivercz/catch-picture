const show = document.getElementById("show");
const hidden = document.getElementById("hide");
const text = document.getElementById("text");
const score = document.getElementById("score");

let picture = "vojta.jpg";
let points = 0;

show.onclick = () => {
    text.innerHTML = `<button id="catchPic"><img src="${picture}"></button>`;

    const catchPic = document.getElementById("catchPic");

    catchPic.onclick = () => {
        points++;
        score.innerHTML = `Skore: ${points}/50`;

        if(points == 50){
            text.innerHTML = "";
            score.innerHTML = "Vyhrál jsi!"
            points = 0;
        }
    };

};

hidden.onclick = () => {
    text.innerHTML = "";
};