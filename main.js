import { Character } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";
import { map } from "./modules/map.js";
import {
  updateScene,
  updatePlayer,
  buttonToText,
  showAllChoices,
  notify,
} from "./modules/updateUI.js";

/**
 * Define game initial variables
 */
let player = new Character(0, 0, [], 150);
let scene = scenes.scene1;
let gameProps = {};

const choicesEl = document.getElementById("choices");
const dialogEl = document.getElementById("dialog");
const dialogContentEl = document.getElementById("content");
const closeDialogBtn = dialogEl.querySelector("#close");

/**
 * Generate new scene
 */
function newScene() {
  console.log("===> NEW SCENE: " + scene.location);

  // Clear all previous choices
  choicesEl.replaceChildren();

  // Update UI
  updateScene("scene", scene);
  updateScene("location", scene);
  updateScene("description", scene, 0);
  updateScene("choices", scene);
  updatePlayer("score", player);
  updatePlayer("inventory", player);
  updatePlayer("wallet", player);
}

/**
 * Click on one of the different choices
 */
choicesEl.addEventListener("click", (e) => {
  // Get next scene object (based on choice index)
  const index = e.target.getAttribute("data-index");
  const selectedChoice = scene.choices[index];

  // Define next scene depending on props stored in `gameProps`
  let nextScene = scenes[selectedChoice.next.default];
  for (const condition in gameProps) {
    if (Object.hasOwn(gameProps, condition) && selectedChoice.next[condition]) {
      nextScene = scenes[selectedChoice.next[condition]];
    }
  }

  // Earn points?
  let newPoints = selectedChoice.points;
  if (newPoints !== undefined) {
    console.log("+" + newPoints + " point(s)");
    player.addPoints(newPoints);

    // Show points in modal
    notify("score", newPoints);
  }

  // Gain inventory items?
  const newItems = selectedChoice.inventory;
  if (newItems !== undefined) {
    console.log("+ " + newItems.name);
    player.addItem(newItems);
  }

  // Earn or spend money?
  const moneyAmount = selectedChoice.money;
  if (moneyAmount !== undefined) {
    console.log("Money earned/spent: " + moneyAmount);
    player.useMoney(moneyAmount);

    // Show money used in modal
    notify("wallet", moneyAmount);
  }

  // Set the next scene
  if (nextScene !== undefined) {
    scene = nextScene;
    newScene();
  }
});

/**
 * Close dialog event listener
 */
closeDialogBtn.addEventListener("click", () => {
  dialogEl.close();
});

/**
 * Special actions (called through normal choices or inside of descriptions)
 */

// Scene 1: increment and save the player age
function incrementAge() {
  const ageEl = document.getElementById("player-age");
  // Increment by 10 years for each click, and save player age
  ageEl.textContent = Number(ageEl.textContent) + 10;
  player.age = ageEl.textContent;
}

// Scene 2: update the `lateStart` property
function lateStart() {
  gameProps.lateStart = true;
}

// Scene 4: remember map
function showMap(buttonEl) {
  // Open modal and "cancel" button
  dialogEl.showModal();
  buttonToText(buttonEl);

  // Add automatic closing timeout
  let timer = 6000;
  setTimeout(function () {
    dialogEl.close();
  }, timer);

  // Reset content element
  dialogContentEl.textContent = "";

  // Add countdown to modal
  const countdownEl = document.createElement("p");
  dialogContentEl.appendChild(countdownEl);
  setInterval(function () {
    if (timer > 0) {
      timer -= 1000;
    }
    countdownEl.textContent = `Closing in ${timer / 1000} second(s)`;
  }, 1000);

  // Add map to modal
  let pre = document.createElement("pre");
  pre.textContent = map;
  dialogContentEl.appendChild(pre);
  // TODO => add text for screen reader
}

// Scene 4: choose direction
function chooseWay(button) {
  let newPoints = 0;

  // If right direction
  if (["5a-straight", "5b-left", "5c-left", "5d-4th"].includes(button.id)) {
    buttonToText(button);

    switch (button.id) {
      case "5a-straight":
        updateScene("description", scene, 1);
        break;
      case "5b-left":
        updateScene("description", scene, 2);
        newPoints += 1;
        break;
      case "5c-left":
        updateScene("description", scene, 3);
        newPoints += 1;
        break;
      case "5d-4th":
        updateScene("description", scene, 4);
        newPoints += 3;
        showAllChoices();
        break;
    }
  } else {
    // If wrong direction
    updateScene("description", scene, 5);
    showAllChoices();

    // Create new tag
    const newTag = document.createElement("em");
    newTag.textContent = button.textContent;

    // Replace old button
    const parentNode = button.parentNode;
    parentNode.textContent = "";
    parentNode.appendChild(newTag);
  }

  // Save new points and notify player
  if (newPoints > 0) {
    player.addPoints(newPoints);
    notify("score", newPoints);
    updatePlayer("score", player);
  }
}

/**
 * Launch the game
 * Make some variables/functions available globally
 */

newScene();

window.player = player;
window.gameProps = gameProps;

// Special action functions
window.incrementAge = incrementAge;
window.lateStart = lateStart;
window.showMap = showMap;
window.chooseWay = chooseWay;
