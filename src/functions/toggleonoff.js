
function toggleonoff(clone, domelement){
    if (clone != domelement){
        clone.style.display = "block";
        domelement.style.display = "none";
    }
    if (domelement == null){
        clone.style.display = "block";
    }
}
export {toggleonoff};