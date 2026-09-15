const show = document.getElementById("show");
const hidden = document.getElementById("hide");
const text = document.getElementById("text");

let picture = "vojta.jpg";

show.onclick = () => {
    text.innerHTML = `<img src=${picture}>`;
};

hidden.onclick = () => {
    text.innerHTML = "";
}