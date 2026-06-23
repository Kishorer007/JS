// Task-1 Employee Information System

let employee = {};

employee.name = prompt("Enter Employee Name:");
employee.age = parseInt(prompt("Enter Employee Age:"));
employee.department = prompt("Enter Employee Department:");
employee.salary = parseFloat(prompt("Enter Employee Salary:"));

console.log("Employee Details:");
console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);

if (employee.salary > 30000) {
  console.log("Eligible for Bonus");
} else {
  console.log("Not Eligible");
}

console.log("==========================================");

// Task-2 Supermarket Billing

let productName = prompt("Enter Product Name:");
let productPrice = parseFloat(prompt("Enter Product Price:"));
let quantity = parseInt(prompt("Enter Quantity:"));

let totalBill = productPrice * quantity;

if (totalBill > 5000) {
  let discount = totalBill * 0.1;
  let finalAmount = totalBill - discount;
  console.log("Final Amount:", finalAmount);
} else {
  console.log("Final Amount:", totalBill);
}

console.log("==========================================");

// Task-3 Student Result Portal

let studentName = prompt("Enter Student Name:");
let marks = parseFloat(prompt("Enter Marks:"));

console.log("Student Name:", studentName);
console.log("Marks:", marks);

if (marks >= 90) {
  console.log("Grade A");
}

if (marks >= 75 && marks < 90) {
  console.log("Grade B");
}

if (marks >= 50 && marks < 75) {
  console.log("Grade C");
}

if (marks < 50) {
  console.log("Fail");
}

console.log("==========================================");

// Task-4 Bank ATM Eligibility

let userName = prompt("Enter User Name:");
let accountBalance = parseFloat(prompt("Enter Account Balance:"));
let withdrawalAmount = parseFloat(prompt("Enter Withdrawal Amount:"));

console.log("User Name:", userName);
console.log("Account Balance:", accountBalance);
console.log("Withdrawal Amount:", withdrawalAmount);

if (withdrawalAmount <= accountBalance) {
  console.log("Transaction Successful");
} else {
  console.log("Insufficient Balance");
}

console.log("==========================================");

// Task-5 Login Validation

let storedUsername = "admin";
let storedPassword = "12345";

let inputUsername = prompt("Enter Username:");
let inputPassword = prompt("Enter Password:");

if (inputUsername === storedUsername && inputPassword === storedPassword) {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

console.log("==========================================");

// Task-6 Online Food Order

let foodItems = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Tacos",
  "Salad",
  "Sandwich",
  "Ice Cream",
];

console.log("First Item:", foodItems[0]);
console.log("Last Item:", foodItems[foodItems.length - 1]);
console.log("Total Number of Items:", foodItems.length);

for (let item of foodItems) {
  console.log(item);
}

console.log("==========================================");

// Task-7 Company Employee Directory

let employee = {
  Name: prompt("Enter Employee Name:"),
  Age: parseInt(prompt("Enter Employee Age:")),
  Department: prompt("Enter Employee Department:"),
  Salary: parseFloat(prompt("Enter Employee Salary:")),
  Experience: prompt("Enter Employee Experience:"),
};

for (let key in employee) {
  console.log(key + ":", employee[key]);
}

console.log("==========================================");

// Task-8 Traffic Signal System

let signalColor = prompt("Enter Signal Color (Red/Yellow/Green):");

switch (signalColor.toLowerCase()) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

console.log("==========================================");

// Task-9 Age Category Checker

let age = parseInt(prompt("Enter Your Age:"));

if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 59) {
  console.log("Adult");
} else if (age >= 60) {
  console.log("Senior Citizen");
}

console.log("==========================================");

// Task-10 Employee Attendance

let empName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

attendance = attendance.toLowerCase() === "present" ? "Present" : "Absent";

console.log("Welcome", empName);
console.log("Attendance:", attendance);
