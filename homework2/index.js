//Отримайте у користувача число(N) від якого ми будемо складати. 
let n = +prompt(`Введіть ціле число N.`); 
//Перевірте, чи є передане значення N є ЦІЛИМ числом.
while(!Number.isInteger(n) || n == ""){
    alert (`Це не є ціле число або рядок пустий, спробуйте ще раз`)
    n = +prompt(`Введіть ціле число N.`);
}
//Отримайте у користувача число(M) від якого ми будемо складати. 
let m = +prompt(`Введіть ціле число M більше за N`); 
//Перевірте, чи є передане значення  M є ЦІЛИМ числом.     
while(!Number.isInteger(m) || m == "" || m<=n){
    alert (`Це не є ціле число, рядок пустий або вказане число менше за N, спробуйте ще раз`)
    m = +prompt(`Введіть ціле число M більше за N`);
}  
//Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
const answer = confirm(`Do you want to skip even numbers?`);

let sum = 0;
        for(let i = n; i <= m; i++){
            if(answer && i%2 === 0) continue;
            sum += i;
            
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
