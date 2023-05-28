//Задание1
function min (a, b) {
    if (a < b) { 
        console.log(`${a} меньшее число`);      
    } else
    console.log(`${b} меньшее число`);        
} 



min (3, 5)

//Задание2

function anEvenNumber() {
    let num = Number(prompt(`Пожалуйста, введите любое число`));
    alert (num % 2 == 0 ?  (`Число четное`): 
     (`Число нечетное`));
}

console.log(anEvenNumber());

//Задание3.1

function squareNum() {    
    let square = Number(prompt(`Пожалуйста, введите любое число`));
    return square * square;     
}

console.log(squareNum());

//Задание 3.2

function squareNum() {    
    let square = Number(prompt(`Пожалуйста, введите любое число`));
    return square * square;  
}

alert(squareNum());

//Задание 4

function age() {
    let userAge = Number(prompt(`Сколько тебе лет?`));
    alert (userAge < 0 ? `Вы ввели неправильное значение`: userAge <= 12 ? `Привет, друг!`:
    `Добро пожаловать!`);    
}

console.log(age());

//Задание 5

function checkNumber(a, b) {
    return(isNaN(a) || isNaN(b)) ? `Одно или оба значения не являются числом`:
    a * b;    
}
console.log(checkNumber (2, `rt`)); 


//Задание 6
function checkNumber() {
    let a = (prompt(`Введите число`));
    alert (isNaN(a) ? `Переданный параметр не является числом`:
    `${a} в кубе равняется ${a**2}`);
    
}
console.log(checkNumber())
//Задание 7

let circle1 = {
    radius: 36,
    getArea: function() {
        console.log(3.14*(circle1.radius**2));
    }
    
}
circle1.getArea(); 

let circle2 = {
    radius: 36,
    getPerimeter : function() {    
        console.log((2*3.14)*circle2.radius);
    }
}
circle2.getPerimeter(); 