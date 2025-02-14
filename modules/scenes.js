/**
 * Scenes
 */

let scene1 = function () {
  console.log("Scene 1 logic here");

  // based upon some conditions return next scene
  // let's keep it simple and just return scene2
  return {
    location: "Uncle's house",
    description: "Hellooooo",
    next: scene2,
  };
};

let scene2 = function () {
  console.log("Scene 2 logic here");
  return {
    location: "Outside",
    description: "Another description",
    next: scene3,
  };
};

let scene3 = function () {
  console.log("Scene 3 logic here");
  return {
    location: "XXX",
    description: "XXX",
    next: scene1,
  };
};

export const scenes = [scene1, scene2, scene3];
