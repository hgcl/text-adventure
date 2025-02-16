import { Character } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";
import { updateUI } from "./modules/updateUI.js";

/**
 * Define game initial variables
 */
let player = new Character(0, 0, []);
let scene = scenes.scene1;

const currChoicesEl = document.getElementById("curr-choices");

/**
 * Generate new scene
 */
function newScene() {
  console.log("===> NEW SCENE: " + scene.location);

  // Update UI (location and description)
  updateUI("location", scene);
  updateUI("description", scene);

  // Create a button for each choice and record its index number in `data-index`
  for (let i = 0; i < scene.choices.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = scene.choices[i].name;
    currChoicesEl.appendChild(btn);
    // Record choice index number in `data-index` attribute
    btn.setAttribute("data-index", i);
  }
}

/**
 * Click on one of the different choices
 */
currChoicesEl.addEventListener("click", (e) => {
  // Get next scene object (based on choice index)
  const index = e.target.getAttribute("data-index");
  const nextScene = scenes[scene.choices[index].next];
  // Does the selected choice have a special action?
  let selectedSpecialAction;
  if (scene.choices[index].specialAction) {
    selectedSpecialAction = scene.choices[index].specialAction;
  }

  // Console log choice
  console.log("[ Clicked on: " + scene.choices[index].name + " ]");

  // Earn points?
  let newPoints = scene.choices[index].points;
  if (
    (newPoints !== undefined) |
    (selectedSpecialAction === "emptyInventory")
  ) {
    // Empty inventory to earn points?
    if (selectedSpecialAction === "emptyInventory") {
      // Count points
      newPoints = 0;
      player.inventory.forEach((item) => {
        newPoints += item.points;
      });
      // Reset inventory
      player.inventory = [];
    }
    console.log("+" + newPoints + " point(s)");
    player.addPoints(newPoints);
  }

  // Update UI (total points)
  updateUI("points", player);

  // Gain inventory items?
  const newItems = scene.choices[index].inventory;
  if (newItems !== undefined) {
    console.log("+ " + newItems.name);
    player.addItem(newItems);
  }

  // Update UI (inventory)
  updateUI("inventory", player);

  // Clear all previous choices (buttons)
  currChoicesEl.replaceChildren();

  // Set the next scene
  if (nextScene !== undefined) {
    scene = nextScene;
    newScene();
  }
});

newScene();

/**
 * Scene-specific JS
 */

// Choose player age
const optionsEls = document.querySelectorAll(".options");
optionsEls.forEach((option) =>
  option.addEventListener("click", (e) => {
    // Set player age
    player.age = e.target.innerHTML;

    // Remove non-selected buttons
    let selectedId = e.target.getAttribute("id");
    optionsEls.forEach((x) => {
      if (x.getAttribute("id") !== selectedId) {
        x.setAttribute("hidden", "true");
      }
    });
  })
);

/**
 * Make some variables accessible via DevTools
 */

window.player = player;
window.scene = scene;
window.scenes = scenes;
