const display = document.querySelector('.calc .display')
document.querySelectorAll('.calc .digits button, .calc .opers button')
   .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

//const allOperands = document.querySelector('.calc .digits button');
//const allOperators = document.querySelector('.calc .opers button');

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
            //
            if (operators.indexOf(display.value.slice(-1)) !== -1 && btnText === '.') {
                alert('За точку можна забути так то');
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



//function addMore


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

// кнопка плюс-мінус
document.querySelector('.calc .plus-minuc')
   .addEventListener('click', addPlusMinus);

function addPlusMinus() {
    return display.value = '(-' + (display.value.slice(-1));
}










/* 
// якщо два знаки операцій підряд
function eqPressed() {
for (i = 0; i < eq.length; i++) {
  if eq.elements[i].value === + && eq.elements[i+1].value === -
    
}

    display.value = eval(display.value);
}

*/





//replace()
//str = "Please visit Microsoft!";
//var n = str.replace("Microsoft", "W3Schools");
/*
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

*/

//додоти цифри і операції
//ділити на нуль не можна
//не можна декілька операцій підряд
//додати память



//function doubleClickingOperators






// не можна ділити на нуль!
//варіант1
/*
//document.querySelector('.calc .eq')
   // .addEventListener('click', divisionByZero);
function divisionByZero() {
     if((display.value[display.value.length-2] === "/") && (display.value[display.value.length-1] === 0)) {
        alert('Don\'t divide by zero');
    }
    clearDisplay ()
}
*/
/*
function divisionByZero() {
     if((input[input.length-2] === "/") && (input[input.length-1] === 0)) {
        alert('Don\'t divide by zero');
    }
    clearDisplay ()
}
*/


//variant 2
/*
document.querySelector('.calc .eq')
    .addEventListener('click', divisionByZero);
function divisionByZero () {
    display.value = display.value.slice(-2);
    if (display.value === '/0')
    alert ('Don\'t divide by zero');
    
    
}


function divisionByZero(display) {
     if((display.value[display.value.length-2] === "/") && (display.value[display.value.length-1] === 0)) {
        alert('Don\'t divide by zero');
    }
}

function never() {
if(right !== 0) {
  return left / right;
} else {
  alert ('Don\'t divide by zero')
}
}  
*/






//document.querySelector('.calc .opers button');
//    .forEach( button => button.addEventListener('click', digitOperPressed));
//    function divisionByZero () {
//      for ( const i=0; i < display.value.length; i++){
//          const twoNum = display.value[i] + display.value[i+1];
//          if ( twoNum === '/0') {
//          alert ('Don\'t divide by zero');
//      }
//}  