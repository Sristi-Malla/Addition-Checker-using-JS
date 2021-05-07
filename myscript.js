var number1;
var number2;

number1 = Math.floor(Math.random() * 10 + 1); //random function returns no between 0 and 1(both inclusive)
number2 = Math.floor(Math.random() * 10 + 1);

document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

var answer = number1 + number2;

var checkAnswer = document.querySelector('input[type=text]'); //The querySelector() method returns the first element that matches a specified CSS selector in the document
var value = checkAnswer.value;
var btn= document.querySelector('input[type=button][value=check]');
 
btn.onclick = function () {
  value=checkAnswer.value;
  if (value == answer) {
    alert('You are correct');
  } else {
    alert('You are incorrect, the answer was '+answer);
  }
  document.querySelector('input[type=text]').value = "";
  document.getElementById('number1').innerHTML = "";
  document.getElementById('number2').innerHTML = "";
  number1 = Math.floor(Math.random() * 10 + 1); //random function returns no between 0 and 1(both inclusive)
  number2 = Math.floor(Math.random() * 10 + 1);

  document.getElementById('number1').innerHTML = number1;
  document.getElementById('number2').innerHTML = number2;

  answer = number1 + number2;
};