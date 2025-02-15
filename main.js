import { Character } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";

/**
 * Define game initial variables
 */
let player = new Character(0, 0, []);
let scene = scenes.scene1;

const currSceneEl = document.getElementById("curr-scene");
const currDescriptionEl = document.getElementById("curr-description");
const currChoicesEl = document.getElementById("curr-choices");
const inventoryEl = document.getElementById("inventory");
const pointsEl = document.getElementById("points");

/**
 * Generate new scene
 */
function newScene() {
  console.log("===> NEW SCENE: " + scene.location);

  // Update UI (location)
  currSceneEl.textContent = scene.location;

  // Update UI (description)
  const descriptionArray = scene.description.split(/\n/);
  currDescriptionEl.replaceChildren();
  descriptionArray.forEach((line) => {
    let p = document.createElement("p");
    p.textContent = line;
    currDescriptionEl.appendChild(p);
  });

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

  // Console log choice
  console.log("[ Clicked on: " + scene.choices[index].name + " ]");

  // Earn points?
  const newPoints = scene.choices[index].points;
  if (newPoints !== undefined) {
    console.log("+" + newPoints + " point(s)");
    player.addPoints(newPoints);
  }
  // Update UI (total points)
  pointsEl.textContent = player.points;

  // Gain inventory items?
  const newItems = scene.choices[index].inventory;
  if (newItems !== undefined) {
    console.log("+ " + newItems.name);
    player.addItem(newItems);
  }
  // Update UI (inventory)
  inventoryEl.replaceChildren();
  player.inventory.forEach((item) => {
    let span = document.createElement("span");
    span.textContent = item.name;
    inventoryEl.appendChild(span);
  });

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
 * Make some variables accessible via DevTools
 */

window.player = player;
window.scene = scene;
window.scenes = scenes;
window.currDescriptionEl = currDescriptionEl;
