import { Game, Character } from "./modules/classes.js";
import { scenes } from "./modules/scenario.js";
import {
  updateSceneUI,
  updateStatsUI,
  showNotification,
} from "./modules/updateUI.js";
import {
  incrementAge,
  lateStart,
  showMap,
  showPhone,
  nextDescription,
  selectOption,
} from "./modules/specialActions.js";

/**
 * INITIALIZE:
 * Define game initial variables
 */

let player = new Character(0, 0, [], 150);
let game = new Game(scenes.scene1, {});

const choicesEl = document.getElementById("choices");
const dialogEl = document.getElementById("dialog");
const closeDialogBtn = dialogEl.querySelector("#close");

/**
 * NEW SCENE:
 * Generate a new scene
 */

function newScene() {
  console.log("=== NEW SCENE: " + game.currScene.location + " ===");

  // Clear all previous choices
  choicesEl.replaceChildren();

  // Update UI
  updateSceneUI("scene", game.currScene);
  updateSceneUI("location", game.currScene);
  updateSceneUI("description", game.currScene, 0);
  updateSceneUI("choices", game.currScene);
  updateStatsUI("score", player);
  updateStatsUI("inventory", player);
  updateStatsUI("wallet", player);
}

/**
 * SELECT ONE CHOICE:
 * Event listener to select one of the available choices at the end of a scene
 */

choicesEl.addEventListener("click", (e) => {
  // Get next scene object (based on choice index)
  const index = game.currScene.choices.findIndex(
    (choice) => choice.name === e.target.textContent
  );
  const selectedChoice = game.currScene.choices[index];

  // Define next scene depending on props stored in `game.props`
  let nextScene = scenes[selectedChoice.next.default];
  for (const condition in game.props) {
    if (
      Object.hasOwn(game.props, condition) &&
      selectedChoice.next[condition]
    ) {
      nextScene = scenes[selectedChoice.next[condition]];
    }
  }

  // Earn points?
  let newPoints = selectedChoice.points;
  if (newPoints !== undefined) {
    console.log("+" + newPoints + " point(s)");
    player.addPoints(newPoints);
    showNotification("score", newPoints);
  }

  // Gain inventory items?
  const newItems = selectedChoice.inventory;
  if (newItems !== undefined) {
    console.log("+ " + newItems.name);
    player.addItem(newItems);
    showNotification("inventory", newItems.name);
  }

  // Earn or spend money?
  const moneyAmount = selectedChoice.money;
  if (moneyAmount !== undefined) {
    console.log("Money used: " + moneyAmount + " k");
    player.useMoney(moneyAmount);
    showNotification("wallet", moneyAmount);
  }

  // Set the next scene
  if (nextScene !== undefined) {
    game.currScene = nextScene;
    newScene();
  }
});

/**
 * CLOSE DIALOG:
 * Event listener to close the dialog element
 */

closeDialogBtn.addEventListener("click", () => {
  dialogEl.close();
});

/**
 * LAUNCH GAME:
 * - Call `newScene()`
 * - Make some variables/functions available globally
 */

newScene();

// Global variables
window.game = game;
window.player = player;

// Special action functions
window.nextDescription = nextDescription;
window.incrementAge = incrementAge;
window.lateStart = lateStart;
window.showMap = showMap;
window.showPhone = showPhone;
window.selectOption = selectOption;
