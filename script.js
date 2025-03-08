const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpage() {
    let tl = gsap.timeline();
    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.EaseInOut,
    })
    tl.to(".boundingelem", {
        y: 0,
        duration: 2,
        ease: Expo.EaseInOut,
        stagger: 0.2,
        delay: -1
    })
    tl.from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.EaseInOut,
        delay: -1
    });
}


function circleMousefollower() {
    const minicircle = document.querySelector("#minicircle");

    if (minicircle) {
        window.addEventListener("mousemove", function (event) {
            minicircle.style.transform = `translate(${event.clientX - minicircle.offsetWidth / 2}px, ${event.clientY - minicircle.offsetHeight / 2}px)`;
        });
    } else {
        console.error("The element with id 'minicircle' was not found.");
    }
}
circleMousefollower();
firstpage();

document.querySelectorAll(".elem").forEach(function (elem) {
        let rotate = 0;
        let diffrot = 0;

        elem.addEventListener("mouseleave", function (delts) {
            gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration:0.5,

            });
        });
        elem.addEventListener("mousemove", function (delts) {
            let diff = delts.clientY - elem.getBoundingClientRect();
            diffrot = delts.clientX - rotate;
            rotate = delts.clientX;
            gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: delts.clientX,
            rotate: gsap.utils.clamp(-20 , 20 ,diffrot * 0.5),

            });
        });
        });
