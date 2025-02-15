import { Game, Character } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";

/**
 * Define game initial variables
 */
let game = new Game(scenes.scene1);
let player = new Character(0, 0, []);
let scene;

const currSceneEl = document.getElementById("curr-scene");
const currDescriptionEl = document.getElementById("curr-description");
const currChoicesEl = document.getElementById("curr-choices");
const inventoryEl = document.getElementById("inventory");

/**
 * Generate new scene
 */
function newScene() {
  // Set the scene
  scene = game.playScene();

  currSceneEl.textContent = scene.location;
  currDescriptionEl.textContent = scene.description;

  // Create a button for each choice
  for (let i = 0; i < scene.choices.length; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = scene.choices[i].name;
    currChoicesEl.appendChild(btn);
    // Record choice index number in `data-index` attribute
    btn.setAttribute("data-index", i);
  }
}

/**
 * Click on one of the different choices
 */
currChoicesEl.addEventListener("click", (e) => {
  // Get next scene (based on choice index)
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
  // Gain inventory items?
  const newItems = scene.choices[index].inventory;
  if (newItems !== undefined) {
    console.log("+ " + newItems.name);
    player.addItem(newItems);
  }
  // Update inventory in UI
  let par = document.createElement("p");
  par.innerHTML = newItems.name;
  inventoryEl.appendChild(par);
  // Record potential points for item
  par.setAttribute("data-points", newItems.points);

  // Clear all previous choices (buttons)
  currChoicesEl.replaceChildren();

  // Set the next scene
  if (nextScene !== undefined) {
    game = new Game(nextScene);
    newScene();
    console.log("===> NEW SCENE: " + nextScene.location);
  }
});

newScene();
console.log("===> START SCENE: " + scene.location);
