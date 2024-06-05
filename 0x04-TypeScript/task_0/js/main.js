// Create two students
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Los Angeles"
};
// Create an array named studentsList containing the two students
var studentsList = [student1, student2];
// Using Vanilla Javascript, render a table and for each element in the array, append a new row to the table
window.onload = function () {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var locationCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
};
