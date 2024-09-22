document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.display = 'none';
});
