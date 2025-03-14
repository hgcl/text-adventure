const choicesEl = document.getElementById("choices");

/**
 * UPDATE SCENE UI:
 * Function that updates the DOM for every new scene
 * e.g. scene location, description, choices
 */

export function updateSceneUI(element, ...args) {
  const sceneEl = document.getElementById("scene");
  const locationEl = document.getElementById("location");
  const descriptionEl = document.getElementById("description");

  let scene = args[0];
  let index = args[1];

  switch (element) {
    case "scene":
      sceneEl.setAttribute("class", scene.id);
      break;

    case "location":
      locationEl.textContent = scene.location;
      break;

    // when args[0] is "description", the function needs an extra "index" arg
    case "description":
      // Reset to nothing (only if description is undivided, and shown in full)
      if (index === 0) {
        descriptionEl.replaceChildren();
      }
      const descriptionArray = scene.description[index].split(/\n\n/);
      descriptionArray.forEach((line) => {
        // Replace `{{xxx}}` placeholders with HTML tags for buttons
        // the 3 captured groups are (1) the button label, (2) the id, (3) the function it calls
        line = line.replaceAll(
          /{{(.*?)\|(.*?)\|(.*?)}}/g,
          `<button id="$2" onclick="$3;">$1<\/button>`
        );
        // Replace `_xxx_` placeholders with empasized HTML tag
        line = line.replaceAll(/_(.*?)_/g, `<em>$1<\/em>`);
        let p = document.createElement("p");
        p.innerHTML = line;
        descriptionEl.appendChild(p);
      });
      break;

    case "choices":
      // Create a button for each choice
      scene.choices.forEach((choice) => {
        let btn = document.createElement("button");
        btn.textContent = choice.name;
        // Hide choice by default if there are multiple descriptions for one scene. We can later display them with `showAllChoices()`
        if (scene.description.length > 1) {
          btn.setAttribute("hidden", "true");
        }
        // Add a class name to choices with special actions
        let specialAction = choice.specialAction;
        if (specialAction) {
          btn.setAttribute("onclick", `${specialAction}();`);
        }
        choicesEl.appendChild(btn);
      });
      break;
  }
}

/**
 * UPDATE STATS UI:
 * - Function that updates the DOM for player stats info
 * - e.g. inventory, score, wallet
 */

export function updateStatsUI(element, ...args) {
  const scoreEl = document.getElementById("score");
  const inventoryEl = document.getElementById("inventory");
  const walletEl = document.getElementById("wallet");

  let player = args[0];

  switch (element) {
    case "score":
      scoreEl.textContent = player.score;
      break;

    case "inventory":
      if (player.inventory.length) {
        inventoryEl.replaceChildren(); // reset to nothing
        player.inventory.forEach((item) => {
          let span = document.createElement("span");
          span.textContent = item.name;
          inventoryEl.appendChild(span);
        });
      } else {
        inventoryEl.textContent = "nothing";
      }
      break;

    case "wallet":
      walletEl.textContent = `${player.wallet},000 VND`;
      break;
  }
}

/**
 * BUTTON TO TEXT:
 * - Function that transforms buttons into normal text after one use
 * - where `buttonEl` is the HTML element found in the DOM
 */

export function buttonToText(buttonEl) {
  // TODO is inserting HTML like this dangerous?
  buttonEl.insertAdjacentHTML("afterend", `<em>${buttonEl.textContent}</em>`);
  buttonEl.remove();
}

/**
 * SHOW ALL CHOICES:
 * - Function that displays all choices that had a `hidden` attribute by default
 */

export function showAllChoices() {
  Array.from(choicesEl.childNodes).forEach((el) =>
    el.removeAttribute("hidden")
  );
}

/**
 * SHOW NOTIFICATION:
 * - Function that shows a modal with: earned points, earned/used money
 * - TODO: add focus for screen reader
 */

export function showNotification(element, ...args) {
  const notificationEl = document.getElementById("notification");

  let item = args[0];
  let points = args[0];
  let money = args[0];

  // Show notification
  notificationEl.removeAttribute("hidden");
  let p = document.createElement("p");

  switch (element) {
    case "inventory":
      p.textContent = `You now have ${item}!`;
      break;

    case "score":
      p.textContent = `You are ${points} point(s) closer to being a responsible adult!`;
      break;

    case "wallet":
      if (money < 0) {
        p.textContent = `You spent ${money * -1},000 VND.`;
      } else {
        p.textContent = `You earned ${money},000 VND.`;
      }
      break;
  }

  notificationEl.appendChild(p);

  // Add automatic closing timeout
  let timer = 5000;
  setTimeout(function () {
    notificationEl.setAttribute("hidden", "true");
    notificationEl.replaceChildren(); // reset to nothing
  }, timer);
}
