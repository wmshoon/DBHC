// const otherElements: any = document.querySelector("#mobgrid");
// const defaultTheme: string = "dark";

// colorChangeBtn.addEventListener("click", clicked);

// function clicked() {
//     if (dark == true) {
//         document.body.style.backgroundColor = "rgb(57, 62, 70)";
//         dark = false;
//     } else if (dark == false) {
//         dark = true;
//         document.body.style.backgroundColor = "rgb(198, 193, 185)";
//     }
// }
let dark: boolean = true;

const themeChangeBtn: any = document.querySelector("#themeChangeBtn");
const navbar: any = document.querySelector("#navbar");
const after_navbar: any = document.querySelector("#after_navbar");
const realtime_best: any = document.querySelector("#realtime_best");
const todays_hot: any = document.querySelector("#todays_hot");
const login_container: any = document.querySelector("#login_container");
const mobgrid: any = document.querySelector("#mobgrid");
backgroundDark();

backgroundLight();
navbar.classList.add("navbar_dark");
after_navbar.classList.add("after_navbar_dark");
realtime_best.classList.add("realtime_best_dark");
todays_hot.classList.add("todays_hot_dark");
login_container.classList.add("login_container_dark");

function backgroundDark(): void {
    document.body.style.backgroundColor = "rgb(57, 62, 70)";
}
function backgroundLight(): void {
    document.body.style.backgroundColor = "rgb(198, 193, 185)";
}

themeChangeBtn.addEventListener("click", changeTheme);

function changeTheme(): void {
    if (dark == true) {
        dark = false;
        backgroundLight();
        navbar.classList.remove("navbar_dark");
        after_navbar.classList.remove("after_navbar_dark");
        realtime_best.classList.remove("realtime_best_dark");
        todays_hot.classList.remove("todays_hot_dark");
        login_container.classList.remove("login_container_dark");

        navbar.classList.add("navbar_light");
        after_navbar.classList.add("after_navbar_light");
        realtime_best.classList.add("realtime_best_light");
        todays_hot.classList.add("todays_hot_light");
        login_container.classList.add("login_container_light");
    } else if (dark == false) {
        dark = true;
        backgroundDark();
        navbar.classList.remove("navbar_light");
        after_navbar.classList.remove("after_navbar_light");
        realtime_best.classList.remove("realtime_best_light");
        todays_hot.classList.remove("todays_hot_light");
        login_container.classList.remove("login_container_light");

        navbar.classList.add("navbar_dark");
        after_navbar.classList.add("after_navbar_dark");
        realtime_best.classList.add("realtime_best_dark");
        todays_hot.classList.add("todays_hot_dark");
        login_container.classList.add("login_container_dark");
    }
}
