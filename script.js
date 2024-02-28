
const iconMenu = document.getElementById("menu-icon");
const listUl = document.getElementById("cici");

iconMenu.addEventListener("click", function(){
    if (listUl.getAttribute("id") === "cici") {
        listUl.setAttribute("id", ""); // Menghapus ID
    } else {
        listUl.setAttribute("id", "cici"); // Menambahkan kembali ID
    }
});
