//Отримайте у користувача число(N) від якого ми будемо складати. 
const n = +prompt(`Введіть ціле число N.`); 
 //   console.log(`number N: `, n);
//Перевірте, чи є передане значення N і M ЦІЛИМ числом.   
 let attemts = 0  
while(!Number.isInteger(n) || n == ""){
    n = +prompt(`Це не є ціле число або рядок пустий, спробуйте ще раз`);
}
//Отримайте у користувача число(M) від якого ми будемо складати. 
const m = +prompt(`Введіть ціле число M більше за N`); 
 //   console.log(`number N: `, n);
//Перевірте, чи є передане значення  M ЦІЛИМ числом.     
while(!Number.isInteger(m) || m == "" || m<=n){
    m = +prompt(`Це не є ціле число, рядок пустий або вказане число менше за N, спробуйте ще раз`);
}  
//Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
const answer = confirm(`Do you want to skip even numbers?`);

let sum = 0;
        for(let i = n; i <= m; i++){
            if(answer && i%2 === 0) continue;
            sum += i;
            console.log(sum);
        }     
       
           console.log(`Дані:
           Число N = ${n},
           Число M = ${m},
           Чи потрібно пропускати парні числа = ${answer},
           Сума чисел = ${sum}
           `);
const str =`Дані:
Число N = ${n},
Число M = ${m},
Чи потрібно пропускати парні числа = ${answer},
Сума чисел = ${sum} 
`;
 document.body.innerHTML = str;
