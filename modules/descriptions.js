/**
 * Full descriptions
 */

export const descriptions = {
  scene1: `A few days ago, you just arrived in Vietnam, in the buzzing Ho Chi Minh City (a.k.a. Saigon).

You are staying at the house of your overprotective uncle. Even though you are already {{15|player-age|incrementAge()}}, he's been treating you just like a child: driving you around, buying you food, worrying about you 24/7.

Tomorrow morning, you'll finally prove to him that you are not as helpless as a kitten. He will finally have to acknowledge that you are AN INDEPENDENT ADULT WHO KNOWS THEIR SH\*T.

The plan? Pretty simple: get a delicious breakfast, a cup of dark coffee (as adults drink), and basically survive the morning all by yourself.

Should be easy... right?`,
  scene2a: `As your uncle slowly shakes your hand, you are feeling ectatic. Eye in the eye, he finally acknowledges your adulthood. The day before, you actually didn't really believe that it was going to be so eas-...

{{pidibideep pidibideep|2a-ring|nextDescription(this)}}`,
  scene2b: `Uncle? What's happening? Wha-...

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

{{straight|5a-straight|nextDescription(this)}}`,
  scene5b: `... but quickly need to get around a line of motorbikes parked in front of you. You jump over a pile of trash, blocking your way in front of the post office. From there, you decide to go...

{{straight|5b-straight|selectOption(this)}} {{left|5b-left|selectOption(this)}} {{right|5b-right|selectOption(this)}}`,
  scene5c: `... and continue straight — or as straight as you can. You measure that you can only walk up to five meters on the sidewalk before encountering a new obstacle. 

As you are looking at your feet, a giant tree appears in front of you. You go...

{{straight|5c-straight|selectOption(this)}} {{left|5c-left|selectOption(this)}} {{right|5c-right|selectOption(this)}}`,
  scene5d: `Nice, you still recognize your surroundings. At this point, you've just given up on the sidewalk and now walk directly on the road.

After walking past a park, you get to a (squarish) roundabout built around a very socialist-looking statue. It has four other roads branching out from the centre. Counting from the left, you take the...

{{1st street|5d-1st|selectOption(this)}} {{2nd street|5d-2nd|selectOption(this)}} {{3rd street|5d-3rd|selectOption(this)}} {{4th street|5d-4th|selectOption(this)}}`,
  // TODO make scene5e a bit longer
  scene5e: `This street looks very {{familiar|5e-familiar|selectOption(this)}}...`,
  scene5f: `You walk, and walk, and walk, but you still can't find your way. You are definitely and properly lost. 
  
  After a few hours of wandering (or was it only thirty minutes?), you suddenly walk in front of a very {{familiar food stall|5f-familiar|nextDescription(this)}}.`,
  scene5g: `Oh my, you made it — you are actually on the food street!`,
  scene6: `You identify the famous noodle soup stall from far away. It is surrounded by motorbikes.

As you get closer, the smell of the broth becomes stronger. This breakfast stall has been open for three decades (as your uncle told you), serving phở to people on their way to work and other early risers.

Everyone is sitting at a tiny plastic table on a tiny plastic chair. They eat quickly, stooped above their hot noodle soup. 

At the front of the shop, an old lady is prepping the bowls: some soybean sprouts at the bottom of the bowl, a handful of noodles, a few pieces of meat, a ladle of broth, some herbs on top, and off it goes to the table.

The lady looks quite frail, she is half your size and at least three times your age. She is also very intimidating.`,
  scene7a: `You slowly walk towards the old lady. She looks back at you with frightening eyes. With one finger up, you silently mouth the words {{one bowl|7a-order|nextDescription(this)}}.`,
  scene7b: `She nods and points towards an empty table. You sit down and wait no more than two minutes before a steaming bowl of phở lands in front of you. Mimicking your neighbors, you add some more fresh herbs on top, a bit of lime, and dive in. 

After slurping your last noodle, you finally take your head out of your bowl. The lady is looking at you with a satisfied smile. You smile back and...`,
  // TODO scene8: add special action to display phone dialog
  scene8a: `The famous phở stall seems to be properly closed. Only a few napkins and noodles lying on the ground hint to how popular the stall was just a few hours ago.

{{Find another breakfast|8-phone|showPhone(this)}}`,
  scene8b: `You find a bánh mì shop with thousands of reviews just down the street.`,
  scene9: `You were lucky that this bánh mì shop was so close to the noodle stall. It looks very modern, complete with a logo and full menu in English. 

They sell those bánh mì — or Vietnamese sandwiches — that you usually see everywhere. However, the prices are quite inflated compared to what your uncle got you a few days ago.

As you hesitate to find a cheaper breakfast somewhere else, your belly starts to rumble. Well, you'll just order a...`,
  scene10: `The bánh mì is small but crunchy, juicy, and full of flavor. You can never go wrong with a bánh mì.

But now that your belly is full and your head is clear, you feel a bit bad not trying to find another breakfast option. You might have fallen into a tourist trap, paying three times the regular bánh mì price.

At least, you'll learn from this lesson... you think?`,
  scene11a: `Now that your breakfast mission is completed, all that's left is finding coffee.

Good news: you see a cute café across the street. Bad news: you need to actually cross the street.

The flow of vehicles seems unending. As you wait for a traffic break, you see a young man confidently walk across the street a bit further up. 

You hesitate, and finally put down a first foot {{on the road|11a-start|nextDescription(this)}}.`,
  scene11b: `Three motorbikes are going to cut your way. 

{{You stop in your tracks.|11b-stop|selectOption(this)}} {{You slow down slightly.|11b-slow|selectOption(this)}}`,
  scene11c: `The two first motorbikes comfortably pass in front of you, the third one adjusts its course and swerves behind you.

A car is now coming your way, loudly honking.

{{You stop in your tracks.|11c-stop|selectOption(this)}} {{You slow down slightly.|11c-slow|selectOption(this)}}`,
  scene11d: `Motorbikes and cars violently brake to avoid hitting you. They start honking, all looking at you with angry faces. You finally regain your senses and {{run to the other side|11d-run|nextDescription(this)}}.`,
  scene11e: `You get to the end of the crosswalk — still in one piece! You feel exhilarated as you bounce to the café.`,
  scene12: `TODO`,
};
