let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class Node {
    data; left; right;
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(arr) {

    let rootNode = new Node(parseInt(arr[0]));
    let queue = [];
    queue.push(rootNode);
    for (let i = 1; i < arr.length; i = i + 2) {
        if (arr[i] != 'N') {
            queue[0].left = new Node(parseInt(arr[i]))
            queue.push(queue[0].left)
        }
        if (i + 1 != arr.length && arr[i + 1] != 'N') {
            queue[0].right = new Node(parseInt(arr[i + 1]))
            queue.push(queue[0].right)
        }
        queue.shift();
    }
    return rootNode;
}

function findSum(itrNode) {
    // WRITE CODE HERE
    if (itrNode == null) {
        return 0;
    }
    let old_val = itrNode.data;
    itrNode.data = findSum(itrNode.left) +
        findSum(itrNode.right);
    return itrNode.data + old_val;

}

function preOrder(rootNode) {
    if (rootNode == null) {
        return;
    }
    process.stdout.write(" " + rootNode.data);

    preOrder(rootNode.left);
    preOrder(rootNode.right);
}

let T = parseInt(readLine())
for (let i = 0; i < T; ++i) {
    let line = readLine();
    if (line.trim().length == 0) {
        console.log();
        continue;
    }
    arr = line.split(' ')
    if (arr.length != 0) {
        rootNode = buildTree(arr, 0);
        findSum(rootNode);
        preOrder(rootNode)
    }
    console.log();
}