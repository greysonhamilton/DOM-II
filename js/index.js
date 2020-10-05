// Your code goes here
// bubbles
document.querySelectorAll('nav a').forEach(a => {
a.addEventListener("mouseover", (e) => {
    a.style.transform = scale("2.0");
    a.style.transition = "transform 2s";
    e.stopPropagation();
    })
});

// keyCode 27 = Esc.
// bubbles
const keyPress = document.querySelector('body');
keyPress.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        keyPress.style.backgroundColor = 'blue';
    }
    
});

let scale = 1;
// bubbles
const wheel = document.getElementsByClassName("img-content");
wheel.addEventListener("wheel", (e) => {
    e.preventDefault;
    wheel.style.transform = "scale(2.0)"
    wheel.style.transition = "transform 1s";
    e.stopPropagation();
});

// no bubbles
const load = document.querySelector('footer p');
load.addEventListener('load', (e) => {
load.style.textAlign = "left";
});

// no bubbles
const focusImg = document.querySelector('section.content-destination img');
focusImg.addEventListener('focus', (e) => {
    focusImg.style.opacity = "50%";
});

// no bubbles
let i = 0;
const reSize = document.querySelector('footer');
let change = i += 1;
reSize.addEventListener('resize', (e) => {
    reSize.append(document.createElement('p').textContent = `This window has been resized ${change} times`);
});

// no bubble
const scrollOn = document.querySelector('body');
scrollOn.addEventListener('scroll', (e) => {
    scrollOn.style.backgroundColor = "lightgrey" ? "white" : "lightgrey";
});

// bubbles
const selector = document.querySelector('h1');
selector.addEventListener('select', (e) => {
    selector.textContent = "This is the fun-vee!"
    e.stopPropagation();
});

// bubbles
const dBlClick = document.querySelector("header.intro img");
dBlClick.addEventListener('dblclick', (e) => { 
    dBlClick.style.border = "5px dashed #85e085";
e.stopPropagation();
});

// drag / drop
busImg.onmousedown = function(e) {
    busImg.style.position = 'absolute';
    busImg.style.zIndex = 100;

    document.header.append(busImg);

    function moveAt(pageX, pageY) {

        busImg.style.left = pageX - busImg.offsetWidth / 2 + 'px';
        busImg.style.top = pageY - busImg.offsetHeight / 2 + 'px';

    }

    moveAt(e.pageX, e.pageY);

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }

document.addEventListener('mousemove', onMouseMove);

busImg.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    busImg.onmouseup = null;
};

};