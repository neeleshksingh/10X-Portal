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
    deleteDuplicates(head) {
        let cur = head

        while (cur && cur.next) {
            while (cur.next && cur.val == cur.next.val) {
                cur.next = cur.next.next
            }
            cur = cur.next
        }
        return head
    }
}
function readListInput() {
    let vals = readLine().split(" ");
    let linkedList = new LinkedList();
    for (let val of vals) {
        linkedList.push(val);
    }
    return linkedList;
}

function printLL(head) {
    let temp = head;
    let res = "";
    while (temp !== null) {
        res += temp.data + " ";
        temp = temp.next;
    }
    console.log(res);
}

let n = parseInt(readLine());
let linkedList = readListInput();
printLL(linkedList.deleteDuplicates());