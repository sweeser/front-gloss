const name = 10;
let name1 = 11;
var name2 = 12;
name1 = 20
console.log(typeof name);
console.log(typeof name1);

const bool = false;
console.log(typeof bool);

const text = "Это какой-то текст в переменной";
console.log(typeof text);

const bigNum = 12345n;
console.log(typeof bigNum);

const symBol = Symbol();
console.log(typeof symBol);

const und = undefined;
console.log(typeof und);
const nu = null;
console.log(typeof nu);

const ru = "Русский";
const en = "Английский";

const array =["Русский", "Английский"];
const array2 = [ru, en];

array[5] = "Белорусский";
array['6'] = "Болгарский";

// console.log(array[1]);
console.log(array);

// console.log(array2);
// console.log(array['length']);
// console.log(array.length);

console.log(typeof array);

const hello = 'hello, JS'

const test = {
  hello,
  key1: 'ttst',
  key2: 1234,
  key3: true,
  key4: ['12', 23],
};

console.log(test);
// console.log(typeof test);

const cart = {
  money: {
    sum: 500,
    currency: 'Руб',
    allowCurrency: ['Рубли', 'Евро'],
    discount: {
      hasDiscount: true,
      discountValue: 30,
    },
  },
  items: [{
    title: 'Ручка',
    count: 2,
    price: 100,
  }, {
    title: 'Книга',
    count: 1,
    price: 300,
  }],
}

cart['name'] = 'Антон';
cart.lastName = 'Иванов';

cart.money.result = true;
console.log(cart)

console.log(cart)
console.log(cart.items[0].title);
console.log(cart.money.sum);
console.log(cart.items.title)

// const a = 10;
// const b =5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);

// let a = 1;
console.log(a);
a++
console.log(a);

// let b = 5;
console.log(b);
b--
console.log(b);

console.log('Hello' + 'World' + '!');

// let a = 100;
console.log(a+=10);
console.log(a-=10);
console.log(a*=10);
console.log(a/=10);
console.log(a=10);

console.log(5 == 5);
console.log(5 == '5');
console.log(5 == 'text');

console.log(5 != 5);
console.log(5 != '5');
console.log(5 != 'text');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(5 !== 'text');

console.log(+'5' + 5);

let a = 10;
console.log(-a);

let b = -10;
console.log(-b);

const obj = {
  name: 'Anton',
  age: 51,
}

console.log(obj);
console.log('name' in obj);
console.log('nam' in obj);


console.log(6 > 5);
console.log(5 >= 5);
console.log(5 < 7);
console.log(7 <= 7);