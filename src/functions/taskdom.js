import {maketodo} from "/src/functions/maketodo.js";

function taskdom(zero, one, two, three, w){
    const object1 = new maketodo(zero, one, two, three);
        const deletel = document.createElement("button");
        const object1div = document.createElement("div");
        let currentproject = document.querySelector(".active");
        const topics = document.createElement("p");
        topics.textContent = object1.topic;
        object1div.append(topics);

        const descriptions = document.createElement("p");
        descriptions.textContent = object1.description;
        object1div.append(descriptions);

        const dates = document.createElement("p");
        if(w == "0"){
            dates.setAttribute("class", "date");
        }
        dates.textContent = object1.date;
        object1div.append(dates);

        const prioritys = document.createElement("p");
        prioritys.textContent = object1.priority;
        object1div.append(prioritys);
        deletel.innerHTML = "&times;";
        object1div.append(deletel);
        currentproject.append(object1div);
        deletel.addEventListener("click", ()=>{
            object1div.remove();        
        });
}

export {taskdom};