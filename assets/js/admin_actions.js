function openForm(arg) {

    if (arg === 1){
        document.getElementById("admin").style.display = "block";
        document.getElementById("customer").style.display = "none";
        document.getElementById("product").style.display = "none";
        document.getElementById("services").style.display = "none";
    }
    if (arg === 2){
        document.getElementById("admin").style.display = "none";
        document.getElementById("customer").style.display = "block";
        document.getElementById("product").style.display = "none";
        document.getElementById("services").style.display = "none";
    }
    if (arg === 3){
        document.getElementById("admin").style.display = "none";
        document.getElementById("customer").style.display = "none";
        document.getElementById("product").style.display = "block";
        document.getElementById("services").style.display = "none";
    }
    if (arg === 4){
        document.getElementById("admin").style.display = "none";
        document.getElementById("customer").style.display = "none";
        document.getElementById("product").style.display = "none";
        document.getElementById("services").style.display = "block";
    }


}
function closeForm(arg) {

    if (arg === 1){
        document.getElementById("admin").style.display = "none";
    }
    if (arg === 2){
        document.getElementById("customer").style.display = "none";
    }
    if (arg === 3){
        document.getElementById("product").style.display = "none";
    }
    if (arg === 4){
        document.getElementById("services").style.display = "none";
    }
}

