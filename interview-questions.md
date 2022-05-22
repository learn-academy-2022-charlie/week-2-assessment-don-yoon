# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

<br>

**All research was done with the syllabus as well as the given links**

### 1. What is the difference between a parameter and an argument?

  Your answer:

  > A parameter acts as a placeholder for your function input. This is one way we can keep track of what type of data will be required for your function to execute as intended by following a certain naming convention. The actual data that will be passed into the function is the argument.

  Researched answer:

  > We could think of a parameter as a variable for a function definition. We use it to hold the place for the argument that will be provided later. This lets us write ahead of time that action that will be performed on whatever inputs(arguments) will be passed into the function.
  Parameters are defined when we define the function and have a lifespan/lifetime of only the function. This is not to be confused with the scope. Lifespan/lifetime refers to how long the variable will hold its value whereas scope is referring to where we can access the variable.


>- https://www.baeldung.com/cs/argument-vs-parameter
>
>- https://bettersolutions.com/csharp/syntax/variables-scope-lifetime.htm#:~:text=Lifetime%20%2D%20Refers%20to%20how%20long,variable%20retains%20its%20value%20for.




### 2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:

  >The .map() method takes in value, index, and array. The only required parameter is value. Since .map() iterates through each element of the array, the value parameter is referring to the value of each element. This method is useful for performing some action to each element. The return is a NEW array with the actions performed on each element.

  Researched answer:

  >The wording about what .map returns needs to be clarified. The .map method will perform the provided function on every element in the array and populate a new array with the RESULTS. It does not change the original array it was called on. The method should not be used if the returned array will not be used. The forEach() method is a better option in that case because it will only execute the provided function once for each element in the array.
  Also I wanted to talk about the third parameter, array. Passing the array lets the callback function access the original array. It gives more to work with than just the current value of the iteration.
  A parameter not mentioned previously is thisArg. The parameter is useful when we want to use a function elsewhere in the code but requires us to change "this" within the scope of the method call. A good example can be seen in the link provided.

```
 let newArray = oldArray.map(callbackFunction, thisArg)

  const oldArray = [1, 4, 9, 16];

  function ourFunc(val, index, arr){
    return val * this.windowSize
  }

  const newArray = oldArray.map(ourFunc, {windowSize: 10});
 // newArray = [10, 40, 90, 169]
```
 
>JavaScript map function explained - a deep dive. Boot.dev. (2020, January 12). Retrieved May 20, 2022, from https://blog.boot.dev/javascript/javascript-map-function/ 


>-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
>
>-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  



### 3. What is the difference between map and filter?

  Your answer:

  >From my experience, .map() is a broader iterative method than .filter(). The .map() can perform a similar role as .filter() but will require more code to be written for certain needs. The .filter() has a built in conditional and bypasses the need to use the if syntax. The output of both methods are different as well. The .map() method will return an array of the same length the method was called on and the .filter() method will output an array consisting only of values that have satisfied a certain condition.

  Researched answer:

> I was curious as to why both .map() and .filter() were called methods. After learning in class that methods are essentially functions that are the properties of an object that are defined as functions, I wanted to see where they come from. There are massive classes with static properties that contain all of these methods. I couldn't understand what this did so I had to look further into what static meant and it took me a while to understand that static properties can be called upon with an object being instantiated, which took an even longer time to understand. Even after reading through documentation about what static is and what its good for, I feel that there I need actual real world examples of static properties being implemented to get a better understanding.
>
>    So to the best of my current knowledge, I understand that we can call on built in methods because they are static properties of the class they are defined in. This leads me to ask, then what are prototypes? Using prototypes to inherit features from objects to call on our array? So what is Array.prototype.map() doing? Prototypes allow you to add new properties to object constructors. So if we add a method to the Array constructor, all array objects will inherit this method and we can call on it because methods act upon the data within the scope of the object. arrays are objects and taking a look at the MDN polyfill for Array.prototype.map after this long convoluted path makes just a little bit more sense. So now I finally begin to understand what OOP means. Everything is treated as an object and thus inherits the properties of its parent class when being initialized. THEREFORE, all these wonderful built in methods can be called on these objects. So what about primitive data types? An object wrapper is created that contains the value of the string and the method is called and then destroyed (string methods for example).
>
>    So long story short, what's the difference? check the polyfill ``¯\_(ツ)_/¯``

>- https://javascript.info/primitives-methods
>
>- https://www.geeksforgeeks.org/javascript-array-prototype-constructor/#:~:text=The%20JavaScript%20array%20prototype%20constructor,Array.prototype.name%20%3D%20value"
>
>-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#see_also"
>
>-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
>
>-  https://robertwpearce.com/javascript-understand-array-prototype-map-by-reimplementing-it.html
>
>-  https://github.com/zloirock/core-js#readme
>
>-  https://www.w3schools.com/js/js_object_prototypes.asp
>
>-  https://www.freecodecamp.org/news/how-array-prototype-map-works-b6b69379c3af/


  


### 4. What is the difference between a function and a method?

  Your answer:

  > Functions and methods are both reusable blocks of code that executes an action. The difference is where they are found in the code. A function, once declared, can be called on from the code and can be passed data explicitly. Methods are functions within objects that only use data from within the object.

  Researched answer:

  > After doing some research, methods are actually considered to be properties of an object. It just so happens that the value of the object property is an actual function. The way we call on a function is by using the name of the function whereas to call on a method, we require using the object name. I ran across a lot of information about methods while doing research about built in methods. These methods and functions both have their uses. Functions are standalone pieces of reusable code where as once a function has been defined as a property within an object, they can be inherited by their child objects and reused within the scope of the newly constructed object.


### 5. What is object destructuring?

  Your answer:

  > It is used to easily access certain values within an object by defining a shorter path to the value required. You could also use object destructuring to iteratively access data inside if you didn't know how many keys or nested objects were inside. I used a similar method in one of the challenge questions this week that wanted to take a nested object and use destructuring to combine values from the arrays nested inside and return a string.

  Researched answer:

  > Object destructuring is a way to assign data from an the object into new variables. There are many ways to destructure an object and learning the techniques will be beneficial.
  
   
  The basic syntax for object destructuring is as follow:

```
  let {varA, varB} = {varA: "Value", varB: "Value"}
```
  
  This lets us do things like:

```
  let bestRpg = {
    name: "Elden Ring"
    hostsDefeated: 1000
    invadersDefeated: 1000
  }
```
  
  The order when declaring variables does not matter

```
  let {name, hostsDefeated, invadersDefeated} = bestRpg
  console.log(name) // "Elden Ring"
  console.log(hostsDefeated) // 1000
  console.log(invadersDefeated) // 1000
```
  
  We can also take only what we need

```
  let {hostsDefeated} = bestRpg
  console.log(hostsDefeated) // 1000

```
 
  The examples go on and on, but the most important one if I had to memorize, was this one.
  Given a certain nested object, the way to destructure would

```
let object = {
  prop1: {
    prop1A: "Value1"
    prop1B: "Value2"
  },
  prop2: {
    prop2A: ["Value3", "Value4"]
    prop2B: "Value5"
  }
}


let {
  prop1: {
    prop1A,
    prop1B
  },
  prop2: {
    prop2A: [varValue3, varValue4],
    prop2B
  }
} = object
```
>- https://javascript.info/destructuring-assignment#object-destructuring"

### 6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  > Hoisting is the precedence for certain actions within your code. Function and variable declarations will treated as if they had already been declared even if it comes later in the code. This lets you call a function before it has been declared, as long as it eventually is.

  Researched answer:

  > Hoisting means the order in which we see the code is not the order it is executed. JavaScript will move all declarations to the top of its current scope. In JavaScript, a variable can be used before it has been declared. This also applies to classes and functions. Functions can be used in the code before they are declared.

  ```
  //Function call
  myFunc("STUFF")
  
  //Function declaration
  function myFunc(something) {
    //code to be implemented
  }
  ```

  >  If there was no hoisting, the function, variable, or class would need to be declared prior to usage. Variable hoisting is a little bit different. In JavaScript variables hoisting only applies to declarations and not initializations. Until a variable is initialized, they have a default value of undefined if declared with var, or simply uninitialized if declared using let and const. 
>
>    Class and function expressions are not hoisted. If we think about it the expression is the initialization which is not hoisted in JavaScript.

  
>-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions
>
>-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
>
>- https://www.w3schools.com/js/js_hoisting.asp
>
>- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting








## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

### 1. Class Inheritance: 
 > This is the mechanism in which one class receives the properties of another class. The class that receives the properties is called the child, and the one that gave the properties to the child is called the parent. In JavaScript only single inheritance is allowed. In other languages such as python, the child can inherit the properties of multiple parents which has many useful applications as that lets us pick and choose only what we want/need. However this also leads to the problem of potentially overlapping  inheritances leading to ambiguity between the parent and child classes AKA the "Deadly Diamond of Death".

>- https://en.wikipedia.org/wiki/Multiple_inheritance#:~:text=Languages%20that%20support%20multiple%20inheritance,8.6%20or%20via%20Incremental%20Tcl
>
>- https://www.analyticsvidhya.com/blog/2020/10/inheritance-object-oriented-programming/#:~:text=Inheritance%20is%20the%20procedure%20in,class%20is%20the%20Child%20class.


### 2. React:
  >React is our real first foray into object oriented programming. React is a JavaScript library. It is part of the front-end tech stack and used to build user interfaces. What we see is created from components written in JSX. Class components include the extends React.Component, because it allows our class to inherit access to all the functions that the React library has to offer. These components can be passed as props (properties). We can also make nested components so we can keep reusing in other places.

>- https://reactjs.org/docs/components-and-props.html
>
>- https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.


### 3. React state:
  > As mentioned in the syllabus, React components can be placed in two categories, stateful and stateless. The object that stores the component's data which determines its behavior and render, is called State.

>- https://www.codecademy.com/learn/react-component-state/modules/react-102-stateless-inherit-stateful-u/cheatsheet#:~:text=In%20React%2C%20a%20stateful%20component,of%20components%20can%20use%20props."


### 4. React lifecycle methods:
  > There are 3 stages. Mounting, Updating, and unmounting. The mounting stage is when the instance of a component is created and introduced to the DOM. Two of the methods we are familiar with are the constructor() and the render(). The constructor initializes the instance and the render is what gives what the user sees. As the name suggests, the update cam be the result of changes to the props or state. The last unmounting phase is when a component is being disengaged from the DOM.

>- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
>
>- https://reactjs.org/docs/react-component.html#render

### 5. DOM:

>DOM is the document object model. It is a hierarchical tree that represents what we see, the webpage. Within every DOM, the HTML tags are considered to be objects. The nested tags are considered the children of the enclosing object. We learned that this type of behavior comes from class inheritance. Every tag that we see is called a node. Each node within the tree is also considered an object.

>- https://javascript.info/dom-nodes