//radius = (width / 2) - (stroke-width * 2) 






document.querySelector('h1')
const title = document.querySelector('h1')

//выбор по идентификатору
document.querySelector('#id')

//выбор по классу 
document.querySelector('.класс')

//выбирает со страницы по принципу
document.querySelectorAll('.index li)')

//более новый способ
document.getElementById('nav-access')


document.getElementsByClassName('page-header')

//доступ к атрибуту 
a.getAttribute('data-id')

//установка атрибута
a.setAttribute('data-id')

const p = $0 
p.innerText //вызов REST API

p.innerHTML //DOM


//манипуляция цветами
//меняем цвет ссылки через css св-ва
a.style.color = 'orange'

//Коллекции
const list = document.getElementsByTagName('li')
list.forEach(el => el.style.display='none')
for (let el of list) {
    el.style.textTransform = 'uppercase'
}

console.log(list)

//обращение через classList

el.classList.метод
//методы 
// add
// remove
// contains - проверка

//проверка есть класс или нет - вкл или выкл

el.classList.toggle('active')
//возвращает boolean

//навигация по html - элементамс
const anchor = $0

//вызывает родителя
anchor.parentElement

//выбрать ребенка через индекс
anchor.children[0]

anchor.firstElementChild

anchor.lastElementChild

nextElementSibling
