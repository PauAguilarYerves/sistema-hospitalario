function addUser() {
    const usersTable = document.getElementById('users-table').getElementsByTagName('tbody')[0];
    const newRow = usersTable.insertRow();

    const usernameCell = newRow.insertCell(0);
    const roleCell = newRow.insertCell(1);
    const actionsCell = newRow.insertCell(2);

    usernameCell.innerHTML = 'Nuevo Usuario';
    roleCell.innerHTML = 'Rol';
    actionsCell.innerHTML = '<button onclick="deleteUser(this)">Eliminar</button>';
}

function deleteUser(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
