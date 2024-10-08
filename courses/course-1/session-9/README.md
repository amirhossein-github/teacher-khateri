# Summary of the Ninth Session
**Date:** 1403,05,14 - 2024,08,04

## Examining Class Exercises: The Method of Work '&&' and '||'
- In 'And &&' logical statement. The priority is whit 'False' then 'True'. This means that in 'And &&' statement, the first 'False' is returned, and if not, the last 'True'.
- In 'Or ||' logical statement. The priority is whit 'True' then 'False'. This means that in 'Or ||' statement, the first 'True' is returned, and if not, the last 'False'.

## How to be a Better Developer.
- Maintain clean code writing.
- Choose a suitable name for the variables.
- Complete the cartoon, not just finish the work.
- The program you write must be development.
- Document your project. (anything that makes you more familiar with the code).
- Be creative.
- Beautiful performance and output.
- Have a good user interface.
- Add more options.
- Solving other people's problems.
- Having a good repository (good commits and readme files).

## Functional Programming

#### Tips
- Places that are going to be repeated a lot and the structure is such that it is going to be used a lot.
- If we want to repeat a process several times, we either have to write code continuously or we have to call the function of that part of the code.
- For input form validation, if we call a method, it should not be just for that method, it should be a method that we should use whenever needed.

#### Syntax
```js
// Function syntax
function Name(parameter1, parameter2, ...) {
    // Code
}

// Call the function
Name(argument1, argument2, ...)
```

#### Example
```js
function nameJ(str1, num) {
    console.log(st1)
}

name('Hi :)')
```

#### Return in Function
```js

function calc(num1, num2, operator){

    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
        return num1 / num2
    } else {
        console.log('Error')
    }
    
}

console.log(calc(5, 5, '/'))
```

## Exercises
1. Write a function that when we call that function console.log(), similar to the given example, it will give us a string about the information of that object.
```js
const user1 = {
    name: "Jasem",
    lastName: "Amiri",
    age: 10
}
const user2 = {
    name: "Admad",
    lastName: "Ghasemi",
    age: 22
}
const user3= {
    name: "Mohsen",
    lastName: "Ahmadi",
    age: 7
}
const user4 = {
    name: "Mina",
    lastName: "Mohseni",
    age: 72
}

// mesali as khoroji function => "Ahmad Ghasemi is 22"
console.log(introductionTheUser(user1))
console.log(introductionTheUser(user2))
console.log(introductionTheUser(user3))
console.log(introductionTheUser(user4))
```
2. Write a function that returns the last character from the string.
Note: Under no circumstances should the 'undefined' log be taken Write a warning or error instead.

3. Write a function that takes two parameters: ('string', 'numberOfCharacters'). The function should work in such a way that it shows the number of characters from the beginning of the string to 'numberOfCharacters'.
Note: "A B C" => 3 // Without space

4. Write a function that takes two input arrays and adds them together.
```js
console.log(mergeArrays([1, 2, 3], [4, 5, 6,])); // [1,2,3,4,5,6]
```

5. Write a function that will show us the number of English-vowels(`Aa Ee Ii Oo Uu`) in a string.