let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function panel(panelSize,i, adjA, adjB, currStr, arr){
    if(i === panelSize){
        arr.push(currStr)
        return
    }
    if(adjA !==2){
        panel(panelSize,i+1,adjA+1,0,currStr + 'a',arr)
        if(adjB !==2){
            panel(panelSize,i+1,0,adjB+1,currStr + 'b',arr)
        }
    }
    else{
        
    }
}
function neighbours(panelSize){
    let arr = []
    panel(panelSize,0,0,0,"",arr)
}

let n =parseInt(readLine())
neighbours(n)