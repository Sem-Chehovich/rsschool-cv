const container = document.querySelector('.container')
const burgerMenu = document.querySelector(".burger__menu ")
const img = document.querySelector(".nav__showmenu")

function showMenu(event) {
    if (event.target.classList.contains("nav__showmenu")) {
        burgerMenu.classList.add("visible")
    }
}

function closeMenu(event) {
    if (event.target.classList.contains("burger__menu")) {
        return
    } 
    if (burgerMenu.classList.contains("visible")) {
        if (event.target.classList.contains('link')){
            burgerMenu.classList.remove("visible")
        }

    }
}

img.addEventListener('click', showMenu)
container.addEventListener('click', closeMenu)