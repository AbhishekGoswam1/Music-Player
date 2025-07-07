// Toggle sidebar menu
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.left');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});


const artistBox = document.querySelector('.artist-box');
const scrollLeftBtn = document.querySelector('.left-btn');
const scrollRightBtn = document.querySelector('.right-btn');

scrollLeftBtn.addEventListener('click', () => {
    artistBox.scrollBy({
        left: -150,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    artistBox.scrollBy({
        left: 150,
        behavior: 'smooth'
    });
});
