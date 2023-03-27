
function submit(){
    let name = document.getElementById("name").value;
    let desc = document.getElementById("desc").value;
    let date = document.getElementById("date").value;
    let priority = document.getElementById("priority").value;
    console.log(name, desc, date, priority);
    const button = document.getElementById("button");
    button.style.display = "block";
    const form = document.getElementById("form");
    form.style.display = "none";

    document.getElementById("name").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("date").value = "";
    document.getElementById("priority").value = "";
    left.setAttribute("style", "filter: blur(0)");
    right.setAttribute("style", "filter: blur(0)");
    const list = [name, desc, date, priority];
    return list;
}

export {submit};