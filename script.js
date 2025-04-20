// select the container div and style it to make it visible on the screen
const container = document.querySelector("#container");
container.style.border = "2px solid black";
container.style.width = "500px";
container.style.height = "500px";

// Declare the global gridSize and color mode variables
let gridSize = 16; // Default grid size
let colorMode = false; //Defualt black mode
//create the square for the grid and append them to the container
function createGrid(gridSize) {
  // Get container dimensions
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Calculate square size dynamically based on grid size
  const squareSize = containerWidth / gridSize;

  //clear the previous grid before creating a new one
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.border = "1px solid black";
    square.style.flexBasis = `${squareSize}px`; // Makes the squares' size consistent
    square.style.boxSizing = "border-box"; // Makes sure border is included in the width/height\
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.append(square);
  }
}
createGrid(gridSize);
// Select the reset button
const resetButton = document.querySelector("#reset-button");

// Function to clear the grid and regenerate it
function resetGrid() {
  // Recreate the grid
  createGrid(gridSize);
}

// Event listener for the reset button
resetButton.addEventListener("click", resetGrid);

// select the grid size button
const gridSizeButton = document.querySelector("#grid-button");

// create a function to change the grid size
function changeGridSize() {
  let newGridSize = prompt("Please enter a size for the grid: ", gridSize); // Ask the user for input and set a default size of the user does not enter anything
  //Convert the input to a number
  newGridSize = Number(newGridSize);

  //Check if the number is valid: not NaN, greater than 0, and between 1 and 100
  if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
    //If it's valid: clear the current grid and create a new grid with the given size
    gridSize = newGridSize;
    createGrid(gridSize);
  } else {
    // If it’s not valid: show an alert saying "Please enter a number between 1 and 100"
    //    - optionally, ask the user again using a loop (if you want to go that far)
    alert("Please enter a number between 1 and 100!");
  }
}

//event listener for the grid size button, When the button is clicked, run the changeGridSize function
gridSizeButton.addEventListener("click", changeGridSize);

// select the button for color mode
const colorButton = document.querySelector("#color-mode");

// event listener for color mode
colorButton.addEventListener("click", toggleColorMode);

function toggleColorMode() {}