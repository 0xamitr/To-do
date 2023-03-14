import {maketodo} from "/src/functions/maketodo.js";
import {changingcompletion} from "/src/functions/changingcompletion.js";
import {changingpriority} from "/src/functions/changingpriority.js";

const button = document.getElementById("button");
const left = document.getElementById("left");
const right = document.getElementById("right");
const buttonleft = document.getElementById("buttonleft");
button.addEventListener("click", ()=>{
    const topic = prompt("topic");
    const description = prompt("description");
    const date = prompt("date");
    const priority = prompt("priority");

    const object1 = new maketodo(topic, description, date, priority);
    let currentproject = document.querySelector(".active");
    currentproject.append(object1);
})
buttonleft.addEventListener("click",()=>{
    const tempclass = document.createElement("div");
    const clone = tempclass.cloneNode(true);
    let name = prompt("name");
    if(name!= null)
    {
        tempclass.innerText = name;
        left.append(tempclass);
        right.append(clone);
        tempclass.addEventListener("click", ()=> {
            let alreadyactive = document.querySelector(".active");
            if(alreadyactive != null){
                alreadyactive.classList.remove("active");
            }
            clone.classList.add("active");
        })
    }
})