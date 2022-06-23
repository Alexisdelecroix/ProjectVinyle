
function change() {
    let Image_Id = document.getElementById('rotation');
    if (Image_Id.src.match("../Images/Vinyles/marching.jpg")) {
        Image_Id.src = "../Images/Vinyles/marchingb.jpg";
    }
    else {
        Image_Id.src = "../Images/Vinyles/marching.jpg";
    }
}

function changee() {
    let Image_Id = document.getElementById('rotationn');
    if (Image_Id.src.match("../Images/Vinyles/gregrumours.jpg")) {
        Image_Id.src = "../Images/Vinyles/Gregversion.jpg";
    }
    else {
        Image_Id.src = "../Images/Vinyles/gregrumours.jpg";
    }
}

function changeee() {
    let Image_Id = document.getElementById('rotationnn');
    if (Image_Id.src.match("../Images/Vinyles/afrikaa.jpg")) {
        Image_Id.src = "../Images/Vinyles/afrikab.jpg";
    }
    else {
        Image_Id.src = "../Images/Vinyles/afrikaa.jpg";
    }
}

function changeeee() {
    let Image_Id = document.getElementById('rotationnnn');
    if (Image_Id.src.match("../Images/Vinyles/kingtubbya.jpg")) {
        Image_Id.src = "../Images/Vinyles/kingtubbyb.jpg";
    }
    else {
        Image_Id.src = "../Images/Vinyles/kingtubbya.jpg";
    }
}

function changeeeee() {
    let Image_Id = document.getElementById('rotationnnnn');
    if (Image_Id.src.match("../Images/Vinyles/rootikala.jpg")) {
        Image_Id.src = "../Images/Vinyles/rootikalb.jpg";
    }
    else {
        Image_Id.src = "../Images/Vinyles/rootikala.jpg";
    }
}

function changeeeeee() {
    let Image_Id = document.getElementById('rotationnnnnn');
    if (Image_Id.src.match("../Images/Vinyles/tattua.jpg")) {
        Image_Id.src = "../Images/Vinyles/tattub.jpg";
    }
    else {
        Image_Id.src = "../Images/Vinyles/tattua.jpg";
    }
}



const titreSpans = document.querySelector('spin');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.4)
    TL.play();
})






// function text(){
//     document.getElementsByClassName('change')[0].textContent = "Normalement mon texte devrai se changer ! ";
// }
// let elem = document.getElementsByClassName('change')[0];



