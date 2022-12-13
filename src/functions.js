// Functions are one of the fundamental building blocks in JavaScript.
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
//but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
// To use a function, you must define it somewhere in the scope from which you wish to call it
function main() {
  function sum(a, b) {
    const sum = a + b;
    console.log('the sum of', a, ',', b, 'is', sum);
    return sum;
  }

  // function in javascript can be treated like any other variable
  // We declare functions listing their parameters
  // then call them passing arguments.

  let sumVariable = function (a, b) {
    const sum = a + b;
    return sum;
  };

  console.log(sum, typeof sum, sumVariable, typeof sumVariable);
  // when you call/invoke a function only the code inside will get executed
  // comment this and check
  // es6 arrow functions
  // 'this' will not work as expected, can not access arguments collection
  let sumArrow = function (a, b) {
    const sum = a + b;
    return sum;
  };
  console.log('sumArrow', sumArrow, typeof sum);
  // uncomment to test
  // sum(3, 6);
}
// main();

// you can also pass a function to another function just like variables
function main2() {
  function myFilter(array, filterFunc) {
    const outputArray = [];
    for (let i = 0; i < array.length; i++) {
      const isTrue = filterFunc(array[i], i);
      if (isTrue) {
        outputArray.push(array[i]);
      }
    }
    return outputArray;
  }

  const evenNumberFunction = function (number) {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };

  const numbers = [1, 2, 4, 5, 6, 7, 8];

  const evenNubmers = myFilter(numbers, evenNumberFunction);
  console.log(numbers, evenNubmers);

  // defining your custom functions

  // Array.prototype.filerByAnji = function (filterFunc) {
  //   const outputArray = [];
  //   console.log(this);
  //   for (let i = 0; i < this.length; i++) {
  //     const isTrue = filterFunc(this[i], i);
  //     if (isTrue) {
  //       outputArray.push(this[i]);
  //     }
  //   }
  //   return outputArray;
  // };
  //

  console.log(numbers, numbers.filerByAnji(evenNumberFunction));
}

// main2();
