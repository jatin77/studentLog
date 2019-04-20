var log = console.log;

function addName() {
  const nameInput = document.getElementById('nameInput');

  nameInput.innerHTML += `<tr><td>${this.value}</td></tr>`;

  this.value = '';
}
function addAttendance() {
  const attendanceInput = document.getElementById('attendanceInput');
  attendanceInput.innerHTML += `<tr><td>${this.value}</td></tr>`;
  this.value = '';
}
document.getElementById('name').addEventListener('change', addName);
document.getElementById('attendance').addEventListener('change', addAttendance);
