// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.


const textInput = document.querySelector("#validation-input");

const checkLength = () => {
    if (textInput.value.length < textInput.dataset.length) {
        textInput.classList.add("invalid")
    } else {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid")
    }
};

textInput.addEventListener("blur", checkLength);