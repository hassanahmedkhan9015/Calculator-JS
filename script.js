
// function-1-Remove-Input-Field-Text 

function clearScreen() {
    var inputField = document.getElementById('inputField');
    inputField.value = '';
  }

//   function-2-Add-Text-in-Input-Field 
function touchBtn(index){
 var inputField = document.getElementById('inputField');
 inputField.value += index;
   

}

// Calculation-Logics 

var resultElement = document.getElementById('inputField');
var expression = '';

function touchBtn(number) {
  expression += number;
  resultElement.value = expression;
}

function touchBtnOp(operator) {
  expression += operator;
  resultElement.value = expression;
}

function calculate() {
  try {
    var result = eval(expression);
    resultElement.value = result;
    expression = '';
  } catch (error) {
    resultElement.value = 'Error';
  }
}

