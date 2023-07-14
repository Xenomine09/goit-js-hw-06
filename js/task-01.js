const categories = document.querySelectorAll("#categories .item")
console.log(`Number of categories: ${categories.length}`)
categories.forEach(element => {
    let title = element.querySelector("h2");
    let items = element.querySelectorAll("li");

    console.log(`\nCategory: ${title.textContent}\nElements: ${items.length}`)
});


// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5