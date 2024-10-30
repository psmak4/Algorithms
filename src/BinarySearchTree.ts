import BinaryNode from './BinaryNode'

export class BinarySearchTree<T> {
	// root node of our tree
	root: BinaryNode<T> | null

	constructor() {
		this.root = null
	}

	insert(val: T): void {
		// Insert value into tree at appropriate node
		const insert = (node: BinaryNode<T> | null, value: T) => {
			// If node is null, assume this.root is null. Create new node for this.root and return.
			if (node === null) {
				this.root = new BinaryNode(value)
				return
			}

			// If value <= current node's value...
			if (value <= node.value) {
				// If current node has a left child, traverse left
				if (node.left) {
					insert(node.left, value)
				}
				// else insert value at left child
				else {
					node.left = new BinaryNode(value)
				}
			}
			// else value is greater than current node's value
			else {
				// If current node has a right child, traverse right
				if (node.right) {
					insert(node.right, value)
				}
				// else insert value at right child
				else {
					node.right = new BinaryNode(value)
				}
			}
		}

		// Begin insertion, starting at this.root
		insert(this.root, val)
	}

	delete(val: T): void {
		// Find the node we're looking for. Return null if not found.
		function find(node: BinaryNode<T> | null, value: T): BinaryNode<T> | null {
			if (node === null) return null

			if (node.value === value) return node

			if (value < node.value) return find(node.left, value)

			return find(node.right, value)
		}

		// Find the bottom right most node of a branch starting at the given node.
		function findBottomRight(node: BinaryNode<T>): BinaryNode<T> | null {
			if (node.right) return findBottomRight(node.right)

			return node
		}

		// Search for the value starting at the root node. Return if not found.
		let node = find(this.root, val)
		if (!node) return

		// If node is found but has no children, return
		if (!node.left && !node.right) {
			node = null
			return
		}

		// If node is found but only has left child, promote left child and return
		if (node.left && !node.right) {
			node = node.left
			return
		}

		// If node is found but only has right child, promote right child and return
		if (!node.left && node.right) {
			node = node.right
			return
		}

		// If node is found and has left and right children, find most bottom right child from left child.
		let bottomRight = findBottomRight(node.left as BinaryNode<T>)
		if (!bottomRight) return

		// Replace node's value with bottomRight's value and set bottomRight to null
		node.value = bottomRight.value
		bottomRight = null
	}
}
