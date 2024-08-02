// ==== Menu ====

const navMenu = document.querySelector('.header nav');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

menuOpen.addEventListener('click', () => {
    navMenu.classList.add('open');
});
menuClose.addEventListener('click', () => {
    navMenu.classList.remove('open');
});
document.addEventListener('keypress', function(event) {
    if(event.keyCode == 32){
    navMenu.classList.toggle('open');
    }
});

// ============ QUIZ ====================

const quiz = document.querySelector('.quiz');
const quizItems = quiz.querySelectorAll('.quiz__item');
console.log(quizItems.length);


