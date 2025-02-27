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
const dialogContentEl = dialogEl.querySelector("#content");
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

// For all scenes: show next description on click
let descriptionIndex = 0;
function nextDescription(button) {
  buttonToText(button);
  descriptionIndex += 1;
  updateScene("description", scene, descriptionIndex);

  // Reset `descriptionIndex` to 0 if it's the last description of the array (for a scene)
  if (scene.description.length === descriptionIndex + 1) {
    descriptionIndex = 0;
    showAllChoices();
  }
}

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
// TODO is there a better way to do write this function?
function chooseWay(button) {
  let newPoints = 0;

  // If right direction
  if (["5b-left", "5c-left", "5d-4th"].includes(button.id)) {
    buttonToText(button);

    switch (button.id) {
      case "5b-left":
        descriptionIndex = 2;
        newPoints += 1;
        break;
      case "5c-left":
        descriptionIndex = 3;
        newPoints += 1;
        break;
      case "5d-4th":
        descriptionIndex = 4;
        newPoints += 3;
        break;
    }
  } else {
    // If wrong direction
    descriptionIndex = 5;
  }

  // Update scene based on descriptionIndex
  updateScene("description", scene, descriptionIndex);

  // Delete other non-selected options
  const descriptionId = button.id.split("-")[0].trim(); // descriptionId is "5a" for id "5a-straight"
  const altOptions = document.querySelectorAll(`[id^="${descriptionId}"]`); // TODO is this supported by most browsers?
  altOptions.forEach((option) => {
    option.remove();
  });

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
window.nextDescription = nextDescription;

// Special action functions
window.incrementAge = incrementAge;
window.lateStart = lateStart;
window.showMap = showMap;
window.chooseWay = chooseWay;
