const changeTextBtn = document.getElementById('changeTextBtn');
const greetingText = document.querySelector('.greeting');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const body = document.body;
const card = document.querySelector('.card');
const quoteContainer = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuoteBtn');

const quotes = [
    "The mind is everything. What you think you become.",
    "Peace comes from within. Do not seek it without.",
    "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
    "The root of suffering is attachment.",
    "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you."
];

let currentTheme = 'light';

changeTextBtn.addEventListener('click', () => {
    greetingText.textContent = 'May the teachings of the Buddha guide you towards inner peace and enlightenment.';
});

toggleThemeBtn.addEventListener('click', () => {
    if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        card.classList.add('dark-theme');
        currentTheme = 'dark';
    } else {
        body.classList.remove('dark-theme');
        card.classList.remove('dark-theme');
        currentTheme = 'light';
    }
});

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
}

newQuoteBtn.addEventListener('click', displayQuote);

// Display initial quote
displayQuote();