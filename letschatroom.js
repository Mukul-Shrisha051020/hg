user = localStorage.getItem("User");
document.getElementById("welcome_user").innerHTML = "Welcome " + user + "!";

function log_out() {
    localStorage.removeItem("User");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}