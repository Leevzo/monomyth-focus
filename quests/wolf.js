/* BEFRIENDING A WOLF — the first side quest, from Sir Quentin's own pamphlet
   (Thunderfeather Era, "Sir Quentin's Modern Guide to Everyday Adventure").
   Every sentence below is his, cut and never invented. The skeleton, in the
   King's word (2026-09-22): to make a friend — and "not every werewolf knows
   it's a werewolf." A model wrote none of this; the player strikes the deeds.
   A side quest is shareable. The main quest is the player's own sentence. */
window.QUEST = {
  v: 1, title: 'Befriending a Wolf', hero: 'Sir Quentin', unlock: 'Following Ravens', done: 'you have a wolf',
  story: {
    tell: "Befriending a werewolf is no easy task, but one can find a long-lasting and faithful [companion]. The habits of the werewolf should be [studied]. Perhaps your future friend does not [know] that they are one. Here is where you make your [invitation]. Then [treasure] this friendship; you never know how long it may last.",
    did:  "Befriending a werewolf was no easy task, but you found a long-lasting and faithful [companion]. You [studied] the habits of the werewolf. Your friend did not [know] what they were, and you helped them. You made your [invitation]. Now [treasure] this friendship; you never know how long it may last.",
    in: {
      companion: {
        tell: "Having a werewolf as a companion can be helpful, or even vital, on many adventures. Although these friends are usually considered very [dangerous], the rewards go without saying.",
        in: { dangerous: { tell: "Werewolves vary as much as people do. Lycanthropy increases the strengths and weaknesses the individual already possesses: a weak hold on the temper grows weaker, and bravery knows no bounds.", s: ["name the wolf you already know"] } }
      },
      studied: {
        tell: "Legends abound: full moons and wolfsbane, silver and belts of fur. Sorting the ridiculous from the truth is your first step. Not all werewolves are werewolves for the same [reasons].",
        in: { reasons: { tell: "By magic, infection, or genetics. In northern Europe a belt of fur; in Romania, wolves who have almost forgotten their human side; in America, those with wolf blood, who rarely fully transform but have moments of becoming more wolf-like.", s: ["watch what they are before you name what they are", "notice when, once a month, their senses and emotions sharpen"] } }
      },
      know: {
        tell: "Not every werewolf knows it is a werewolf. Often they know deep down, even if they have never given it thought. A werewolf that is unaware feels great frustration at the changes in their psyche. It may be your duty to help them [understand] what they truly are.",
        in: { understand: { tell: "The knowledge of one’s origins not only gives credit to these troubles, it aids the self-actualization that any person, wolf or no wolf, is constantly striving for.", s: ["tell them what you see in them"] } }
      },
      invitation: {
        tell: "Most werewolves naturally have a very developed sense of [adventure]. Go with them to search out treasure, to explore an abandoned cave, to hunt rabbits. Anything out of the ordinary will perk their ears and enliven their soul.",
        in: { adventure: { tell: "You think adventure unites normal people; wait until you see the bond between someone and their werewolf after sharing a few.", s: ["go somewhere out of the ordinary, together"] } }
      },
      treasure: {
        tell: "In my case, my werewolf companion introduced me to [magic]. A werewolf is worth keeping around: their adventurous heart will reignite yours when you have fallen into the cynicism and bleakness that so plagues our world.",
        in: { magic: { tell: "I was already on the path, unbeknownst to me, but my faithful furry friend helped me finally open my eyes to the adventure around me. Go and find a wolf, my friends; you will not regret it.", s: ["keep one thing the wolf gave you"] } }
      }
    }
  }
};
