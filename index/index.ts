const colorChangeBtn: any = document.querySelector("#themeChangeBtn");
const otherElements: any = document.querySelector("#mobgrid");
const defaultTheme: string = "dark";

let dark: boolean = true;

colorChangeBtn.addEventListener("click", clicked);

function clicked() {
    if (dark == true) {
        document.body.style.backgroundColor = "rgb(57, 62, 70)";
        dark = false;
    } else if (dark == false) {
        dark = true;
        document.body.style.backgroundColor = "rgb(198, 193, 185)";
    }
}
