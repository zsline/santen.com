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
const result = document.querySelector('.result');
const resultInner = document.querySelector('.quiz__result');
const quizBoxes = quiz.querySelectorAll('.quiz__item');
const quizItems = quiz.querySelectorAll('li');
const nextBox = document.querySelector('[data-next]');
const resultBox = document.querySelector('[data-result]');
const booletsBoxes = document.querySelector('.osdi__paginations');
const booletsBox = document.querySelector('.osdi__paginations--bullets');
const resIndex = document.querySelector('.result__title');
const ratioLine = document.querySelector('.result__line--ratio');

let ratioInt = 0;
let quizCurrent = 0;
let quizItemsCurrent = 0;

// Добавление булетов
function createBullets (){
    for(let i = 1; i < quizBoxes.length +1; i++){
            booletsBox.innerHTML += '<li data-item="' + i + '"></li>';
        } 
}
createBullets();

// ====================
// Окрашивание буллетов 
function fillBullets() {
    booletsBox.querySelectorAll('li').forEach(el => {
        if(el.getAttribute('data-item') <= quizItemsCurrent){
            el.classList.add('pass');
        }
    });
}

// Добавление счётчика в заголовок
function addText() {
    resIndex.firstElementChild.innerHTML = Math.round(ratioInt);
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
                }
            });
        }
    });
}
// Кнопки Далее и Результат
function resultBtn() {
    if(document.querySelectorAll('.pass').length == quizBoxes.length){
        booletsBoxes.style.display = 'none';
        document.querySelector('[data-result]').style.display = 'inline-block';
        console.log(ratioInt);
        addText();
        ratioLine.style.width = ratioInt + '%';
        result.style.display = 'block';
    }
}

// Выбор состояния
quizItems.forEach(el => {
    el.addEventListener('click', (e) => {
        quizItems.forEach(el => {
            el.classList.remove('btn-light');
        });
        e.target.classList.add('btn-light');
        itemCurrent();
    })
});

// ================== Кнопка ДАЛЕЕ ========================
nextBox.addEventListener('click', (e) => {
    e.preventDefault();
    nextBoxses();
    fillBullets();
    resultBtn();
    ratio();
});

resultBox.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
});
