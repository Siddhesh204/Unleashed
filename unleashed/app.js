// app.js

// Get a reference to the "Shop Now" button
const shopButton = document.querySelector(".cta-button");

// Add a click event listener to the "Shop Now" button
shopButton.addEventListener("click", () => {
    // You can add your shopping logic here
    alert("Redirecting to the shopping page...");
});

// Get a reference to the designer cards
const designerCards = document.querySelectorAll(".designer-card");

// Add a click event listener to each designer card
designerCards.forEach((card) => {
    card.addEventListener("click", () => {
        // You can add code to display more details about the designer
        alert(`Clicked on ${card.querySelector("h3").textContent}`);
    });
});

// Get a reference to the review cards
const reviewCards = document.querySelectorAll(".review");

// Add a click event listener to each review card
reviewCards.forEach((card) => {
    card.addEventListener("click", () => {
        // You can add code to display the full review or initiate other actions
        const userName = card.querySelector(".user-name").textContent;
        const reviewText = card.querySelector("p:last-child").textContent;
        alert(`Review by ${userName}: "${reviewText}"`);
    });
});
