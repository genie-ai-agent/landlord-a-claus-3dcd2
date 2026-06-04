// Cast and scenes for Landlord-a-Claus
export const cast = [
  {
    name: "LANDLORD-A-CLAUS",
    role: "Owner-operator, North Pole Holdings LLC",
    note: "Used to be jolly. Now mostly on calls. Wears the suit, but it's wrinkled. Carries a clipboard instead of a list."
  },
  {
    name: "PIPPA PINEFROST",
    role: "Tenants' Association President, Hut 4-B",
    note: "Forty-year toy-shop veteran. Knows every clause in the lease. Brings printouts."
  },
  {
    name: "JINGLE McGEE",
    role: "Retired wrapping-line foreman, Hut 7-C",
    note: "Coughs a lot. Hut roof has been 'getting fixed next week' since 2014."
  },
  {
    name: "NOELLE",
    role: "Young elf, first lease, Hut 12-A",
    note: "Just moved out of her parents' hut. Optimistic. Has a TikTok about the situation."
  },
  {
    name: "MR. KLAUSEN",
    role: "Property manager (Santa's nephew, sort of)",
    note: "In a polo shirt with a candy-cane logo. Says 'we hear you' a lot. Hears nothing."
  },
  {
    name: "MRS. CLAUS",
    role: "Co-owner, but mostly retired to the back office",
    note: "Pops in occasionally. The only one who actually fixes anything."
  }
];

export const scenes = [
  {
    id: "scene-1",
    number: "I",
    title: "The Tenants' Association Meets in the Cocoa Hall",
    setting: "A drafty community room. Folding chairs. A urn of cocoa, lukewarm. A leak in the ceiling drips into a bucket on the table. A flyer on the wall reads NORTH POLE HOLDINGS LLC — A FAMILY COMPANY SINCE 0382.",
    lines: [
      { who: "PIPPA", text: "Alright, alright, settle down. I'm calling the December meeting of the North Pole Tenants' Association to order. Jingle, please put the snowball down." },
      { who: "JINGLE", text: "It's not a snowball, Pippa, it's a piece of my ceiling." },
      { who: "PIPPA", text: "...Noted. First item. Heat." },
      { who: "NOELLE", text: "There isn't any." },
      { who: "PIPPA", text: "That's the item, dear." },
      { who: "JINGLE", text: "My hut's been forty below since Halloween. I wrote three letters. I got back a candy cane and a coupon for ten percent off cocoa in the company store." },
      { who: "NOELLE", text: "I got the same coupon!" },
      { who: "PIPPA", text: "We all got the coupon. The coupon is not a repair." }
    ],
    direction: "A drip from the ceiling lands in the cocoa urn. Nobody reacts. This has been going on for years."
  },
  {
    id: "scene-2",
    number: "II",
    title: "Mr. Klausen Stops By, Briefly",
    setting: "Same room. MR. KLAUSEN enters with a clipboard, a candy-cane lanyard, and the air of someone with a 2:15.",
    lines: [
      { who: "MR. KLAUSEN", text: "Hi hi hi, hello, hi everyone, so glad you all came out. We hear you. We hear you. Heat is a top, top priority for North Pole Holdings this quarter." },
      { who: "PIPPA", text: "You said that last quarter." },
      { who: "MR. KLAUSEN", text: "And we meant it then too. So. Big-picture context. Letter volume is down. Way down. Kids these days, they're texting their lists, they're putting them on a, what's it, a Notes app, they're sharing a Google Doc with their parents..." },
      { who: "NOELLE", text: "That's still a list." },
      { who: "MR. KLAUSEN", text: "It's not the same, sweetie. The format matters. The stamp matters. Without stamps, the operation, financially, is in a, let's call it, a transitional posture." },
      { who: "JINGLE", text: "What does that mean for my roof." },
      { who: "MR. KLAUSEN", text: "It means we're all tightening our belts. Including Mr. Claus. Did you know he hasn't bought a new sleigh in sixty years?" },
      { who: "PIPPA", text: "Because we maintain it. In the workshop. For our pension." },
      { who: "MR. KLAUSEN", text: "And we are so grateful." }
    ],
    direction: "MR. KLAUSEN's phone buzzes. He looks at it like it just saved his life."
  },
  {
    id: "scene-3",
    number: "III",
    title: "The Big Man Himself",
    setting: "LANDLORD-A-CLAUS enters. Red suit, but the trim's gone grey. He's on a Bluetooth headset. The elves go quiet, partly out of old habit, partly because they're tired.",
    lines: [
      { who: "L-A-CLAUS", text: "(into headset) ...no, tell legal we're not settling, the chimney is a common area, that's in the rider, that's been in the rider since the 1700s. I'll call you back. (to room) Ho. Ho. Ho. My friends. My family. My tenants." },
      { who: "PIPPA", text: "Mr. Claus." },
      { who: "L-A-CLAUS", text: "Pippa. How's 4-B." },
      { who: "PIPPA", text: "Leaking." },
      { who: "L-A-CLAUS", text: "Mm. You know, when I was your age, Pippa, I built that hut myself. With these hands. These very hands. Which now, by the way, deliver joy to one-point-nine billion children in a single night. One night. So when you come to me about a leak..." },
      { who: "JINGLE", text: "It's not a leak, sir, it's a hole." },
      { who: "L-A-CLAUS", text: "Jingle. Jingle, Jingle. Do you know how much coal costs now? Do you have any idea? I used to give it out by the pound. The pound. Now I'm rationing lumps. Lumps!" },
      { who: "NOELLE", text: "Sir, my window doesn't close." },
      { who: "L-A-CLAUS", text: "And who are you." },
      { who: "NOELLE", text: "Noelle. Hut 12-A. I've lived here my whole life. You came to my naming." },
      { who: "L-A-CLAUS", text: "(softening for half a second) ...Right. Right, of course. Little Noelle. (headset buzzes) Hold on. (into headset) What. WHAT. No, the reindeer union can wait, I'm in a tenants' thing." }
    ],
    direction: "He drifts toward the door without realizing it. Decades of habit. The conversation is over because he is no longer in it."
  },
  {
    id: "scene-4",
    number: "IV",
    title: "Mrs. Claus Brings a Wrench",
    setting: "LANDLORD-A-CLAUS has wandered out, still on the call. MRS. CLAUS enters from the back, in overalls, carrying an actual wrench and a thermos.",
    lines: [
      { who: "MRS. CLAUS", text: "He gone?" },
      { who: "PIPPA", text: "On a call." },
      { who: "MRS. CLAUS", text: "He's always on a call. Jingle, I'm coming by tomorrow with the patch kit. Noelle, your window's the sash, not the frame, I'll bring the right shims this time. Pippa, the leak in here is the flashing on the north side, I've been telling him for eight years." },
      { who: "NOELLE", text: "Mrs. Claus, can I ask you something?" },
      { who: "MRS. CLAUS", text: "Mm." },
      { who: "NOELLE", text: "Why don't you run it?" },
      { who: "MRS. CLAUS", text: "(beat) ...That's the first sensible thing anyone's said in this hall in twenty years." }
    ],
    direction: "She pours cocoa from her own thermos, the good kind, and passes it around. The leak still drips. But the room is, for a moment, warm."
  },
  {
    id: "scene-5",
    number: "V",
    title: "Curtain (A Letter to the Editor of the North Pole Gazette)",
    setting: "Lights down on the hall. NOELLE steps forward with a piece of paper. She reads.",
    lines: [
      { who: "NOELLE", text: "To the editor: My name is Noelle. I live in Hut 12-A. My window doesn't close, my pension is twelve candy canes a month, and my landlord delivers joy to the whole world except, sometimes, the people who built his sleigh. We are not asking for much. We are asking for the flashing on the north side. We are asking for a hearing. We are asking, in the spirit of the season, for the man in the red suit to remember that a company town is still a town, and a town is still its people. Yours in the season, Noelle, Hut 12-A." }
    ],
    direction: "She folds the letter. Snow falls, gently, through the hole in the roof. Curtain."
  }
];

export const meta = {
  title: "Landlord-a-Claus",
  subtitle: "A North Pole Tenants' Association Meeting, in One Act",
  logline: "Santa is a slumlord. The elves have had it. A short skit for children and young adults about company towns, deferred maintenance, and the man in the red suit who really, really needs to fix the flashing on the north side.",
  runtime: "~12 minutes, five short scenes, six speaking parts",
  audience: "Ages 10 and up. Family audiences. School and community theater."
};
