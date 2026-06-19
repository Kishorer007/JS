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

// Food Order System

// =======================================================================================

console.log("====================================");
console.log("     FOOD ORDER SYSTEM");
console.log("====================================");

// Food Menu
const menu = {
  burger: 250,
  pizza: 400,
  biryani: 300,
  samosa: 50,
  coffee: 100,
  juice: 80,
};

console.log("Available Food Items:");
console.log("1. Burger - ₹250");
console.log("2. Pizza - ₹400");
console.log("3. Biryani - ₹300");
console.log("4. Samosa - ₹50");
console.log("5. Coffee - ₹100");
console.log("6. Juice - ₹80");

const customerName = prompt("Enter Your Name:");
const customerPhone = prompt("Enter Your Phone Number:");

const itemOrder = prompt(
  "Which item do you want? (burger/pizza/biryani/samosa/coffee/juice):",
);
const orderQuantity = parseInt(prompt("Enter Quantity:"));

const itemPrice = menu[itemOrder] || 0;
const subtotal = itemPrice * orderQuantity;
const deliveryCharge = 50;
const gst = subtotal * 0.05;
const totalPrice = subtotal + deliveryCharge + gst;

const isValidOrder = itemPrice > 0 && orderQuantity > 0;
const orderStatus = isValidOrder ? "Order Confirmed" : "Invalid Order";

const wantOffer = confirm("Do you want to apply a 10% discount?");
const discount = wantOffer ? subtotal * 0.1 : 0;
const finalAmount = totalPrice - discount;

const paymentMethod = confirm("Pay Online? (OK = Yes, Cancel = No)");
const paymentMode = paymentMethod ? "Online" : "Cash on Delivery";

// Order Summary
console.log("====================================");
console.log("        ORDER SUMMARY");
console.log("====================================");
console.log("Customer Name  :", customerName);
console.log("Phone Number   :", customerPhone);
console.log("Item           :", itemOrder.toUpperCase());
console.log("Price Per Item :", "₹" + itemPrice);
console.log("Quantity       :", orderQuantity);
console.log("Subtotal       :", "₹" + subtotal);
console.log("Delivery Charge:", "₹" + deliveryCharge);
console.log("GST (5%)       :", "₹" + gst.toFixed(2));
console.log("Discount (10%):", "₹" + discount);
console.log("Total Amount   :", "₹" + finalAmount.toFixed(2));
console.log("Payment Mode   :", paymentMode);
console.log("Order Status   :", orderStatus);
console.log("====================================");

const baseDeliveryTime = 30;
const deliveryTime =
  orderQuantity > 5 ? baseDeliveryTime + 10 : baseDeliveryTime;

const confirmationMsg =
  "Order Confirmed!\nTotal: ₹" +
  finalAmount.toFixed(2) +
  "\nDelivery in: " +
  deliveryTime +
  " mins";
isValidOrder ? alert(confirmationMsg) : alert("Order Failed!");

const thankYouMsg =
  orderStatus === "Order Confirmed"
    ? "Thank You for ordering with us! Your order will be delivered soon."
    : "Please try again with valid items.";
console.log(thankYouMsg);
