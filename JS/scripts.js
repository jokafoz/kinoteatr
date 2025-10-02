const schemeSvg = document.querySelector(".schemeSvg");
const totalPriceTag = document.querySelector(".price-total");
const playButton = document.querySelector(".play-button");
const modal = document.querySelector("dialog");

let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener("click", (e) => {
    if (!e.target.classList.contains("booked")) {
        e.target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length-1;
        totalPrice = cost * totalSeats;
        totalPriceTag.textContent = totalPrice;

    }
});

playButton.addEventListener("click", () => {
    modal.showModal();
});

modal.addEventListener("click", (e) => {
    if (e.target === document.querySelector("dialog"))
        modal.close();
});

