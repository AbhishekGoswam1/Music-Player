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

