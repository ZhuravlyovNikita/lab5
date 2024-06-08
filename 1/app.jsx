import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom'; // импорт react-dom для генерации html

// ЧТО: переменная содержит HTML, который необходимо рендерить
let output = <span>James is 12 years old</span>

// ГДЕ: DOM-элемент, который будет содержать сгенерированный HTML
const myDiv = document.querySelector('#myDiv');

               //что   //где
ReactDOM.render(output, myDiv);