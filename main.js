const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name === '' || email === '') {
    event.preventDefault();
    alert('Please fill out all required fields.');
  }
});

// Get a reference to the button element
var downloadButton = document.getElementById("downloadButton");

// Function to show the download button
function showDownloadButton() {
  downloadButton.style.display = "inline"; // Or "block" for a full-width button
}

// Use setTimeout to wait 5 seconds before showing the button
setTimeout(showDownloadButton, 5000);
