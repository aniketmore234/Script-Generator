
// script.js

// API Endpoint (replace with your actual Google Vertex AI endpoint)
const GOOGLE_VERTEX_API_URL = 'https://your-api-endpoint-url';

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

  // Convert the image file to Base64
  const reader = new FileReader();
  reader.onload = function () {
    const base64Image = reader.result.split(',')[1];
    sendToAPI(base64Image);
  };
  reader.readAsDataURL(file);
}

// Function to send image to Google Vertex AI API
async function sendToAPI(imageData) {
  try {
    const response = await fetch(GOOGLE_VERTEX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'  // Replace with your API key
      },
      body: JSON.stringify({
        image: imageData
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Show SQL output
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('outputSection').classList.remove('hidden');
    document.getElementById('sqlOutput').value = data.sql_script || 'No SQL script generated.';
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while processing the image.');
    document.getElementById('loading').classList.add('hidden');
  }
}

// Function to copy SQL script to clipboard
function copyToClipboard() {
  const sqlOutput = document.getElementById('sqlOutput');
  sqlOutput.select();
  document.execCommand('copy');
  alert('SQL script copied to clipboard!');
}
