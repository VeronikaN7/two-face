const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Саша", "Олена"], [..], [...]];
function getPairs(arr){
    pairs = [];
    pairs.push([arr[0] +` i `+ arr[2]]);
    pairs.push([arr[1] +` i `+ arr[3]]);
    pairs.push([arr[4]+ ` i `+ arr[5]]);
    return pairs;
}
console.log(getPairs(students));

//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Саша і Олена", "Теорія автоматів"], [...], [...]]
function getProject(newPairs, arr1){
    let project = [];
    for( let i = 0; i < pairs.length; i++ ){
    project[i] = [pairs[i].join(" i "), arr1[i]]
    }
    return project;
}
console.log(getProject(students, themes));

//3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function getMarks(arr, arr3){
    let studentsMark = [];
    for( let i = 0; i < arr.length; i++ ){
        studentsMark[i] = [arr[i], arr3[i]]
    }
    return studentsMark;
}
console.log(getMarks(students, marks));

//4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Саша і Олена", "Теорія автоматів", 5], [...], [...]]
const a = getProject(students, themes);
function projectsMark( a ,[min, max]){
    let pairsMark = [];
    for( let i = 0; i < a.length; i++ ){
        pairsMark[i] =  a[i].concat(Math.floor(Math.random()*(max- min+1))  + min)
}
return pairsMark;
}
console.log(projectsMark( a, [1, 5]));

