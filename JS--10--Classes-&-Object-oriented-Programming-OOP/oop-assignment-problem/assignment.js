class Course {
  get price() {
    return '$' + this._price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value';
    }
    this._price = value;
  }

  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  cost() {
    return this.length / this._price;
  }

  summary() {
    if (this.numOfExercises) {
      return `Welcome to the ${this.title} practical course ! It takes ${this.length} modules and it cost ${this.price}$ and it takes ${this.numOfExercises} exercices.`;
    } else if (this.publish) {
      return `Welcome to the ${this.title} theorical course ! It takes ${this.length} modules and it cost ${this.price}$`;
    } else {
      return `Welcome to the ${this.title} course ! It takes ${this.length} modules and it cost ${this.price}$`;
    }
  }
}

const java = new Course('Java', 40, 19.99);
const css = new Course('CSS', 20, 9.99);

console.log(java);
console.log(java.cost());
console.log(java.summary());

console.log(css);
console.log(css.cost());
console.log(css.summary());

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoricalCourse extends Course {
  publish() {
    return 'Publish method works!';
  }
}

const php = new PracticalCourse('Php', 50, 25.99, 20);

console.log(php);
console.log(php.cost());
console.log(php.summary());

const python = new TheoricalCourse('Python', 100, 20);

console.log('python', python);
