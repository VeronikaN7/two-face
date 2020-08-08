const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
function getMyTaxes(salary){ 
  return salary*this.tax;
}

console.log(`1.Податок в Україні: ` + getMyTaxes.call(ukraine, 2000))

//2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. 
function getMiddleTaxes(){
  return this.tax*this.middleSalary
}
console.log(`2.Середнє значення податку в Литві: ` +getMiddleTaxes.call(litva))

//3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
function getTotalTaxes(){
  return this.tax*this.middleSalary*this.vacancies
}
console.log(`3.Всього податків платять спеціалісти в Латвії: ` +getTotalTaxes.call(latvia))

//4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: 
//{ salary: number, taxes: number, profit: number } кожні 10 секунд. 
//Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності 
//від вибраної країни та значення salary. profit = salary - taxes;


 function getMySalary(country) {
  setInterval(() =>{
  let obj={}
  let salary = Math.round(Math.random()*(2000-1500+1)) + 1500;
  let profit = salary - getMyTaxes.call(country, salary);
  obj.salary = salary,
  obj.tax = getMyTaxes.call(country, salary),
  obj.profit = +profit.toFixed(2);
  console.log(obj)
  }, 5000)
}
getMySalary(ukraine)

