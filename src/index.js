import {maketodo} from "/src/functions/maketodo.js";
import {changingcompletion} from "/src/functions/changingcompletion.js";

const button = document.getElementById("button");
const project = []
let index = 0;
button.addEventListener("click", ()=>{
    const topic = prompt("topic");
    const description = prompt("description");
    const date = prompt("date");
    const priority = prompt("priority")

    const object1 = new maketodo(topic, description, date, priority);
    project.push(object1);
    console.log(project);
    index = index + 1;
})
