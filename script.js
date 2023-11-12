const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
  gsap.to(crsr, {
    x: dets.x - 10,
    y: dets.y - 10,
    duration: 0.2,
    ease: "power2.out",
  });

  gsap.to(blur, {
    x: dets.x - 200,
    y: dets.y - 200,
    duration: 1.2,
    ease: "power2.out",
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