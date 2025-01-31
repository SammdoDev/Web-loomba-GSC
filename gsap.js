window.addEventListener("load", function() {
    gsap.from(".logo", { 
      duration: 1, 
      opacity: 0, 
      y: -100
    });
    
    gsap.from(".nav-container", { 
      duration: 1, 
      opacity: 0, 
      y: -100,
      delay: 0.4
    });

    gsap.from(".nav-right", {
        duration: 1,
        opacity: 0,
        y: -100,
        delay: 0.8
    });

    gsap.from(".tagline h3", {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        ease: "power2.out",
    });

    gsap.from(".tagline p", {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        delay: 0.2,
        ease: "power2.out"
    });

    gsap.from(".card-scroll",{
        duration: 0.5,
        opacity: 0,
        scale: 0,
        x: -200,
        delay: 0.2,
        ease: "power2.out"
    });

    gsap.from(".btn-destination", {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        x: -200,
        delay: 0.8
    });
    gsap.from(".card-destination-content", {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        y: -200,
        delay: 0.8
    });
  });