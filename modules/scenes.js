/**
 * Scenes
 */

export const scenes = {
  // Scene 1: Introduction
  scene1: {
    location: "Uncle's house",
    description: "You wake up in a mysterious room. What do you do?",
    choices: [
      {
        name: "Buy plant",
        inventory: { name: "A plant", points: 2 },
        next: "scene2",
      },
      { name: "Go to scene 2", points: 1, next: "scene2" },
    ],
  },
  // Scene 2: Sidewalk
  scene2: {
    location: "Sidewalk",
    description:
      "You find an old key on a table and a window that is slightly ajar. What do you do?",
    choices: [
      {
        name: "Take the hat",
        inventory: { name: "A hat", points: 3 },
        next: "scene1",
      },
      { name: "Go to scene 3", points: 2, next: "scene3" },
    ],
  },
  // Scene 3: XXX
  scene3: {
    location: "XXX",
    description: "Some other description here.",
    choices: [
      { name: "Give item", points: 3, next: "scene1" },
      { name: "Go to scene 1", points: 3, next: "scene1" },
    ],
  },
};
