import 'babel-polyfill'

import * as alias from './modules/uppercase'

console.log('starting test')

// strings not only have .trim(), but also .trimStart() and .trimEnd()
console.log('  andy  '.trim())
console.log('  andy  '.trimStart())
console.log('  andy  '.trimEnd())

// arrays now have a .includes() method!
const someArray = [1, 2, 3, 4]
console.log(someArray.includes(3)) // true

// arrays have a .flat() method, to remove dimensionality
const preFlattenedArray = [1, 2, [3, 4, [5, 6]]]
console.log(preFlattenedArray.flat()) // [1, 2, 4, 5, [5, 6]]
console.log(preFlattenedArray.flat().flat()) // [1, 2, 3, 4, 5, 6]
console.log(preFlattenedArray.flat(Infinity)) // [1, 2, 3, 4, 5, 6]

// Math.pow() can be done with **
console.log(Math.pow(2, 3) === 2 ** 3) // true

// shallow copy an object with Object.assign()
const originalObj = { name: 'andy', age: 32 }
const newObjCopy = Object.assign({}, originalObj)
console.log(newObjCopy)
// note that object REFERENCES are copied
const person = { me: originalObj }
const personCopy = Object.assign({}, person)
originalObj.age += 1
console.log(personCopy.me.age) // 33

// Strings have a .padStart() and .padEnd() methods
// so you can easily make a string any length you want

// Objects have .keys(), .values(), .entries(), and .fromEntries() methods
const thisIsAnObject = { name: 'andy', age: 32, height: 87 }
console.log(Object.keys(thisIsAnObject)) // ['name', 'age', 'height']
console.log(Object.values(thisIsAnObject)) // ['andy', 32, 87]
console.log(Object.entries(thisIsAnObject)) // [['name', 'andy'], ['age', 32], ['height', 87]]
console.log(Object.fromEntries(Object.entries(thisIsAnObject))) // { name: 'andy', age: 32, height: 87 }

// SPREAD
// use three dots (...) to "spread" an array or object inside a new one
const oldArray = [1, 2, 3]
const newArray = [...oldArray, 4, 5, 6]
console.log(newArray)
const preSpreadObj = { name: 'andy', age: 32 }
const postSpreadObj = { ...preSpreadObj, height: 87 }
console.log(postSpreadObj)
// when used on an String, it will separate the letters into an array
const hey = 'hey'
const spreadHey = [...hey]
console.log(spreadHey) // ['h', 'e', 'y']
// can be used to break apart an array into arguments to a function
const spreadFunc = (x, y) => x + y
const someSpreadArray = [1, 2]
console.log(spreadFunc(...someSpreadArray)) // 3
// you can also use it to break apart an array into variables
const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [first, second, ...otherNumbers] = someNumbers
console.log(first, second, otherNumbers)
// same with objects
const thingObject = {
  firstThing: 1, secondThing: 2, thirdThing: 3, fourthThing: 4, fifthThing: 5
}
const { firstThing, secondThing, ...otherThings } = thingObject
console.log(firstThing, secondThing, otherThings) // 1, 2, Object
// can then be recombined
console.log({ firstThing, secondThing, ...otherThings }) // original object

// object literals can automatically take the variable name as object key
const something = 'thing'
const someObject = { something }
console.log(someObject)
// object keys can be dynamically generated, when square brackets around them
const keySubName = 'the'
const varKeyObj = {
  [`${keySubName}Key`]: 'theValue'
}
console.log(varKeyObj.theKey)

// LOOPS
// loop through object keys with for...in
for (const k in { a: 1, b: 2 }) {
  console.log('Key', k)
}
// loop through array values wiht for...of
for (const v of [1, 2, 3]) {
  console.log(v)
}
// you can also get the index of each value with Array.entries()
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(i, v)
}

// SETs
// store only unique items
const mySet = new Set()
mySet.add('one')
mySet.add('two')
mySet.add('two')
console.log(mySet) // one, two
console.log(mySet.size) // 2
console.log(mySet.has('two'), mySet.has('three')) // true, false
mySet.delete('two')
console.log(mySet.has('two')) // false
mySet.add('two')
mySet.add('three')
mySet.add('four')
for (const v of mySet) {
  console.log(v)
}
mySet.clear()
console.log(mySet.size) // 0
// initialize with an array
console.log(new Set([1, 2, 3, 4, 5, 6, 6])) // 1, 2, 3, 4, 5, 6
// conver to an array
console.log([...new Set([1, 2, 3])])

// MAPs
// Instead of using objects, you can use Map to key-value mappings
const m = new Map()
m.set('name', 'andy')
m.set('age', 32)
console.log(m.get('name'))
console.log(m.size) // 2
m.delete('name')
console.log(m.size) // 1
console.log(m.has('name')) // false
console.log(m.has('age')) // true
m.clear()
// you can initialize a Map with values, like arrays
const newMap = new Map([
  ['name', 'andy'], ['age', 32], ['height', 87]
])
// NOTE: like an object, anything can be used as a key (not just strings)
// loop through key-value pairs
for (const [k, v] of newMap) {
  console.log(k, v)
}

// Template Literals
// strings that can hold variable name
// use back-tick `` instead of quotes, and embed with ${}
const firstName = 'andy'
const lastName = 'sigler'
const fullName = `${firstName} ${lastName}` // note the tick `` marks
console.log(fullName)
// multi-lines by just simply making a new line
const multiLineLiteral = `first line
second line`
console.log(multiLineLiteral)

// destructuring, you can separate an object into separate variables
const myObj = { speed: 100, width: 200 }
const { speed, width } = myObj
console.log(speed, width) // prints 100, 200
// also words on arrays
const myArray = ['a', 'b', 'c', 'd', 'e']
const [firstL, secondL, , , fifthL] = myArray
console.log(firstL, secondL, fifthL)
// also there are default values you can use when destructuring
const otherObj = { depth: 100, height: 200 }
const { depth = 0, height = 0, size = 0 } = otherObj
console.log(depth, height, size) // prints 100, 200, 0
// rename the variable using a semicolon
const { depth: newDepth = 1, speed: newSpeed = 1 } = otherObj
console.log(newDepth, newSpeed) // prints 100, 1

// single line functions
const implicitReturn1 = () => { 'hello' }
console.log(implicitReturn1()) // returns 'hello'
const implicitReturn2 = () => 'hello'
console.log(implicitReturn2()) // returns 'hello'
const implicitReturn3 = () => ({ msg: 'hello' })
console.log(implicitReturn3()) // returns {msg: 'hello'}
// NOTE: parenthesis required, else JS thinks curly-braces are for a function

const singleParams1 = (x) => x + 1
singleParams1()
const singleParams2 = x => x + 1 // single param does NOT need parenthesis
singleParams2()
const singleParams3 = (x, y) => x + 1 // multi params DO need parenthesis
singleParams3()

// arrow functions do NOT work normally with "this"
// "this" refers to the object at which the function is defined
// NOT where the function is called from...
const car1 = {
  name: 'toyota1',
  getName: () => this.name
}
const car2 = {
  name: 'toyota2',
  getName: function () { return this.name }
}

console.log(car1.name) // 'toyota1'
// car1.getName(); // ''
console.log(car2.name) // 'toyota2'
console.log(car2.getName()) // 'toyota2'

// classes
class Person {
  constructor (name) {
    this._name = name
  }

  get name () {
    return this._name
  }

  set name (newName) {
    this._name = newName
  }

  hello () {
    return `Hello, I am ${this.name}`
  }

  static genericHello () {
    return 'Hello'
  }
}

class Programmer extends Person {
  hello () {
    return `${super.hello()}, a programmer` // note the "super"
  }
}

const p = new Programmer('andy')
console.log(p.name) // getter
p.name = 'sigler' // setter
console.log(p.name)
console.log(p.hello())
console.log(Person.genericHello())

// functions with default args
const paramFunc = (x = 1, y = 1) => x + y
console.log(paramFunc())
console.log(paramFunc(2))
console.log(paramFunc(2, 2))

// use destructuring in default object arguments
const objFunc = ({ thing = 'hat', color = 'red' }) => {
  return `My ${thing} is ${color}`
}
console.log(objFunc({ thing: 'coat' }))

// GENERATORS
// run in background, like Promise, except they can pause/resume
// define with a "*" before the name (or at end of function word)
// use the "yield" to pause
function * calculator (input) {
  const doubleThat = 2 * (yield (input / 2))
  const another = yield (doubleThat)
  return (input * doubleThat * another)
}
const calc = calculator(10)
console.log(calc.next()) // { done: false, value: 5 }
console.log(calc.next(7)) // { done: false, value: 14 }
console.log(calc.next(100)) // { done: true, value: 14000 }

// MODULES
// was imported at top of file...
console.log(alias.makeUpper('andy')) // ANDY
console.log(alias.makeLower('ANDY')) // andy

// PROMISES
// use Promise.all() to sync multiple promises
const f1 = new Promise((resolve, reject) => { resolve('Ok 1') })
const f2 = new Promise((resolve, reject) => { resolve('Ok 2') })
Promise.all([f1, f2]).then(res => console.log('Array of results: ' + res))
// use Promise.race() to return one just 1 of the promises finishes
const f1Sleep = new Promise((resolve, reject) => { resolve('Ok 1') })
const f2Sleep = new Promise((resolve, reject) => { resolve('Ok 2') })
Promise.race([f1Sleep, f2Sleep]).then(res => {
  console.log('The fastest result: ' + res)
})

// ASYNC and AWAIT
// async functions return a promise
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved async')
    }, 1000)
  })
}
// the CLIENT FUNCTION (function that calls the Promise-returning function)
// must be defined as ASYNC!!!
// you can't just throw a random "await doSomethingAsync()" anywhere
const doSomething = async () => {
  const retVal = await doSomethingAsync()
  return retVal
}
console.log('Before calling async function')
doSomething()
  .then(console.log)
  .catch(() => console.log('error'))
  .finally(() => console.log('finally done'))
console.log('After calling async function')
