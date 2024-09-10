const gameData = [
    { imgSrc: "Places/losangeles.jpg", correctOption: "Los Angeles", options: ["Los Angeles", "Houston", "Miami", "Portland"] },
    { imgSrc: "Places/amalficoast.jpg", correctOption: "Amalfi Coast", options: ["Tuscany", "Austria", "Rome", "Amalfi Coast"] },
    { imgSrc: "Places/austria.jpg", correctOption: "Austria", options: ["Switzerland", "Germany", "Austria", "Italy"] },
    { imgSrc: "Places/belgium.jpg", correctOption: "Belgium", options: ["Netherlands", "Belgium", "Italy", "United Kingdom"] },
    { imgSrc: "Places/borabora.png", correctOption: "Bora Bora", options: ["Hawaii", "Fiji", "Bora Bora", "Maldives"] },
    { imgSrc: "Places/brazil.jpg", correctOption: "Brazil", options: ["Columbia", "Peru", "Chile", "Brazil"] },
    { imgSrc: "Places/capetown.jpg", correctOption: "Cape Town", options: ["Cape Town", "Kenya", "Madagascar", "Morrocco"] },
    { imgSrc: "Places/china.jpg", correctOption: "China", options: ["Thailand", "Japan", "China", "Nepal"] },
    { imgSrc: "Places/dubai.jpg", correctOption: "Dubai", options: ["Abu Dhabi", "Dubai", "Miami", "Yemen"] },
    { imgSrc: "Places/germany.jpg", correctOption: "Germany", options: ["Netherlands", "United Kingdom", "Germany", "Belgium"] },
    { imgSrc: "Places/japan.jpg", correctOption: "Japan", options: ["Philippines", "South Korea", "Japan", "China"] },
    { imgSrc: "Places/lakelouise.jpg", correctOption: "Canada", options: ["United States", "Germany", "Austria", "Canada"] },
    { imgSrc: "Places/london.jpg", correctOption: "London", options: ["London", "Frankfurt", "Dallas", "Phoenix"] },
    { imgSrc: "Places/loscabos.jpg", correctOption: "Los Cabos", options: ["Cancun", "Los Cabos", "Greece", "Bahamas"] },
    { imgSrc: "Places/mexico.jpg", correctOption: "Guadalajara", options: ["Mexico City", "Tijuana", "Monterrey", "Guadalajara"] },
    { imgSrc: "Places/miami.png", correctOption: "Miami", options: ["Tampa", "Miami", "Boston", "San Diego"] },
    { imgSrc: "Places/monaco.jpg", correctOption: "Monaco", options: ["France", "Greece", "Monaco", "Italy"] },
    { imgSrc: "Places/netherlands.jpg", correctOption: "Netherlands", options: ["Netherlands", "United Kingdom", "Austria", "Sweden"] },
    { imgSrc: "Places/newyorkcity.jpg", correctOption: "New York", options: ["Seattle", "Toronto", "New York", "Washington"] },
    { imgSrc: "Places/russia.jpg", correctOption: "Russia", options: ["Norway", "Sweden", "Belgium", "Russia"] },
    { imgSrc: "Places/santorini.jpeg", correctOption: "Santorini", options: ["Venice", "Santorini", "Tuscany", "Athens"] },
    { imgSrc: "Places/sidney.png", correctOption: "Sidney", options: ["Melbourne", "Hamilton", "Auckland", "Sidney"] },
    { imgSrc: "Places/swissalps.jpg", correctOption: "Switzerland", options: ["Switzerland", "Norway", "Germany", "Austria"] },
    { imgSrc: "Places/texas.jpg", correctOption: "Texas", options: ["Boston", "Oregon", "Texas", "New York"] },
    { imgSrc: "Places/toronto.png", correctOption: "Toronto", options: ["Vancouver", "Calgary", "Victoria", "Toronto"] },
    { imgSrc: "Places/tuscany.jpg", correctOption: "Tuscany", options: ["Nice", "Tuscany", "Milan", "Modena"] },
    { imgSrc: "Places/ukvillage.jpg", correctOption: "United Kingdom", options: ["United Kingdom", "Belgium", "Norway", "Netherlands"] },
    { imgSrc: "Places/vancouver.jpg", correctOption: "Vancouver", options: ["Brooklyn", "Vancouver", "Calgary", "Dallas"] },
    { imgSrc: "Places/venice.jpg", correctOption: "Venice", options: ["Ghent", "Brussels", "Venice", "Amsterdam"] },
    { imgSrc: "Places/yemen.jpg", correctOption: "Yemen", options: ["Yemen", "Oman", "Morroco", "Egypt"] },
    // Add more images and options here
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Function to shuffle the gameData array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the gameData array at the start
shuffleArray(gameData);

function displayQuestion() {
    const gameImage = document.getElementById('gameImage');
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');
    const currentQuestion = gameData[currentQuestionIndex];

    gameImage.src = currentQuestion.imgSrc;
    optionsDiv.innerHTML = '';
    resultDiv.innerHTML = ''; // Clear previous result

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctOption = gameData[currentQuestionIndex].correctOption;
    const resultDiv = document.getElementById('result');

    if (selectedOption === correctOption) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
        correctAnswers++;
    } else {
        resultDiv.textContent = `Wrong! The correct answer was ${correctOption}`;
        resultDiv.style.color = "red";
        incorrectAnswers++;
    }

    setTimeout(() => {
        if (currentQuestionIndex < gameData.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            displayFinalScore();
        }
    }, 1000); // 1-second delay
}

function displayFinalScore() {
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');
    optionsDiv.innerHTML = ''; // Clear options

    resultDiv.innerHTML = `Game Over! Click "Start Over" to play again! <br>Score: ${correctAnswers}/${gameData.length}`;

    const startOverButton = document.createElement('button');
    startOverButton.textContent = "Start Over";
    startOverButton.onclick = () => {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        shuffleArray(gameData); // Reshuffle the questions for a new game
        displayQuestion();
    };
    optionsDiv.appendChild(startOverButton);
}

// Initialize the game when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});
