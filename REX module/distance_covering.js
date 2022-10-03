let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function distanceCover(dist)
{
    if (dist<0)
        return 0  
    if (dist==0)
        return 1 
    return distanceCover(dist-1)+distanceCover(dist-2)
}
let t = parseInt(readLine())
let dist =[]
for(let i=0;i<t;i++){
    dist[i] = parseInt(readLine())
    console.log(distanceCover(dist[i]))
}

