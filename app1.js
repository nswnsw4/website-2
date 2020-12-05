window.addEventListener("scroll", function(){
    var header = document.querySelector(".nav-bar");
    header.classList.toggle("sticky",window.scrollY > 0);
});

function moveNav(){
    document.querySelector(".nav-bar").style.display = "flex";
}

function closeNav(){
    document.querySelector(".nav-bar").style.display = "none";
}

