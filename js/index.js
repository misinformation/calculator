const display = document.querySelector('.calc .display')
document.querySelectorAll('.calc .digits button, .calc .opers button')
   .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

const operators = ['-', '+', '*', '/'];
    let lastOperator;
    let dotAlreadyPressed = false;

    function digitOperPressed(event) {
        const btn = event.target;
        const btnText = btn.innerText;
        
        //операції
        if (btn.parentElement.className === "opers") {
            //не починай з оператора
            if (display.value === '') {
                alert('Unable to start with operator');
                return;
            }
            //два оператори підряд
            if (operators.indexOf(display.value.slice(-1)) !== -1) {
                alert('Two consecutive operators');
                return;
            }    
            //на нуль ділити не можна
            let someEntries = display.value.split(lastOperator);
            if (lastOperator === '/' && someEntries[someEntries.length - 1] === '0') {
                alert('Don\'t divide by zero');
                return true;
            }
            lastOperator = btnText;
            dotAlreadyPressed = false;
        }

        //цифри
        if (btn.parentElement.className === "digits") {
            //не починай з крапки
            if (display.value === '' && btnText === '.') {
                alert('Unable to start with point');
                return;
            }
            //неможна ставити крапку після оператора
            if (operators.indexOf(display.value.slice(-1)) !== -1 && btnText === '.') {
                alert('No point after operators');
                return;
            }
            //неможна дві крапки підряд
            if (btnText === '.') {
                if (dotAlreadyPressed) {
                    alert('No numbers with two consecutive points');
                    return;
                } else {
                    dotAlreadyPressed = true;
                }
            }
            //крапка після нуля
            if (display.value.slice(-1) === '0' && btnText !== '.') {
                alert('Maybe it should be a dot after zero?');
                return;
            }
        }

        display.value += btnText;
    }
   


// Знак дорівнює
document.querySelector('.calc .eq')
    .addEventListener('click', eqPressed);
function eqPressed() {
        if (divisionByZero() || twoNullAtTheBegining()) {
            return;
        }
        display.value = eval(display.value);
    }

function divisionByZero() {
    if (display.value.includes("/0")) {
            alert('Don\'t divide by zero');
            return true;
    }
    return false;    
}



//два нулі з початку рядка
function twoNullAtTheBegining() {
    if (display.value.slice(0, 1) === '00') {
           return true;
    }
    return false;
}


//очистити все
document.querySelector('.calc .clear-all')
   .addEventListener('click', clearDisplay);

function clearDisplay() {
    display.value = '';
}

//очистити один знак
document.querySelector('.calc .clear-entry')
   .addEventListener('click', clearLastEntry);

function clearLastEntry() {
    display.value = display.value.slice(0, -1);
}

//число пі
document.querySelector('.calc .numberPi')
   .addEventListener('click', addPi);

function addPi() {
     display.value += Math.PI;
}