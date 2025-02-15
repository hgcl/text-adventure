/**
 * Function that updates the DOM
 */

const currSceneEl = document.getElementById("curr-scene");
const currDescriptionEl = document.getElementById("curr-description");
const inventoryEl = document.getElementById("inventory");
const pointsEl = document.getElementById("points");

export function updateUI(element, object) {
  switch (element) {
    // Where `object === scene`

    case "location":
      currSceneEl.textContent = object.location;
      break;

    case "description":
      currDescriptionEl.replaceChildren(); // reset to zero
      const descriptionArray = object.description.split(/\n/);
      descriptionArray.forEach((line) => {
        let p = document.createElement("p");
        p.textContent = line;
        currDescriptionEl.appendChild(p);
      });
      break;

    // Where `object === player`

    case "points":
      pointsEl.textContent = object.points;
      break;

    case "inventory":
      inventoryEl.replaceChildren(); // reset to zero
      object.inventory.forEach((item) => {
        let span = document.createElement("span");
        span.textContent = item.name;
        inventoryEl.appendChild(span);
      });
      break;
  }
}
