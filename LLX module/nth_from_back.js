let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.lastNode = null;
    }
    append(data){
        if (this.lastNode === null){
            this.head = new Node(data)
            this.lastNode = this.head
        }
        else{
            this.lastNode.next = new Node(data)
            this.lastNode = this.lastNode.next
        }
}
}
function lengthLlist(llist){
    let length = 0;
    let current = llist.head;
    while(current){
        current = current.next;
        length = length + 1;
    }
    return length;
}
 
function returnNFromLast(llist, n){
    let len = 0;
    let temp = llist.head;
    while (temp != null) {
        temp = temp.next;
        len++;
    }
    if (len < n)
        return;

    temp = llist.head;
    for (let i = 1; i < len - n + 1; i++)
        temp = temp.next;

    return(temp.data);
}
 

function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i]);
    }
    return ar;
}

let input= readLine().split(" ");
let N= parseInt(input[0]);
let n =parseInt(input[1]); 
let aLlist = new LinkedList()

let ar = readLine().split(" ")
let l = ConvertToIntegers(ar)
for(i of l){
    aLlist.append(i) 
}
value = returnNFromLast(aLlist, n)
console.log(value);