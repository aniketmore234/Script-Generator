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

// Function to handle multiple image uploads
function uploadImages() {
  const fileInput = document.getElementById('imageUpload');
  const files = fileInput.files;

  if (files.length === 0) {
    alert('Please upload one or more images!');
    return;
  }

  // Show loading indicator
  document.getElementById('loading').classList.remove('hidden');

  // Simulate processing for each image
  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('outputSection').classList.remove('hidden');
    
    const sqlOutputsContainer = document.getElementById('sqlOutputs');
    sqlOutputsContainer.innerHTML = ''; // Clear any previous outputs

    // Generate dummy SQL script for each uploaded image
    Array.from(files).forEach((file, index) => {
      const sqlOutputBlock = document.createElement('div');
      sqlOutputBlock.className = 'sql-output-block';
      
      // Display image file name
      const fileName = document.createElement('p');
      fileName.innerText = `Image ${index + 1}: ${file.name}`;
      
      // Textarea for SQL output
      const sqlTextArea = document.createElement('textarea');
      sqlTextArea.value = DUMMY_SQL_SCRIPT;
      sqlTextArea.readOnly = true;
      
      // Copy button for each SQL output
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.innerText = 'Copy';
      copyButton.onclick = () => copyToClipboard(sqlTextArea);
      
      // Append elements to the output block
      sqlOutputBlock.appendChild(fileName);
      sqlOutputBlock.appendChild(sqlTextArea);
      sqlOutputBlock.appendChild(copyButton);
      
      // Append the block to the container
      sqlOutputsContainer.appendChild(sqlOutputBlock);
    });
  }, 2000); // Simulating a 2-second delay to mimic processing time
}

// Function to copy SQL script to clipboard
function copyToClipboard(textArea) {
  textArea.select();
  document.execCommand('copy');
  alert('SQL script copied to clipboard!');
}
