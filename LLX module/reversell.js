let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.last_node = null
    }
    append(data) {
        if (this.last_node === null) {
            this.head = new Node(data)
            this.last_node = this.head
        }
        else {
            this.last_node.next = new Node(data)
            this.last_node = this.last_node.next
        }
    }
    display() {
        var current = this.head
        let res = ''
        while (current) {
            res = res + current.data + " "
            current = current.next
        }
        console.log(res)
    }
}
function reverse_llist(llist) {
    // Implement this
    let cur = llist.head, prev = null, future = null
    while (cur != null) {

        future = cur.next
        cur.next = prev
        prev = cur
        cur = future
    }

    llist.head = prev
    return llist
}
let a_llist = new LinkedList()
let n = parseInt(readLine())
let l = readLine().split(" ")
l.map(Number)
for (data of l) {
    a_llist.append(data)
}
reverse_llist(a_llist)
a_llist.display()