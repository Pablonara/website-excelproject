document.addEventListener("DOMContentLoaded", function () {
    // const textContainer = new SplitType('#textContainer')

    // gsap.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.2,
    //     duration: .1
    // })
      // Select all spans within the .textappear class
  const textSpans = document.querySelectorAll('.textappear span');
  
  // Animate each character
  textSpans.forEach((span, index) => {
    gsap.from(span, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.1, // Stagger the animation by 0.1s for each character
      ease: "back.out(1.7)"
    });
  });
});


