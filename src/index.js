import {maketodo} from "/src/functions/maketodo.js";
import {changingcompletion} from "/src/functions/changingcompletion.js";
import {changingpriority} from "/src/functions/changingpriority.js";
import {toggleonoff} from "/src/functions/toggleonoff.js";

const button = document.getElementById("button");
const left = document.getElementById("left");
const right = document.getElementById("right");
const buttonleft = document.getElementById("buttonleft");
button.addEventListener("click", ()=>{
    const topic = prompt("topic");
    const description = prompt("description");
    const date = prompt("date");
    const priority = prompt("priority");
    const deletel = document.createElement("button");
    const object1 = new maketodo(topic, description, date, priority);
    const object1div = document.createElement("div");
    let currentproject = document.querySelector(".active");
    object1div.append(object1);
    object1div.append(deletel);
    currentproject.append(object1div);
    deletel.addEventListener("click", ()=>{
        object1div.remove();        
    })
})
buttonleft.addEventListener("click",()=>{
    const tempclass = document.createElement("div");
    const clone = tempclass.cloneNode(true);
    let name = prompt("name");
    if(name!= null)
    {
        tempclass.innerText = name;
        const deletel = document.createElement("button");
        tempclass.append(deletel);
        left.append(tempclass);
        right.append(clone);
        deletel.addEventListener("click", ()=>{
            if(clone != null){
                clone.remove();
                tempclass.remove();
                const defaultp = document.querySelector(".default");
                defaultp.classList.add("active");
            }
        }) 
        tempclass.addEventListener("click", ()=> {
            let alreadyactive = document.querySelector(".active");
            if(alreadyactive != null){
                alreadyactive.classList.remove("active");
                toggleonoff(clone, alreadyactive);
            }
            clone.classList.add("active");
        })
    }
})