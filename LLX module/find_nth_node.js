let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// -------- Do NOT edit anything above this line ----------

function getElementAt(qIndex, listHead) {
    if (qIndex < 1) return -1;
    else {
        let count = 0;
        while (listHead) {
            count++;
            if (count == qIndex) {
                return listHead.data;
            }
            else {
                listHead = listHead.next;
            }
        }
        return -1;
    }
}

// -------- Do NOT edit anything below this line ----------
let numTests = parseInt(readLine());
for (let i = 0; i < numTests; ++i) {
    let listElements = readLine().split(" ");
    let index = parseInt(readLine());
    let head = null;
    if (listElements.length > 0) {
        head = new Node(parseInt(listElements[0]));
        let currNode = head;
        for (let j = 1; j < listElements.length; ++j) {
            currNode.next = new Node(parseInt(listElements[j]));
            currNode = currNode.next;
        }
    }
    console.log(getElementAt(index, head));
}