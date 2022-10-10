var me = document.querySelector('.hamburger')
var h = document.querySelector('.mobile-links')
var c = document.querySelector(".backdrop")

function addclass() {
    if (h.style.display == "none") {
        h.style.display = "block"
    } else {
        h.style.display = "none"
    }
    

    // console.log
}

window.addEventListener("click",function(){
    if (event.target == c) {
        c.style.display = "none"
    }
})