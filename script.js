function educationAnimation(){
    var elemC = document.querySelector("#elem-container")
      var fixed = document.querySelector("#fixed-image")
      elemC.addEventListener("mouseenter", function () {
          fixed.style.display = "block"         
      })
      elemC.addEventListener("mouseleave", function () {
          fixed.style.display = "none"
      })

      var elems = document.querySelectorAll(".elem")      
      elems.forEach(function (e) {
          e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("my-image")
          fixed.style.backgroundImage = `url(${image})`
    })
})
}


function swipperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      loop:true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
}


let currentScroll = 0;
let isScrollingDown = true;
let marqueeWrapper = document.querySelector(".marquee_inner");

marqueeWrapper.innerHTML += marqueeWrapper.innerHTML; 

let tween = gsap.to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear"
}).totalProgress(0.1);

gsap.set(".marquee_inner", { xPercent: -50 });

window.addEventListener("scroll", function () {
    let newScroll = window.pageYOffset;
    isScrollingDown = newScroll > currentScroll;
    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
        duration: 0.5
    });
    let arrows = marqueeWrapper.querySelectorAll(".arrow"); 

    arrows.forEach((arrow) => {
        gsap.to(arrow, {
            rotate: isScrollingDown ? 0 : 180,
            duration: 0.1,
            ease: "power2.out"
        });
    });

    currentScroll = newScroll; 
});




gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".hero h1 span").forEach(span => {
  gsap.from(span, { y: 100, opacity: 0, duration: 3, stagger: 0.1 }); // Simple animation
});
gsap.from("h1", { opacity: 0, duration: 3 });




const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Email submitted (for demonstration)');
});
  

AOS.init();

educationAnimation()
swipperAnimation()
// arrowAnimation()


