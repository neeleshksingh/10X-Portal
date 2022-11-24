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
    //Constructor to initialize the node object 
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}
class LinkedList {
    // Function to initialize head 
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insert(key) {
        if (!this.head) {
            this.head = new Node(key);
            this.tail = this.head;
        }
        else {
            this.tail.next = new Node(key);
            this.tail = this.tail.next;
        }
    }

    // ------------ DO NOT MANE ANY CHANGE ABOVE THIS LINE ---------
    search(key) {
        // WRITE YOUR IMPLEMENTATION OF SEARCH HERE
        let current = this.head;
        while (current != null) {
            if (current.key == x)
                return 'True';
            current = current.next;
        }
        return 'False';
    }
}
// ----------- DO NOT MAKE ANY CHANGES BELOW THIS LINE ---------
// reading from input and making linked list
let numTests = parseInt(readLine());

for (let test = 0; test < numTests; test++) {
    let ll = new LinkedList();
    let key = parseInt(readLine());
    let elements = readLine().split(" ").map(Number);
    for (e of elements) {
        ll.insert(e);
    }
    console.log(ll.search(key));
}