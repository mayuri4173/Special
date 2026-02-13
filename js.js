// Floating hearts
function createHearts() {
    const container = document.getElementById("heartsContainer");

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 25 + 15 + "px";
        container.appendChild(heart);
    }
}

// Countdown
function updateCountdown() {
    const now = new Date();
    let valentines = new Date(now.getFullYear(), 1, 14);
    if (now > valentines) valentines.setFullYear(now.getFullYear() + 1);

    const diff = valentines - now;

    document.getElementById("days").textContent =
        Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent =
        Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").textContent =
        Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("seconds").textContent =
        Math.floor((diff / 1000) % 60);
}

// Proposal reveal
document.getElementById("proposalButton").addEventListener("click", () => {
    const reveal = document.getElementById("proposalReveal");
    reveal.style.display = "block";
    reveal.scrollIntoView({ behavior: "smooth" });
});

// YES button
let clickStage = 0;

document.getElementById("yesButton").addEventListener("click", function () {

    const yesButton = this;
    const question = document.querySelector(".proposal-question");
    const foreverImage = document.getElementById("foreverImage");
    const cartoonProposal = document.getElementById("cartoonProposal");

    clickStage++;

    // 1️⃣ FIRST CLICK
    if (clickStage === 1) {
        question.innerHTML = `
            💖💍 YESSSS!!! 💍💖 <br>
            <span style="font-size:2.5rem; color:#4CAF50;">
                This is my forever moment 🌈✨
            </span><br>
            <span style="font-size:1.8rem;">
                You just made my heart the happiest place on Earth ❤️
            </span>
        `;
        question.style.color = "#4CAF50";
        document.getElementById("noButton").style.display = "none";
        yesButton.textContent = "FOREVER STARTS NOW 💞";
        return;
    }

    // 2️⃣ SECOND CLICK
    if (clickStage === 2) {
        if (foreverImage) foreverImage.style.display = "block";
        startHeartFlow();
        yesButton.textContent = "ONE LAST SURPRISE 💖";
        return;
    }

    // 3️⃣ THIRD CLICK
    if (clickStage === 3) {
        cartoonProposal.style.display = "block";
        yesButton.textContent = "SAY YES 💍❤️";
    }

    // 4️⃣ FINAL CLICK — SAY YES
    if (clickStage === 4) {

    // show full screen celebration
    document.getElementById("finalCelebration").style.display = "block";

    // start heart explosion animation
    heartExplosion();

    // hide the button (moment complete)
    yesButton.style.display = "none";
}

});

// NO button (playful)
document.getElementById("noButton").addEventListener("click", function () {

    const noButton = this;

    // Move button randomly
    noButton.style.position = "fixed";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";

    // Playful teasing text
    noButton.textContent = "";

    // Show playful message
    const question = document.querySelector(".proposal-question");
    question.innerHTML = `
        😏💖 Oops! <br>
        <span style="font-size:2.5rem; color:#d44d5c;">
            Looks like destiny already choose YES 💍
        </span><br>
        <h4><span style="font-size:1.8rem; color:#d44d5c;">"😂 Nice try! Now Click YES 💍"</span></h4>
        <span style="font-size:1.8rem;">
            Go on… I know you want me too 😘
        </span>
    `;
});
function startHeartFlow() {
    const heartEmojis = ["❤️", "💖", "💗", "💓", "💕", "💞", "💘", "💝"];

    const interval = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "flow-heart";

        // Random heart
        heart.innerHTML =
            heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        // Random position & size
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 25 + 20 + "px";

        // Random animation speed
        heart.style.animationDuration =
            Math.random() * 3 + 4 + "s";

        document.body.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 7000);

    }, 200);

    // Stop after 6 seconds
    setTimeout(() => clearInterval(interval), 6000);
}


// Init
document.addEventListener("DOMContentLoaded", () => {
    createHearts();
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
function heartExplosion() {

    const hearts = ["❤️","💖","💗","💓","💕","💞","💘","💝"];

    for (let i = 0; i < 120; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = Math.random()*30 + 20 + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "3000";

        const x = (Math.random() - 0.5) * 800;
        const y = (Math.random() - 0.5) * 800;

        heart.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 2000,
            easing: "ease-out"
        });

        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),2000);
    }
}
