function openForm(arg) {

    if (arg === 1){
        document.getElementById("add_product").style.display = "block";
        document.getElementById("update_product").style.display = "none";
        document.getElementById("delete_product").style.display = "none";
        document.getElementById("consult_product").style.display = "none";
    }
    if (arg === 2){
        document.getElementById("add_product").style.display = "none";
        document.getElementById("update_product").style.display = "block";
        document.getElementById("delete_product").style.display = "none";
        document.getElementById("consult_product").style.display = "none";
    }
    if (arg === 3){
        document.getElementById("add_product").style.display = "none";
        document.getElementById("update_product").style.display = "none";
        document.getElementById("delete_product").style.display = "block";
        document.getElementById("consult_product").style.display = "none";
    }
    if (arg === 4){
        document.getElementById("add_product").style.display = "none";
        document.getElementById("update_product").style.display = "none";
        document.getElementById("delete_product").style.display = "none";
        document.getElementById("consult_product").style.display = "block";
    }


}
function closeForm(arg) {

    if (arg === 1){
        document.getElementById("add_product").style.display = "none";
    }
    if (arg === 2){
        document.getElementById("update_product").style.display = "none";
    }
    if (arg === 3){
        document.getElementById("delete_product").style.display = "none";
    }
    if (arg === 4){
        document.getElementById("consult_product").style.display = "none";
    }
}

