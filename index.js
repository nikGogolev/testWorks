const generateRandomSet = () => {
  const randomSet = new Set();
  while (randomSet.size < 6) {
    randomSet.add(Math.ceil(Math.random() * 6));
  }
  return Array.from(randomSet);
};

const randomArray = generateRandomSet();

const leftBox = document.getElementById("left-box");
const middleBox = document.getElementById("middle-box");
const rightBox = document.getElementById("right-box");
const header = document.getElementsByClassName("header")[0];
const stepCounter = document.getElementById("step-counter");
let counter = 0;

const checkPosition = (left) => {
  if (left < middleBox.offsetLeft) {
    return leftBox;
  } else if (left >= middleBox.offsetLeft && left < rightBox.offsetLeft) {
    return middleBox;
  } else if (left >= rightBox.offsetLeft) {
    return rightBox;
  } else {
    return leftBox;
  }
};

const checkWin = (array) => {
  const win = array.join("") === "123456";

  if (win) {
    const bricks = document.querySelectorAll(".brick-item");
    bricks.forEach((item) => {
      item.draggable = false;
    });
    header.style.backgroundColor = "green";
    header.textContent = "Вы выиграли";
  }
};

const checkLose = (currEl, downEl) => {
  if (downEl) {
    if (currEl.id > downEl.id) {
      const bricks = document.querySelectorAll(".brick-item");
      bricks.forEach((item) => {
        item.draggable = false;
      });
      header.style.backgroundColor = "red";
      header.textContent = "Вы проиграли";
      return true;
    }
  }
  return false;
};

const dragEvent = (event) => {
  const brick = event.target;

  const box = checkPosition(event.pageX);

  const prevBox = box;

  brick.ondragend = (event) => {
    const box = checkPosition(event.pageX);
    const lose = checkLose(brick, box.firstChild);
    counter++;
    stepCounter.textContent = `Шагов: ${counter}`;
    if (!lose) {
      if (box.firstChild) {
        box.firstChild.draggable = false;
        box.insertBefore(brick, box.firstChild);
      } else {
        box.appendChild(brick);
      }
      if (prevBox.firstChild) {
        prevBox.firstChild.draggable = true;
      }
      const checkArray = [];
      box.querySelectorAll(".brick-item").forEach((item) => {
        checkArray.push(+item.id);
      });
      checkWin(checkArray);
    }
  };
};

randomArray.forEach((item) => {
  const brick = document.createElement("div");
  brick.classList.add("brick-item");
  brick.style.width = `${item * 30}px`;
  brick.style.backgroundColor = `rgb(${item * 40},${item * 5 + 90},${
    150 - item * 10
  })`;
  brick.id = item;
  brick.ondragstart = dragEvent;
  leftBox.appendChild(brick);
});

leftBox.firstChild.draggable = true;
