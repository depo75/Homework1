//*Задание 1
let password = 'Qwe2';
let enter = (prompt(`Введите пароль`));
if (enter === password) {
    alert (`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
}
//*Задание 2
let l = 0 
l > 0 && c < 10 ?
    console.log (`Верно`):
    console.log (`Неверно`);
//* Задание 3
let d = 101;
let e = 99;
(d || e) > 100 ?
    console.log (`Верно`):
    console.log (`Неверно`);
//* Задание 4
let a = '2';
let b = '3';
alert (Number(a) + Number(b));

//Задание 5
const monthNumber = Number(prompt(`Введите поряковый номер месяца`));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
         alert ("Зима");     
        break;
    case 3:
    case 4:
    case 5:
        alert ("Весна");     
        break;
    case 6:
    case 7:
    case 8:
        alert ("Лето");     
        break;
    case 9:
    case 10:
    case 11:
        alert ("Осень");     
        break;
    default:
        alert (`Нет месяца с таким поряковым номером`)
        break;
}

//*Задание 7
let num = Number(prompt(`Пожалуйста, введите любое число`));
    num%2 == 0 ?
        alert (`Число четное`):   
        alert (`Число не четное`);
    
    
    