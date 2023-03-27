import {changingcompletion} from "/src/functions/changingcompletion.js";
import {changingpriority} from "/src/functions/changingpriority.js";
import {toggleonoff} from "/src/functions/toggleonoff.js";
import {form} from "/src/functions/form.js";
import {submit} from "/src/functions/submit.js";
import {format} from "date-fns";
import {taskdom} from "/src/functions/taskdom.js"

const button = document.getElementById("button");
const left = document.getElementById("left");
const right = document.getElementById("right");
const buttonleft = document.getElementById("buttonleft");                
const defaultl = document.createElement("div");

const nodel = document.createElement("div");
const home = document.createElement("h2");
const today = document.createElement("h2");

home.innerText = "HOME";
today.innerText = "TODAY";

const nodetoday = document.createElement("div");
nodel.setAttribute("class", "active");
defaultl.setAttribute("class", "Default-Projects");
defaultl.append(home);
defaultl.append(today);
left.insertBefore(defaultl, buttonleft);
const namep1 = document.createElement("h1");
const namep2 = document.createElement("h1");

namep1.innerText = "HOME";
namep2.innerText = "TODAY";
nodel.append(namep1);
nodetoday.append(namep2);
nodetoday.style.display = "none";
const projecthead = document.createElement("h1");
projecthead.innerText = "Project";
left.insertBefore(projecthead, buttonleft);
right.insertBefore(nodel, button);
right.insertBefore(nodetoday, button);

home.addEventListener("click", ()=> {
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
today.addEventListener("click", ()=> {
    let alreadyactive2 = document.querySelector(".active");
    if (document.getElementById("button").style.display == "none"){
        document.getElementById("button").style.display = "block";
    }
    if(alreadyactive2 != null){
        alreadyactive2.classList.remove("active");
        toggleonoff(nodetoday, alreadyactive2);
    }
    else{
        nodetoday.style.display = "block";
    }
    nodetoday.classList.add("active");
    
})

//new task
button.addEventListener("click", ()=>{
    form();
});

const submitvar = document.getElementById("submit");
    submitvar.addEventListener("click", ()=>{
        const list = submit();
        taskdom(list[0], list[1], list[2], list[3]);
});
const inputlist = document.querySelectorAll("input");
    inputlist.forEach(function(e){
        e.addEventListener("keypress", function(event){
            if (event.key == "Enter"){
                event.preventDefault;
                const list = submit();
                taskdom(list[0], list[1], list[2], list[3]);
            };
        });
});

//new project
buttonleft.addEventListener("click",()=>{
    const tempclass = document.createElement("div");
    const tempdiv = document.createElement("div");
    const clone = tempclass.cloneNode(true);
    let name = prompt("name");
    if(name.length != 0)
    {
        console.log(name);
        const namep1 = document.createElement("h2");
        namep1.innerText = name;
        tempclass.append(namep1);
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