window.addEventListener("load", () => {
    keffect("load")
})

document.addEventListener('scroll', () => {
    keffect("scroll")
})

function keffect(keCond) {
    var keElements = document.querySelectorAll("*[keffect]")

    keElements.forEach((el) => {
        var delay = 0
        var keType = el.getAttribute("keffect")
        if (el.getAttribute("delay") != null) {
            delay = el.getAttribute("delay")
        }
        if ((el.getAttribute("loop") == null) && (keCond == "load")) {
            if (el.offsetTop < window.innerHeight) {
                setTimeout(() => {
                    el.classList.add(keType)
                    el.setAttribute("loop", "off")
                }, delay);
            }
        } else if ((el.getAttribute("loop") == null) && (keCond == "scroll")) {
            if (el.offsetTop < window.scrollY + window.innerHeight / 1.3) {
                setTimeout(() => {
                    el.classList.add(keType)
                    el.setAttribute("loop", "off")
                }, delay);
            }
        }
    })
}