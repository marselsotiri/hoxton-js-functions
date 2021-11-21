/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a=Number(),b=Number()) {
    return a+b
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(n=Number()) {
      if (n % 2 == 0) return true
      else return false  
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(user='') {
    return `Hi ${user}`
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age=Number()) {
    if (age>18) return true
    else return false
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age=Number()) {
    if (age < 18) return 18-age
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  
//   function admit(age=Number(),name='') {
//     if (age > 18) return `Greeting ${name}`
//     else return `Turn back in ${18-age} years`
//     // use greet, isAnAdult and yearsToAdulthood to help you!
//   }
  
function admit(age=Number(),name='') {
    if (isAnAdult(age)) return `${greet(name)}`
    else return `Turn back in ${yearsToAdulthood(age)} years`
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }

  const myNumber=add();

  console.log(myNumber);

  console.log(isEven(myNumber));

  console.log(admit(16,'Beni'));