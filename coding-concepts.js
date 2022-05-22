// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer:
// The .split() method will create an array and the given "" will cause each character to be placed into its own element.
// b) Verify and explain:
// We get some clues from the fact that is a method. If I am understanding correctly, all strings inherit certain properties from its parent object. Please correct me if I'm  wrong, but every time a string is initialized, it inherits the methods of its parent class String and therefore you will be able to method call on any string. This applies to all other methods.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer:
// There is no return, it will be undefined.
// b) Verify and explain:
// All functions requires a return syntax to have data that can be used outside of the scope of the function, otherwise it will return undefined. I guess if you wanted to use the undefined, it is technically data you could use, however your function would not execute as intended

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)

// a) Your answer:
//You would get the array [8, 10, 12, 14, 16]
// b) Verify and explain:
//You are declaring the variable multBy2 and initializing in the same line. The array [4, 5, 6, 7, 8] was given and the .map method was called. The .map method work on the instance of the given array to iterate through each element and perform the provided callback function. The .map() method can take in 3 (+1) parameters, value, index, and array (thisArgs). The return is a NEW array that is assigned to the variable multBy2. By logging the variable we can see the new array.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer:
//You would get the array [11, 13, 15]
// b) Verify and explain:
//The .filter() method is an iterator like .map(). It will iterate through every element of the given array and evaluate each element with the given conditional statement. The values of the elements that pass will be returned in a NEW array. The original array is untouched. Just like the .map() method, the .filter() method takes in 3 parameters. The new array is then assigned to onlyOdds and will return the array once logged.



// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}

// console.log(myCodingSkills.languages[0])

// a) Your answer:
//We would see the first element of the array with the unique id (key) languages. "JavaScript"
// b) Verify and explain:
// The way we access data is by referencing the object itself, appended using dot notation with the name of the key. The index notation is used because myCodingSkills.languages would be seen as the array ["JavaScript", "Ruby"]. The [0] refers to the first element which is the string "JavaScript". 

// --------------------STRETCH: What will this log?

/*
class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)
*/

// a) Your answer:
/*
{
  student: "George",
  cohort: "Bravo",
  year: 2022
}
*/
// b) Verify and explain:
//I forgot that logging will also show the name of the class the object was initialized with.
// Learn { student: 'George', cohort: 'Bravo', year: 2022 }

// However, what I should really see in class Learn is this.cohort = "Charlie".
// We can fix this mistake by directly accessing the object property and giving it a new value!

// learnStudent.cohort = "Charlie" 
// console.log(learnStudent)

// We could also add the parameter for cohort in the constructor.

// class Learn {
//   constructor(name, cohort){
//     this.student = name,
//     this.cohort = cohort,
//     this.year = 2022
//   }
// }

//This way, when we initialize a new student we can give it the values we want.

// var learnStudent = new Learn("Don", "Charlie")
// console.log(learnStudent)

// We could even do fun things like passing the parameters as an object and destructuring.
// REFER TO THIS LINK: https://stackoverflow.com/questions/32111562/in-a-js-class-what-is-the-better-way-to-call-super-passing-all-the-arguments-up

// We can assign an empty object to learnParams and destructure and add what we need.
class Learn {
  constructor(learnParams = {}){
    let {
      student = student,
      cohort = cohort,
      year = year
    } = learnParams
    
    this.student = student,
    this.cohort = cohort,
    this.year = year
  }
}

//This way when we create child classes using the Learn class, we can avoid retyping all the parameters in the super every time.

 class FutureAlumni extends Learn {
   constructor(learnParams = {}){
     super(learnParams)
        //Only need to destructure what we want to add, since we have inherited the rest.
        let {
          job = job
        } = learnParams
        
        this.job = job
   }
   cashMoney(){
     if(this.job === false){
       return "I see success in your future."
     } else {
       return "Moving on up"
     }
   }
 }
// we can store all the parameter data in a separate object
var learnFutureAlumni = new FutureAlumni({student:"Don",cohort: "Charlie",year: 2022,job: false})

//This may seem like extra work seeing how we need to put in basically the same object we get out, However if we had multiple methods to inherit every time, it could be very time consuming. Some other test cases would be creating another class for only creating objects for parameters for other classes.

console.log(learnFutureAlumni.cashMoney())
