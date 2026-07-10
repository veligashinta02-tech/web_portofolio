const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");

        hamburger.classList.remove("active");
        navMenu.classList.remove("show");
    });
});

window.addEventListener("scroll", () => {
    let currentSection = "";

    document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
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

/* ===============================
   DEMO CENTER INTERACTION
================================ */

const demoItems = document.querySelectorAll(".demo-item");
const demoCategory = document.getElementById("demoCategory");
const demoTitle = document.getElementById("demoTitle");
const demoDesc = document.getElementById("demoDesc");
const demoFeatures = document.getElementById("demoFeatures");
const openDemoBtn = document.getElementById("openDemoBtn");
const openCodeBtn = document.getElementById("openCodeBtn");

demoItems.forEach((item) => {
    item.addEventListener("click", () => {
        demoItems.forEach((demo) => demo.classList.remove("active"));
        item.classList.add("active");

        const title = item.dataset.title;
        const category = item.dataset.category;
        const desc = item.dataset.desc;
        const features = item.dataset.features.split(",");
        const demoLink = item.dataset.demo;
        const codeLink = item.dataset.code;

        demoCategory.textContent = category;
        demoTitle.textContent = title;
        demoDesc.textContent = desc;

        demoFeatures.innerHTML = "";

        features.forEach((feature) => {
            const span = document.createElement("span");
            span.textContent = feature.trim();
            demoFeatures.appendChild(span);
        });

        openDemoBtn.href = demoLink;
        openCodeBtn.href = codeLink;
    });
});     