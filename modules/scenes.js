/**
 * Full descriptions
 */

export const descriptions = {
  scene1: `A few days ago, you just arrived in Vietnam, in the buzzing Ho Chi Minh City (a.k.a. Saigon).

You are staying at the house of your overprotective uncle. Even though you are already {{15|player-age|incrementAge()}}, he's been treating you just like a child: driving you around, buying you food, worrying about you 24/7.

Tomorrow morning, you'll finally prove to him that you are not as helpless as a kitten. He will finally have to acknowledge that you are AN INDEPENDENT ADULT WHO KNOWS THEIR SH\*T.

The plan? Pretty simple: get a delicious breakfast, a cup of dark coffee (as adults drink), and basically survive the morning all by yourself.

Should be easy... right?`,
  scene2: `As your uncle slowly shakes your hand, you are feeling ectatic. Eye in the eye, he finally acknowledges your adulthood. The day before, you actually didn't really believe that it was going to be so eas-...

_...pidibideep pidibideep..._

Uncle? What's happening? Wha-...

Ugh, it's your damn alarm clock, and it's six in the morning. The day hasn't even started yet.

What got into your head last night, that you decided to wake up at this unholy hour? You could easily sleep thirty minutes more and still easily impress your uncle.`,
  scene3: `You slowly open your eyes as you feel the warmth of the sun on your skin...

Is it past 10 am!? The famous noodle stall you wanted to go to is probably already sold out.

Your surprise plan, "Bring Back a Super Delicious Breakfast From The Super Famous Stall To Impress Uncle," failed before it even had a chance. _Sigh_.

Well, you might as well put on some clothes and try to find something else to eat. Grab one of the following items before heading out.`,
  scene4a: `You walk towards the direction of a food street that is 30 minutes walk away. It shouldn't be too hard, your uncle had already brought you there once on his motorbike. You {{remember|remember-map|showMap()}} him showing you a simple map the day before. Or do you really remember?

From the middle of the road, you didn't realize how difficult it was to walk in Saigon. The sidewalk is full of all kinds of obstacles. 

You start by going...

{{straight|4a-straight|chooseWay(this)}}`,
  scene4b: `... but quickly need to get around a line of motorbikes parked in front of you. You jump over a pile of trash, blocking your way in front of the post office. From there, you decide to go...

{{straight|4b-straight|chooseWay(this)}} {{right|4b-right|chooseWay(this)}} {{left|4b-left|chooseWay(this)}}`,
  scene4c: `... and continue straight — or as straight as you can. You measure that you can only walk up to five meters on the sidewalk before encountering a new obstacle. 

As you are looking at your feet, a giant tree appears in front of you. You go...

{{straight|4c-straight|chooseWay(this)}} {{right|4c-right|chooseWay(this)}} {{left|4c-left|chooseWay(this)}}`,
  scene4d: `Nice, you still recognize your surroundings. At this point, you've just given up on the sidewalk and now walk directly on the road.

After walking past a park, you get to a (squarish) roundabout built around a very socialist-looking statue. It has four other roads branching out from the centre. Counting from the left, you take the...

{{1st street|4d-1st|chooseWay(this)}} {{2nd street|4d-2nd|chooseWay(this)}} {{3rd street|4d-3rd|chooseWay(this)}} {{4th street|4d-4th|chooseWay(this)}}`,
  scene4e: `This street looks very familiar... Oh my, you made it — you are actually on the food street!`,
  scene5: `TODO`,
};

/**
 * Scenes
 */

export const scenes = {
  // // TEST SCENE1
  // scene1: {
  //   id: "scene1",
  //   location: "Scene 1: Test",
  //   description: "This is a test scene {{15}}{{25}}{{35}}.",
  //   choices: [
  //     {
  //       name: "Late start",
  //       inventory: { name: "an item", points: 2 },
  //       specialAction: "lateStart",
  //       next: "scene0",
  //     },
  //   ],
  // },
  // // TEST SCENE0
  // scene0: {
  //   id: "scene0",
  //   location: "Scene 0: Test",
  //   description: "This is a test scene {{1}}{{2}}{{3}}.",
  //   choices: [
  //     {
  //       name: "Empty inventory",
  //       specialAction: "emptyInventory",
  //       next: "scene1",
  //     },
  //     {
  //       name: "Go to scene 1",
  //       next: "scene1",
  //     },
  //   ],
  // },
  //************************************************************//
  // Scene 1: Introduction
  scene1: {
    location: "Uncle's house",
    description: [descriptions.scene1],
    choices: [{ name: "Easy peasy", next: "scene2" }],
  },
  // Scene 2: Waking up
  scene2: {
    location: "Uncle's house",
    description: [descriptions.scene2],
    choices: [
      {
        name: "Snooze",
        specialAction: "lateStart",
        next: "scene3",
      },
      {
        name: "Wake up, but ugh",
        points: 1,
        next: "scene4",
      },
    ],
  },
  // Scene 3: Snooze
  scene3: {
    location: "Uncle's house",
    description: [descriptions.scene3],
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
    description: [
      descriptions.scene4a,
      descriptions.scene4b,
      descriptions.scene4c,
      descriptions.scene4d,
      descriptions.scene4e,
    ],
    choices: [{ name: "Find food", next: "scene5", hideUntilEnd: true }],
  },
  scene5: {
    location: "TODO",
    description: [descriptions.scene5],
    choices: [
      {
        name: "TODO",
        next: "scene6",
      },
    ],
  },
};
