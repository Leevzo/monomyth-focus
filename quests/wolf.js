/* BEFRIENDING A WOLF, FOLLOWING RAVENS — one side quest from two of Sir Quentin's own pamphlets
   (Thunderfeather Era, "Sir Quentin's Modern Guide to Everyday Adventure"; the King's docx of 2018).
   Every sentence of the story is his, cut and mended for spelling, never invented. Joined by the
   King's word (2026-09-27): the wolf and the ravens are one journey. Orv's talk (QUEST.talk) is
   Orv's own voice beside the story, never Quentin's. The player strikes the deeds. */
window.QUEST = {
  v: 1, title: 'Befriending a Wolf, Following Ravens', hero: 'Sir Quentin', unlock: 'Slaying Dragons', done: 'you have a wolf, and the ravens led you',
  story: {
    tell: "Befriending a werewolf is no easy task, but one can find a long-lasting and faithful [companion]. The habits of the werewolf should be [studied]. Perhaps your future friend is not aware that they are, in fact, a [werewolf]. Here is where you make your [invitation]. If you allow them, [ravens] will guide you, but never call them [crows]. Learn their [language], bring them [gifts], and be in the right [state] of mind to follow. If you happen to be with your werewolf friend, you are in for a [treat]. Then [treasure] this friendship; you never know how long it may last.",
    did:  "Befriending a werewolf was no easy task, but you found a long-lasting and faithful [companion]. You [studied] the habits of the werewolf. Your future friend was, in fact, a [werewolf], and you helped them see it. You made your [invitation]. You allowed the [ravens] to guide you, and never once called them [crows]. You learned their [language], brought them [gifts], and were in the right [state] of mind to follow. You and your werewolf friend were in for a [treat]. Now [treasure] this friendship; you never know how long it may last.",
    in: {
      companion: {
        tell: "Having a werewolf as a companion can be helpful, or even vital, on many adventures. And although these friends are usually considered very [dangerous], the rewards of such a friendship go without saying.",
        in: { dangerous: { tell: "Remember that werewolves can vary as much as people do. Just as there are nasty and violent individuals, there will be nasty and violent werewolves; and as there are kinder and gentler humans, werewolves will follow suit. Lycanthropy will increase the strengths and weaknesses the individual already possesses. If they have a weak hold on their temper, it will be even weaker. But if they are brave as a human, their bravery will know no bounds.", s: ["name the wolf you already know"] } }
      },
      studied: {
        tell: "Legends abound, and it would seem that every culture in every corner of the world has a differing view. Full moons and wolfsbane, silver and belts of fur. Sorting the ridiculous from the truth is your first step. Not all werewolves are werewolves for the same [reasons].",
        in: { reasons: {
          tell: "Humankind has been into shapeshifting for as long as anyone can remember, whether by magic, infection, or genetics. In northern Europe a magic belt of fur can be employed to initiate the transformation. In Romania you will mainly find people who have transformed into wolves permanently, and almost forget entirely their human side. In America I have found it common to meet those with wolf [blood].",
          in: { blood: { tell: "They rarely ever fully transform, but have periods and moments of becoming more wolf-like. Many of these are not even aware of their genealogy, and have no idea why sometimes, especially once a month, their senses and emotions are sharpened and heightened. For more, look for my other work, the pamphlet What to Do When the Wolf's in Your Blood.", s: ["watch what they are before you name what they are", "notice when, once a month, their senses and emotions sharpen"] } }
        } }
      },
      werewolf: {
        tell: "Oftentimes they will know deep down, even if they have not given any thought to it. A werewolf that is unaware can experience a great deal of frustration as to why they experience such changes in their psyche. It may be your duty to help them [understand] what they truly are.",
        in: { understand: { tell: "The knowledge of one's origins not only gives credit to these issues, but always aids in the self-actualization that any person, wolf or no wolf, is constantly striving for.", s: ["tell them what you see in them"] } }
      },
      invitation: {
        tell: "Remember that most werewolves naturally have a very developed sense of [adventure]. Go with them to search out treasure, to explore an abandoned cave, to hunt [rabbits]. Really, anything out of the ordinary will perk their ears and enliven their soul.",
        in: {
          adventure: { tell: "You think adventure unites normal people; wait until you see the bond between someone and their werewolf after sharing a few.", s: ["go somewhere out of the ordinary, together"] },
          rabbits: { tell: "Which they consider a delicacy.", s: ["learn what your wolf considers a delicacy"] }
        }
      },
      ravens: {
        tell: "The raven is an ancient symbol of magic and forbidden knowledge. They have a very strong connection to the unseen world, and have, for centuries, guided willing souls to secrets and [mysteries]; this is what ravens do. It's fairly simple: ravens can be found in most parts of the world. Usually all you need to do is walk outside your door and listen for them.",
        in: { mysteries: { tell: "I once followed a raven to several tons of gold buried in the desert, and another time to a house where an ancient being was pretending to be human. But that's another story, for another time.", s: ["walk outside your door and listen for them"] } }
      },
      crows: {
        tell: "Be cautious around ravens; they will take great offense. Crows, on the other hand, relish being called ravens, but if you compliment them so, make sure no ravens are listening; they may never trust you again. Ravens always fly in pairs, but many times you will happen upon a large [group].",
        in: { group: { tell: "It is difficult to pursue a real relationship when they are all together, for they will try to impress one another and pretend that humans mean nothing to them. I have observed this more in crows, and you must be careful not to be the subject of crow-tricks. Actual ravens will likely never trick you. They hold their calling in much higher esteem.", s: ["tell a raven from a crow"] } }
      },
      language: {
        tell: "The raven can make virtually any sound, and yes, can even be taught to speak, if they can be bothered to take the time. They will appreciate you learning their language, and though it may take time, mastering the diverse calls of the raven can bring you help in time of [need].",
        in: { need: { tell: "I myself have mastered two raven languages, and if I happen to use them in a new place where I do not know the ravens, they are always surprised and impressed at my accent.", s: ["learn one raven call"] } }
      },
      gifts: {
        tell: "Ravens relish gifts. Shiny beads and bits of metal are their favourite. Never give them garbage; they will immediately know it is of no worth to you. If you give them something particularly special, they may give you something in return. Treasure these raven-gifts; you never know which ones have special properties. Ravens are thoughtful gift-givers.",
        s: ["leave a raven something shiny", "keep what a raven gives you"]
      },
      state: {
        tell: "Not any jaunt in the woods is a real raven journey. Feel the strings of destiny twirl together, and when you know, you know. It may be when you are doing nothing, but it also may be when you are very busy. I promise that if you give precedence to adventure when it calls, you will learn the secrets of this universe.",
        s: ["follow one raven, when you know"]
      },
      treat: {
        tell: "Wolves have followed ravens long before humans ever did. In the wild they have a symbiotic relationship: the raven leads the wolf to a choice kill, and the wolf leaves some leftover for the raven. There is a special bond between these two animals, but be sure that the werewolf is not particularly [hungry].",
        in: { hungry: { tell: "Or the only mystery you will find that day will be whatever they put in your fast food, of which werewolves seem to be particularly fond.", s: ["feed your wolf first, then follow the ravens together"] } }
      },
      treasure: {
        tell: "In my case, my werewolf companion introduced me to [magic]. A werewolf is worth keeping around, because their adventurous heart will oftentimes reignite yours if you've fallen into the cynicism and bleakness that so plagues our world.",
        in: { magic: { tell: "I was already on the path, unbeknownst to me, but my faithful furry friend was the one who helped me finally open my eyes to the adventure around me. Go and find a wolf, my friends; you will not regret it. Happy questing, my young friends.", s: ["keep one thing the wolf gave you"] } }
      }
    }
  },
  /* Orv beside the story: his own voice, one talk a door */
  talk: {
    _quest: ["Sir Quentin wrote two pamphlets, and they are one road: first the wolf, then the ravens. Tap any bold word and I'll meet you there.", "Hold a word and drag it. The sentence rewrites itself around it, and whatever you move first becomes the one thing."],
    companion: ["A companion, not a pet. Quentin's first rule: the danger is real, and so is the reward."],
    studied: ["Study before you name. Every culture tells the wolf differently; the true one is the one in front of you."],
    werewolf: ["Not every werewolf knows it's a werewolf. The kindest thing you can do is see them before they see themselves."],
    invitation: ["An invitation is an adventure, not a speech. A cave, a treasure hunt, a rabbit or two."],
    ravens: ["Walk outside and listen. Quentin followed one to gold, and once to something only pretending to be human."],
    crows: ["Rule one of the ravens: never call them crows. Crows will lie to you; ravens won't."],
    language: ["Quentin speaks two raven languages, and the ravens admire his accent. Start with one call."],
    gifts: ["Something shiny, never garbage. They know the difference, and they give back."],
    state: ["When you know, you know. It may come when you're doing nothing, or when you're very busy."],
    treat: ["The wolf and the raven have hunted together longer than we have. Just feed your werewolf first."],
    treasure: ["Keep what the wolf gave you. For Quentin, it was magic."]
  }
};
