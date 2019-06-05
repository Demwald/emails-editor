/**
 * Here is much more elegant resolution: https://gist.github.com/6174/6062387.
 * But it doesn't support definition of words length.
 */
export default class Randomizer {
    constructor() {
        this.chars = "abcdefghijklmnopqrstuvwxyz1234567890";
        this.tlds = ["org", "com", "ru", "gov", "edu", "uk"];
    }
  
    getRandomInt({ min, max }) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    getRandomWord({ wordLength }) {
      var randomString = "";
      for (var i = 0; i < wordLength; i++) {
        randomString += this.chars[
          this.getRandomInt({ min: 0, max: this.chars.length })
        ];
      }
      return randomString;
    }
  
    getRandomEmail() {
      let min = 4;
      let wordLength = this.getRandomInt({ min, max: this.chars.length });
      return (
        this.getRandomWord({ wordLength }) +
        "@" +
        this.getRandomWord({ wordLength: this.getRandomInt({ min, max: 8 }) }) +
        "." +
        this.getRandomTld()
      );
    }
  
    getRandomTld() {
      return this.tlds[this.getRandomInt({ min: 0, max: this.tlds.length })];
    }
  }