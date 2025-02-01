// Function to get votes from local storage
function getVotes() {
    return JSON.parse(localStorage.getItem('votes')) || { 'Option 1': 0, 'Option 2': 0, 'Option 3': 0 };
}

// Function to save votes to local storage
function saveVotes(votes) {
    localStorage.setItem('votes', JSON.stringify(votes));
}

// Function to display results
function displayResults() {
    const votes = getVotes();
    let resultText = 'Current Votes:\n';
    for (const [option, count] of Object.entries(votes)) {
        resultText += `${option}: ${count}\n`;
    }
    document.getElementById('result').innerText = resultText;
}

// Handle form submission
document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="vote"]:checked').value;
    const votes = getVotes();
    votes[selectedOption] += 1;
    saveVotes(votes);
    document.getElementById('result').innerText = `You voted for: ${selectedOption}`;
    displayResults();
});

// Handle show results button click
document.getElementById('showResults').addEventListener('click', displayResults);

// Display initial results
displayResults();
