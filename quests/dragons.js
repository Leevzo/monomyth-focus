/* SLAYING DRAGONS — the third side quest, from Sir Quentin's own pamphlet.
   His sentences, cut and never invented. In the ArcheMythos the later law is
   house, do not slay; the pamphlet's "slay" is the old self — the wooden
   sword's only legal kill. Opens when the ravens have led you. */
window.QUEST = {
  v: 1, title: 'Slaying Dragons', hero: 'Sir Quentin', unlock: 'How to Become an Everyday Adventurer', done: 'your dragon is faced',
  story: {
    tell: "No creature can be properly fought without an intimate knowledge of the creature itself. Consider the [breed]. Evaluate your own [strengths]. Train your [mind] as you train your sword. Remember an iron [will]. And remember that [imagination], as always, will be your strongest ally.",
    did:  "No creature can be properly fought without an intimate knowledge of the creature itself, so you considered the [breed]. You evaluated your own [strengths]. You trained your [mind] as you trained your sword. You remembered an iron [will]. And [imagination], as always, was your strongest ally.",
    in: {
      breed: { tell: "Is it European? American? Chinese? Does it fly, walk, swim, burrow? Every dragon has particular weaknesses and strengths, and one must be cautious to meet both with sufficient preparation. Regardless of the route taken, tenacity and endurance must be applied.", s: ["name the dragon: what it is, and where it lives"] },
      strengths: { tell: "For some, a particular battle strategy might accentuate their strengths, and another may use the same strategy and have their weaknesses taken advantage of. A fight with a dragon is extremely hazardous; give it ample seriousness.", s: ["write down what you are good at, honestly"] },
      mind: { tell: "It also is a weapon, and perhaps your greatest. The true master of combat is a master inside and out. Developing a coolness of temper and a peace of mind is essential; but thinking can be overdone and hinder the instincts you have developed. Work for a personal balance.", s: ["sit still for ten minutes before you act"] },
      will: { tell: "Any tactic could be pursued, but if it is weak in the execution it will undoubtedly fail. Strive to work out your insecurities and weaknesses now, before the battle starts. A weakness well known is less devastating when encountered than one never before discovered. Know yourself, and you will avoid tragedy.", s: ["name one weakness before it names you"] },
      imagination: { tell: "Looking for the possibilities that others cannot see will make you spectacularly powerful in the vanquishing of your own dragons. In the moment when all else leaves you, you remain: you, who possess something no one else does. The dragon outside, and the dragon [within].",
        in: { within: { tell: "Both of which are terribly mighty and powerful creatures. Very few have taken this, the path less travelled. Your dragons can be defeated.", s: ["face it once, today, in the smallest way"] } } }
    }
  }
};
