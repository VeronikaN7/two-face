//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
let number = +prompt(`Введіть число`);
let result;

function getMaxDigit(number){
    console.log(`Число: ` + number);
    result = String(number).split("");
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        if(result[i] >= result[0]){
            result[0] = result[i];}
    }
    console.log(`Найбільша цифра:` + result[0]);

}
console.log(getMaxDigit(number));

//2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
let a = +prompt(`Введіть число a`);
let n = +prompt(`Введіть ступінь n`);
function exponent(a, n) {
        let b = a; 
        for (let i = 1; i < n; i++) { 
            b *= a; 
        }
        return b;
    }
    console.log(`Число a в степені n дорівнює:` + exponent(a, n))
      
      
//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
let name = prompt(`Введіть будь-яке ім'я`);
function firstBigLetter(name){
    if (name) 
    return name[0].toUpperCase() + name.slice(1).toLowerCase();       
}
console.log(firstBigLetter(name));

//4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). 
let tax = 19.5;
let salary = +prompt(`Введіть вашу заробітну плату`);
function finishSalary(salary){
    
    if(salary)
    return salary-(salary*tax/100)
    
}
console.log(`Заробітна плата після сплати податку: ` + finishSalary(salary));


//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
