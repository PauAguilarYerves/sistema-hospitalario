const patients = [
    { name: "Juan Pérez", age: 30 },
    { name: "Ana Gómez", age: 25 },
];

function loadPatients() {
    const tableBody = document.querySelector("#patients-table tbody");
    tableBody.innerHTML = "";
    patients.forEach(patient => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>
                <button onclick="editPatient('${patient.name}')">Editar</button>
                <button onclick="deletePatient('${patient.name}')">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addPatient() {
    const name = prompt("Ingrese el nombre del paciente:");
    const age = prompt("Ingrese la edad del paciente:");
    patients.push({ name, age });
    loadPatients();
}

function editPatient(name) {
    const patient = patients.find(p => p.name === name);
    if (patient) {
        const newAge = prompt("Editar edad:", patient.age);
        patient.age = newAge;
        loadPatients();
    }
}

function deletePatient(name) {
    const index = patients.findIndex(p => p.name === name);
    if (index !== -1) {
        patients.splice(index, 1);
        loadPatients();
    }
}

// Cargar pacientes al inicio
loadPatients();
