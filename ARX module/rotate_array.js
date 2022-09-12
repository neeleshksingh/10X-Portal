let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

let n = parseInt(readLine());//4
let matrix = [];
let rotate = [];
let trans = [];
let row;
for(let i=0 ; i<n ; i++){//0,1
    matrix[i] = [];//[[][]]
    row = readLine().split(" ");//['1','2','3'],['4','5','6']
    for(let j=0 ; j<row.length ; j++){//0,
        matrix[i][j] = parseInt(row[j]);//[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
    }
}
for(let i=0; i<n; i++){//0
    rotate[i] = [];//[[]]
    for(let j=0 ; j<row.length ; j++){//0
        rotate[i][j] = matrix[n-1-i][n-n+j];//[[10,11,12],[7,8,9],[4,5,6],[1,2,3]]
    }
}
for(let i=0 ; i<row.length ; i++){
    trans[i] = [];
    for(let j=0 ; j<n ; j++){
        trans[i][j] = rotate[j][i];//[[10,7,4,1],[11,8,5,2],[12,9,6,3]]
    }
}
console.log(trans.length);
for(let i=0 ; i<trans.length ; i++){
    console.log(...trans[i]);
}