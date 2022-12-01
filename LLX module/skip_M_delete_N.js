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


// JS program to delete M nodes after N nodes 

// Node class  
class Node {

    //Constructor to initialize the node object 
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
    // Function to insert a new node at the beginning 
    push(newData) {
        let newNode = new Node(newData);
        newNode.next = this.head;
        this.head = newNode;
    }
    // Utility function to prit the linked LinkedList 
    printList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data + ' ');
            temp = temp.next
        }
    }
    skipMdeleteN(m, n) {
        let temp = this.head, prev = null, a = m, b = n
        while (temp.next != null) {
            while (m != 0 && temp.next != null) {

                prev = temp
                temp = temp.next
                m--
            }
            while (n != 0 && temp.next != null) {
                temp = temp.next
                n--
            }
            if (n != 0 && m == 0 && temp.next == null) {
                prev.next = null
            }
            else {
                prev.next = temp
            }

            m = a
            n = b
        }

        return this.head
    }


}

// Driver program to test above function 


function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    return arr
}
let n = parseInt(readLine());
let input = readLine().split(" ");
let M = parseInt(input[0]);
let N = parseInt(input[1]);
let llist = new LinkedList();
let ar = readLine().split(" ");
l = convertToNumber(ar);
l.reverse();
for (i of l) {
    llist.push(i);
}
llist.skipMdeleteN(M, N);
llist.printList();