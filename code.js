document.addEventListener('DOMContentLoaded', function() {

const circle = document.querySelector('.progress-ring__circle');
const input = document.getElementById('rangeInput');
const toggle = document.getElementById('switch');
const animate = document.getElementById('animate');


if (!circle || !input || !toggle ) {
    console.error('Элемент не найден');
    return;
}

//Прогресс бар
//Получаем радиус круга
const radius = circle.r.baseVal.value;
//Вычисляем длину окружности
const circumference = 2 * Math.PI * radius;


//Добавляем стили в Progress
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

//Функция установки прогресса
function setProgress(percent) {
    const value = Number(percent);
    const offset = circumference - (value / 100 * circumference); //
    circle.style.strokeDashoffset = offset; 
}

//Функция сохранения прогресса
function saveProgress() {
    localStorage.setItem('progress', input.value);
}

//Функция загрузки прогресса
function loadProgress() {
    const progress = localStorage.getItem('progress');
    if (progress !== null) {
        input.value = progress;
        setProgress(progress);
    }
}
//Загружаем сохраненное значение при инициализации
loadProgress();


//Обрабатываем изменение input
input.addEventListener('input', function() {
    setProgress(input.value);
    saveProgress();
});


//Логика переключения видимости элемента 
function toggleProgressVisibility() {
    if (toggle.checked) {
        circle.style.display = 'none';
    } else {
        circle.style.display = 'block';
        loadProgress();
    }
}

toggle.addEventListener('change', toggleProgressVisibility);


//Логика анимации
function animateProgress() {
    const start = Date.now();
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;
        if (timePassed >= 10000) {
            clearInterval(timer);
            setProgress(100);
        } else {
            setProgress(timePassed / 100);
        }
    }, 10);
}
        //если время анимации не закончилось, то продолжаем анимацию

//Запускаем анимацию при загрузке страницы
window.addEventListener('load', animateProgress);


//Логика переключения анимации
function toggleAnimation() {
    if (animate.checked) {
        animateProgress();
    } else {
        cancelAnimationFrame(animationFrame);
    }
}
toggle.addEventListener('change', toggleAnimation);

});