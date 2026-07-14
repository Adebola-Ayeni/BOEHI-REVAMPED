function toggleMenu() {
    document.getElementById('sideDrawer').classList.toggle('open');
    document.querySelector('.menu-overlay').classList.toggle('active');
}

const buttons = document.querySelectorAll(".gallery-filter button");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Change active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        items.forEach(item => {
            if (filter === "all" || item.dataset.type === filter) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});