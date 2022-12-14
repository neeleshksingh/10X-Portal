let fs = require("fs");
const { cpuUsage } = require("process");
let data = fs.readFileSync('./in2.txt', 'utf-8');
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

    push(newValue) {
        let newNode = new Node(newValue);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode;
        this.tail = newNode;

    }
    makeListAndPrint(self) {
        //   WRITE CODE HERE
        let current = this.head
        let next = this.tail.next
        let arr = []
        while (current != null) {
            if (current.next.data == 0) {
                arr.unshift(current.data)
                current = current.next
            }
            else if (current.next.data == 1) {
                arr.push(current.data)
                current = current.next
            }
            current = current.next

        } return console.log(...arr)
    }

}

function read_list_input() {
    let values = readLine().split(" ");
    let linkedList = new LinkedList();
    for (val of values) {
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
    let linkedList = read_list_input();
    linkedList.makeListAndPrint();
}