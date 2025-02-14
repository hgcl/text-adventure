import { Game } from "./modules/classes.js";
import { scenes } from "./modules/scenes.js";

// Init new game variables
let game = new Game(scenes.scene1);
let scene;

const currSceneEl = document.getElementById("curr-scene");
const currDescriptionEl = document.getElementById("curr-description");
const actionEl1 = document.getElementById("action-1");

function newScene() {
  // Set the scene
  scene = game.playScene();

  currSceneEl.textContent = scene.location;
  currDescriptionEl.textContent = scene.description;
}

actionEl1.addEventListener("click", (e) => {
  // if (scene.next !== undefined) {
  game = new Game(scenes[scene.next]);
  newScene();
  // }
});

newScene();
