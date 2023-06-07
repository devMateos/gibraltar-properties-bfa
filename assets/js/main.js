/* MENU */
const mainMenu = document.querySelector("#main-menu");
const headerButton = document.querySelector("#header-button");
const closeMenuButton = document.querySelector("#close-menu-button");
headerButton.addEventListener("click", () => {
    mainMenu.classList.add("down-menu");
});
closeMenuButton.addEventListener("click", () => {
    mainMenu.classList.remove("down-menu");
});
/* FORM */
const salesLabel = document.querySelector("#sales-label");
const rentalsLabel = document.querySelector("#rentals-label");
const commercialsLabel = document.querySelector("#commercials-label");
const investmentsLabel = document.querySelector("#investments-label");
salesLabel.addEventListener("click", () => {
    salesLabel.classList.add("bgc--white", "purple-text");
    rentalsLabel.classList.remove("bgc--white", "purple-text");
    commercialsLabel.classList.remove("bgc--white", "purple-text");
    investmentsLabel.classList.remove("bgc--white", "purple-text");
});
rentalsLabel.addEventListener("click", () => {
    salesLabel.classList.remove("bgc--white", "purple-text");
    rentalsLabel.classList.add("bgc--white", "purple-text");
    commercialsLabel.classList.remove("bgc--white", "purple-text");
    investmentsLabel.classList.remove("bgc--white", "purple-text");
});
commercialsLabel.addEventListener("click", () => {
    salesLabel.classList.remove("bgc--white", "purple-text");
    rentalsLabel.classList.remove("bgc--white", "purple-text");
    commercialsLabel.classList.add("bgc--white", "purple-text");
    investmentsLabel.classList.remove("bgc--white", "purple-text");
});
investmentsLabel.addEventListener("click", () => {
    salesLabel.classList.remove("bgc--white", "purple-text");
    rentalsLabel.classList.remove("bgc--white", "purple-text");
    commercialsLabel.classList.remove("bgc--white", "purple-text");
    investmentsLabel.classList.add("bgc--white", "purple-text");
});