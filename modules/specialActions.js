import { map, review } from "./drawings.js";
import { buttonToText, showAllChoices, updateSceneUI } from "./updateUI.js";

/**
 * SPECIAL ACTIONS (called through normal choices or inside of descriptions)
 */

/**
 * ALL SCENES:
 * show next description on click
 */

let descriptionIndex = 0;
export function nextDescription(button) {
  console.log(`> Next scene (clicked on ${button.id})`);
  buttonToText(button);
  descriptionIndex += 1;
  updateSceneUI("description", game.currScene, descriptionIndex);

  // Reset `descriptionIndex` to 0 if it's the last description of the array (for a scene)
  if (descriptionIndex === game.currScene.description.length - 1) {
    descriptionIndex = 0;
    showAllChoices();
  }
}

/**
 * ALL SCENES:
 * select "inline" option in a scene
 * TODO is there a better way to do write this function?
 */

export function selectOption(button) {
  // Array of "success" options that lead to next description
  const successOptions = ["5b-left", "5c-left", "5d-4th", "5d-4th", "11b-slow"];
  const lastSuccessOption = ["5e-familiar", "11c-stop"];

  let newPoints = 0;

  // If right direction
  if (successOptions.includes(button.id)) {
    console.log(`> Successful option (${button.id})`);
    newPoints += 1;
    // sent to next description
    descriptionIndex += 1;
  } else if (lastSuccessOption.includes(button.id)) {
    console.log(`> Last successful option (${button.id})`);
    showAllChoices();
    // sent to final "success" description (last in array)
    descriptionIndex = game.currScene.description.length - 1;
  } else {
    // If wrong direction
    console.log(`> Wrong option (${button.id})`);
    // sent to "fail" description (second to last in array)
    descriptionIndex = game.currScene.description.length - 2;
  }

  buttonToText(button);
  updateSceneUI("description", game.currScene, descriptionIndex);

  // Delete other non-selected options
  const descriptionId = button.id.split("-")[0].trim(); // descriptionId is "5a" for id "5a-straight"
  const altOptions = document.querySelectorAll(`[id^="${descriptionId}"]`); // TODO is this supported by most browsers?
  altOptions.forEach((option) => {
    option.remove();
  });

  // Save new points and showNotification player
  if (newPoints > 0) {
    player.addPoints(newPoints);
    showNotification("score", newPoints);
    updateStatsUI("score", player);
  }
}

/**
 * SCENE 1:
 * increment and save the player age
 */

export function incrementAge() {
  const ageEl = document.getElementById("player-age");
  // Increment by 10 years for each click, and save player age
  ageEl.textContent = Number(ageEl.textContent) + 10;
  player.age = ageEl.textContent;
}

/**
 * SCENE 2:
 * update the `lateStart` property
 */

export function lateStart() {
  game.props.lateStart = true;
}

/**
 * SCENE 5:
 * remember map (display it for a limited time)
 */

export function showMap(buttonEl) {
  const dialogEl = document.getElementById("dialog");
  const dialogContentEl = dialogEl.querySelector("#content");

  // Open modal and "cancel" button
  dialogEl.showModal();
  buttonToText(buttonEl);

  // Add automatic closing timeout
  let timer = 6000;
  setTimeout(function () {
    dialogEl.close();
  }, timer);

  // Reset content element
  dialogContentEl.textContent = "";

  // Add countdown to modal
  const countdownEl = document.createElement("p");
  dialogContentEl.appendChild(countdownEl);
  setInterval(function () {
    if (timer > 0) {
      timer -= 1000;
    }
    countdownEl.textContent = `Closing in ${timer / 1000} second(s)`;
  }, 1000);

  // Add map to modal
  let pre = document.createElement("pre");
  pre.textContent = map;
  dialogContentEl.appendChild(pre);
  // TODO => add text for screen reader
}

/**
 * SCENE 8:
 * show phone with banh mi shop result
 */

export function showPhone(buttonEl) {
  const dialogEl = document.getElementById("dialog");
  const dialogContentEl = dialogEl.querySelector("#content");

  // Open modal and "cancel" button
  dialogEl.showModal();
  buttonToText(buttonEl);

  // Reset content element
  dialogContentEl.textContent = "";

  // Add content to modal
  let pre = document.createElement("pre");
  pre.textContent = review;
  dialogContentEl.appendChild(pre);

  showAllChoices();
}
