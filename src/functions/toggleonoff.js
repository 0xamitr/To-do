
function toggleonoff(clone, domelement){
    if (clone != domelement){
        clone.style.display = "block";
        domelement.style.display = "none";
    }
}
export {toggleonoff};