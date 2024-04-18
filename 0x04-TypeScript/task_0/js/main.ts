interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Roger',
  lastName: 'Smith',
  age: 25,
  location: 'Casablanca'
}

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'California'
}

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {

  const createRoot = document.createElement('div');
  createRoot.id = 'root';
  document.body.appendChild(createRoot);
  const root = document.getElementById('root');
  if (!root) return;

  const table = document.createElement('table');
  const headerRow = table.insertRow();
  const firstNameHeader = headerRow.insertCell();
  firstNameHeader.textContent = 'First Name';
  const locationHeader = headerRow.insertCell();
  locationHeader.textContent = 'Location';

  students.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
  });

  root.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});
