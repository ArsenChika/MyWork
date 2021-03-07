// Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».

function hello1() {
    let massage = "Привет, JavaScript!";
    alert(massage);
}

// Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость».

function hello2() {
    let name = prompt('Введите имя');
        if (name == '') {
      alert("Привет, гость");
  } else {
      alert(`Привет, ${name}!`);
  }
}

// Напишите функцию mul(n, m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.

function mul() {
    let m = prompt('Введите m');
    let n = prompt('Введите n');
    let a = Number.isInteger(m * n);
        if (a == true) {
            alert(m * n);
        }
        else {
            alert('Введите число, а не это!');    
        }
    };

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str. n — по умолчанию 2, str — пустая строка.

function repeat(str = '' , n = 2) {
    return str.repeat(n);
}

// Создайте функцию rgb(a, b, c), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.

function rgb(a = 0, b = 0, c = 0) {
    return `rgb(${a}, ${b}, ${c})`;
}
rgb (23, 100, 134);

// Создайте функцию avg(), которая будет находить среднее значение арифмитическое значение своих аргументов.

function avg() {
    let result;
    let leng = 0;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number" && !isNaN(arguments[i])) {
            leng++;
            sum += arguments[i];
        }
    }
    result = sum / leng;
    return result;
}

// Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0.

function words (n = 0) {
    let remainder1 = n % 10;
    let remainder2 = n % 100;
    if (remainder1 === 1 && remainder2 !== 11) {
        alert(n + ' товар');
    } else if ((remainder1 === 2 || remainder1 === 3 || remainder1 === 4) || (remainder2 !== 12 || remainder2 !== 13 || remainder2 !== 14)) {
        alert(n + ' товара')
    } else {
        alert (n + ' товаров')
    }
}
 
// Задание со звездочкой. Пишем функцию решения квадратного уравнения через дискриминант:
// ax² + bx + c = 0 (общий вид уравнения)
// D = b2 – 4ac
// D > 0
// x1 = (-b + √D ) / 2a
// x2 = (-b – √D ) / 2a
// D = 0
// x = -b / 2a
// D < 0 - прекращаем решать уравнение;

function user (a, b, c) {
    let d = Math.pow(b,2) - 4 * a * c;
    if (d < 0) {
        return
    }
    else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    }
    else {
        let x3 = -b / (2 * a);
        return [x3];
    }
}