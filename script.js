const cards = document.querySelectorAll(".card:not(#secretCard)");
const secretCard = document.getElementById("secretCard");

let openedCards = new Set();

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
    openedCards.add(card.dataset.id);

    if (openedCards.size === cards.length) {
      secretCard.classList.remove("locked");
      secretCard.style.pointerEvents = "auto";
      secretCard.style.opacity = "1";
    }
  });
});

secretCard.addEventListener("click", () => {
  secretCard.classList.toggle("active");
});
