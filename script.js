const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// LIGHTBOX

// const galleryImages = document.querySelectorAll(".gallery img");
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
// const closeBtn = document.querySelector(".close-btn");

// galleryImages.forEach(img => {

//     img.addEventListener("click", () => {

//         lightbox.classList.add("show");
//         lightboxImg.src = img.src;

//         document.body.style.overflow = "hidden";
//     });

// });

// closeBtn.addEventListener("click", () => {

//     lightbox.classList.remove("show");

//     document.body.style.overflow = "auto";
// });

// lightbox.addEventListener("click", (e) => {

//     if(e.target === lightbox){

//         lightbox.classList.remove("show");

//         document.body.style.overflow = "auto";
//     }
// });

// galleryImages.forEach(img => {
//     img.addEventListener("click", () => {
//         lightbox.classList.add("show");
//         lightboxImg.src = img.src;
//         document.body.style.overflow = "hidden";
//     });
// });

// closeBtn.addEventListener("click", () => {
//     lightbox.classList.remove("show");
//     document.body.style.overflow = "auto";
// });

// lightbox.addEventListener("click", (e) => {
//     if(e.target === lightbox){
//         lightbox.classList.remove("show");
//         document.body.style.overflow = "auto";
//     }
// });

const previewBtns = document.querySelectorAll(".preview-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

previewBtns.forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        const image = btn.getAttribute("data-image");

        lightboxImg.src = image;

        lightbox.classList.add("active");

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});




const typingText = document.querySelector(".typing-text");

const words = ["Gleen Joy P. Embudo  "];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500; // pause
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    sec.classList.add("hidden");
    observer.observe(sec);
});
