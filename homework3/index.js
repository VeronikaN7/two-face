//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
function getMaxDigit(number){
    let numberString = number.toString();
    let result
    return result = Math.max(...numberString);
}
//2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function exponent(a, n) {
        let b = a; 
        for (let i = 1; i < n; i++) { 
            b *= a; 
        }
        return b;
    }
//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function firstBigLetter(name){
    if (name) 
    return name[0].toUpperCase() + name.slice(1).toLowerCase();       
}
//4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). 
function finishSalary(salary){
    let tax = 19.5;
    if(salary)
    return salary-(salary*tax/100)
}
//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber([c, b]){
    let x = Math.floor(Math.random()*(b- c+1) ) + c;
   return x
}
//6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
function countLetter(letter, word){
    let counter = 0;
    for( i = 0; i < word.length ; i++){
        if(word[i].toLowerCase() === letter) {
        counter++;
        }
    }
    return counter
}
//7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
function convertCurrency(value){
    let current = 27;
    let result;
    if(value.includes(`$`)){
        result = (parseInt(value)*current) +`UAN`
    }else if (value.includes(`UAN`)){
result = (parseInt(value)/current)+`$`
    } else{
        result =`нема варіантів`
    }
    return result
}
//8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function getRandomPassword(password){
    let resultPassword = "";
    for( let i = 0; i < password; i++){
    resultPassword += Math.round(Math.random()*9)
}
    return resultPassword;
}

//9.Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters(a, str){
let result = "";
for(let i=0; i < str.length; i++){
    if(str[i] !== a)
    result += str[i];
}
    return result;
}


//10.Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
function isPalyndrom(str){
let strSpace = str.replace(/\s/g, "");
let strReverse = strSpace.split("").reverse().join("");
    if(strSpace.toLowerCase == strReverse.toLowerCase){
        return `true`}
        else{
            return `false`}
}

//11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
 function deleteDuplicateLetter(sentenses){
let str =  sentenses.toLowerCase().split('');
let result = "";
for(let i=0; i < str.length; i++){
    if(str.lastIndexOf(str[i]) == str.indexOf(str[i])){
        result +=str[i];
    }
 }
 return result;
}


document.writeln(`Функція №1: Найбільша цифра у числі 5483548: ${getMaxDigit(5483548)}<br>
Функція №2 5 а степені 5: ${exponent(5, 5)}<br>
Функція №3 Форматування імені василина, роблячи першу букву великою: ${firstBigLetter(`василина`)}<br>
Функція №4 Залишок після оплати податку від зарабітньої плати(1000грн): ${finishSalary(1000)}<br>
Функція №5 Функція, яка повертає випадкове ціле число в діапазоні від 1 до 10: ${getRandomNumber([1, 10])}<br>
Функція №6 Скільки разів певна буква "а" повторюється у слові Асталавіста: ${countLetter(`а`, `Асталавіста`)}<br>
Функція №7 Конвертація 100$ в гривні: ${convertCurrency(`100$`)}<br>
Функція №8 Генерації випадкового паролю 8 цифр: ${getRandomPassword(8)}<br>
Функція №9 Функція, яка видаляє всі букви "а" зі слова ананас: ${deleteLetters(a = `а`,`ананас`)}<br>
Функція №10 Перевіряє, чи є слово паліндромом - Я несу гусеня: ${isPalyndrom( `Я несу гусеня`)}<br>
Функція №11 Функція, яка видалить з речення букви, які зустрічаються більше 1 раз-Бісквіт був дуже ніжним: ${deleteDuplicateLetter(`Бісквіт був дуже ніжним`)}
`);

