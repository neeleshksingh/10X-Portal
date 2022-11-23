// Singly Linkedlist Node
class Node {
    constructor(element) {
        this.data = element; // value
        this.next = null; // store the reference / address
        // this.prev = null; // doubly linkedlist node
    }
}

// let node1 = new Node(10);
// let node2 = new Node('B');
// node1.next = node2;
// console.log(node1);
// console.log(node1.data);
// console.log(node1.next);
// console.log(node2);

class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insertAtStart(value) {
        let node = new Node(value);
        if(this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    // A -> B -> C -> D -> F
    insertAtEnd(value) { // 'F'
        let node = new Node(value); // Node < 'F', null >
        if(this.head == null) { // LL is empty
            this.head = node;
        } else { // LL is not empty
            let temp = this.head; // A
            while(temp.next != null) { // temp -> D
                temp = temp.next; 
            }
            temp.next = node; // D.next -> F
        }
    }
//     A -> B ->  G -> C -> D -> E -> null (answer)
    //  A -> B -> C -> D -> E -> null
    //  value -> G , pos -> 2
    insertAtPos(value, pos) {
        let node = new Node(value); // Node < G, C >
        if(pos == 0) { // Insertion at starting
            node.next = this.head;
            this.head = node;
        } else { // Insertion at pos
            let curr = this.head; // curr -> A
            let prev = null; // prev -> null
            while(pos > 0) { // pos -> 2, 1, 0
                prev = curr; // prev -> A , B
                curr = curr.next; // curr -> C
                pos--; // pos -> 1,0
            }
            // prev -> B , curr -> C
            node.next = curr; // Node < G, C> 
            prev.next = node; // Node < B, G >
        }
        
    }

    deleteAtStart() {

    }

    deleteAtEnd() {

    }

    deleteAtPos(pos) {

    }

  // A -> B -> C -> D -> F
    printList() {
        let temp = this.head; // A
        while (temp != null) { // null 
            console.log(temp.data); // A, B, C, D, F <-print
            temp = temp.next; // null
        }
    }

}

let l1 = new LinkedList();
l1.insertAtEnd("Abhinav");
l1.insertAtEnd("Radha");
l1.insertAtEnd("Bharat");
l1.insertAtEnd("Ritu");

l1.insertAtStart("Preeti");
l1.insertAtStart("Rahul");
l1.insertAtStart("akansha");
l1.insertAtStart("simran");
l1.insertAtPos("Krishna", 5);
l1.printList(); // 
// console.log(l1);

// Object  -> 

 
// Class -> 
 
//     70                 50                   10               20              45
// Node < D, 50>  Node < A, 10 >  ->   Node<B, 20>  ->  Node <C, 45> -> Node < F , null >

// head -> 70

//       45
// Node < F , null >
// New  -> node.next -> head, head => node

// lastNode <- Reach to the last node -> 20
// lastNode.next = node;