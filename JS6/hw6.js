// Задание 1
 const num = [1, 5, 4, 10, 0, 3];
 for (let i = 0; i < num.length; i++) {
	if (num[i] == 10) break;

	console.log(num[i]) ;
}
// Задание 2
const ar = [1, 5, 4, 10, 0, 3];
let arrElements = ar.indexOf (4);

	console.log(arrElements);

// Задание 3
const number = [1,3,5,10,20];
let numberPlus = number.join (' ');
console.log(numberPlus);

// Задание 4
const mass = [];
for (let b = 0; b < 3; b++) {
    mass [b] = [];

    for (let g = 0; g < 3; g++) {
        mass[b].push(1);        
    }    
}
console.log(mass);

// Задание 5
const add = [1, 1, 1];
add.push (2,2,2);
console.log(add);

//Задание 6
const s = [9, 8, 7, 'a', 6, 5];
s.sort(), s.pop();

console.log(s);

//Задание 7
const chekNum = [9, 8, 7, 6, 5];
let chekQuestion = chekNum.includes(Number(prompt(`Введите число от 1 - 10`)));

console.log(chekQuestion);



// Задание 8
let line = ('abcdef');
line = line.split('');
line = line.reverse();
line = line.join('');
console.log(line);

//Задание 9
const union = [
    [1, 2, 3,],
    [4, 5, 6]
];
let unionAll = union.concat(union[0], union[1]);
console.log(unionAll);

//Задание 9 через flat
let unionAll2 = union.flat();
console.log(unionAll2);

//Задание 10
let sum = [1,2,3,4,5]
for (let n = 0; n < (sum.length-1); n++) {
      
    console.log(sum[n]+sum[n+1]);
}


//Задание 11
const integer = [3,2,6,9];
const squareNum = integer.map (p => p*2);

console.log(squareNum);

//Задание 12
const world = ['Кошка', 'Мяу', 'Велосипед'];
const worldLength = length => length.map(world => world.length);

console.log(worldLength(['Кошка', 'Мяу', 'Велосипед']));//Ничего не понятно, списала

// Задание 13

function filterPositive(array) {
    const filter = [];

    for (let x = 0; x < array.length; x++) {
        if (array[x] < 0) {
            filter.push(array[x]);
        }
        
    }
    return filter;
    
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56])); 
  console.log(filterPositive([-25, 25, 0, -1000, -2]));




    

