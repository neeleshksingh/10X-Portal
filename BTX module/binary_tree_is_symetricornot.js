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

function isSymmetric(left, right) {
  //write code here
  if (!left && !right) return true;
  if (left && right) return (isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left));
  return false;
}
function convertToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] === "N" ? null : parseInt(arr[i])
  }
}

let T = parseInt(readLine());
while (T--) {
  let arr = readLine().split(" ");
  convertToNumber(arr);
  let tree = new BinaryTree();
  tree.root = tree.insertLevelOrder(arr, 0, arr.length);
  if (isSymmetric(tree.root, tree.root)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}