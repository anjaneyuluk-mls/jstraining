// we need variables to store data so we can use that later point of time

// we have 3 ways we can declare a variable
// 1) let - a block scoped variable {}
// 2) const - a block scoped variable once assigned can not be reassigned
// 3) var - a functional scoped variable
function main() {
  const name = 'anji';
  let age = 32;
  var designation = 'Software Engineer';

  if (true) {
    let aLet = true; // use "var" instead of "let"
  }
  try {
    console.log('my let outside block', aLet);
  } catch (error) {
    console.log('hey stupid you can not access block variable outside block');
  }
  if (true) {
    var bVar = true; // use "var" instead of "let"
  }
  console.log('my var outside block', bVar);
  // local variable vs outer variable

  let outer = 100;
  for (let inner = 0; inner < 2; inner++) {
    console.log('can I access outer', outer + inner, ' :yes');
  }
  try {
    console.log('can I access inner', inner, ' :yes');
  } catch (error) {
    console.log('can I access inner', ' :no');
  }
}
main();
// go through functions.js before going futher

// what is hoisting?
// when you decalre a variable in functional scope,
// it does not matter where you declare it will be hoisted on top,
// basically all variable declarations will go start of the scope

function varHoisting() {
  console.log('var my variable', a);
  var a = 10;
}
// is equivalent to or will be converted to the following function
function varHoistingConverted() {
  var a;
  console.log('var my variable', a);
  a = 10;
}

function varAssignedHoisting() {
  var b = a;
  var a = 10;
  console.log('varassignedHoisting', b);
}

function varAssignedHoistingConverted() {
  var a;
  var b;
  b = a;
  a = 10;
  console.log('varassignedHoisting', b);
}
varAssignedHoisting();

function hoistingExample() {
  console.log('hoisting example can you access var', a, ': yes');
  try {
    console.log('can let be hoisted?', b, ':yes');
  } catch (error) {
    console.log('can let be hoisted?', ':no');
  }
  try {
    console.log('can const be hoisted?', c, ':yes');
  } catch (error) {
    console.log('can const be hoisted?', ':no');
  }
  var a = 10;
  let b = 9;
  const c = 20;
}

hoistingExample();
try {
  console.log('can you access variable outside function', a, 'yes');
} catch (error) {
  console.log('you can not access a variable outside function');
}
