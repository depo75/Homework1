//Задание1
let a = 0;
while (a < 2) {
    console.log("Привет");
    a++
}

//Задание2
let b = 1;
while (b <= 5) {
    console.log(b);
    b++
}

//Задание3
let d = 7;
while (d <= 22) {
    console.log(d);
    d++
}

//Задание4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

//Задание5
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++
}
console.log(num);

//Задание6
let firstFriday = 6;
while (firstFriday <= 31) {
    console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
    firstFriday = firstFriday + 7
}








