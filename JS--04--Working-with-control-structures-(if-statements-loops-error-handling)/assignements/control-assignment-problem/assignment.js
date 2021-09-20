const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// console.log(randomNumber); 

// 1 

// if (randomNumber > 0.7) {
//   alert('The number is greater than 0.7')
// } 

// 2

let array = [1, 2, 3, 4, 5]; 

for (let i = 5; i < array.length; i++) {
  console.log(array[i]); 
}

console.log('-----')

let j = 0
while (j < array.length) {
  console.log(array[j]);
  j++;
}

// 3 

for (let k = array.length - 1; k >= 0 ; k--) {
  console.log(array[k]); 
}

// 4 

let otherRandomNumber = Math.random();
console.log(otherRandomNumber);  
console.log(randomNumber); 

if (otherRandomNumber > 0.7 && randomNumber > 0.7 
  || otherRandomNumber <= 0.2 
  || randomNumber <= 0.2) {
  alert('The number is greater than 0.7 OR the smaller than 0.2')
}; 