document.getElementById('generateFactBtn').addEventListener('click', generateFunFact);

function generateFunFact() {
    const facts = [
        "You are a nature enthusiast with a love for mountains and silent beaches.",
        "You have an adventurous spirit and likely enjoy hiking and exploring.",
        "You are a young explorer with a preference for peaceful, naturistic environments."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('factDisplay').textContent = randomFact;
}
