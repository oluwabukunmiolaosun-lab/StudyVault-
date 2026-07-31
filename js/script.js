document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
    // Search
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    if (searchInput && searchBtn) {

        searchBtn.addEventListener("click", searchPage);

        searchInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                searchPage();
            }
        });

        function searchPage() {

            const query = searchInput.value.trim().toLowerCase();

            if (query.includes("math")) {
                window.location.href = "mathematics.html";
            }

            else if (query.includes("english")) {
                window.location.href = "english.html";
            }

            else if (query.includes("biology")) {
                window.location.href = "biology.html";
            }

            else if (query.includes("chemistry")) {
                window.location.href = "chemistry.html";
            }

            else if (query.includes("physics")) {
                window.location.href = "physics.html";
            }

            else if (query.includes("waec")) {
                window.location.href = "waec.html";
            }

            else if (query.includes("neco")) {
                window.location.href = "neco.html";
            }

            else if (query.includes("jamb")) {
                window.location.href = "jamb.html";
            }

            else {
                alert("No results found.");
            }

        }

    }

});
