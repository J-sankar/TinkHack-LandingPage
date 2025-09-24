

const btn = document.querySelector(".btn")

  window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      const contents = document.querySelector(".contents");

      preloader.style.opacity = "0";

      setTimeout(() => {
        preloader.style.display = "none";
        contents.classList.add("show");

        // ✅ Safe to use AOS now
        AOS.init({
          duration: 1000,
          easing: "ease-out",
          once: false
        });

        AOS.refresh();
      }, 1000);
    }, 3000);
  });
