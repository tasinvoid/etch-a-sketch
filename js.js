//drawingBoard div
let rows = document.getElementsByClassName("rows");
let boxs = document.getElementsByClassName("boxs");
let drawingBoard = document.createElement("div");
//drawing Board
function makeDrawingBoard() {
  drawingBoard.setAttribute("id", "drawingBoard");
  drawingBoard.classList.add(
    "w-82",
    "h-88",
    "border",
    "flex",
    "flex-col",
    "flex-1"
  );
  document.body.appendChild(drawingBoard);
}

function divMaker(parentEl, numberOfChild, childClassName) {
  for (let i = 0; i < numberOfChild; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", childClassName);

    parentEl.appendChild(div);
  }
}

let generateRandomColor = function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

function makeBoxs(number, generateRandomColor) {
  // creating 16 rows
  divMaker(drawingBoard, number, "rows");
  // creating 16 culumns of boxs and adding css in rows
  for (let row of rows) {
    divMaker(row, number, "boxs");
    row.classList.add("border", "border-gray-300", "flex", "flex-1", "h-full");
  }
  // adding style and eventlistener to each box
  for (let box of boxs) {
    box.classList.add("w-full", "h-full", "border", "border-gray-300");
    box.addEventListener("mouseover", (e) => {
      console.log(generateRandomColor());
      e.target.style.backgroundColor = generateRandomColor();
    });
  }
}

function addPromptBtn() {
  let promptBtn = document.createElement("button");
  promptBtn.innerText = "clear";
  promptBtn.classList.add("btn", "btn-primary");
  promptBtn.addEventListener("click", () => {
    document.getElementById("drawingBoard").innerHTML = "";
    let number = prompt("Enter the number of boxs");
    makeBoxs(number, generateRandomColor);
  });
  document.body.appendChild(promptBtn);
}
let start = new Event("addBtnBoard");
document.addEventListener("addBtnBoard", () => {
  makeDrawingBoard();
  addPromptBtn();
});
document.dispatchEvent(start);
