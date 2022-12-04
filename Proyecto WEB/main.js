document.querySelector('.botón-nav').addEventListener('click', () => {
   document.querySelector('.nav-izquierda').classList.toggle('show');
});

ScrollReveal().reveal('.centro');
ScrollReveal().reveal('.animesFREE', { delay: 500 });
ScrollReveal().reveal('.Banner1', { delay: 500 });
ScrollReveal().reveal('.animesPOPULARES', { delay: 500 });
ScrollReveal().reveal('.Banner2', { delay: 500 });