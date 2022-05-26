export {};

var themeChangeBtn = document.getElementById("themeChangeBtn");
var lightTheme: boolean = false;

themeChangeBtn.addEventListener("click", changeTheme);

function changeTheme() {
    if (lightTheme == true) {
        alert("dark mode is enabled");
        lightTheme = false;
    } else if (lightTheme == false) {
        alert("dark mode is disabled");
        lightTheme = true;
    }
}
