function changeColor() {
  // Create a random hex color code
  var color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = color;
  document.getElementById("colorDisplay").innerText = "Current Color: " + color;
}

document.getElementById("colorButton").addEventListener("click", changeColor);
