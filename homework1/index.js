

const milk = 15.678;
console.log(milk);

const cacao = 123.965;
console.log(cacao);

const butter = 90.2345;
console.log(butter);

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxMean = Math.max(milk, cacao, butter);
console.log(maxMean);
//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minMean = Math.min(milk, cacao, butter);
console.log(minMean);
//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const totalPrice = milk + cacao + butter;
console.log(totalPrice);
//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.Округлення використовувати в МЕНЬШУ сторону.
const theWholePrice = Math.floor(milk) + Math.floor(cacao) + Math.floor(butter);
console.log(theWholePrice);
//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const roundingHundreds = Math.ceil(theWholePrice/100)*100
console.log(roundingHundreds);
//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const startAmount = 500;
const amountRest = startAmount - totalPrice;
console.log(amountRest);
//Виведіть середнє значення цін, округлене до другого знаку після коми
const avaragePrice = (totalPrice/3).toFixed(2)
console.log(avaragePrice);
//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const isNumberEven = (theWholePrice%2) === 0;
console.log(isNumberEven);

//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const price = 200;
const discount = Math.round(Math.random()*100);
const afterDiscount = price*discount/100
const money = 500;
const toPay = price - afterDiscount
const cost = price/2;
const netProfit = (cost - afterDiscount).toFixed(2);
console.log(price);
console.log(discount);
console.log(money);
console.log(toPay);
console.log(cost);
console.log(netProfit);

console.log(`Ціна: ${price} грн
Знижка: ${discount} %
Грошей: ${money} грн
До сплати: ${toPay} грн
Собівартість: ${cost} грн
Чистий прибуток: ${netProfit} грн
`);

str = `
    <ul>
        <li>Ціна молока: ${milk} грн</li>
        <li>Ціна какао: ${cacao} грн</li>
        <li>Ціна масла: ${butter} грн</li>
        <li>Максимальна ціна: ${maxMean} грн</li>
        <li>Мінімальна ціна: ${minMean} грн</li>
        <li>Вартість всіх товарів: ${totalPrice} грн</li>
        <li>Вартість всіх товарів без копійок: ${theWholePrice} грн</li>
        <li>Сума товарів округлена до сотень: ${roundingHundreds} грн</li>
        <li>Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${amountRest} грн</li>
        <li>Cереднє значення цін, округлене до другого знаку після коми: ${avaragePrice}  грн</li>
        <li>Булеве значення: ${isNumberEven}</li>
    </ul>
    <span>
    Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни? Приклад: ціна була  ${price}  грн, знижка склала ${discount}%, клієнт заплатив на ${afterDiscount}  грн меньше, собівартість = ${cost} грн. Чистий прибуток = ${netProfit} грн.
    </span>
`;
document.body.innerHTML = str





