// Task-1 Find the Highest Salary
let employees = [
  {
    name: "Naveen",
    id: 101,
    salary: 30000,
  },
  {
    name: "John",
    id: 102,
    salary: 60000,
  },
  {
    name: "Arun",
    id: 103,
    salary: 45000,
  },
];

function findHighestSalary(employees) {
  let highestSalaryEmployee = employees.reduce((prev, current) =>
    prev.salary > current.salary ? prev : current,
  );
  console.log("Highest Salary : ", highestSalaryEmployee.salary);
  console.log("Employee Name : ", highestSalaryEmployee.name);
}

findHighestSalary(employees);

console.log("--------------------------------------------------");

// Task-2 Find Employee by ID

let searchId = 103;

function findEmployeeById(employees, id) {
  let employee = employees.find((emp) => emp.id === id);
  if (employee) {
    console.log("Employee Found");
    console.log("Name : ", employee.name);
    console.log("Salary : ", employee.salary);
  } else {
    console.log("Employee Not Found");
  }
}

findEmployeeById(employees, searchId);

console.log("--------------------------------------------------");

// Task-3 Calculate Salary with Bonus
let bonus = 5000;

function calculateSalaryWithBonus(employees, bonus) {
  employees.forEach((employee) => {
    employee.salary += bonus;
    console.log(`${employee.name} : ${employee.salary}`);
  });
}

calculateSalaryWithBonus(employees, bonus);

console.log("--------------------------------------------------");

// Task-4 Experience Check
let employeesWithExperience = [
  {
    name: "Naveen",
    experience: 2,
  },
  {
    name: "John",
    experience: 7,
  },
  {
    name: "Arun",
    experience: 5,
  },
];

function checkExperience(employees) {
  employees.forEach((employee) => {
    if (employee.experience >= 5) {
      console.log(`${employee.name} - Senior Employee`);
    } else {
      console.log(`${employee.name} - Junior Employee`);
    }
  });
}

checkExperience(employeesWithExperience);

console.log("--------------------------------------------------");

// Task-5 Display Only Employee Names
function displayEmployeeNames(employees) {
  employees.forEach((employee) => {
    console.log(employee.name);
  });
}

displayEmployeeNames(employees);

console.log("--------------------------------------------------");

// Task-6 Display Employee IDs
function displayEmployeeIds(employees) {
  employees.forEach((employee) => {
    console.log(employee.name + ": " + employee.id);
  });
}

displayEmployeeIds(employees);

console.log("--------------------------------------------------");

// Task-7 Find Total Salary
function findTotalSalary(employees) {
  let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0,
  );
  console.log("Total Salary : ", totalSalary);
}

findTotalSalary(employees);

console.log("--------------------------------------------------");

// Task-8 Employees Earning More Than ₹40,000
function employeesEarningMoreThan(employees, amount) {
  let filteredEmployees = employees.filter(
    (employee) => employee.salary > amount,
  );
  filteredEmployees.forEach((employee) => {
    console.log(employee.name);
  });
}

employeesEarningMoreThan(employees, 40000);

console.log("--------------------------------------------------");

// Task-9 Increase Salary
function increaseSalary(employees, increment) {
  employees.forEach((employee) => {
    employee.salary += increment;
    console.log(`${employee.name} : ${employee.salary}`);
  });
}

increaseSalary(employees, 5000);

console.log("--------------------------------------------------");

// Task-10 Employee Report
function employeeReport(employees) {
  employees.forEach((employee) => {
    console.log(`Employee Name : ${employee.name}`);
    console.log(`Employee ID : ${employee.id}`);
    console.log(`Salary : ${employee.salary}`);
    console.log("");
  });
}

employeeReport(employees);

console.log("--------------------------------------------------");

// Challenge Task

function challengeTask(employees) {
  let totalEmployees = employees.length;
  let highestSalaryEmployee = employees.reduce((prev, current) =>
    prev.salary > current.salary ? prev : current,
  );
  let lowestSalaryEmployee = employees.reduce((prev, current) =>
    prev.salary < current.salary ? prev : current,
  );
  let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0,
  );
  let employeesAbove40k = employees.filter(
    (employee) => employee.salary > 40000,
  );
  let averageSalary = totalSalary / totalEmployees;

  console.log(`Total Employees: ${totalEmployees}`);
  console.log(
    `Highest Salary Employee: ${highestSalaryEmployee.name} (${highestSalaryEmployee.salary})`,
  );
  console.log(
    `Lowest Salary Employee: ${lowestSalaryEmployee.name} (${lowestSalaryEmployee.salary})`,
  );
  console.log(`Total Salary: ${totalSalary}`);
  console.log(`Average Salary: ${averageSalary}`);
  findEmployeeById(employees, 102);
  console.log(`After adding ₹5,000 to each employee's salary:`);
  employees.forEach((employee) => {
    employee.salary += 5000;
    console.log(`${employee.name} : ${employee.salary}`);
  });
  console.log(
    `Employees earning more than ₹40,000: ${employeesAbove40k.length}`,
  );
}

challengeTask(employees);
