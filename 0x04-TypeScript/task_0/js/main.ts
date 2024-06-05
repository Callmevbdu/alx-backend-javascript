// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

let student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles"
};

// Create an array named studentsList containing the two students
let studentsList: Student[] = [student1, student2];

// Using Vanilla Javascript, render a table and for each element in the array, append a new row to the table
window.onload = () => {
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    let row = document.createElement('tr');
    let firstNameCell = document.createElement('td');
    let locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};
