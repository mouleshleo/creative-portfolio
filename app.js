import anime from '/node_modules/animejs/lib/anime.es.js';


// anime({
//     targets: '#box',
//     translateX: window.innerWidth-250,
//     easing: 'easeInOutQuad',
//     duration: 3000,
//     loop: false,
//     direction: 'alternate',
// }); 

let name = document.getElementById("my-name");
let namemoulesh = document.querySelector(".namemoulesh");
anime ({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 14000,
    delay: function(el, i) { return i * 250},
    direction: 'alternate-reverse',
});

// ScrollReveal().reveal('.namemoulesh');




name.addEventListener('mouseover', () => {
    namemoulesh.classList.add('fill-blue-500');
});

name.addEventListener('mouseout', () => {
    namemoulesh.classList.remove('fill-blue-500');
});
