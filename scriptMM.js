const gameData = [
    { imgSrc: "Cars/Tesla Model 3.jpg", correctOption: "Tesla Model 3", options: ["Tesla Model Y", "Tesla Model 3", "Tesla Model X", "Tesla Model S"] },
    { imgSrc: "Cars/Tesla Model Y.jpg", correctOption: "Tesla Model Y", options: ["Tesla Model 3", "Tesla Model S", "Tesla Model Y", "Tesla Model X"] },
    { imgSrc: "Cars/Chevrolet C8.jpg", correctOption: "Chevrolet C8", options: ["Chevrolet C7", "Chevrolet C8 Z06", "Chevrolet C6", "Chevrolet C8"] },
    { imgSrc: "Cars/Lucid Air Sapphire.jpg", correctOption: "Lucid Air Sapphire", options: ["Porsche Taycan", "Tesla Model S", "Lucid Air Sapphire", "Rivian R1S"] },
    { imgSrc: "Cars/Audi R8.jpg", correctOption: "Audi R8", options: ["Audi TT", "Audi RS5", "Audi RS7", "Audi R8"] },
    { imgSrc: "Cars/Ferrari 458.jpg", correctOption: "Ferrari 458", options: ["Ferrari 488 GTB", "Ferrari 458", "Ferrari Pista", "Ferrari LaFerrari"] },
    { imgSrc: "Cars/Audi RSQ8.jpg", correctOption: "Audi RSQ8", options: ["Audi SQ8", "Audi RSQ8", "Audi SQ5", "Audi RS3"] },
    { imgSrc: "Cars/Lamborghini Huracan.jpg", correctOption: "Lamborghini Huracan", options: ["Lamborghini Aventador", "Ferrari 488 GTB", "Lamborghini Huracan", "Mclaren 570"] },
    { imgSrc: "Cars/Aston Martin DB9.jpg", correctOption: "Aston Martin DB9", options: ["Aston Martin DB11", "Aston Martin DB9", "Aston Martin V8 Vantage", "Aston Martin Valkyrie"] },
    { imgSrc: "Cars/Ferrari 488 GTB.jpg", correctOption: "Ferrari 488 GTB", options: ["Ferrari 488 GTB", "Lamborghini Huracan", "Mclaren 720s", "Ferrari 488 Pista"] },
    { imgSrc: "Cars/Lamborghini Urus.jpg", correctOption: "Lamborghini Urus", options: ["Lamborghini Huracan", "Audi RSQ8", "Ferrari Purosangue", "Lamborghini Urus"] },
    { imgSrc: "Cars/Audi RS7.jpg", correctOption: "Audi RS7", options: ["Audi SQ5", "Audi SQ8", "Audi RS7", "Audi RS5"] },
    { imgSrc: "Cars/Aston Martin DBX.jpg", correctOption: "Aston Martin DBX", options: ["Aston Martin DBX", "Aston Martin Vantage", "Aston Martin DB11", "Aston Martin DB9"] },
    { imgSrc: "Cars/Lamborghini Aventador.jpg", correctOption: "Lamborghini Aventador", options: ["Ferrari 599", "Mclaren P1", "Lamborghini Huracan", "Lamborghini Aventador"] },
    { imgSrc: "Cars/Aston Martin DB11.jpg", correctOption: "Aston Martin DB11", options: ["Aston Martin DB11", "Aston Martin Vantage", "Aston Martin DB9", "Aston Martin Valkyrie"] },
    { imgSrc: "Cars/Mclaren P1.jpg", correctOption: "Mclaren P1", options: ["Mclaren P1", "Mclaren 650s", "Mclaren 765LT", "Mclaren 12C"] },
    { imgSrc: "Cars/Ferrari LaFerrari.jpg", correctOption: "Ferrari LaFerrari", options: ["Lamborghini GT", "Ferrari LaFerrari", "Ferrari 599", "Mclaren 720s"] },
    { imgSrc: "Cars/Bugatti Divo.jpg", correctOption: "Bugatti Divo", options: ["Bugatti Divo", "Bugatti Chiron", "Rimac Nevera", "Koenigsegg Agera"] },
    { imgSrc: "Cars/Rimac Nevera.jpg", correctOption: "Rimac Nevera", options: ["Ferrari SF90", "Bugatti EB110", "Bugatti Veyron", "Rimac Nevera"] },
    { imgSrc: "Cars/Pagani Huayra.jpg", correctOption: "Pagani Huayra", options: ["Pagani Zonda R", "Pagani Huayra", "Bugatti Divo", "Koenigsegg Regera"] },
    { imgSrc: "Cars/Koenigsegg Jesko.jpg", correctOption: "Koenigsegg Jesko", options: ["Koenigsegg Jesko", "Koenigsegg CCXR", "Koenigsegg Regera", "Koenigsegg Agera"] },
    { imgSrc: "Cars/Aston Martin Valkyrie.jpg", correctOption: "Aston Martin Valkyrie", options: ["Ferrari 812", "Bugatti Centodieci", "Rimac Concept", "Aston Martin Valkyrie"] },
    { imgSrc: "Cars/Koenigsegg One1.jpg", correctOption: "Koenigsegg One 1", options: ["Rimac Concept", "Koenigsegg One 1", "Koenigsegg CCGT", "Ferrari F12"] },
    { imgSrc: "Cars/Zenvo TSR-S.jpg", correctOption: "Zenvo TSR-S", options: ["Zenvo TSR-T", "Bugatti Centodieci", "Rimac Concept", "Zenvo TSR-S"] },
    { imgSrc: "Cars/SSC Tuatara.jpg", correctOption: "SSC Tuatara", options: ["Koenigsegg CC8S", "Koenigsegg CCX", "SSC Tuatara", "Bugatti EB110"] },
    // Add more images and options here
];

let currentQuestionIndex = 0;

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
        button.onclick = function () { checkAnswer(option); };
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctOption = gameData[currentQuestionIndex].correctOption;
    const resultDiv = document.getElementById('result');

    if (selectedOption === correctOption) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Wrong! The correct answer was " + correctOption;
        resultDiv.style.color = "red";
    }

    // Debug: Log the current state
    console.log("Question Index Before Timeout:", currentQuestionIndex);

    setTimeout(() => {
        if (currentQuestionIndex < gameData.length - 1) {
            currentQuestionIndex++;
            console.log("Moving to the next question, Index:", currentQuestionIndex);
            displayQuestion();
        } else {
            console.log("Last question answered, showing start over option");
            displayStartOverButton();
        }
    }, 1000); // 1 second delay
}

function displayStartOverButton() {
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');
    optionsDiv.innerHTML = '';
    resultDiv.innerHTML = 'Game Over! Click "Start Over" to play again';

    const startOverButton = document.createElement('button');
    startOverButton.textContent = "Start Over";
    startOverButton.onclick = function () {
        currentQuestionIndex = 0;
        displayQuestion();
    };
    optionsDiv.appendChild(startOverButton);

    console.log("Start Over button displayed.");
}

// Ensure this listener is correctly placed and working
document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded, displaying first question.");
    displayQuestion();
});
