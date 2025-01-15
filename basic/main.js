// // // // // // function add(a, b) {
// // // // // //   return a + b;
// // // // // //

// // // // // // console.dir(add);

// // // // // // const person = {
// // // // // //   name: 'John',
// // // // // //   age: 30,
// // // // // //   sayHi: function () {
// // // // // //     return 'hi';
// // // // // //   },
// // // // // // };

// // // // // // sayHi = (name) => console.log(name);

// // // // // // sayHi('unko');

// // // // // let subtract = (callback) => {
// // // // //   callback('hello');
// // // // // };

// // // // // subtract((args) => {
// // // // //   console.log(args);
// // // // // });

// // // // a();
// // // // function a() {
// // // //   console.log('a');
// // // // }
// // // // a();
// // // // b();
// // // // const b = function () {
// // // //   console.log('b');
// // // // };
// // // // b();

// // // // console.group('1');

// // // {
// // //   var appe = 'apple';
// // // }
// // // 'use strict';
// // console.dir(sayTomato);
// // {
// //   function sayTomato() {
// //     var tomato = 'tomato';
// //   }
// // }
// // sayTomato();
// // banana = 'banana';
// // console.log(globalThis);

// // const coffee = {
// //   name: 'latte',
// // };

// // // const coffee2 = coffee;
// // // coffee2.name = 'mocha';
// // const coffee3 = {
// //   name: 'latte',
// // };
// // // console.log(coffee);
// // // console.log(coffee2);
// // console.log(coffee === coffee3);
// // 別のアドレスを指している

// // let apple = 'apple';
// // let banana = 'banana';
// // {
// //   let mango = 'mango';
// //   console.log(orange);
// //   {
// //     let orange = 'orange';
// //   }
// // }

// // let outerFunc = () => {
// //   let mango = 'mango';
// //   return () => {
// //     let orange = 'orange';
// //     console.log('?');
// //   };
// // };
// // let innerFunc = outerFunc();
// // // innerFunc();
// // console.dir(outerFunc);

// // クロージャを下記に,ソースコードを用いて説明しろ
// // function outerFunc() {
// //   let outerVar = 'outer';
// //   function innerFunc() {
// //     let innerVar = 'inner';
// //     console.log(outerVar);
// //   }
// //   return innerFunc;
// // }
// // let myFunc = outerFunc();
// // myFunc();

// // let fruit = 'apple';
// // let sayFruit = () => {
// //   console.log(fruit);
// // };
// // fruit = 'banana';
// // sayFruit();

// // let generatePerson = () => {
// //   let age = 0;
// //   return {
// //     name: 'Yoshipi',
// //     incrementAge: () => {
// //       age += 1;
// //       return age;
// //     },
// //   };
// // };

// // const yoshipi = generatePerson();
// // console.log(yoshipi.incrementAge());
// // console.log(yoshipi);

// // const c = () => {
// //   return 'hello';
// // };

// // const b = () => {
// //   return c();
// // };

// // const a = () => {
// //   return b();
// // };

// // debugger;

// // a();

// // const person = {
// //   name: 'Yoshipi',
// //   age: 30,
// //   greeting: function () {},
// //   const: 'const',
// //   3: 'tokyo',
// // };
// // // const const = 1;
// // console.log(person[3]);

// // const name = 'Espresso';
// // const size = 350;
// // const coffee = {
// //   name,
// //   size,
// //   nutoritions: {
// //     calori: 10,
// //     sugar: 0,
// //   },
// // };

// // console.log(coffee);

// // const coffee2 = { ...coffee };
// // console.log(coffee2);
// // console.log(coffee2 === coffee);

// // const array = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];
// // const unko = [...array];
// // console.log(unko === array);

// // const o1 = { a: 1 };
// // const o2 = { a: 2, b: 2 };
// // const o3 = { a: 3, b: 3, c: 3 };
// // const newObj = Object.assign(o1, o2, o3);
// // console.log(o1);
// // console.log(newObj);
// // console.log(o1 === newObj);

// // function
// // let sayThis = function () {
// //   console.log(this);
// // };

// // allow function
// let sayThis = () => {
//   console.log(this);
// };

// let loggin = (cb) => {
//   console.log(cb());
// };
// // sayThis();

// const car = {
//   color: 'red',
//   sayThis,
//   changeColor: function (color) {
//     logging(function () {
//       return thiis.color;
//     });
//     this.color = color;
//   },
// };

// car.sayThis();

// // const car2 = { ...car };
// // car2.changeColor('white');

// // const tmpObj = {
// //   car,
// // };

// // tmpObj.car.sayThis();

// // console.log(car2);
// // console.log(car);

// const obj = {
//   a: 1,
//   b: 2,
// };
// console.log(obj);

// const obj = {
//   a: 1,
//   b: 2,
// };
// obj.__proto__ = {
//   c: 3,
// };
// Object.setPrototypeOf(obj, { c: 3 });
// for in はpropertyまで見るが他は見ない
const obj = Object.create({ c: 3 });
obj.a = 1;
obj.b = 2;
// console.log(obj);
// console.log(Object.getPrototypeOf(obj));
// console.log(obj);
// for (const key in obj) {
//   console.log(key);
// }

// for (const key of Object.keys(obj)) {
//   console.log(key);
// }

// const UserFactory = (name, age) => {
//   return {
//     name,
//     age,
//     greeting() {},
//   };
// };

// const user1 = UserFactory('Yoshipi', 30);
// const user2 = UserFactory('Yoshipi', 31);

// const UserConstructor = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.greeting = function () {
//     console.log('hello');
//   };
// };

// const o = {};
// console.log(o);

// o = {
//   a: 1,
// };
// Object.prototype.hello = 'hello';
// console.log(o);
// console.log(o.hasOwnProperty('a'));

// クラスとは言いつつも、関数オブジェクトである
// classで定義されている関数オブジェクトは、newをつける必要がある

// コンストラクタ関数を使用すると非常に面倒なものをクラスでやると簡単にかける
// コンストラクタ関数の上位互換である
// class User {
//   #age = 0;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   // 省略記法のメソッドのみ書くことができる
//   static greeting() {}
//   post() {}
// }
// const user1 = new User('Yoshipi', 30);
// console.dir(user1);

// class Animal {
//   age = 0;
//   constructor(age) {
//     this.age = age;
//   }
//   eat() {
//     console.log('delicious');
//   }
// }

// class Bird extends Animal {
//   name = 'pi';
//   constructor(age) {
//     // 親クラスのコンストラクタを呼び出す必要がある。
//     super(age);
//   }
//   eat() {
//     console.log('delicious???');
//     super.eat();
//   }
//   fly() {}
// }

// const bird = new Bird(10);
// bird.eat();
// const animalObj = {
//   age: 0,
//   eat() {
//     console.log('eat from animal obj');
//   },
// };

// const birdObj = {
//   age: 1,
//   eat() {
//     // this.nameとイコールである
//     super.name = 'pi';
//     console.log(super.name);
//     console.log('eat from bird obj');
//   },
// };
// birdObj.eat();
// console.log(birdObj);

// 配列はただのオブジェクトである。
// 配列のインデックスはプロパティである
// 配列のメソッドはプロトタイプにある
// const array = [1, 2, 3];
// console.log(array);
// let fruits = ['apple', 'banana'];
// console.log(Array.isArray(fruits));

// let first = fruits[0];

// fruits = Array.of('apple', 'banana');
// console.log(fruits);

// const yoshipi = ['yoshipi', 20, 'man', ['music', 'travel']];
// let [name, age, gender, [music, travel]] = yoshipi;
// console.log(gender, travel);

// let userObject = {
//   hobbies: ['music', 'travel'],
// };

// let {
//   hobbies: [, travelObject],
// } = userObject;
// console.log(g)

// let items = [0, 1, 2];
// 先頭から削除
// items.shift();

// 先頭に追加
// items.unshift(9);

// pushは最後に追加

// popは最後を削除
// items.pop();
// console.log(items);

// arrayLikeObject = {
//   0: 0,
//   1: 1,
//   2: 2,
//   length: 3,
// };

// Array.prototype.push.call(arrayLikeObject, 3);
// console.log(arrayLikeObject);

// items = ['apple', 'banana', 'orange'];

// items.forEach((item, index, array) => {
//   return item < 0;
// });

// items = [0, 1, 2, 3, 4, 5];
// const unko = Object.groupBy(items, (item) => {
//   return item % 2 === 0;
// });
// console.log(unko);

// spliceの第一引数は削除する要素のインデックス
// spliceの第二引数は削除する要素の数
// spliceの第三引数は追加する要素?

// reduceは配列を一つの値にまとめる
// reduceの第一引数はコールバック関数
// reduceの第二引数は初期値
// reduceのコールバック関数の第一引数は前回のコールバック関数の返り値
// reduceのコールバック関数の第二引数は配列の要素
// reduceのコールバック関数の第三引数はインデックス
// reduceのコールバック関数の第四引数は元の配列
// const items = [1, 2, 3];
// const result = items.reduce((total, current) => total + current, 0);
// console.log(result);

// nullとundefined以外のプリミティブ型はメソッドのようなものを使用することができる
// let count = 1.234;
// // count.toFixed(2);
// // このaのようなオブジェクトの事をラッパーオブジェクトという
// const a = new String('abc');
// console.log(`${a}ですね。`);

// let hello = new String('hello');
// console.log(hello);

// let date = new Date();
// console.log(date.getHours());
// console.log(date.getUTCHours());
// console.log(date.getTimezoneOffset());
// const a = new Date('2020-12-25T16:30:20.123+09:00');
// console.log(a);

// const apple = 'I like apples';
// const result = apple.slice(3, 5);
// console.log(result);

// let regexp = new RegExp('apple');
// regexp = /apples\d/;
// result = regexp.test('I like apples5');
// console.dir(result);

// try {
//   // chocolate;
//   throw new Error('error', { cause: 'unko' });
// } catch (error) {
//   console.dir(error);
// }

// JavaScriptでメモリを書き換える方法

// let buffer = new ArrayBuffer(16);
// console.log(buffer);

// const a = new URL(
//   'https://astropad.com/blog/ipad%E3%81%AE%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%83%8E%E3%83%BC%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA5%E9%81%B8%E3%80%902024%E5%B9%B4%E3%80%91/'
// );

// console.log(a);

let timerId = setTimeout(() => {
  console.log('konnitiha');
}, 1000);
clearTimeout(timerId);
console.log('apple');
