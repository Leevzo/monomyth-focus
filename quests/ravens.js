/* FOLLOWING RAVENS — the second side quest, from Sir Quentin's own pamphlet.
   His sentences, cut and never invented. Opens when the Wolf is housed. */
window.QUEST = {
  v: 1, title: 'Following Ravens', hero: 'Sir Quentin', unlock: 'Slaying Dragons', done: 'the ravens led you',
  story: {
    tell: "Ravens are an ancient symbol of magic and forbidden knowledge; if you allow them, [ravens] will guide you. Never call them [crows]. Learn their [language], bring them [gifts], and be in the right [state] of mind to follow.",
    did:  "Ravens are an ancient symbol of magic and forbidden knowledge, and you allowed the [ravens] to guide you. You never called them [crows]. You learned their [language], brought them [gifts], and were in the right [state] of mind to follow.",
    in: {
      ravens: { tell: "They have a very strong connection to the unseen world and have, for centuries, guided willing souls to secrets and mysteries. Usually all you need to do is walk outside your door and listen for them.", s: ["walk outside and listen for them"] },
      crows: { tell: "Ravens will take great offense. Crows relish being called ravens, but if you compliment them so, make sure no ravens are listening; they may never trust you again. Actual ravens will likely never trick you; beware of crow-tricks.", s: ["tell a raven from a crow"] },
      language: { tell: "The raven can make virtually any sound. They will appreciate you learning their language, and mastering the diverse calls of the raven can bring you help in time of need.", s: ["learn one raven call"] },
      gifts: { tell: "Shiny beads and bits of metal are their favourite. Never give them garbage; they will immediately know it is of no worth to you. If you give them something particularly special they may give you something in return. Treasure these raven-gifts.", s: ["leave a raven something shiny"] },
      state: { tell: "Not any jaunt in the woods is a real raven journey. Feel the strings of destiny twirl together, and when you know, you know. If you give precedence to adventure when it calls, you will learn the secrets of this universe. If you happen to be with your [wolf], you are in for a treat.",
        in: { wolf: { tell: "Wolves have followed ravens long before humans ever did. The raven leads the wolf to a choice kill, and the wolf leaves some leftover for the raven. Be sure the werewolf is not particularly hungry.", s: ["follow one raven, when you know"] } } }
    }
  }
};
