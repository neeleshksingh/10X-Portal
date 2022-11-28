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


class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    push(new_value) {
        let new_node = new Node(new_value)
        if (this.head === null) {
            this.head = new_node;
            this.tail = new_node;
            return
        }
        this.tail.next = new_node;
        this.tail = new_node;
    }

    isPalin(head) {
        //WRITE CODE HERE
        let sol = [];
        // console.log(head.val)
        while (head.next !== null) {
            sol.push(head.val);
            head = head.next;
        }
        sol.push(head.val);
        // console.log(sol)
        for (let i = 0, j = sol.length - 1; i < j; i++, j--) {
            if (sol[i] !== sol[j]) {
                return false;
            }
        }
        return true;

    }
}

function readListInput() {
    let vals = readLine().split(" ");
    linkedList = new LinkedList();
    for (let val of vals) {
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
    let linkedList = readListInput();
    console.log(linkedList.isPalin());
}