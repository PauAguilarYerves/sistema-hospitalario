const appointments = [
    { patient: "Juan Pérez", date: "2024-09-27" },
    { patient: "Ana Gómez", date: "2024-09-28" },
];

function loadAppointments() {
    const tableBody = document.querySelector("#appointments-table tbody");
    tableBody.innerHTML = "";
    appointments.forEach(appointment => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${appointment.patient}</td>
            <td>${appointment.date}</td>
            <td>
                <button onclick="editAppointment('${appointment.patient}')">Editar</button>
                <button onclick="deleteAppointment('${appointment.patient}')">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addAppointment() {
    const patient = prompt("Ingrese el nombre del paciente:");
    const date = prompt("Ingrese la fecha:");
    appointments.push({ patient, date });
    loadAppointments();
}

function editAppointment(patient) {
    const appointment = appointments.find(a => a.patient === patient);
    if (appointment) {
        const newDate = prompt("Editar fecha:", appointment.date);
        appointment.date = newDate;
        loadAppointments();
    }
}

function deleteAppointment(patient) {
    const index = appointments.findIndex(a => a.patient === patient);
    if (index !== -1) {
        appointments.splice(index, 1);
        loadAppointments();
    }
}

// Cargar citas al inicio
loadAppointments();
