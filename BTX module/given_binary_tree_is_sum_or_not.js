let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(arr, i, n) {
        if (i >= n) {
            return null;
        }
        if (arr[i] === null) {
            return null;
        }

        let tree = new Node(arr[i]);

        tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
        tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
        return tree;
    }
}

function getSum(root) {
    // write code here
    if (root == null) {
        return 0;
    }
    return (getSum(root.left) + root.data + getSum(root.right));

}

function isSumTree(root) {
    // write code here
    let ls, rs;

    // If node is NULL or it's a leaf
    // node then return true
    if (root == null || (root.left == null && root.right == null)) {
        return 1;
    }

    // Get sum of nodes in left and
    // right subtrees
    ls = getSum(root.left);
    rs = getSum(root.right);

    // If the node and both of its
    // children satisfy the property
    // return 1 else 0
    if ((root.data == ls + rs) && isSumTree(root.left) != 0 && isSumTree(root.right) != 0) {
        return 1;
    }
    return 0;

}
function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "N") {
            arr[i] = parseInt(arr[i]);
        } else {
            arr[i] = null;
        }
    }
}

let T = parseInt(readLine());
while (T--) {
    let arr = readLine().split(" ");
    convertToNumber(arr);
    let tree = new BinaryTree();
    tree.root = tree.insertLevelOrder(arr, 0, arr.length);
    if (isSumTree(tree.root)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}