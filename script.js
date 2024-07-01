// Get a reference to the #add-employees-btn element


const addEmployeesBtn = document.querySelector('#add-employees-btn');

addEmployeesBtn.addEventListener('click', function collectEmployees() {
 
});



// Collect employee data
const employees = {
    firstName: Text,
    lastName: Text,
    salary: Number,
  }
  
  function collectEmployees () {
  // TODO: Get user input to create and return an array of employee objects
  let newTableRow = [];
  let addMore = true;
    
  while (addMore){
      const firstName = prompt ("Enter First Name:");
      const lastName = prompt("Enter Last Name:");
      const salary = parseInt(prompt("Enter Salary:"));
      console.log(typeof salary);

      newTableRow.push( {firstName, lastName, salary});

    addMore = confirm("Do you want to add another employee?");

    } 

 return newTableRow;
    
}



// Display the average salary
const displayAverageSalary = function(employees) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  
  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }

  const averageSalary = totalSalary / employees.length; 

  console.log(`The average employee salary is: $${averageSalary.toFixed(2)}`);
}





// Select a random employee
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)

}
const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
  const idx = getRandomNumber(0, employees.length-1);


  console.log(`Congratulations! The winner of the Weekly Lucky Drawing is: ${employees[idx].firstName} ${employees[idx].lastName}`);
 
}
 



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
