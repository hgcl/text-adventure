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
  updateUI("description", scene);

  // Create a button for each choice and record its index number in `data-index`
  for (let i = 0; i < scene.choices.length; i++) {
    let specialAction = scene.choices[i].specialAction;
    let btn = document.createElement("button");
    btn.textContent = scene.choices[i].name;
    // Append a class name to choices with special actions
    if (specialAction) {
      btn.setAttribute("class", `sa-${specialAction}`);
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

newScene();

/**
 * Scene 1 (scene-specific JS)
 */

let scene1El = document.querySelector(`#scene.scene1`);

// Choose and save player age
const optionsEls = scene1El.querySelectorAll(".options");
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
 * Scene 2 (scene-specific JS)
 */

let scene2El = document.querySelector(`#scene.scene2`);

scene2El
  .querySelector("#choices .sa-lateStart")
  .addEventListener("click", (e) => {
    wakeUpTime = 10;
    console.log("Late start at " + wakeUpTime);
  });

/**
 * Make some variables accessible via DevTools
 */

window.player = player;
