// Age Calculator Logic
document.getElementById('calculate-btn').addEventListener('click', function() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    if (isNaN(birthdate.getTime())) {
      document.getElementById('result').innerHTML = '<p style="color:red">Please select a valid date</p>';
      return;
    }
  
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('result').innerHTML = `
      <p>Your age is:</p>
      <h4>${years} years, ${months} months, ${days} days</h4>
    `;
  });
  // Rock Paper Scissors Logic
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice-btn').forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(playerChoice, computerChoice);
    
    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
  });
});

function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  }
  return 'computer';
}

function updateScore(result) {
  if (result === 'player') playerScore++;
  if (result === 'computer') computerScore++;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(player, computer, result) {
  const resultText = {
    player: 'You win!',
    computer: 'Computer wins!',
    draw: "It's a draw!"
  };
  
  document.getElementById('game-result').innerHTML = `
    <p>You chose <strong>${player}</strong></p>
    <p>Computer chose <strong>${computer}</strong></p>
    <h4>${resultText[result]}</h4>
  `;
}
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});