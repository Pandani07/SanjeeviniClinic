const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

var menuButton = document.getElementById("menuButton");

var animation = lottie.loadAnimation({
    container: document.getElementById("menuIcon"),
    rendered: 'svg',
    loop: false,
    autoplay: true,
    path: 'menuV3.json',
})
var menuOpen = false;

menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        animation.setDirection(1);
        menuOpen = false;
    } else {
        animation.setDirection(-1);
        menuOpen = true
    }
})



