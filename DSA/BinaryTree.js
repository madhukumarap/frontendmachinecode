class Node {
    constructor(value) {
        this.value = value; // Set value in constructor
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) { // Compare with root's value
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (this.isEmpty()) {
            return false; // Return false if the tree is empty
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return root.left ? this.search(root.left, value) : false;
            } else {
                return root.right ? this.search(root.right, value) : false;
            }
        }
    }

    PreOrder(root) { // Root, Left, Right
        if (root) {
            console.log(root.value);
            this.PreOrder(root.left);
            this.PreOrder(root.right);
        }
    }

    InOrder(root) { // Left, Root, Right
        if (root) {
            this.InOrder(root.left);
            console.log(root.value);
            this.InOrder(root.right);
        }
    }

    PostOrder(root) { // Left, Right, Root
        if (root) {
            this.PostOrder(root.left);
            this.PostOrder(root.right);
            console.log(root.value);
        }
    }
}

// Usage example
const bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 112)); // Should return false
console.log(bst.isEmpty()); // Should return false

console.log("PreOrder Traversal:");
bst.PreOrder(bst.root);

console.log("InOrder Traversal:");
bst.InOrder(bst.root);

console.log("PostOrder Traversal:");
bst.PostOrder(bst.root);
//DFS(Depth First Search) start from root node and explore the possible along each branch
//3 type of DFS PreOrder(Root,Left,Right),PostOrder(Left,Right,Root),InOrder(Left,Root,Right) 