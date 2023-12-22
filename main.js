//  Uyga vazifa 


// func 1
// function getNames(baho) {
//     const students = [
//       { name: "Quincy", percent: 96 },
//       { name: "Jason", percent: 84 },
//       { name: "Alexis", percent: 100 },
//       { name: "Sam", percent: 65 },
//       { name: "Katie", percent: 90 },
//       { name: "Anna", percent: 75 },
//     ];
  
//     const gradedStudents = students.map(student => {
//       if (student.percent >= 85 && student.percent <= 100) {
//         return { ...student, grade: 5 };
//       } else if (student.percent >= 70 && student.percent < 85) {
//         return { ...student, grade: 4 };
//       } else if (student.percent >= 60 && student.percent < 70) {
//         return { ...student, grade: 3 };
//       } else {
//         return { ...student, grade: "Undefined" };
//       }
//     });
  
//     return gradedStudents.filter(student => student.grade === baho);
//   }
  
//   const updatedStudents = getNames(5); // 5 baho alan öğrenciler
//   console.log(updatedStudents);
  
  




// func 2
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const animalCount = animals.reduce((acc, animal) => {
//     acc[animal] = (acc[animal] || 0) + 1;
//     return acc;
// }, {});

// console.log(animalCount);





// func 3
// let input = [1, 2, 3, 4, 5];
// let output = input.map(element => element * element);
// console.log(output);





// func 4
// let input = [1, -4, 12, 0, -3, 29, -150];

// let positiveNumbers = input.filter(element => element > 0);

// let sumOfPositives = positiveNumbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sumOfPositives);





// func 5
// let input = 'George Raymond Richard Martin';

// let initials = input
//   .split(' ') 
//   .map(word => word[0]) 
//   .join(''); 

// console.log(initials);





// func 6
// let people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];
  
//   people.sort((a, b) => a.age - b.age);
 
//   let ageDifference = people[people.length - 1].age - people[0].age;
  
//   console.log(ageDifference); // Natija: 54
  




// func 7
// function separateEvenOdd(array) {
//     let even = array.filter(element => element % 2 === 0);
//     let odd = array.filter(element => element % 2 !== 0);
  
//     return {
//       even,
//       odd
//     };
//   }
  
//   let givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let result = separateEvenOdd(givenArray);
  
//   console.log(result.even);
//   console.log(result.odd); 
  




// func 8
// function removeDuplicates(array) {
//     let uniqueValues = array.reduce((acc, current) => {
//       if (acc.indexOf(current) === -1) {
//         acc.push(current);
//       }
//       return acc;
//     }, []);
  
//     return uniqueValues;
//   }
  
//   let givenArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
//   let result = removeDuplicates(givenArray);
  
//   console.log(result);
  



// func 9
// let products = [
//     {id: 1, name: 'Phone', price: 500, rating: 4.5, discount: 20},
//     {id: 2, name: 'Laptop', price: 1200, rating: 4.2, discount: 15},
//     {id: 3, name: 'Tablet', price: 800, rating: 4.0, discount: 25},
//   ];
  
//   products.sort((a, b) => a.id - b.id);
  
//   products.sort((a, b) => a.name.localeCompare(b.name));
  
//   products.sort((a, b) => a.price - b.price);
  
//   products.sort((a, b) => b.rating - a.rating);
  
//   products.sort((a, b) => a.discount - b.discount);
  




// func 10
// let products = [
//     {id: 1, name: 'Phone', price: 500, rating: 4.5, discount: 20},
//     {id: 2, name: 'Laptop', price: 1200, rating: 4.2, discount: 15},
//     {id: 3, name: 'Tablet', price: 800, rating: 4.8, discount: 25},
//   ];
  
//   let highestRatedProduct = products.reduce((maxRating, product) =>
//     (product.rating > maxRating.rating) ? product : maxRating
//   );
  
//   console.log(highestRatedProduct);
  




// func 11
// let products = [
//     {id: 1, name: 'Phone', price: 500, rating: 4.5, discount: 20},
//     {id: 2, name: 'Laptop', price: 1200, rating: 4.2, discount: 15},
//     {id: 3, name: 'Tablet', price: 800, rating: 4.8, discount: 25},
//   ];
 
//   let cheapestProduct = products.reduce((minPrice, product) =>
//     (product.price < minPrice.price) ? product : minPrice
//   );
  
//   console.log(cheapestProduct);
  




// func 12
// let products = [
//     {id: 1, name: 'Phone', price: 500, rating: 4.5, discount: 20},
//     {id: 2, name: 'Laptop', price: 1200, rating: 4.2, discount: 15},
//     {id: 3, name: 'Tablet', price: 800, rating: 4.8, discount: 25},
//   ];
  
//   let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  
//   console.log(totalPrice);
  




// func 13
// let products = [
//     {id: 1, name: 'Phone', price: 500, rating: 4.5, discount: 20},
//     {id: 2, name: 'Laptop', price: 1200, rating: 4.2, discount: 15},
//     {id: 3, name: 'Tablet', price: 800, rating: 4.8, discount: 25},
//   ];
  
//   let productNames = products.map(product => product.name);
  
//   console.log(productNames);
  




// func 14
// let products = [
//     {id: 1, name: 'Phone', price: 500, rating: 4.5, discount: 20},
//     {id: 2, name: 'Laptop', price: 1200, rating: 4.2, discount: 15},
//     {id: 3, name: 'Tablet', price: 800, rating: 4.8, discount: 25},
//     {id: 5, name: 'Headphones', price: 100, rating: 4.0, discount: 10},
//   ];
  
//   let productWithId5 = products.find(product => product.id === 5);
  
//   if (productWithId5) {
//     console.log(productWithId5.name);
//   } else {
//     console.log('ID si 5 bo\'lgan element topilmadi.');
//   }
  




// func 15
// let products = [
//     {
//       id: 6,
//       name: "Smarthpone",
//       price: 12000,
//       rating: 4.5,
//       discount: 20,
//     },
//     {
//       id: 2,
//       name: "Acer",
//       price: 10000,
//       rating: 4.3,
//       discount: 10,
//     },
//     {
//       id: 1,
//       name: "Mac book",
//       price: 17000,
//       rating: 4.7,
//       discount: 40,
//     },
//     {
//       id: 4,
//       name: "HP",
//       price: 21000,
//       rating: 4.1,
//       discount: 30,
//     },
//     {
//       id: 5,
//       name: "Dell",
//       price: 35000,
//       rating: 4.9,
//       discount: 30,
//     },
//   ];
  
//   let filteredProducts = products.filter(product => product.id !== 4);
  
//   console.log(filteredProducts);
  




// func 16
// function onlyLetters(inputString) {
//     return inputString.split('').every(char => /[a-zA-Z]/.test(char));
//   }
  
//   let givenString = "OnlyLetters";
//   let result = onlyLetters(givenString);
  
//   if (result) {
//     console.log("Faqatgina harflardan iborat");
//   } else {
//     console.log("Boshqa belgilar ham bor");
//   }
  




// func 17
// function getTruthyFalsy(arr) {
//     let truthy = arr.filter(item => item);
//     let falsy = arr.filter(item => !item && item !== false);
  
//     return {
//       truthy,
//       falsy
//     };
//   }
  
//   let inputArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
//   let result = getTruthyFalsy(inputArray);
  
//   console.log(result);
  




// func 18
// function getWordLengths(inputString) {
//     let wordsArray = inputString.split(' '); 
//     let wordLengths = wordsArray.map(word => word.length); 
  
//     return wordLengths;
//   }
  
//   let givenString = "Men Abdulaziz Programmerman";
//   let result = getWordLengths(givenString);
  
//   console.log(result);
  




// func 19
// function hasEmptySpace(inputString) {
//     return inputString.split(' ').some(word => word === '');
//   }
  
//   let givenString = "Men Abdulaziz Programmerman";
//   let result = hasEmptySpace(givenString);
  
//   console.log(result);
  




// func 20
// function objectToStringArray(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
//   }
  
//   let inputObject = {a: 2, b: 5, c: 7};
//   let result = objectToStringArray(inputObject);
  
//   console.log(result);
  




// func 21
// function digitSum(number) {
//     if (number === 0) {
//       return 0;
//     } else {
//       return (number % 10) + digitSum(Math.floor(number / 10));
//     }
//   }

//   let num = 12345;
//   let result = digitSum(num);
//   console.log(result); 
  




// func 22
// const pupils = [
//     {
//       name: "Elbek",
//       protcent: 95,
//     },
//     {
//       name: "Zafar",
//       protcent: 78,
//     },
//     {
//       name: "Aziz",
//       protcent: 83,
//     },
//     {
//       name: "Jasur",
//       protcent: 88,
//     },
//     {
//       name: "Bobur",
//       protcent: 66,
//     },
//     {
//       name: "Kamron",
//       protcent: 75,
//     },
//   ];
  
//   const average = pupils.reduce((total, pupil) => total + pupil.protcent, 0) / pupils.length;
  
//   console.log(average);
  




// func 1





// func 1





// func 1


