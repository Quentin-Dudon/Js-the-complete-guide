// 1 - a
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = array.filter(number => number > 5); 

console.log('Task 1A: ', filteredArray); 

// 1 - b
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapArray = array2.map((num) => {
  const numObj = {number: num}; 
  return numObj; 
})

console.log('Task 1B: ', mapArray); 

// 1 - c

const sum = array2.reduce((prevValue, curValue) => {
  return prevValue + curValue
}, 0); 

console.log('Task 1C: ', sum); 

// 2

const findMax = (...array) => {
  return Math.max(...array); 
}

console.log('Task 2.1: ', findMax(...array)); 

const sortedPrices = array.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

const minmax = () => {}

console.log('Last Element: ', sortedPrices[0]);

let lastElement = sortedPrices.reverse(); 
console.log('First ELement: ', lastElement[0]);



