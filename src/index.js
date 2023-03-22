import {maketodo} from "/src/functions/maketodo.js";
import {changingcompletion} from "/src/functions/changingcompletion.js";
import {changingpriority} from "/src/functions/changingpriority.js";
import {toggleonoff} from "/src/functions/toggleonoff.js";

const button = document.getElementById("button");
const left = document.getElementById("left");
const right = document.getElementById("right");
const buttonleft = document.getElementById("buttonleft");                
const defaultl = document.createElement("div");
const nodel = defaultl.cloneNode(true);
const home = document.createElement("h2");
home.innerText = "HOME";
nodel.setAttribute("class", "active");
defaultl.setAttribute("class", "Default-Projects");
defaultl.append(home);
left.insertBefore(defaultl, buttonleft);
const namep1 = document.createElement("h1");
namep1.innerText = "HOME";
nodel.append(namep1);
const projecthead = document.createElement("h1");
projecthead.innerText = "Project";
left.insertBefore(projecthead, buttonleft);
right.insertBefore(nodel, button);
defaultl.addEventListener("click", ()=> {
    let alreadyactive2 = document.querySelector(".active");
    if (document.getElementById("button").style.display == "none"){
        document.getElementById("button").style.display = "block";
    }
    if(alreadyactive2 != null){
        alreadyactive2.classList.remove("active");
        toggleonoff(nodel, alreadyactive2);
    }
    else{
        nodel.style.display = "block";
    }
    nodel.classList.add("active");
    
})

//new task
button.addEventListener("click", ()=>{
    const topic = prompt("topic");
    const description = prompt("description");
    const date = prompt("date");
    const priority = prompt("priority");
    const deletel = document.createElement("button");
    const object1 = new maketodo(topic, description, date, priority);
    const object1div = document.createElement("div");
    let currentproject = document.querySelector(".active");
    console.log(object1)
    const topics = document.createElement("p");
    topics.textContent = object1.topic;
    object1div.append(topics);

    const descriptions = document.createElement("p");
    descriptions.textContent = object1.description;
    object1div.append(descriptions);

    const dates = document.createElement("p");
    dates.textContent = object1.date;
    object1div.append(dates);

    const prioritys = document.createElement("p");
    prioritys.textContent = object1.priority;
    object1div.append(prioritys);

    object1div.append(deletel);
    currentproject.append(object1div);
    deletel.addEventListener("click", ()=>{
        object1div.remove();        
    })
})

//new project
buttonleft.addEventListener("click",()=>{
    const tempclass = document.createElement("div");
    const tempdiv = document.createElement("div");
    const clone = tempclass.cloneNode(true);
    let name = prompt("name");
    if(name.length != 0)
    {
        console.log(name);
        tempclass.innerText = name;
        const deletel = document.createElement("button");
        const namep = document.createElement("h1");
        namep.innerText = name;
        tempdiv.append(tempclass);
        tempdiv.append(deletel);
        left.insertBefore(tempdiv, buttonleft);
        clone.append(namep);
        clone.style.display = "none";
        right.insertBefore(clone, button);
        //delete project
        deletel.addEventListener("click", ()=>{
            if(clone != null){
                clone.remove();
                tempdiv.remove();
            }
            const length = document.getElementsByClassName("active").length;
            console.log(length);
            if (length == 0){
                console.log("hw");
                document.getElementById("button").style.display = "none";
            };
        })
        tempclass.addEventListener("click", ()=> {
            let alreadyactive = document.querySelector(".active");
            if(alreadyactive != null){
                alreadyactive.classList.remove("active");
                toggleonoff(clone, alreadyactive);
            }
            clone.classList.add("active");
            if (document.getElementById("button").style.display == "none"){
                document.getElementById("button").style.display = "block";
            }
        })
    }

})