import {taskdom} from "/src/functions/taskdom.js"

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}
function getbyweek(){
    let classlist = document.getElementsByClassName("date");
    Array.from(classlist).forEach(element => {
        const date = new Date(element.innerHTML);
        const today = new Date();
        if (date.getFullYear() == today.getFullYear()){
            console.log(getWeekNumber(date));
            console.log(getWeekNumber(today));

            if (getWeekNumber(date) == getWeekNumber(today)){
                const parent = element.parentNode;
                taskdom(parent.childNodes[0].innerText, parent.childNodes[1].innerText, parent.childNodes[2].innerText, parent.childNodes[3].innerText, "1");
            }
        }
    })
}

export {getbyweek};