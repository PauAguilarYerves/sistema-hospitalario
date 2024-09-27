document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificación de usuario y contraseña
    if ((username === "admin" && password === "admin123") ||
        (username === "doctor" && password === "doctor123") ||
        (username === "nurse" && password === "nurse123") ||
        (username === "receptionist" && password === "receptionist123")) {
        
        localStorage.setItem("currentUser", username);

        switch (username) {
            case "admin":
                window.location.href = "admin.html";
                break;
            case "doctor":
                window.location.href = "doctor.html";
                break;
            case "nurse":
                window.location.href = "nurse.html";
                break;
            case "receptionist":
                window.location.href = "receptionist.html";
                break;
        }
    } else {
        document.getElementById("login-error").textContent = "Usuario o contraseña incorrectos";
    }
});
