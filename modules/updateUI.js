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
      const descriptionArray = object.description.split(/\n\n/);
      descriptionArray.forEach((line) => {
        // Replace `{{xxx}}` placeholders with actual buttons
        line = line.replaceAll(
          /{{(.*?)}}/g,
          `<button id="$1" class="options">$1<\/button>`
        );
        // Replace `_xxx_` placeholders with empasized tag
        line = line.replaceAll(/_(.*?)_/g, `<em>$1<\/em>`);
        let p = document.createElement("p");
        p.innerHTML = line;
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
