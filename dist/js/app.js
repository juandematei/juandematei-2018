function showMenu() {
    var x = document.getElementsByClassName("nav-item");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}