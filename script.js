// ===== Selectors =====
const imageContainers = document.querySelectorAll(".image-container");
const registration = document.querySelector('.registration');
const mainContent = document.querySelector(".main-content");

const registrationDetails = document.querySelector(".registrationDetails");
const registrationForm = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const collegeInput = document.getElementById('college');
const errorMessages = document.querySelectorAll('.error');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const collegeError = document.querySelector('.collegeError');

const btnDesktop = document.querySelector(".btn");         // Desktop register button
const btnMobile = document.querySelector(".mobile-btn");   // Mobile register button

// ===== Preloader & AOS =====
window.addEventListener("load", () => {
  setTimeout(() => {  // <-- fixed here
    const preloader = document.getElementById("preloader");
    const contents = document.querySelector(".contents");
    
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
      contents.classList.add("show");
      
      // Initialize AOS
      if (AOS) {
        AOS.init({ duration: 1000, easing: "ease-out", once: false });
        AOS.refresh();
      }
    }, 1000);
  }, 3000);
});


// ===== Show Registration =====
function showRegistration() {
  imageContainers.forEach(container => {
    container.classList.add('hide', 'moveAside');
  });

  registration.classList.add("registrationShow");
  mainContent.classList.add('contentAside');
registration.scrollIntoView({ behavior: 'smooth', block: 'start' });
  registrationDetails.classList.add('registrationDetailsShow');

  // Hide both buttons
  if (btnDesktop) { btnDesktop.style.opacity = '0'; btnDesktop.style.visibility = 'hidden'; }
  if (btnMobile) { swiper.style.opacity = '0'; swiper.style.visibility = 'hidden'; }
}

// Attach click event to both buttons
if (btnDesktop) btnDesktop.addEventListener('click', showRegistration);
if (btnMobile) btnMobile.addEventListener('click', showRegistration);

// ===== Hide Registration =====
function hideRegistration() {
  registration.classList.remove("registrationShow");
  mainContent.classList.remove('contentAside');
  registrationDetails.classList.remove('registrationDetailsShow');

  errorMessages.forEach(error => error.textContent = '');

  imageContainers.forEach(container => {
    container.classList.remove('hide', 'moveAside');
  });

  if (btnDesktop) { btnDesktop.style.opacity = '1'; btnDesktop.style.visibility = 'visible'; }
  if (btnMobile) { btnMobile.style.opacity = '1'; btnMobile.style.visibility = 'visible'; }
}

// ===== Form Validation =====
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;
  errorMessages.forEach(error => error.textContent = '');

  if (!nameInput.value.trim()) { nameError.textContent = 'Name is required'; valid = false; }
  if (!emailInput.value.trim()) { emailError.textContent = 'Email is required'; valid = false; }
  else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) { emailError.textContent = 'Invalid email'; valid = false; }
  if (!collegeInput.value.trim()) { collegeError.textContent = 'College is required'; valid = false; }

  if (valid) registrationForm.submit();
});

// ===== Swiper Initialization =====
var swiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true }
});

// ===== Mobile Menu =====
function toggleMobileMenu() {
  const navLinks = document.querySelector('.links');
  navLinks.classList.toggle('show');
}

function closeMobileMenu() {
  const links = document.querySelector(".links");
  links.classList.remove("show");
}
// Navbar register link
const navRegister = document.getElementById('nav-register');
if (navRegister) {
  navRegister.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor scroll
    showRegistration();
  });
};
