/**
 * Full descriptions
 */

export const descriptions = {
  scene1: `A few days ago, you just arrived in Vietnam, in the buzzing Ho Chi Minh City (a.k.a. Saigon).

You are staying at the house of your overprotective uncle. Even though you are already {{15}}{{25}}{{35}}, he's been treating you just like a child: driving you around, buying you food, worrying about you 24/7.

Tomorrow morning, you'll finally prove to him that you are not as helpless as a kitten. He will finally have to acknowledge that you are AN INDEPENDENT ADULT WHO KNOWS THEIR SH\*T.

The plan? Pretty simple: get a delicious breakfast, a cup of dark coffee (as adults drink), and basically surviving the morning all by yourself.

Should be easy... right?`,
  scene2: `As your uncle slowly shakes your hand, you are feeling ectatic. Eye in the eye, he finally acknowledges your adulthood. The day before, you actually didn't really believe that it was going to be so eas-...

_...pidibideep pidibideep..._

Uncle? What's happening? Wha-...

Ugh, it's your damn alarm clock, and it's six in the morning. The day hasn't even started yet.

What got into your head last night, that you decided to wake up at this unholy hour? You could easily sleep thirty minutes more and still easily impress your uncle.`,
  scene3: `You slowly open your eyes, as you feel the warmth of the sun on your skin...

Is it past 10am!? The famous noodle stall you wanted to go to is probably already sold out.

Your surprise plan "Bring Back a Super Delicious Breakfast From The Super Famous Stall To Impress Uncle" failed before it even had a chance. _Sigh_.

Well, you might as well put on some clothes and try to find something else to eat. Grab one of the following items before heading out.`,
  scene4: `sidewalk stuff`,
};

/**
 * Scenes
 */

export const scenes = {
  // TEST SCENE1
  scene1: {
    location: "Scene 1: Test",
    description: "This is a test scene {{15}}{{25}}{{35}}.",
    choices: [
      {
        name: "An item",
        inventory: { name: "an item", points: 2 },
        next: "scene0",
      },
    ],
  },
  // TEST SCENE0
  scene0: {
    location: "Scene 0: Test",
    description: "This is a test scene.",
    choices: [
      {
        name: "Empty inventory",
        specialAction: "emptyInventory",
        next: "scene1",
      },
      {
        name: "Go to scene 1",
        next: "scene1",
      },
    ],
  },
  // Scene 1: Introduction
  // scene1: {
  //   location: "Uncle's house",
  //   description: descriptions.scene1,
  //   choices: [{ name: "Easy peasy", next: "scene2" }],
  // },
  // Scene 2: Waking up
  scene2: {
    location: "Uncle's house",
    description: descriptions.scene2,
    choices: [
      {
        name: "Snooze",
        next: "scene3",
      },
      {
        name: "Wake up, but ugh",
        points: 1,
        specialAction: "earlyBird",
        next: "scene4",
      },
    ],
  },
  // Scene 3: Snooze
  scene3: {
    location: "Uncle's house",
    description: descriptions.scene3,
    choices: [
      {
        name: "Sunglasses",
        inventory: { name: "sunglasses" },
        next: "scene4",
      },
      {
        name: "A face mask",
        inventory: { name: "a face mask", points: 2 },
        next: "scene4",
      },
      {
        name: "A hat",
        inventory: { name: "a hat", points: 2 },
        next: "scene4",
      },
    ],
  },
  // Scene 4: Sidewalk
  scene4: {
    location: "Sidewalk",
    description: descriptions.scene4,
    choices: [
      {
        name: "Action",
        next: "scene5",
      },
    ],
  },
};
