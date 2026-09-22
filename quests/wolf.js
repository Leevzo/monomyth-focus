/* BEFRIENDING A WOLF — the first side quest. Written before, by Sir Quentin
   (the record: SquareTables/2026-09-21 — OSHIVA — WAR REPORT §II). No model
   wrote a word of it; the player strikes the leaves. Shareable: a side quest
   is a Mark. The main quest is the player's own sentence. */
window.QUEST = {
  v: 1, title: 'Befriending a Wolf', hero: 'Sir Quentin', unlock: 'Following Ravens', done: 'the wolf is housed',
  story: {
    tell: "A werewolf can be a faithful [companion] if you [study] them, [invite] them to adventure, and [help] them know what they are.",
    did:  "A werewolf became a faithful [companion] because you [study] them, [invite] them to adventure, and [help] them know what they are.",
    in: {
      companion: { tell: "They vary as people do, and the change increases what is already there. They reignite you when you go cynical. [Treasure] the friendship, because you do not know how long it lasts.",
        in: { Treasure: { tell: "Treasure it.", s: ["treasure it"] } } },
      study:  { tell: "Watch what they are before you name what they are.", s: ["study them"] },
      invite: { tell: "The invitation is shared adventure, not a talk about the moon.", s: ["invite them out"] },
      help:   { tell: "They may not know what they are. Help them know.", s: ["help them know"] }
    }
  }
};
