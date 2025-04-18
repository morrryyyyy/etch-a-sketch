// select the container div
const container = document.querySelector("#container");
container.style.border = "2px solid black";
container.style.width = "800px";
container.style.height = "800px";

// Get container dimensions
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

// Calculate square size dynamically based on grid size (16x16)
const squareSize = containerWidth / 16;

//create the square for the grid and append them to the container
for (let i = 0; i < 256; i++) {
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
