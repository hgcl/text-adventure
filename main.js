import { Character } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";
import { updateUI } from "./modules/updateUI.js";

/**
 * Define game initial variables
 */
let player = new Character(0, 0, []);
let scene = scenes.scene1;
let wakeUpTime = 6;

const choicesEl = document.getElementById("choices");

/**
 * Generate new scene
 */
function newScene() {
  console.log("===> NEW SCENE: " + scene.location);

  // Update UI (scene, location and description)
  updateUI("scene", scene);
  updateUI("location", scene);
  updateUI("description", scene, 0);

  // Create a button for each choice and record its index number in `data-index`
  for (let i = 0; i < scene.choices.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = scene.choices[i].name;
    // Append a class name to choices with special actions
    let specialAction = scene.choices[i].specialAction;
    if (specialAction) {
      btn.setAttribute("onclick", `${specialAction}();`);
    }
    choicesEl.appendChild(btn);
    // Record choice index number in `data-index` attribute
    btn.setAttribute("data-index", i);
  }
}

/**
 * Click on one of the different choices
 */
choicesEl.addEventListener("click", (e) => {
  // Get next scene object (based on choice index)
  const index = e.target.getAttribute("data-index");
  const nextScene = scenes[scene.choices[index].next];

  // Console log choice
  console.log("[ Clicked on: " + scene.choices[index].name + " ]");

  // Earn points?
  let newPoints = scene.choices[index].points;
  if (newPoints !== undefined) {
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
  choicesEl.replaceChildren();

  // Set the next scene
  if (nextScene !== undefined) {
    scene = nextScene;
    newScene();
  }
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

// Scene 4: choose direction
function chooseWay(el) {
  // Successes (choose right direction)
  switch (el.id) {
    case "4a-straight":
      updateUI("description", scene, 1);
      break;
    case "4b-left":
      updateUI("description", scene, 2);
      break;
    case "4c-left":
      updateUI("description", scene, 3);
      break;
    case "4d-4th":
      updateUI("description", scene, 4);
      break;
    case "4e-final-choice":
      break;
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
window.chooseWay = chooseWay;
