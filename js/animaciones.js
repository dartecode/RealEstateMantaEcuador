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