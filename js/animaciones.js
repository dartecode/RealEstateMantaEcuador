const animate = document.querySelectorAll('.animacion');

function triggerAnimation(entries) {
    entries.forEach(entry => {
        const animar = entry.target.querySelector('div');
        animar.classList.toggle('unset', entry.isIntersecting);
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold : 0.25
}

const observer = new IntersectionObserver(triggerAnimation, options);

animate.forEach(anima => {
    observer.observe(anima);
});

let animado2 = document.querySelectorAll(".animacion2");

function mostrarScroll2() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado2.length; i++) {
        let alturaAnimado2 = animado2[i].offsetTop;
        if (alturaAnimado2 -400 < scrollTop) {
            animado2[i].style.opacity = 1;
            animado2[i].classList.add("mostrarDerecha")
        }
    }
}

window.addEventListener('scroll', mostrarScroll2);