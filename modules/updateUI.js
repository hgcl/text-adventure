/**
 * Function that updates the DOM
 */

const sceneEl = document.getElementById("scene");
const locationEl = document.getElementById("location");
const descriptionEl = document.getElementById("description");
const inventoryEl = document.getElementById("inventory");
const pointsEl = document.getElementById("points");

export function updateUI(element, ...args) {
  let scene = args[0];
  let player = args[0];
  let index = args[1];

  switch (element) {
    // Where `args[0] === scene`

    case "scene":
      sceneEl.setAttribute("class", scene.id);
      break;

    case "location":
      locationEl.textContent = scene.location;
      break;

    case "description":
      // Reset to nothing (only if description is undivided, and shown in full)
      if (index === 0) {
        descriptionEl.replaceChildren();
      }
      const descriptionArray = scene.description[index].split(/\n\n/);
      descriptionArray.forEach((line) => {
        // Replace `{{xxx}}` placeholders with actual buttons
        // the 3 captured groups are (1) the button label, (2) the id, (3) the function it calls
        line = line.replaceAll(
          /{{(.*?)\|(.*?)\|(.*?)}}/g,
          `<button id="$2" onclick="$3;">$1<\/button>`
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
      pointsEl.textContent = player.points;
      break;

    case "inventory":
      inventoryEl.replaceChildren(); // reset to nothing
      player.inventory.forEach((item) => {
        let span = document.createElement("span");
        span.textContent = item.name;
        inventoryEl.appendChild(span);
      });
      break;
  }
}
