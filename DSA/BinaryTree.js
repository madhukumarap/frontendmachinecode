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
    //BFS Algorithms
    levelOrder(){
        //for better time use queue implememtation
        const queue = []; //if we use array it require more time 
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    //find the min the left most leaf vakue is min value
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    //max the right most leaf value is the max value
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    //delete the node with 3 scenario
    //remove node - no child
    //remove node - one child
    //remove node - two child
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
    if (root === null) {
        return root;
    }

    // Traverse the tree
    if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
    } else {
        // Node with only one child or no child
        if (!root.left && !root.right) {
            return null; // Case 1: No child
        } else if (!root.left) {
            return root.right; // Case 2: One child (right)
        } else if (!root.right) {
            return root.left; // Case 3: One child (left)
        }

        // Node with two children: Get the inorder successor (smallest in the right subtree)
        root.value = this.min(root.right);

        // Delete the inorder successor
        root.right = this.deleteNode(root.right, root.value);
    }

    return root;
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
console.log("The Output of BFS Algo")
bst.levelOrder()
console.log("the deleted elemet is", bst.delete(3))
console.log("the min value is", bst.min(bst.root))
console.log("the max value is", bst.max(bst.root))
console.log("PostOrder Traversal:");
console.log("the deleted elemet is", bst.delete(7))

bst.PostOrder(bst.root);
