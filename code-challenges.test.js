// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//TODO --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

//TODO a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

//First we create our test
describe("mult3", () => {
    //We can declare the variables we will use within the scope of our test function
    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]

    //We wil use the it statement to give an idea of our future function
    it ("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        //Use the expect syntax to load our test cases
        expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(mult3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})
// We run our test and want to see that it works, we know the test works if it returns the following error.
//! ReferenceError: mult3 is not defined

//TODO b) Create the function that makes the test pass.
//We first start by declaring our function, mult3, which takes in an array as its parameter

// const mult3 = (array) => {
//     //We can use a single line using the .map() method because it will return a new array without mutating the original
//     return array.map(value => value * 3)
// }

//We then run our tests and ... voila!

// PASS  ./code-challenges.test.js
// mult3
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// At this point we can try to refactor: Don't forget to comment out previous function. Good Pass!
const mult3 = array => array.map(value => value * 3)

// PASS  ./code-challenges.test.js
// mult3
// ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)


//TODO --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

//First we create our test function. The name of our future function will be called isDivBy3.
describe("isDivBy3", () => {
    //We declare and initialize our variables to be used in the scope of our test function
    const num1 = 15
    // Expected output: "15 is divisible by three"
    const num2 = 0
    // Expected output: "0 is divisible by three"
    const num3 = -7
    // Expected output: "-7 is not divisible by three"
    //We use the it statement to elaborate on how we expect our function to behave
    it("takes a number as an argument and decides if the number is evenly divisible by three or not", () => {
        //load test cases in the next part
        expect(isDivBy3(num1)).toEqual("15 is divisible by three")
        expect(isDivBy3(num2)).toEqual("0 is divisible by three")
        expect(isDivBy3(num3)).toEqual("-7 is not divisible by three")
    })
})

//Run the test! Good Failure

//! ReferenceError: isDivBy3 is not defined

//TODO b) Create the function that makes the test pass.

//Function will take a number as an argument and check to see if the number is evenly divisible by 3. If it is divisible by 3, it will return a string that says number is evenly divisible by 3.
//Declare function isDivBy3

//  const isDivBy3 = (number) => {
//     //Write a conditional statement that will check if the number given is evenly divisible by 3
//     if (number % 3 === 0) {
//         //If the number is evenly divisible by 3, return "number is evenly divisible by 3."
//         return `${number} is divisible by three`
//     } else {
//         //Any other condition will not be divisible by 3 and will return the following string
//         return `${number} is not divisible by three`
//     }
// }

//Run the test to see if it work! Good Pass!

// PASS  ./code-challenges.test.js
// mult3
// ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
// isDivBy3
// ✓ takes a number as an argument and decides if the number is evenly divisible by three or not

//TODO Let's see if we can refactor. We can use ternary operators to see if we can reduce how much we have to type
// This statement will be evaluated as 
// condition ? expression1 : expression2
// if the condition is true, then expression1
// if the condition is false, then expression2

 const isDivBy3 = number => number % 3 === 0 ?`${number} is divisible by three` : `${number} is not divisible by three`

//  PASS  ./code-challenges.test.js
//  mult3
//    ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
//  isDivBy3
//    ✓ takes a number as an argument and decides if the number is evenly divisible by three or not


//TODO --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//TODO a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Business as usual, create the test. Function will be named capArray and it will take in an array of strings
describe("capArray", () => {
    //variables scoped for test function
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    //What our function will do and test cases
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})
//Run test and good failure!

//! ReferenceError: capArray is not defined

//TODO b) Create the function that makes the test pass.

//Declare function capArray with parameter array
// const capArray = (array) => {
//     //We need a way to only capitalize the first letter of every element. If we are going to iterate through an array we can use the .map() method
//     let cappedArray = array.map(value => {
//         //We only uppercase the at index 0 for the string and start the substring at index 1 and use the + operator to concat.
//         return value[0].toUpperCase() + value.substring(1)
//     })
//     //Since the .map() method returns a new array and we have assigned it to cappedArray, we just return the variable
//     return cappedArray
// }

//Test... good pass!

// PASS  ./code-challenges.test.js
// mult3
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (2 ms)
// isDivBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisible by three or not
// capArray
//   ✓ takes in an array of words and returns an array with all the words capitalized

//TODO Time to refactor, since there is only 1 line to return maybe we can ignore the return syntax because it will assume if we inline. Also only 1 parameter so we can remove the parentheses. Since the function does not need to evaluate any conditional statements and have potentially different returns, we can reduce all to a single line.

const capArray = array => array.map(value => value[0].toUpperCase() + value.substring(1))

// Test is... GOOD!

// PASS  ./code-challenges.test.js
// mult3
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
// isDivBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisible by three or not
// capArray
//   ✓ takes in an array of words and returns an array with all the words capitalized



//TODO --------------------3) Create a function that takes in a string and logs the index of the first vowel.


//TODO a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// Test time. Lets call our function firstVowel, takes in a single string
describe("firstVowel", () => {
    //Already got everything we need for the tests.
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    // Use it to document function behavior and test cases. We expect our output to be the number of the index
    it("takes in a string and logs the index of the first vowel", () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// Run test... GOOD FAILURE!
//! ReferenceError: firstVowel is not defined

//TODO b) Create the function that makes the test pass.

//Declare our function, firstVowel, which takes in a string as its parameter
// const firstVowel = (string) => {
    //We need a way to parse the string and regardless of what the vowel is, return the index of the first vowel. We can use regular expressions with the flag "i" to show that it is a case insensitive search. We use .search() which will give us the index of the regular expression, regex. The / / shows what pattern to search for. the [] within shows that it is a group we are looking for. So when the search method finds the first instance of any of the characters in the group, it will return that index.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//     return string.search(/[aeiou]/i)
// }

// Run the test! drumroll.... good pass!

// PASS  ./code-challenges.test.js
// mult3
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
// isDivBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisible by three or not
// capArray
//   ✓ takes in an array of words and returns an array with all the words capitalized
// firstVowel
//   ✓ takes in a string and logs the index of the first vowel (1 ms)

//TODO Refactor
//We can shorten everything into a single line. We can get rid of the parentheses around the parameter and the curly brace since it is one return as well as the return syntax. Then we can check to see if it passes.

const firstVowel = string => string.search(/[aeiou]/i)

// And we are good to go

// PASS  ./code-challenges.test.js
// mult3
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
// isDivBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisible by three or not
// capArray
//   ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)
// firstVowel
//   ✓ takes in a string and logs the index of the first vowel (2 ms)
