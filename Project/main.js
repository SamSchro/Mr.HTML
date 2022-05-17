//Navbar

function hideIconBar()
{
    var iconBar = document.getElementById("iconBar");
    var navigationBar = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigationBar.classList.remove("hide");
}

function showIconBar()
{
    var iconBar = document.getElementById("iconBar");
    var navigationBar = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigationBar.classList.add("hide");
}
