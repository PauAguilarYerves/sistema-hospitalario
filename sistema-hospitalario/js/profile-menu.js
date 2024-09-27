const profileIcon = document.getElementById('profile-icon');
const profileMenu = document.getElementById('profile-menu');
const logoutButton = document.getElementById('logout');

profileIcon.addEventListener('click', () => {
    profileMenu.classList.toggle('show');
});

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    sessionStorage.clear();
    window.location.href = 'index.html';
});

document.addEventListener("DOMContentLoaded", function () {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        window.location.href = "index.html";
    }
});
