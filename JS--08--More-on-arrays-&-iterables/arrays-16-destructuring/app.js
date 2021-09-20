// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log('list-items: ', listItems);

// const arrayListItems = Array.from(listItems);
// console.log('arrayListItems: ', arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', { moreDetail: [] }];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log('dataPoint: ', dataPoint);
//   }
// }

// console.log('personalData: ', personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// console.log(hobbies);
// hobbies.unshift('Coding');
// console.log(hobbies);
// const poppedValue = hobbies.pop();
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);
// console.log(storedResults, testResults);

// testResults.push(5.91);
// console.log(storedResults, testResults);

// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log('personData: ', personData.indexOf({ name: 'Max' }));

// const manuel = personData.find((person) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// console.log(ajustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });


// const taxtCorrectPrice = prices.map((price, idx) => {
//   const newObj = { index : idx, priceAfterTax: price * (1 + tax)}
//   return newObj; 
// })

// console.log(taxtCorrectPrice); 


// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// const filteredArray = prices.filter(p => p > 6);

// console.log(filteredArray);


// const prices = [10, 5.99, 3.99, 6.59];

// console.log(prices);

// let sum = 0;
// prices.forEach((price) => {
//   sum += price
// });

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log('name: ', name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
// const copiedPersons = persons.map(person => ({
//   name: person.name,
//   age: person.age
// }));

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 31;

// console.log('persons: ', persons);
// console.log('copiedPersons: ', copiedPersons);

// const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

// const [ firstName, lastName, ...otherInfo ] = nameData;
// console.log(firstName, lastName, otherInfo);
