const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics:[4, 5, 5, 5, 5, 3, 4, 3, 4, 5], 
      english: [5, 3],  
      cosmology: [5, 5, 5, 5]  
    }
  }];


// 1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
const getSubjects = student => Object.keys(student.subjects).map(item => item[0].toUpperCase() + item.slice(1) );
console.log(`1.Список предметів для конкретного студента: `+ students[1].name+ ` - ` + getSubjects(students[1]));

//2.Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. 
const averageMark = [];
const getAverageMark = student => {
    let arr = Object.values(student.subjects)
    let  newArr = arr[0].concat(arr[1],arr[2])
    const averageMark = newArr.reduce((sum, item) => {
        if(Number.isInteger(item))
        return sum + item/newArr.length;
      }, 0); 
      return averageMark.toFixed(2)
}
console.log(`2.Cередня оцінка по усім предметам: `+ students[2].name+ ` - ` + getAverageMark(students[2]));

//3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту
const getStudentInfo = student => {
 let info = {};
 info.course= student.course;
 info.name = student.name;
 info[`avarage`] = getAverageMark(student);
 //console.log(info)
    return info;
}
console.log(`3.Інформацію загального виду:` + JSON.stringify(getStudentInfo(students[1])))

//4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
 const getStudentsNames = students => {
 const nameStudents = [];
 students.map(item => nameStudents.push(item.name))
  return nameStudents.sort()
 }
 console.log(`4.Імена студентів у алфавітному порядку: ` + getStudentsNames(students))


 //5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

 const getBestStudent = students =>{
  let bestStudent = "";
  let max = 0;
  for(let i=0;  i < students.length; i++){
    if(Number(getAverageMark(students[i])) > max){
      max = Number(getAverageMark(students[i]));
      bestStudent = students[i].name;
    }
  }
  return  bestStudent
}
console.log(`5.Найкращий студент : `+ getBestStudent(students));

 


 //6.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }
 const calculateWordLetters = word => {
    const frequencyTable = {};
    const newWord = word.split("");
    newWord.forEach(item => frequencyTable[item] = frequencyTable[item] + 1  || 1);
    return frequencyTable 
 }
    console.log(`6.`+ JSON.stringify(calculateWordLetters(`тест`)))



   