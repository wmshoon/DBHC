var colorChangeBtn = document.querySelector("#themeChangeBtn");
var otherElements = document.querySelector("#mobgrid");
var defaultTheme = "dark";
var dark = true;
colorChangeBtn.addEventListener("click", clicked);
function clicked() {
    if (dark == true) {
        document.body.style.backgroundColor = "rgb(57, 62, 70)";
        dark = false;
    }
    else if (dark == false) {
        dark = true;
        document.body.style.backgroundColor = "rgb(198, 193, 185)";
    }
}
