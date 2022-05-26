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
var dark = true;
var themeChangeBtn = document.querySelector("#themeChangeBtn");
var navbar = document.querySelector("#navbar");
var after_navbar = document.querySelector("#after_navbar");
var realtime_best = document.querySelector("#realtime_best");
var todays_hot = document.querySelector("#todays_hot");
var login_container = document.querySelector("#login_container");
var mobgrid = document.querySelector("#mobgrid");
backgroundDark();
backgroundLight();
navbar.classList.add("navbar_dark");
after_navbar.classList.add("after_navbar_dark");
realtime_best.classList.add("realtime_best_dark");
todays_hot.classList.add("todays_hot_dark");
login_container.classList.add("login_container_dark");
function backgroundDark() {
    document.body.style.backgroundColor = "rgb(57, 62, 70)";
}
function backgroundLight() {
    document.body.style.backgroundColor = "rgb(198, 193, 185)";
}
themeChangeBtn.addEventListener("click", changeTheme);
function changeTheme() {
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
    }
    else if (dark == false) {
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
