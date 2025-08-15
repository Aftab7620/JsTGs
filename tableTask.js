let students = [
  {
    name: "Aftab Khan",
    age: 25,
    company: "TGS",
    position: "CEO",
  },
  {
    name: "Soumya Mishra",
    age: 25,
    company: "TGS",
    position: "VP",
  },
  {
    name: "Ananya Thakre",
    age: 23,
    company: "TGS",
    position: "Developer",
  },
  {
    name: "Ankit Dhabale",
    age: 23,
    company: "TGS",
    position: "Team Lead",
  },
  {
    name: "Swapnil G",
    age: 24,
    company: "TGS",
    position: "Manager",
  },
];
// Function to show students in table
function showStudents() {
  let table = document.getElementById("studentTable");

  // Clear old rows except header
  table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Company</th>
            <th>Position</th>
            <th>Action</th>
        </tr>
    `;

  // Loop through students and add to table
  for (let i = 0; i < students.length; i++) {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = students[i].name;
    row.insertCell(1).innerHTML = students[i].age;
    row.insertCell(2).innerHTML = students[i].company;
    row.insertCell(3).innerHTML = students[i].position;
    row.insertCell(
      4
    ).innerHTML = `<button onclick="removeStudent(${i})">Remove</button>`;
  }
}

function removeStudent(index) {
  students.splice(index, 1); // Remove the student from array
  showStudents(); // Refresh table
}
