import { Game } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";

/**
 * Define game initial variables
 */
let game = new Game(scenes.scene1);
let scene;

const currSceneEl = document.getElementById("curr-scene");
const currDescriptionEl = document.getElementById("curr-description");
const currChoicesEl = document.getElementById("curr-choices");

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
  // Get next scene
  const choiceIndex = e.target.getAttribute("data-index");
  const nextScene = scenes[scene.choices[choiceIndex].next];

  // Clear all previous choices (buttons)
  currChoicesEl.replaceChildren();

  // Set the next scene
  if (nextScene !== undefined) {
    game = new Game(nextScene);
    newScene();
  }
});

newScene();
