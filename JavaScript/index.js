const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const jslogo1 = document.querySelector('.jslogo1');
const jslogo2 = document.querySelector('.jslogo2');
const jslogo3 = document.querySelector('.jslogo3');
const jslogo4 = document.querySelector('.jslogo4');
const boutjs1 = document.querySelector('.boutjs1');
const boutjs2 = document.querySelector('.boutjs2');
const boutjs3 = document.querySelector('.boutjs3');
const polist = document.querySelector('polist');



window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.2)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.4, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l3, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(jslogo1, 1, {opacity: 0, ease: "power2.out"}, 0.1, '-=3')
    .staggerFrom(jslogo2, 1, {opacity: 0, ease: "power2.out"}, 0.1, '-=3')
    .staggerFrom(jslogo3, 1, {opacity: 0, ease: "power2.out"}, 0.1, '-=3')
    .staggerFrom(jslogo4, 1, {opacity: 0, ease: "power2.out"}, 0.1, '-=3')
    .from(boutjs1, 1, {width: 0, ease: "power2.out"},0.4,'-=4')
    .from(boutjs2, 1, {width: 0, ease: "power2.out"},0.4,'-=4')
    .from(boutjs3, 1, {width: 0, ease: "power2.out"},0.4,'-=4')
    .staggerFrom(polist, 1, {width: 0, ease: "power2.out"},0.4,'-=1');


    TL.play();
})


