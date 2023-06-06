// Задание 1
let str = 'js';

console.log(str.toUpperCase());

//Задание 2  
function searchStart(search, a) {

    const regex = new RegExp(`${a}`, "i");
    search.forEach((el) => {
        if (regex.exec(el)) {
            console.log(el);
        }
    });

};
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

//Задание 3
const num = Math.floor(32.58884);
const num1 = Math.ceil(32.58884);
const num2 = Math.round(32.58884);

console.log(num, num1, num2);


//Задание 4
const array = [52, 53, 49, 77, 21, 32];

array.sort();
console.log(array.shift(), array.pop());

//Задание 5
const random = Math.round(Math.random() * 10);

console.log(random);

//Задание 6 
function getRandomArray(num) {
  const randomArr = [];
  const arrLength = num / 2;

  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor(Math.random() * num);
    randomArr.push(randomNum);//Почему это внутри for? 
  }

  return randomArr;
}

console.log(getRandomArray(15));

//Задание 7
function getRandomInt(minValue, maxValue) {   
 
return Math.round (Math.random() * (maxValue - minValue)) + minValue;
  
}                                   
  
console.log(getRandomInt(3, 15));

//Задание 8
let nowDate = new Date();

console.log(nowDate);

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate()+73);

console.log(currentDate);

//Задание 10
let date = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

let week = new Date().toLocaleString('ru', {    
    weekday: 'long'
   
  });
let time = new Date().toLocaleString('ru', {    
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
   
  });

console.log("Дата "+date+"- это "+week+ ". Время: "+time);



function getRandomArray(num) {
  const randomArr = [];
  const arrLength = num / 2;

  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor(Math.random() * num);
    randomArr.push(randomNum);//Почему это внутри for? 
  }

  return randomArr;
}

console.log(getRandomArray(15));
