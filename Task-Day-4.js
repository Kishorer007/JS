// Task-1 Employee Management System

let emp = [
    {
        name: "Kishore",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    }
];

for(let e of emp){
    console.log(e);
    if(e.salary > 30000){
        console.log("Employee Eligible For Bonus");
    }
    else{
        console.log("Employee Not Eligible For Bonus");
    }
}

console.log("==========================================");

// Task-2 Student Result Portal

let studentName = prompt("Enter Student Name:");
let marks = parseFloat(prompt("Enter Marks:"));

console.log("Student Name:", studentName);
if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 80 && marks < 90) {
    console.log("Grade A");
}
else if (marks >= 70 && marks < 80) {
    console.log("Grade B");
}
else if (marks >= 60 && marks < 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Task-3 E-Commerce Cart

let products = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:1000},
    {name:"Keyboard", price:2000}
];

function calculateTotalBill(products) {
    let totalBill = 0;
    for (let product of products) {
        totalBill += product.price;
    }
    if (totalBill > 5000) {
        let discount = totalBill * 0.1;
        let finalAmount = totalBill - discount;
        console.log("Final Amount after 10% discount:", finalAmount);
    } else {
        console.log("Final Amount:", totalBill);
    }
}

// calculateTotalBill(products);

console.log("==========================================");

// Task-4 Login Authentication

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful!");
} else {
    console.log("Invalid Username or Password!");
}   

console.log("==========================================");

// Task-5 Traffic Signal System

let signalColor = prompt("Enter Traffic Signal Color (Red/Yellow/Green):");

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
        console.log("Invalid Color");
}

console.log("==========================================");

// Task-6 ATM Withdrawal System

let balance = parseFloat(prompt("Enter Your Balance:"));
let withdrawalAmount = parseFloat(prompt("Enter Withdrawal Amount:"));

if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("Withdrawal Successful! Remaining Balance:", balance);
}
else {
    console.log("Insufficient Balance!");
}

console.log("==========================================");


// Task-7 Online Food Order

function orderFood(callback) {
    console.log("Order Received");
    setTimeout(() => {
        console.log("Food Preparing");
        callback();
    }, 2000);
}

function deliverFood() {
    setTimeout(() => {
        console.log("Food Delivered");
    }, 2000);
}

orderFood(deliverFood);


console.log("==========================================");

// Task-8 Cashback Generator (Generator Function)



function* cashbackGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

const cashback = cashbackGenerator();
console.log(cashback.next().value);
console.log(cashback.next().value);
console.log(cashback.next().value);
console.log(cashback.next().value);


// console.log("==========================================");


// Task-9 Hospital Patient Check

let age = parseInt(prompt("Enter Age:"));
let weight = parseFloat(prompt("Enter Weight:"));

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible: Weight should be above 50");
    }
} else {
    console.log("Not Eligible: Age should be above 18");
}

console.log("==========================================");
console.log("==================   Mini Employee Portal       ===================");
console.log("==========================================");

// Task-10 Final Real-Time Project (Mini Employee Portal)

let employees = [
    { id: 1, name: "Kishore", position: "Software Engineer", salary: 75000 },
    { id: 2, name: "Kiran", position: "Data Analyst", salary: 65000 },
    { id: 3, name: "Rajesh", position: "Project Manager", salary: 85000 }
];

function addEmployee(id, name, position, salary) {
    employees.push({ id, name, position, salary });
    console.log("Employee Added Successfully!");
}

function viewEmployees() {
    console.log("Employee List:");
    for (let emp of employees) {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
    }
}

function calculateBonus(id) {
    let employee = employees.find(emp => emp.id === id);
    if (employee) {
        let bonus = employee.salary * 0.1;
        console.log(`Bonus for ${employee.name}: ${bonus}`);
    } else {
        console.log("Employee Not Found!");
    }
}

function searchEmployeeById(id) {
    let employee = employees.find(emp => emp.id === id);
    if (employee) {
        console.log(`Employee Found: ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}, Salary: ${employee.salary}`);
    }
    else {
        console.log("Employee Not Found!");
    }
}

function deleteEmployee(id) {
    let index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee Deleted Successfully!");
    } else {
        console.log("Employee Not Found!");
    }
}

function totalEmployeesCount() {
    console.log("Total Employees Count:", employees.length);
}

addEmployee(4, "Radha", "QA Engineer", 55000);
viewEmployees();
console.log("==========================================");
calculateBonus(2);
searchEmployeeById(3);
deleteEmployee(1);
totalEmployeesCount();
console.log("==========================================");
viewEmployees();
















