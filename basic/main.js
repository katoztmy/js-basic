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


