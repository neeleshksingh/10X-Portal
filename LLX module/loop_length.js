let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1];
}
// Link list node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    detectLoop() {
        let fast=this.head,slow=this.head
		while(fast!=null && fast.next!=null)
		{
			fast=fast.next.next
			slow=slow.next
			if(fast==slow)
			{
               return llist.countNodes(slow)
			}
		}
		return 0

    }
    countNodes(slow)
    {
        let temp=slow
        let c=1
        while(temp.next!=slow)
        {
            c++
            temp=temp.next
        }
        return c
    }


}
let n = parseInt(readLine());
let arr = readLine().split(" ");
let llist = new LinkedList();
if (n < 1) {
    llist.head = null;
} else if (n < 2) {
    llist.head = new Node(arr[0]);
}
else {
    llist.head = new Node(arr[0]);
    let second = new Node(arr[1]);
    llist.head.next = second;
    var curr = llist.head.next;
}
for (let i = 2; i < n; i++) {
    let newNode = new Node(arr[i]);
    curr.next = newNode;
    curr = curr.next;
}
let link = parseInt(readLine());
if (link != -1) {
    let t = llist.head;
    for (let i = 0; i < link - 1; i++) {
        t = t.next;
    }
    curr.next = t;
}
console.log(llist.detectLoop())