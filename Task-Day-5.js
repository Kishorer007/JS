// Task-1 Employee Salary

let monthlySalary = 45000;

function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

console.log("Yearly Salary : ₹" + yearlySalary(monthlySalary));

console.log("=========================================");



// Task-2 Student Pass or Fail

let studentMarks = 72;

function checkPassOrFail(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }

}

console.log("Student Result : " + checkPassOrFail(studentMarks));

console.log("=========================================");


// Task-3 Food Bill

let burgerPrice = 180;
let quantity = 3;

function totalBill(price, quantity) {
    return price * quantity;
}

console.log("Total Bill : ₹" + totalBill(burgerPrice, quantity));

console.log("=========================================");


// Task-4 Welcome Employee



function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}

welcomeEmployee("Kishore", "IT");

console.log("=========================================");


// Task-5 Shopping Discount

let price = 5000;
let discount = 500;

function finalAmount(price, discount) {
    return price - discount;
}

console.log("Price : ₹" + price);
console.log("Discount : ₹" + discount);
console.log("Final Amount : ₹" + finalAmount(price, discount));

console.log("=========================================");

// Task-6 Company Login

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(function() {
    console.log("Welcome to the Company!");
});

console.log("=========================================");


// Task-7 Food Delivery

function orderReceived(callback) {
    console.log("Order Received");
    callback();
}

orderReceived(function() {
    console.log("Your order is being prepared!");
});

function preparingFood(callback) {
    console.log("Preparing Food");
    callback();
}

preparingFood(function() {
    console.log("Out For Delivery!");
});


console.log("=========================================");


// Task-8 Lucky Draw

function* luckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

const draw = luckyDraw();
console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);

console.log("=========================================");

// Task-9 Employee Bonus

function bonus(salary) {
    return function(bonusAmount) {
        return salary + bonusAmount;
    }
}

console.log("Total Salary : ₹" + bonus(50000)(5000));

console.log("=========================================");

// Task-10 Merge Employee Details

let employeePersonal = {
    name: "Kishore",
    age: 23,
    city: "Chennai"
};

let employeeOffice = {
    department: "Development",
    salary: 50000
};

let mergedEmployeeDetails = { ...employeePersonal, ...employeeOffice };

console.log("Merged Employee Details : ", mergedEmployeeDetails);

console.log("=========================================");

// Task-11 Shopping Cart

let cart1 = ["Mobile", "Laptop"];
let cart2 = ["Headphone", "Charger"];

let mergedCart = [...cart1, ...cart2];

console.log("Merged Cart : ", mergedCart);

console.log("=========================================");


// Task-12 Student Marks

function student(name, ...marks) {
    let totalMarks = marks.reduce((total, mark) => total + mark, 0);
    let average = totalMarks / marks.length;
    console.log("Student Name : " + name);
    console.log("Total Marks : " + totalMarks);
    console.log("Average Marks : " + average);
}

student("Kishore", 85, 90, 78, 92);

console.log("=========================================");


// Task-13 Product Details

let product = {
    name: "Laptop",
    price1: 65000,
    brand: "Dell",
    stock: 20
};

let { name, price1: total } = product;

console.log("Product Name : " + name);
console.log("Product Price : ₹" + total);

console.log("=========================================");

// Task-14 Customer Details

let customerDetails = [101, "Kishore", "Chennai", 9876543210];

let [id, customerName, city, phone] = customerDetails;

console.log("Customer ID : " + id);
console.log("Customer Name : " + customerName);
console.log("Customer City : " + city);
console.log("Customer Phone : " + phone);

console.log("=========================================");

// Task-15 Add Product

let cart = ["Mobile", "Laptop"];

let newProduct = "Headphone";
cart = [...cart, newProduct];

console.log("Updated Cart : ", cart);

console.log("=========================================");

// Task-16 Remove Last Product

cart.pop();
console.log("Updated Cart : ", cart);

console.log("=========================================");

// Task-17 Replace Employee

let employees = ["Rahul", "Arun", "John", "David"];

employees[2] = "Kishore";
console.log("Updated Employee List : ", employees);

console.log("=========================================");

// Task-18 Search Product

let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];


if (products.includes("Laptop")) {
    console.log("Laptop is available in the products list.");
}

console.log("=========================================");

// Task-19 Employee Ranking

let salaries = [25000, 45000, 30000, 70000];

salaries.sort((a, b) => a - b);
console.log("Salaries from lowest to highest : ", salaries);

console.log("=========================================");

// Task-20 Reverse Chat Messages

let messages = ["Hi", "Hello", "How are you?", "Good Morning"];

messages.reverse();
console.log("Chat Messages in Reverse Order : ", messages);

console.log("=========================================");

// Bonus Team Challenge (Real-Time)
console.log("=========================================");
console.log("========Employee Management System==========");
console.log("=========================================");


let employeeList = [];

function addEmployee(id, name, department, salary) {
    employeeList.push({ id, name, department, salary });
    console.log("Employee Added: ", { id, name, department, salary });
}

addEmployee(1, "Kishore", "IT", 50000);
addEmployee(2, "Arun", "HR", 45000);
addEmployee(3, "David", "Finance", 60000);


let viewEmployees = () => {
    console.log("Employee List: ");
    employeeList.forEach(employee => {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ₹${employee.salary}`);
    });
}

viewEmployees();

function searchEmployeeById(id) {
    let employee = employeeList.find(emp => emp.id === id);
    if (employee) {
        console.log("Employee Found: ", employee);
    }  
    else {
        console.log("Employee Not Found with ID: " + id);
    }
}

searchEmployeeById(2);

function calculateSalaryWithBonus(id, bonus) {
    let employee = employeeList.find(emp => emp.id === id);
    if (employee) {
        let totalSalary = employee.salary + bonus;
        console.log(`Total Salary for ${employee.name} (ID: ${id}) with Bonus ₹${bonus} is: ₹${totalSalary}`);
    }
    else {
        console.log("Employee Not Found with ID: " + id);
    }
}

calculateSalaryWithBonus(1, 5000);

function removeEmployee(id) {
    let index = employeeList.findIndex(emp => emp.id === id);
    if (index !== -1) {
        let removedEmployee = employeeList.splice(index, 1);
        console.log("Removed Employee: ", removedEmployee[0]);
    }
    else {
        console.log("Employee Not Found with ID: " + id);
    }
}

removeEmployee(3);
viewEmployees();

function sortEmployeesBySalary() {
    let sortedEmployees = [...employeeList].sort((a, b) => a.salary - b.salary);
    console.log("Employees Sorted by Salary: ");
    sortedEmployees.forEach(employee => {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ₹${employee.salary}`);
    });

}

sortEmployeesBySalary();


function findEmployeeByName(name) {
    let employee = employeeList.find(emp => emp.name.toLowerCase() === name.toLowerCase());
    if (employee) {
        console.log("Employee Found: ", employee);
    }
    else {
        console.log("Employee Not Found with Name: " + name);
    }
}

findEmployeeByName("Arun");


function displayEmployeeDetails(id) {
    let employee = employeeList.find(emp => emp.id === id);
    if (employee) {
        let { id, name, department, salary } = employee;
        console.log(`Employee Details: ID: ${id}, Name: ${name}, Department: ${department}, Salary: ₹${salary}`);
    }
    else {
        console.log("Employee Not Found with ID: " + id);
    }
}

displayEmployeeDetails(1);

