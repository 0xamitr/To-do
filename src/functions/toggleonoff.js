
function toggleonoff(domelement){
    if(domelement.style.diplay == "none"){
        domelement.style.diplay == "block";
    }
    else{
        domelement.style.display = "none";
    }
}

export {toggleonoff};