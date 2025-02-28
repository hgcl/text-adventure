import { descriptions } from "./descriptions.js";

/**
 * Full scenario
 */

export const scenes = {
  // // TEST SCENE1
  // scene1: {
  //   location: "Scene 1: Test",
  //   description: [
  //     descriptions.scene11a,
  //     descriptions.scene11b,
  //     descriptions.scene11c,
  //     // if wrong move:
  //     descriptions.scene11d,
  //     // final scene:
  //     descriptions.scene11e,
  //   ],
  //   choices: [
  //     {
  //       name: "Late start",
  //       money: 30,
  //       points: 1,
  //       inventory: { name: "an item", points: 2 },
  //       specialAction: "lateStart",
  //       next: { default: "scene0" },
  //     },
  //   ],
  // },
  // // TEST SCENE0
  // scene0: {
  //   location: "Scene 0: Test",
  //   description: ["This is a test scene {{1|1|function()}}{{2|2|function()}}."],
  //   choices: [
  //     {
  //       name: "Empty inventory",
  //       specialAction: "emptyInventory",
  //       next: { default: "scene1" },
  //     },
  //     {
  //       name: "Go to scene 1",
  //       next: { default: "scene1" },
  //     },
  //   ],
  // },
  //************************************************************//
  // Scene 1: Introduction
  scene1: {
    location: "Uncle's house",
    description: [descriptions.scene1],
    choices: [
      {
        name: "Easy peasy",
        next: { default: "scene2" },
      },
    ],
  },
  // Scene 2: Waking up
  scene2: {
    location: "Uncle's house",
    description: [descriptions.scene2a, descriptions.scene2b],
    choices: [
      {
        name: "Snooze",
        specialAction: "lateStart",
        next: { default: "scene4" },
      },
      {
        name: "Wake up, but ugh",
        points: 1,
        next: { default: "scene3" },
      },
    ],
  },
  // Scene 3: Wake up at 6am
  scene3: {
    location: "Uncle's house",
    description: [descriptions.scene3],
    choices: [
      {
        name: "Sunglasses",
        inventory: { name: "sunglasses" },
        next: { default: "scene5" },
      },
      {
        name: "A face mask",
        inventory: { name: "a face mask", points: 2 },
        next: { default: "scene5" },
      },
      {
        name: "A hat",
        inventory: { name: "a hat", points: 2 },
        next: { default: "scene5" },
      },
    ],
  },
  // Scene 4: Snooze
  scene4: {
    location: "Uncle's house",
    description: [descriptions.scene4],
    choices: [
      {
        name: "Sunglasses",
        inventory: { name: "sunglasses" },
        next: { default: "scene5" },
      },
      {
        name: "A face mask",
        inventory: { name: "a face mask", points: 2 },
        next: { default: "scene5" },
      },
      {
        name: "A hat",
        inventory: { name: "a hat", points: 2 },
        next: { default: "scene5" },
      },
    ],
  },
  // Scene 5: Sidewalk
  scene5: {
    location: "Sidewalk",
    description: [
      descriptions.scene5a,
      descriptions.scene5b,
      descriptions.scene5c,
      descriptions.scene5d,
      descriptions.scene5e,
      // if wrong turn:
      descriptions.scene5f,
      // final scene:
      descriptions.scene5g,
    ],
    choices: [
      {
        name: "Find some food",
        next: { default: "scene6", lateStart: "scene7" },
      },
    ],
  },
  // Scene 6: Pho stall (open)
  scene6: {
    location: "Phở stall",
    description: [descriptions.scene6],
    choices: [
      {
        name: "Be brave and (try to) order a bowl.",
        money: -30,
        next: { default: "scene7" },
      },
      {
        name: "Nope, nevermind. This doesn't even look so good.",
        next: { default: "scene9" },
      },
    ],
  },
  // Scene 7: Pho stall (order)
  scene7: {
    location: "Phở stall",
    description: [descriptions.scene7a, descriptions.scene7b],
    choices: [
      {
        name: "order another portion to go (30,000 VND).",
        money: -30,
        inventory: { name: "a phở portion", points: 5 },
        next: { default: "scene10" },
      },
      {
        name: "leave the store, happy and full.",
        next: { default: "scene10" },
      },
    ],
  },
  // Scene 8: Pho stall (closed)
  scene8: {
    location: "Phở stall",
    description: [descriptions.scene8],
    choices: [
      {
        name: "Walk down the street",
        next: { default: "scene10" },
      },
    ],
  },
  // Scene 9: Banh mi shop
  scene9: {
    location: "Bánh mì shop",
    description: [descriptions.scene9],
    choices: [
      {
        name: "bánh mì with egg (45,000 VND)",
        money: -45,
        next: { default: "scene10" },
      },
      {
        name: "bánh mì with pâté and egg (60,000 VND)",
        money: -60,
        next: { default: "scene10" },
      },
      {
        name: "BEST SELLER: bánh mì with caramelized pork (70,000 VND)",
        money: -70,
        next: { default: "scene10" },
      },
    ],
  },
  // Scene 10: Banh mi shop (eating)
  scene10: {
    location: "Bánh mì shop",
    description: [descriptions.scene10],
    choices: [
      {
        name: "Go find coffee",
        next: { default: "scene11" },
      },
    ],
  },
  // Scene 11: Crosswalk
  scene11: {
    location: "In front of a crosswalk",
    description: [
      descriptions.scene11a,
      descriptions.scene11b,
      descriptions.scene11c,
      // if wrong move:
      descriptions.scene11d,
      // final scene:
      descriptions.scene11e,
    ],
    choices: [
      {
        name: "Go to the café",
        next: { default: "scene12" },
      },
    ],
  },
  // Scene 12: Café
  scene12: {
    location: "Café",
    description: [descriptions.scene12],
    choices: [
      {
        name: "Action here",
        next: { default: "scene13" },
      },
    ],
  },
};
