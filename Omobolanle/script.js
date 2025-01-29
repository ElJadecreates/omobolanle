// Array of love messages
const loveMessages = [
  "Omobolanle, you are the light of my life. I love you more than words can express.",
  "Every moment with you feels like a dream. I cherish you deeply.",
  "You are my heart, my soul, and my everything. I love you endlessly.",
  "Omobolanle, your love is the greatest gift I have ever received.",
  "I fall in love with you more every single day. You are my forever.",
  "You are my rock, my safe haven, and my greatest source of happiness.",
  "I promise to love you, cherish you, and stand by you for all eternity.",
  "Omobolanle, you are my past, my present, and my future. I love you always.",
  "Your smile brightens my day, and your love fills my heart with joy.",
  "I am so grateful to have you in my life. You are my everything.",
];

// Function to display a random love message
function showRandomMessage() {
  const messageElement = document.getElementById("love-messages");
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  messageElement.textContent = loveMessages[randomIndex];
}

// Event listener for the button
document.getElementById("show-message").addEventListener("click", showRandomMessage);

// Display a message when the page loads
window.onload = showRandomMessage;