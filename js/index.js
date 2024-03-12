//П Е Р В А Я   Ч А С Т Ь

//ЗАДАНИЕ No1 | создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// car = {
//   manufacturer: "Japan",
//   model: "Tiida",
//   dateOfMade: 2012,
//   middleSpeed: 60,
// };

//ЗАДАЧА No1 ПЕРВОГО ЗАДАНИЯ | функция для вывода на экран информации об автомобиле.

//   function carInfo(carData){
//     const{country, model, dateOfMade, middleSpeed} = carData;
//     return Производитель:${country}, Модель:${model}, Год выпуска:${dateOfMade}, Средняя скорость:${middleSpeed}
//   }
//   const result = carInfo(car)
//   console.log(result)

//ЗАДАЧА No2 ПЕРВОГО ЗАДАНИЯ | функция для подсчета необходимого времени
// для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// function distanceFn(distance) {
//   let time = distance / car.middleSpeed;
//   let breakCounter = Math.floor(time / 4);
//   let totalTime = time + breakCounter;
//   return `Автомобиль преодолеет путь за ${totalTime.toFixed(1)} часов.`;
// }

// let result = distanceFn(500);
// console.log(result);


//В Т О Р А Я   Ч А С Т Ь
//ЗАДАЧА No1 | напишите функцию, которая принимает массив объектов и возвращает новый массив,
//содержащий только те объекты, у которых все свойства имеют значения.

// const array = [
//   { user: "Damien", age: 19, student: true },
//   { user: "Ivan", age: 19, student: true },
//   { user: "", age: 19, student: true },
//   { user: "Daniel", age: undefined, student: true },
//   { user: "Rafael", age: 19, student: true },
// ];

// function arrObj(arr) {
//   let newArr = [];
//   for (let element of arr) {
//     let propertyHasValue = true;
//     for (let key in element) {
//       if (element[key] === undefined || element[key] === "") {
//         propertyHasValue = false;
//       }
//     }
//     if (propertyHasValue === true) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// const result = arrObj(array);
// console.log(result);

//ЗАДАЧА No2 | напишите функцию, которая принимает объект и проверяет,
// является ли он пустым (не содержит свойств).

// car = {
//   manufacturer: "Japan",
//   model: "Tiida",
//   dateOfMade: 2012,
//   middleSpeed: 60,
// };

// function examinationObj(obj) {
//   const keys = Object.keys(obj);

//   if (keys.length === 0) {
//     return `Объект пустой`;
//   } else {
//     return `В объекте есть свойства`;
//   }
// }

// const result = examinationObj(car);
// console.log(result);

// ЗАДАЧА No3 | напишите функцию, которая принимает объект и имя свойства,
// а затем проверяет, существует ли такое свойство у объекта.

// car = {
//   manufacturer: "Japan",
//   model: "Tiida",
//   dateOfMade: 2012,
//   middleSpeed: 60,
// };

// function hasProperty(obj, property) {
//   const keys = Object.keys(obj);
//   if (!keys.includes(property)) {
//     return `Объект не содержит такого свойства`;
//   } else {
//     return `Объект содержит такое свойство`;
//   }
// }
// const result = hasProperty(car, "color");
// console.log(result);
