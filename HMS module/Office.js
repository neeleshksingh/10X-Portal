let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let people = readLine().split(" ").map((value) => value.toLowerCase());
let rating = readLine().split(" ").map(Number);
let sum = 0;
for (let i = 0; i < people.length; i++) {
  people[i] === "boss" ? (sum += rating[i] * 2) : (sum += rating[i]);
}
let avrg = sum / people.length;

avrg > 5 ? console.log("I still have a job") : console.log("They fired me");
