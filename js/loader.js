// Get the input field
var input = document.getElementById("q");
var icon = document.getElementsByClassName("icon");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("loader").style.display="block";
  }
});

function showLoader() {
  document.getElementById("loader").style.display="block";
}