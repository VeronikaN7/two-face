
class Student {
  constructor(university, course, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks =  [5, 4, 4, 5];
    this.isDismissed;
    
  }

  getInfo() {
     return `Студент `+ this.course +`го курсу `+ this.university +`, ` + this.fullName;
   }

   get getMarks(){
     if(this.isDismissed){
    return null}
    else{
      return this.marks
    }
   }

   set getMarks(mark){
   this.getMarks.push(mark)

   }

  getAverageMark() {
    return this.getMarks.reduce((sum, elem) =>{
      return  sum + elem/this.getMarks.length;
     }, 0);
     
    }

    dismiss() {
      this.isDismissed = true;
      return this.fullName
    
    }

    recover(){
      this.isDismissed = false;
      return this.fullName
    }

}

 
class BudgetStudent extends Student{
  constructor(scholarship, university, course, fullName, marks) {
    super(university, course, fullName, marks);
    this.scholarship = scholarship;
    //setTimeout(() => this.getBudget(), 2000);
    
  }
  getBudget(){
    if (!this.isDismissed){
      return `Студента виключено і він не отримує стипендії`}
      else if (student.getAverageMark() < 4){
     return `Середній бал нижче 4, стипендії немає`}
    else {return `Ви отримали `+ this.scholarship + ` грн. стипендії`}
}


}



const student = new Student(`Вища Школа Психотерапії м.Одеса`, `1`, `Остап Бендер`);
console.log(`1.property`, student)
console.log(`2.info`, student.getInfo())
console.log(`3.marks`, student.getMarks)
student.getMarks = 5;
console.log(`4.add marks`, student.getMarks)
console.log(`5.Середня оцінка`, student.getAverageMark())
console.log(`6.Студента виключено`, student.dismiss())
console.log(`6.Студента виключено, тому оцінок немає`, student.getMarks)
console.log(`7.Студента поновлено `, student.recover())
console.log(`7.Оцінки поновленого студента`, student.getMarks)

const student2 = new BudgetStudent(1400, `Вища Школа Психотерапії м.Одеса`, `1`, `Остап Бендер`, [5, 4, 4, 5])
student.dismiss()
console.log(student2.getBudget())