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

// Node class 
class Node {
    // Constructor to initialize the node object 
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    // Function to initialize head 
    constructor() {
        this.head = null;
    }
    // Do not change anything above this line
    deleteNode(position) {
        // YOU ONLY NEED TO COMPLETE THIS FUNCTION.
        if (position == 0) {
            this.head = this.head.next;
        } else if (this.head == null) {
            return;
        } else {
            let temp = this.head;
            let prev = null;
            let count = 0;
            while (temp) {
                if (count == position) {
                    prev.next = temp.next;
                    break;
                }
                else {
                    prev = temp;
                    temp = temp.next;
                    count++;
                }
            }
        }

    }

    //Utility function to print the linked LinkedList 
    printList() {
        let temp = this.head;
        let res = "";
        while (temp) {
            res += temp.data + " ";
            temp = temp.next;
        }
        console.log(res);
    }
}

// Do not change anything below this line
function convertToNumber(list) {
    for (let value of list) {
        value = parseInt(value);
    }
    return list;
}


let n = parseInt(readLine());

// Start with the empty list 
let llist = new LinkedList();

temp = readLine().split(" ");
convertToNumber(temp);
let curr;
if (n < 1) {
    llist.head = null;
}
else if (n < 2) {
    llist.head = new Node(temp[0]);
}
else {
    llist.head = new Node(temp[0]);
    let second = new Node(temp[1]);
    llist.head.next = second;
    curr = llist.head.next;
}


for (let i = 2; i < n; i++) {
    let t = new Node(temp[i]);
    curr.next = t;
    curr = curr.next;
}
let pos = parseInt(readLine());
llist.deleteNode(pos);
llist.printList();