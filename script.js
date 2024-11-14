// script.js

// Dummy SQL response for demonstration
const DUMMY_SQL_SCRIPT = `
-- Sample SQL Script Generated from Image
CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, username, email) VALUES (1, 'johndoe', 'johndoe@example.com');
`;

// Function to handle image upload
function uploadImage() {
  const fileInput = document.getElementById('imageUpload');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please upload an image!');
    return;
  }

  // Show loading indicator
  document.getElementById('loading').classList.remove('hidden');

  // Simulate processing and showing dummy SQL script
  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('outputSection').classList.remove('hidden');
    document.getElementById('sqlOutput').value = DUMMY_SQL_SCRIPT;
  }, 2000); // Simulating a 2-second delay to mimic processing time
}

// Function to copy SQL script to clipboard
function copyToClipboard() {
  const sqlOutput = document.getElementById('sqlOutput');
  sqlOutput.select();
  document.execCommand('copy');
  alert('SQL script copied to clipboard!');
}
