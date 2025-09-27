
const hero = document.querySelector(".hero")
const imageContainers = document.querySelectorAll(".image-container") 
const imagesRight = document.querySelector(".images-right") 
const imagesLeft = document.querySelector(".images-left") 
const registration = document.querySelector('.registration')
const mainContent = document.querySelector(".main-content")
const registrationDetails = document.querySelector(".registrationDetails")
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
      }, 0);
    }, 0);
  });
 

  btn.addEventListener('click',()=>{
   
    imageContainers.forEach(container => {
      container.classList.add('hide')
      container.classList.add('moveAside')
    });
    
  registration.classList.add("registrationShow");
  mainContent.classList.add('contentAside');
  
  // Hide the register button smoothly
  btn.style.opacity = '0';
  btn.style.visibility = 'hidden';
  registrationDetails.classList.add('registrationDetailsShow');

  })

// Function to hide registration form
function hideRegistration() {
  registration.classList.remove("registrationShow");
  mainContent.classList.remove('contentAside');
  registrationDetails.classList.remove('registrationDetailsShow');
  
  // Show image containers again
  imageContainers.forEach(container => {
    container.classList.remove('hide')
    container.classList.remove('moveAside')
  });
  
  // Show the register button smoothly
  btn.style.opacity = '1';
  btn.style.visibility = 'visible';
}
