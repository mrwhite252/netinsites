// nav animation

const openNav = document.querySelector(".nav-bar");

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".first-line", 0.3, { rotate: "45", y: 11, background: "white" });
    gsap.to(".second-line", 0.3, { x: 50, background: "white" });
    gsap.to(".third-line", 0.3, { rotate: "-45", y: -11, background: "white" });
    gsap.to("nav", 0.3, { clipPath: "circle(2500px at 100% -20%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".first-line", 0.3, { rotate: "0", y: 0, background: "black" });
    gsap.to(".second-line", 0.3, { x: 0, background: "black" });
    gsap.to(".third-line", 0.3, { rotate: "0", y: 0, background: "black" });
    gsap.to("nav", 0.3, { clipPath: "circle(50px at 100% -20%)" });
    document.body.classList.remove("hide");
  }
}

// event listeners
openNav.addEventListener("click", navToggle);

// section2 slidedown

$(document).ready(function () {
  $("#slide-btn1").click(function () {
    $("#content1").slideToggle(300);
  });

  $("#slide-btn2").click(function () {
    $("#content2").slideToggle(300);
  });
  $("#slide-btn3").click(function () {
    $("#content3").slideToggle(300);
  });
  $("#slide-btn4").click(function () {
    $("#content4").slideToggle(300);
  });
});
