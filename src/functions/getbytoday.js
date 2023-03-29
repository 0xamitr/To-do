import {taskdom} from "/src/functions/taskdom.js"


function getbytoday(){
    let classlist = document.getElementsByClassName("date");
    Array.from(classlist).forEach(element => {
        const date = new Date(element.innerHTML);
        const today = new Date();
        if (date.getFullYear() == today.getFullYear()){
            if (date.getMonth() == today.getMonth()){
                if (date.getDate() == today.getDate()){
                    const parent = element.parentNode;
                    taskdom(parent.childNodes[0].innerText, parent.childNodes[1].innerText, parent.childNodes[2].innerText, parent.childNodes[3].innerText, "1");
                }
            }
        }
    })
}

export {getbytoday};