/**
 * Function that updates the DOM
 */

const sceneEl = document.getElementById("scene");
const locationEl = document.getElementById("location");
const descriptionEl = document.getElementById("description");
const inventoryEl = document.getElementById("inventory");
const pointsEl = document.getElementById("points");

export function updateUI(element, ...args) {
  switch (element) {
    // Where `args[0] === scene`

    case "scene":
      sceneEl.setAttribute("class", args[0].id);
      break;

    case "location":
      locationEl.textContent = args[0].location;
      break;

    case "description":
      descriptionEl.replaceChildren(); // reset to zero
      const descriptionArray = args[0].description.split(/\n\n/);
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
        descriptionEl.appendChild(p);
      });
      break;

    // Where `args[0] === player`

    case "points":
      pointsEl.textContent = args[0].points;
      break;

    case "inventory":
      inventoryEl.replaceChildren(); // reset to zero
      args[0].inventory.forEach((item) => {
        let span = document.createElement("span");
        span.textContent = item.name;
        inventoryEl.appendChild(span);
      });
      break;
  }
}
