
function form(){
    const button = document.getElementById("button");
    button.style.display = "none";
    const form = document.getElementById("form");
    form.style.display = "flex";

    const left = document.getElementById("left");
    const right = document.getElementById("right");
    left.setAttribute("style", "filter: blur(5px)");
    right.setAttribute("style", "filter: blur(5px)");
}

export{form};