function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
// Slide ke slide berikutnya
currentSlide = (currentSlide + 1) % totalSlides;
document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Menampilkan slide pertama
showSlide();

// Set interval untuk mengganti slide setiap 5 detik
setInterval(showSlide, 5000);




