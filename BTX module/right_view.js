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
        if (i >= n || arr[i] === null || arr[i] === NaN) {
            return null;
        }
        let tree = new Node(arr[i]);
        tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
        tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
        return tree;
    }
}


//   function getrightView(root,map,index){
//     if(!root){
//         return ;
//     }
//     if(map[index]===undefined){
//         map[index]=root.data;
//     }
//     getrightView(root.right,map,index+1);
//     getrightView(root.left,map,index+1);
//   }


function printRightView(root) {
    // write code here
    if (root == null)
        return;

    let q = [];
    q.push(root);

    while (q.length > 0) {
        // get number of nodes for each level
        let n = q.length;

        // traverse all the nodes of the current level
        while (n-- > 0) {

            let x = q[0];
            q.shift();

            // print the last node of each level
            if (n == 0) {
                console.log(x.data);
            }
            // if left child is not null push it into the
            // queue
            if (x.left != null)
                q.push(x.left);
            // if right child is not null push it into the
            // queue
            if (x.right != null)
                q.push(x.right);
        }
    }

}



function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "N" && arr[i] !== 'None') {
            arr[i] = parseInt(arr[i]);
        } else {
            arr[i] = null;
        }
    }
}

let T = parseInt(readLine())
while (T--) {
    let N = parseInt(readLine());
    let arr = readLine().split(" ");
    convertToNumber(arr);
    let tree = new BinaryTree();
    tree.root = tree.insertLevelOrder(arr, 0, N);

    printRightView(tree.root);

}