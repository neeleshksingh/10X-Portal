var uniqueMorseRepresentations = function (words) {
    let morse = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ];
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let aTom = [];
    words.forEach((word) => {
      let temp = "";
      for (let ch of [...word]) {
        temp += morse[alpha.indexOf(ch)];
      }
      if (!aTom.includes(temp)) {
        aTom.push(temp);
      }
    });
    console.log(aTom);
    return aTom.length;
  };