const list = [
  "Together, we have wisdom.",
  "Today, our team is positive and engaged.",
  "No one is perfect, including me.",
  "We each have something to offer and share.",
  "Great teams don’t hold anyone back.",
  "We each have a role to play in our team’s success.",
  "Creative intelligence dwells within our group.",
  "Our team has integrity and passion.",
  "I value and respect everyone’s opinion, and they, mine.",
  "We can change our results by changing our attitudes.",
  "We empower each other toward greatness.",
  "We accept challenges as opportunities.",
  "Our adventures are bringing us closer together."
];

module.exports = {
  //Returns random affirmation in list
  pickAffirmation: function() {

    const randomAffirmation = list[Math.floor(Math.random()*list.length)];
    return randomAffirmation;
  }
}
