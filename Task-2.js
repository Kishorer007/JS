// 1.Employe  Registration

let employeeName = "Kishore R";

console.log("Employe Name :", employeeName);

const employeeId = "EMP0123";

console.log("Employe ID :", employeeId);

let department = "Development";

console.log("Department :", department);

const salary = 50000;

console.log("Salary :", salary);

let isPermanent = confirm("Is Permanent Employee?");

console.log("Permanent :", isPermanent);

// Task-2: Employee Skills

var skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

console.log("First Skill :", skills[0]);

console.log("Third Skill :", skills[2]);

console.log("Last Skill :", skills[skills.length - 1]);

console.log("Total Skills :", skills.length);

// 3. Company Object

const company = {
  companyName: "Stackly",
  location: "Salem",
  employees: 100,
  technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
};

console.log("Company Name :", company.companyName);

console.log("Location :", company.location);

console.log("Second Technology :", company.technologies[1]);

console.log("Total Technologies :", company.technologies.length);

// 4. Salary Calculator

let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

let tax = totalSalary * 0.1;

let finalSalary = totalSalary - tax;

console.log("Basic Salary :", basicSalary);

console.log("Bonus :", bonus);

console.log("Total Salary :", totalSalary);

console.log("Tax :", tax);

console.log("Final Salary :", finalSalary);

// 5. Attendance Checker

let attendance = 92;

let examStatus = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

console.log("Attendance :", attendance);

console.log("Exam Status :", examStatus);

// 6. Login Verification

let username = "admin";
let password = "1234";

if (username === "admin" && password === "12345") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}

// 7. Product Billing

let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log("Product :", productName);

console.log("Price :", productPrice);

console.log("Quantity :", quantity);

console.log("Total :", totalBill);

// 8. Increment & Decrement

let a = 100;

console.log("Initial Value of a :", a);

// Pre Increment
console.log("Pre Increment :", ++a);

// Post Increment
console.log("Post Increment :", a++);

// Pre Decrement
console.log("Pre Decrement :", --a);

// Post Decrement
console.log("Post Decrement :", a--);

// 9. Comparison Checker

console.log(10 == "10"); // true

console.log(10 === "10"); // false

console.log(20 != "20"); // false

console.log(20 !== "20"); // true

console.log(5 < 10); // true

console.log(15 >= 20); // false

console.log(100 <= 100); // true

// 10. User Interaction

let empName = prompt("Enter Employee Name:");

let empAge = prompt("Enter Employee Age:");

let joinCompany = confirm("Do you want to join our company?");

if (joinCompany) {
  alert("Welcome, " + empName);
} else {
  alert("Thank You");
}

// Final Challenge: Mini Employee Portal

console.log("====================================");

console.log("          EMPLOYEE PORTAL          ");

console.log("====================================");

console.log("Employee Name :", employeeName);

console.log("Employee ID   :", employeeId);

console.log("Department    :", department);

console.log("Experience    :", "Fresher");

console.log("Salary        :", salary);

console.log("Bonus         :", bonus);

console.log("Final Salary  :", finalSalary);

console.log("Skills        :", skills.join(", "));

console.log("Attendance    :", attendance + "%");

console.log("Exam Status   :", examStatus);

console.log(
  "Login Status  :",
  username === "admin" && password === "12345" ? "Success" : "Failed",
);

console.log("Company       :", company.companyName);

console.log("Location      :", company.location);

console.log("====================================");
