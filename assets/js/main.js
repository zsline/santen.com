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
const quizBoxes = quiz.querySelectorAll('.quiz__item');
const quizItems = quiz.querySelectorAll('li');
const nextBox = document.querySelector('[data-next]');



console.dir(quizBoxes);

let ratioInt = 0;
let quizCurrent = 0;
let quizItemsCurrent = 0;

// Добавление счётчика в заголовок

function addText() {
    document.querySelector('.current').textContent = quizCurrent + ' / ' + quizItemsCurrent + ' (' + Math.round(ratioInt) + ') ';
}

// Коэффициент

function ratio() {
    ratioInt =  quizCurrent * 25 / quizItemsCurrent;
}

// Переход на следующий вопрос
function nextBoxses() {
    quizBoxes.forEach(el => {
        if(el.classList.contains('active')){
            el.classList.remove('active');
        }
    });
    for(let i = 0; i < quizBoxes.length; i++){
        if(quizBoxes[i].dataset.item == quizItemsCurrent + 1){
            console.dir(quizBoxes[i].dataset.item);
            quizBoxes[i].classList.add('active');
        }
        
    }
}

//  Счётчик индекса
function quizAddCurrent(n) {
    quizCurrent += parseInt(n);
}
// Счётчик колличества отвеченных вопросов
function itemCurrent() {
    quizBoxes.forEach(el => {
        if( el.classList.contains('active')){
            let checkItems = el.children[3].children;
            Array.from(checkItems).forEach(el =>{
                el.style.pointerEvents = 'none';
                if(el.classList.contains('btn-light')){
                    quizAddCurrent(el.dataset.value);
                    quizItemsCurrent ++;
                    console.log(quizCurrent);
                    console.log(quizItemsCurrent);
                }
            });
        }
    });
}



quizItems.forEach(el => {
    el.addEventListener('click', (e) => {
        quizItems.forEach(el => {
            el.classList.remove('btn-light');
        });
        e.target.classList.add('btn-light');
        itemCurrent()
    })
});

nextBox.addEventListener('click', (e) => {
    e.preventDefault();
    nextBoxses();
    addText();
    ratio();
});

