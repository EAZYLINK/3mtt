const keys = document.querySelectorAll('.key');
const keynames = Array.from(keys).map(key => key.id);
const input = document.querySelector('.input');
const display = document.querySelector('.result');
const operators = ['+', '-', 'x', '/'];
const specialKeys = ['DEL', 'AC', '='] 

let num1 = 0;
let num2 = 0;
let operator = '';

const clearInput = () => {
    input.innerHTML = '';
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

for (let key of keys ) {
    key.addEventListener('click', function(){
    if (!operators.includes(key.id) && !specialKeys.includes(key.id)) {
        input.innerHTML += key.id;
    }
    if (operators.includes(key.id)) {
    num1 = parseFloat(input.innerHTML);
    operator = key.id;
    clearInput();
    }
    if (key.id === '=') {
        num2 = parseFloat(input.innerHTML);
        let result = 0
        if (operator === '+') result = add(num1, num2);
        if (operator === '-') result = sub(num1, num2);
        if (operator === '/') result = div(num1, num2);
        if (operator === 'x') result = mul(num1, num2);
        if (operator === '') result = num1;
        if (result == Infinity) {
            display.innerHTML = 'Invalid input'
            input.innerHTML = '';
            num1 = 0;
            num2 = 0;
            return
        }
        display.innerHTML = result;
        input.innerHTML = '';
        num1 = 0;
        num2 = 0;
        }
    if (key.id === 'AC') {
        input.innerHTML = '';
        display.innerHTML = '';
        num1 = 0;
        num2 = 0;
        operator = ''
    }
    if (key.id === 'DEL') {
        input.innerHTML = input.innerHTML.slice(0, -1);
    } 
    })
}