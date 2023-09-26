// answers to the js task

//Variables task
/*Working with variables
importance: 2

   1. Declare two variables: admin and name.
   2. Assign the value "John" to name.
   3. Copy the value from name to admin.
   4. Show the value of admin using alert (must output “John”).

   */
   //solutoin 
// Declare variables
let admin;
let name;

// Assign a value to 'name'
name = "John";

// Copy the value from 'name' to 'admin'
admin = name;

// Display the value of 'admin' using 'alert'
alert(admin); // This will display "John" in an alert dialog

/*
In this code:

    We declare two variables, admin and name.
    We assign the string "John" to the name variable.
    We copy the value of name into the admin variable.
    Finally, we use alert to display the value of admin, which will output "John" in an alert dialog.
*/


/*
is else required
//Functions task
importance: 4

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

Is there any difference in the behavior of these two variants?
*/

//solution
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

/*
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

//solution

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
);


//fizBuzz
/*Write a program that shows all numbers between 1 and 100 with the following exceptions:

    It shows "Fizz" instead if the number is divisible by 3.

    It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
*/

//the solution

function getFizzBuzzValue(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number.toString();
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(getFizzBuzzValue(i));
}




