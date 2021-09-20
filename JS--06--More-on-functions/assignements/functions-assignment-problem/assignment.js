// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// 1

const sayHello1 = name => console.log('Hi ' + name);

sayHello1('quentin');

// 2 - a

const sayHello2 = (name, age) => {
  console.log(`Hi my name is ${name} and i'm ${age} years old`);
}

sayHello2('quentin', 30);

// 2 - b

const sayHello3 = () => {
  console.log(`Hi my name is Max and i'm an instructor`);
}

sayHello3();

// 2 - c

const sayHello4 = name => {
  return console.log(name);
}

sayHello4('quentin');

// 3 

const sayHello5 = (name = 'quentin') => {
  return console.log(`Hello my name is ${name} again !`);
}

sayHello5();

// 4 

const checkInput = (resultHandler, ...numbers) => {
  let sum = 0; 
  for(const num of numbers) {
    sum += num; 
  }
  if (numbers == '') {
    resultHandler(sum); 
  } else {
    return console.log(sum); 
  }
}

const noResult = () => {
  return console.log('no result')
}

checkInput(noResult, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 