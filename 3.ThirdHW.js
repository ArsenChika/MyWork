// Создадим шесть переменных, в каждой из которых будет один из восьми изученных типов данных. Выводим их значение в alert. Выводим их также в консоль.

let num = 54; // Числовой
alert(typeof num);

let bigNum = 10n; // Большие числа
alert(typeof bigNum);

let string = 'Hello, JavaScript!'; // Строка
alert(typeof string);

let bool = 2 > 10; // Логический
alert(typeof bool);

let sum; // undefined
alert(typeof sum);

let mass = ['level', 1, 2, 3, 4]; // Объекты
alert(typeof mass);

// Выводим окно prompt с вопросом о вашем возрасте. В зависимости от ответа выводим alert с текстом “поздравляем, вам n полных лет”, где вместо n надо подставить введенное вами значение. Сделать дополнительно проверку на совершенолетие и выводим в окне alert утверждение совершеннолетний пользователь или нет.

let age = +prompt('Сколько вам лет?', '');
alert(`Поздравляем, Вам ${age} полных лет!`);
if (age >= 18) {
    alert(`Кстати, вы совершеннолетний!`);
} else { alert(`Вы еще не достигли совершеннолетия!`)}

// Написать скрипт для суммирования чисел в массиве. Есть массив чисел var numbers = [10, 25, 100]. На выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135). Расширить функционал, так, чтобы скрипт игнорировал другие типы данных.

let numbers = [10, 25, 100];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    sum += numbers[i];
  } 
} 
console.log(sum);


// Задание со звездочкой. Создать массив объектов для юзеров 
//   [ {name: ‘Ivan’, age: 18}, 
//     {name: ‘Petr’, age: 12}, 
//     {name: ‘Sidor’, age: 25}, 
//     {name: ‘Pavel’, age: 24}, 
//     {name: ‘Sasha’, age: 29} ]. 
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

let arr = [ {name: 'Ivan', age: 18}, 
            {name: 'Petr', age: 12}, 
            {name: 'Sidor', age: 25}, 
            {name: 'Pavel', age: 24}, 
            {name: 'Sasha', age: 29}];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].age < 18) {
    arr.splice(i,1);
    i--;
  }
};
console.log(arr);