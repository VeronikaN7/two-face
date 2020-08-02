//1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
const arr = [...Array(15)];
const min = 1;
const max = 100;
const getRandomArray =[...Array(15)].map((item) => Math.floor(Math.random()*(max- min+1)) + min); 
console.log(`1.Mасив випадкових цілих чисел.: ` + getRandomArray);

//2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
const numbers2 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

function getModa (numbers2){
const frequencyTable = {};
numbers2.forEach(item => frequencyTable[item] = frequencyTable[item] + 1  || 1);
    let maxFrequecy = 0;
    let modes = [];
    for(const key in frequencyTable){
        if(frequencyTable[key] > maxFrequecy){
        modes = [Number(key)];
        maxFrequecy = frequencyTable[key];
    }
    else if (frequencyTable[key] === maxFrequecy){
        modes.push(Number(key));
    }
}
return modes
}
console.log(`2.Мода: ` + getModa(numbers2));


//3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const numbers3 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
 const sumNumbers = numbers3.reduce((sum, item) => {
        if(Number.isInteger(item))
        return Math.round(sum + item/numbers3.length);
      }, 0); 
 console.log(`3.Середнє арифметичне: `+ sumNumbers);

  //4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів
  const numbers4 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
  const getMedian = (numbers4) => {
  numbers4.sort((a, b) => a-b);
  console.log(`4.Сортування для визначення медіани: `+ numbers4)
  const half = Math.floor(numbers4.length/2);
     if(numbers4.length % 2){
         return numbers4[half]
     } else {
         return  (numbers4[half-1]+numbers4[half])/2;
     }
  }
  console.log(`4.Медіана: `+ getMedian(numbers4));

 //5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
//Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
const numbers5 = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = numbers5.filter((item) => {
    if(item % 2 === 0) 
    return true;
    });
console.log(`5.Парні числа: ` + filterEvenNumbers);

//6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
//Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
const numbers6 = [1, -2, 3, -4, -5, 6];
const countPositiveNumbers = numbers6.filter((item)=>{
    if(item > 0)
    return item
});
console.log(`6.Кількість позитисних чисел: ` + countPositiveNumbers.length);

//7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const numbers7 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] //-> [55, 55]
const getDividedByFive = numbers7.filter((item) => {
    numbers7.sort(function(a, b) { return a - b;});
    if(item % 5 === 0) 
    return true;
    });
console.log(`7.Цифри, що діляться на 5: ` + getDividedByFive);




//8.Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
 const replaceBadWords = (string) =>{ 
     let newArr = string.toLowerCase(); 
     let badWords = [[`fuck`],[`shit`]];
     for (let i = 0; i < badWords.length; i++) { 
         newArr = newArr.split(badWords[i]).join("****"); 
        } 
    return newArr
     }
     console.log(`8.Заміна поганих слів: `+replaceBadWords(`Are you fucking kidding?`))


//9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
const divideByThree = (word) => {
    word = word.split(' ').join("").toLowerCase();
    let arr = [];
    let partArr = "";
    for ( let i=0; i<word.length; i+=3){
        if(word.length%2){
    partArr = word.slice(i, i + 3);
    arr.push(partArr);}
  else{
    partArr = word.slice(i, i + 3);
    arr.push(partArr)
  }
}
return  arr;
}
console.log('9.Розділити слово  commander на склади: '+ divideByThree(`commanderr`));





