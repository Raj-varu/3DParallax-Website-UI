const parallax_el = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach(el => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zvalue = window.innerWidth / 2 - parseFloat(getComputedStyle(el).left) * isInLeft;
    // el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zvalue * speedz}px)`;
  });
});


var birdPos = 80;
var birdInterval;

function birdMove() {
    var bird = document.getElementById("birds");
    bird.style.left = `${birdPos}%`;
    console.log(birdPos);
    birdPos -= 2;

    if (birdPos <= -10) {
        clearInterval(birdInterval);
    }
}

// Delay the initial execution of birdMove by 10 seconds after page load
setTimeout(function() {
    birdInterval = setInterval(birdMove, 200);
}, 4000);
