// ============================= toggle style switcher ==================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler"); // Se você usa isso, mantenha. Se não, remova.
styleSwitcherToggle.addEventListener("click", () => { // Se você usa isso, mantenha. Se não, remova.
    document.querySelector(".style-switcher").classList.toggle("open"); // Se você usa isso, mantenha. Se não, remova.
});


// ============================= theme colors ============================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* ============================ theme light and dark mode ================================== */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

// ==========================================================