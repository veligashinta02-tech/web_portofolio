// =============================
// NAVBAR ACTIVE LINK
// =============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// =============================
// HEADER SHADOW SAAT SCROLL
// =============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
  ".section-title, .biodata-card, .timeline-item, .skill-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

// =============================
// TYPEWRITER TEXT
// =============================

const typeText = document.querySelector(".hero-content h1 span");

const names = [
  "Veliga Shinta Fezia",
  "Mahasiswa Informatika",
  "Creative Learner",
];

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!typeText) return;

  const currentText = names[nameIndex];

  if (isDeleting) {
    typeText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    nameIndex = (nameIndex + 1) % names.length;
    typingSpeed = 400;
  }

  setTimeout(typeWriter, typingSpeed);
}

typeWriter();

// =============================
// BUTTON SCROLL SMOOTH
// =============================

const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

allAnchorLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// =============================
// CURRENT YEAR FOOTER
// =============================

const footerText = document.querySelector(".footer p");

if (footerText) {
  const year = new Date().getFullYear();
  footerText.innerHTML = `© ${year} Veliga Shinta Fezia. All Rights Reserved.`;
}