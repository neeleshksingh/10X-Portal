let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
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

function isSymmetric(left,right) {
    //write code here
    if (node1 == null && node2 == null)
    return true;
    if (node1 != null && node2 != null
    && node1.key == node2.key)
    return (isMirror(node1.left, node2.right)
            && isMirror(node1.right, node2.left));
    return false;


	
}

let T = parseInt(readLine());
while (T--) {
  let arr = readLine().split(" ");
  convertToNumber(arr);
  let tree = new BinaryTree();
  tree.root = tree.insertLevelOrder(arr, 0, arr.length);
  if (isSymmetric(tree.root,tree.root)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}