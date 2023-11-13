const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
  gsap.to(crsr, {
    x: dets.x - 10,
    y: dets.y - 10,
    duration: 0.2,
    ease: "power2.out",
  });

  const h4all = document.querySelectorAll("#nav h4");

  h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(crsr, {
        scale: 3,
        border: "1px solid #fff",
        backgroundColor: "transparent",
        duration: 0.2
      });
    });
  
    elem.addEventListener("mouseleave", function () {
      gsap.to(crsr, {
        scale: 1,
        border: "0px solid #95C11E",
        backgroundColor: "#95C11E",
        duration: 0.2
      });
    });
  });
  

  gsap.to(blur, {
    x: dets.x - 200,
    y: dets.y - 200,
    duration: 1.2,
    ease: "power2 .out",
  });
});

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"80px",
    duration :1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start:"top -20%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
y:90,
opacity: 0,
duration:1,
stagger:0.4,
scrollTrigger:{
  trigger:"#about-us",
  scroller:"body",
  start:"top 60%",
  end: "top 55%",
  scrub:4
}
})
gsap.from(".card",{
scale:0.8,
opacity: 0,
duration:1,
scrollTrigger:{
  trigger:".card",
  scroller:"body",
  start:"top 60%",
  end: "top 50%",
  scrub:1
}
})