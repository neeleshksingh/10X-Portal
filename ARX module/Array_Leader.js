let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

function replaceElements(arr, numElems)
{
    let array=[]
    for (let i = 0; i < numElems; i++)
    {
        let j;
        for (j = i+1; j < numElems; j++)
        {
            if (array[i] <=array[j])
                break;
        }    
        if (j == numElems) // the loop didn't break
            return(array[i]);
  }
}
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}