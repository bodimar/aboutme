/*
var qOne = prompt('Is Marko proficient in Latin?').toLowerCase();
if (qOne === 'no'|| qOne ==='n') {
  alert('Correct!');
} else {
  alert('Incorrect!');
}
var qTwo = prompt('Does Marko have a High School Diploma?').toLowerCase();
if (qTwo === 'yes' || qTwo ==='y') {
  alert('Correct!');
} else {
  alert('Incorrect!')
}
var qThree = prompt('Was Marko employed with Firm in 2014?').toLowerCase();
if (qThree === 'no' || qThree ==='n') {
  alert('Correct!');
} else {
  alert('Incorrect!');
}
var qFour = prompt('Does Mr. Bodi have the letter \'c\' in his first name?').toLowerCase();
if (qFour === 'no' || qFour ==='n') {
  alert('Correct!');
} else {
  alert('Incorrect!');
}
*/

for (var i=4; i>0; i--) {
  console.log(i + ' tries remaining');
  var qFive = prompt('Guess a number between 1 and 10');
  if(isNaN(qFive)) {
    alert('You didn\'t enter a number!');
  } else {
    var number = parseInt(qFive);
    var correct = 5;
    if (number === correct)  {
      alert('Correct');
      break;
    } else if (number < correct) {
      alert('Too low!')
    } else {
      alert('Too high!');
    }
  }
}
