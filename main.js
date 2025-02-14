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
const actionEl1 = document.getElementById("action-1");

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
    // Indicate next scene in `data-next` attribute
    btn.setAttribute("data-next", scene.choices[i].next);
  }
}

/**
 * Click on one of the different choices
 */
currChoicesEl.addEventListener("click", (e) => {
  // Get next scene from `data-next` attribute
  const nextScene = e.target.getAttribute("data-next");

  // Clear all previous choices (buttons)
  currChoicesEl.replaceChildren();

  // Set the next scene
  if (scenes[scene.next] !== undefined) {
    game = new Game(scenes[nextScene]);

    newScene();
  }
});

newScene();
