
// 1. Store employee name using var.
var employeeName = "Kishore R";

// 2. Store employee age using let.
let employeeAge = 23;

// 3. Store company name using const.
const companyName = "Stackly";

// 4. Print all details using console.log().
console.log("Employee Name : " + employeeName);
console.log("Employee Age : " + employeeAge);
console.log("Company Name : " + companyName);

// 5. Show a popup message:
alert("Welcome to Employee Portal");

// 6. Ask the employee:
let taskCompleted = confirm("Have you completed today's task?");
console.log(taskCompleted);

// 7. Ask the employee name using prompt().
let enteredName = prompt("Enter your name");
console.log(enteredName);

// 8. Display the entered employee name on the webpage.
document.writeln("Employee Name: " + enteredName );

// 9. Print a success message using console.warn().
console.warn("Task submitted successfully");    

// 10. Print an error message using console.error().
console.error("Task submission failed");
// Bonus Task:

// Update employee age after promotion
employeeAge = 24;
console.log("Updated Employee Age : " + employeeAge);