// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

const textForm = () => {
    textSpan.style.fontSize = `${fontSizeControl.value}px`
}

fontSizeControl.addEventListener('input', textForm);