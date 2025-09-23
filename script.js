

  // Show preloader for 3 seconds, then fade out
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
    const contents = document.querySelector(".contents")
    contents.classList.add("show");
  }, 3000);

  AOS.init({
    duration: 1000, // animation duration in ms
    easing: 'ease-out', // easing
    once: true // animate only once while scrolling
  });

