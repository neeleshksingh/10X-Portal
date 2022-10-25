let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function job(n) {
    let rating = readLine().split(' ').map(Number);
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += rating[i];
    }
    let finalrating = result / n;
    if (finalrating <= 5) {
        return 'They fired me'
    } else {
        return 'I still have a job'
    }
}
let teamMembers = readLine().split(' ');
let n = teamMembers.length;
console.log(job(n));
