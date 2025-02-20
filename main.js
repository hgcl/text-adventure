import { Character } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";
import { map } from "./modules/map.js";
import {
  updateScene,
  updatePlayer,
  buttonToText,
  showAllChoices,
} from "./modules/updateUI.js";

/**
 * Define game initial variables
 */
let player = new Character(0, 0, []);
let scene = scenes.scene1;
let wakeUpTime = 6;

const choicesEl = document.getElementById("choices");
const dialogEl = document.getElementById("dialog");
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
  updatePlayer("points", player);
  updatePlayer("inventory", player);
}

/**
 * Click on one of the different choices
 */
choicesEl.addEventListener("click", (e) => {
  // Get next scene object (based on choice index)
  const index = e.target.getAttribute("data-index");
  const selectedChoice = scene.choices[index];
  const nextScene = scenes[selectedChoice.next];

  // Earn points?
  let newPoints = selectedChoice.points;
  if (newPoints !== undefined) {
    console.log("+" + newPoints + " point(s)");
    player.addPoints(newPoints);
  }

  // Gain inventory items?
  const newItems = selectedChoice.inventory;
  if (newItems !== undefined) {
    console.log("+ " + newItems.name);
    player.addItem(newItems);
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

// Scene 2: update the `wakeUpTime` variable
function lateStart() {
  wakeUpTime = 10;
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

  // Find and reset content element
  const contentEl = document.getElementById("content");
  contentEl.textContent = "";

  // Add countdown to modal
  const countdownEl = document.createElement("p");
  contentEl.appendChild(countdownEl);
  setInterval(function () {
    if (timer > 0) {
      timer -= 1000;
    }
    countdownEl.textContent = `Closing in ${timer / 1000} second(s)`;
  }, 1000);

  // Add map to modal
  let pre = document.createElement("pre");
  pre.textContent = map;
  contentEl.appendChild(pre);
  // TODO => add text for screen reader
}

// Scene 4: choose direction
function chooseWay(button) {
  // If right direction
  if (["4a-straight", "4b-left", "4c-left", "4d-4th"].includes(button.id)) {
    buttonToText(button);

    switch (button.id) {
      case "4a-straight":
        updateScene("description", scene, 1);
        break;
      case "4b-left":
        updateScene("description", scene, 2);
        break;
      case "4c-left":
        updateScene("description", scene, 3);
        break;
      case "4d-4th":
        updateScene("description", scene, 4);
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
}

/**
 * Launch the game
 * Make some variables/functions available globally
 */

newScene();

window.player = player;

// Special action functions
window.incrementAge = incrementAge;
window.lateStart = lateStart;
window.showMap = showMap;
window.chooseWay = chooseWay;
