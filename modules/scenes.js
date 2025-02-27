/**
 * Full descriptions
 */

export const descriptions = {
  scene1: `A few days ago, you just arrived in Vietnam, in the buzzing Ho Chi Minh City (a.k.a. Saigon).

You are staying at the house of your overprotective uncle. Even though you are already {{15|player-age|incrementAge()}}, he's been treating you just like a child: driving you around, buying you food, worrying about you 24/7.

Tomorrow morning, you'll finally prove to him that you are not as helpless as a kitten. He will finally have to acknowledge that you are AN INDEPENDENT ADULT WHO KNOWS THEIR SH\*T.

The plan? Pretty simple: get a delicious breakfast, a cup of dark coffee (as adults drink), and basically survive the morning all by yourself.

Should be easy... right?`,
  // TODO, scene 2, add click on "pidibideep"
  scene2: `As your uncle slowly shakes your hand, you are feeling ectatic. Eye in the eye, he finally acknowledges your adulthood. The day before, you actually didn't really believe that it was going to be so eas-...

_...pidibideep pidibideep..._

Uncle? What's happening? Wha-...

Ugh, it's your damn alarm clock, and it's six in the morning. The day hasn't even started yet.

What got into your head last night, that you decided to wake up at this unholy hour? You could easily sleep thirty minutes more and still easily impress your uncle.`,
  scene3: `You roll out of bed, and try to put on some clothes with your eyes still half shut. Your mind is not completely there yet. 

You quickly grab one of the following items before heading out.`,
  scene4: `You slowly open your eyes as you feel the warmth of the sun on your skin...

Is it past 10 am!? The famous noodle stall you wanted to go to is probably already sold out.

Your surprise plan, "Bring Back a Super Delicious Breakfast From The Super Famous Stall To Impress Uncle," failed before it even had a chance. _Sigh_.

Well, you might as well put on some clothes and try to find something else to eat. Grab one of the following items before heading out.`,
  scene5a: `You walk towards the direction of a food street that is 30 minutes walk away. It shouldn't be too hard, your uncle had already brought you there once on his motorbike. You {{remember|remember-map|showMap(this)}} him showing you a simple map the day before. Or do you really remember?

From the middle of the road, you didn't realize how difficult it was to walk in Saigon. The sidewalk is full of all kinds of obstacles. 

You start by going...

{{straight|5a-straight|chooseWay(this)}}`,
  scene5b: `... but quickly need to get around a line of motorbikes parked in front of you. You jump over a pile of trash, blocking your way in front of the post office. From there, you decide to go...

{{straight|5b-straight|chooseWay(this)}} {{left|5b-left|chooseWay(this)}} {{right|5b-right|chooseWay(this)}}`,
  scene5c: `... and continue straight — or as straight as you can. You measure that you can only walk up to five meters on the sidewalk before encountering a new obstacle. 

As you are looking at your feet, a giant tree appears in front of you. You go...

{{straight|5c-straight|chooseWay(this)}} {{left|5c-left|chooseWay(this)}} {{right|5c-right|chooseWay(this)}}`,
  scene5d: `Nice, you still recognize your surroundings. At this point, you've just given up on the sidewalk and now walk directly on the road.

After walking past a park, you get to a (squarish) roundabout built around a very socialist-looking statue. It has four other roads branching out from the centre. Counting from the left, you take the...

{{1st street|5d-1st|chooseWay(this)}} {{2nd street|5d-2nd|chooseWay(this)}} {{3rd street|5d-3rd|chooseWay(this)}} {{4th street|5d-4th|chooseWay(this)}}`,
  scene5e: `This street looks very familiar... Oh my, you made it — you are actually on the food street!`,
  // TODO scene5f, add click on word "lost"
  scene5f: `You walk, and walk, and walk, but you still can't find your way. You are definitely and properly lost.

After a few hours of wandering (or was it only thirty minutes?), you suddenly walk in front of a very familiar food stall. 

Oh my, you made it — you are actually on the food street!`,
  scene6: `You identify the famous noodle soup stall from far away. It is surrounded by motorbikes.

As you get closer, the smell of the broth becomes stronger. This breakfast stall has been open for three decades (as your uncle told you), serving phở to people on their way to work and other early risers.

Everyone is sitting at a tiny plastic table on a tiny plastic chair. They eat quickly, stooped above their hot noodle soup. 

At the front of the shop, an old lady is prepping the bowls: some soybean sprouts at the bottom of the bowl, a handful of noodles, a few pieces of meat, a ladle of broth, some herbs on top, and off it goes to the table.

The lady looks quite frail, she is half your size and at least three times your age. She is also very intimidating.`,
  scene7: `You slowly walk towards the old lady. She looks back at you with frightening eyes. With one finger up, you silently mouth the words "one bowl". She nods and points towards an empty table.

You sit down and wait no more than two minutes before a steaming bowl of phở lands in front of you. Mimicking your neighbors, you add some more fresh herbs on top, a bit of lime, and dive in. 

After slurping your last noodle, you finally take your head out of your bowl. The lady is looking at you with a satisfied smile. You smile back and...`,
  // TODO add click on "find another breakfast"
  scene8: `The famous phở stall seems to be properly closed. Only a few napkins and noodles lying on the ground hint to how popular the stall was just a few hours ago.

{{Find another breakfast}}

You find a bánh mì shop with thousands of reviews just down the street.`,
  scene9: `You were lucky that this bánh mì shop was so close to the noodle stall. It looks very modern, complete with a logo and full menu in English. 

They sell those bánh mì — or Vietnamese sandwiches — that you usually see everywhere. However, the prices are quite inflated compared to what your uncle got you a few days ago.

As you hesitate to find a cheaper breakfast somewhere else, your belly starts to rumble. Well, you'll just order a...`,
  scene10: `The bánh mì is small but crunchy, juicy, and full of flavor. You can never go wrong with a bánh mì.

But now that your belly is full and your head is clear, you feel a bit bad not trying to find another breakfast option. You might have fallen into a tourist trap, paying three times the regular bánh mì price.

At least, you'll learn from this lesson... you think?`,
  scene11: `TODO`,
};

/**
 * Scenes
 */

export const scenes = {
  // // TEST SCENE1
  // scene1: {
  //   location: "Scene 1: Test",
  //   description: [
  //     "This is a test scene {{remember|remember-map|showMap(this)}}.",
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
    description: [descriptions.scene2],
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
    ],
    choices: [
      {
        name: "Find some food",
        next: { default: "scene6", lateStart: "scene7" },
        hideUntilEnd: true,
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
    description: [descriptions.scene7],
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
    description: [descriptions.scene11],
    choices: [
      {
        name: "Action here",
        next: { default: "scene12" },
      },
    ],
  },
};
