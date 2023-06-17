//Задание 1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];


console.log(people1.sort((a, b) => a.age - b.age));

// Задание 2
function isPositive(num) {
    
    return num >0;
    }
    function isMale(men) {
        return men.gender == 'male';
    }
    function filter(arr, callback) {
        let result =[];
        for (i=0; i< arr.length; i++) {
            if (callback(arr[i])) {
                result.push (arr[i]);
            }
        }
        return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); 

//Задание 3
let counter = 0;
let timer = setInterval(() => {
  counter++;
  console.log(new Date());
  if (counter === 10) {
    clearInterval(timer);
    console.log("30 секунд прошли");
  }
}, 3000); 

//Задание 4
function delayForSecond(callback) {
    setTimeout (callback, 1000);
  
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

