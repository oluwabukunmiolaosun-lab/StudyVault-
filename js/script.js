document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

});
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase().trim();

        if (query.includes("math")) {
            window.location.href = "notes.html";
        } else if (query.includes("english")) {
            window.location.href = "notes.html";
        } else if (query.includes("quiz")) {
            window.location.href = "quizzes.html";
        } else if (query.includes("ai")) {
            window.location.href = "ai.html";
        } else if (query.includes("past")) {
            window.location.href = "past-questions.html";
        } else {
            alert("No matching study material found yet.");
        }
    });
}
if (searchInput) {
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchBtn.click();
        }
    });
}
