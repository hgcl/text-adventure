/**
 * Scenes
 */

export const scenes = {
  // Scene 1: Introduction
  scene1: {
    location: "Uncle's house",
    description: "You wake up in a mysterious room. What do you do?",
    next: "scene2",
    choices: [
      { name: "Look around", next: "scene2" },
      { name: "Open the door", next: "scene2" },
    ],
  },
  // Scene 2: Sidewalk
  scene2: {
    location: "Sidewalk",
    description:
      "You find an old key on a table and a window that is slightly ajar. What do you do?",
    next: "scene3",
    choices: [
      { name: "Take the key", next: "scene1" },
      { name: "Open the window", next: "scene3" },
    ],
  },
  // Scene 3: XXX
  scene3: {
    location: "XXX",
    description:
      "You find an old key on a table and a window that is slightly ajar. What do you do?",
    next: "scene1",
    choices: [
      { name: "Take the key", next: "scene1" },
      { name: "Open the window", next: "scene1" },
    ],
  },
};
