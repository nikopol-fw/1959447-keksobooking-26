let randomNumber;

function getRandomNumber(min, max, grade) {
  if (min >= 0 && max >= 0 && min<max) {
    randomNumber=(Math.random() * (max - min) + min);
    randomNumber=randomNumber.toFixed(grade);
    return(randomNumber);
  } else {
    alert('Неверное значение диапазона.');
  }
}

getRandomNumber(50, 100, 8);
