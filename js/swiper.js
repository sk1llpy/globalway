const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const swiperLines = document.querySelector('.swiper-lines');

let currentIndex = 1;
let slidesCount = slides.length;

for (let i = 0; i < slidesCount; i++) {
    let element = document.createElement("button");
    let icon = document.createElement("i");

    element.classList.add("swiper-line-button");

    if (currentIndex === i) {
        element.classList.add("active");;
    }

    icon.classList.toggle("ph");
    icon.classList.add("ph-minus");

    element.append(icon);
    swiperLines.append(element);
}

const swiperLineButtons = document.querySelectorAll('.swiper-line-button');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');

        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    swiperLineButtons.forEach((button, index) => {
        button.classList.remove('active');

        if (index === currentIndex) {
            button.classList.add('active');
        }
    });

    let offset_percent = 0;

    if (window.innerWidth > 1024){
        offset_percent = 40;
    } else if (window.innerWidth > 960) {
        offset_percent = 60;
    } else if (window.innerWidth > 860) {
        offset_percent = 70;
    } else if (window.innerWidth > 760) {
        offset_percent = 75;
    } else if (window.innerWidth > 660) {
        offset_percent = 85;
    } else if (window.innerWidth > 560) {
        offset_percent = 95;
    } else if (window.innerWidth < 560) {
        offset_percent = 105;
    }

    const offset = -(currentIndex - 1) * offset_percent;
    swiperWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

updateSlider();