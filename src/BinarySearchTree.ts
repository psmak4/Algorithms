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

			// If value === current node's value, return as we do not allow duplicates
			if (value === node.value) return

			// If value <= current node's value...
			if (value < node.value) {
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
		function findBottomRight(node: BinaryNode<T>): BinaryNode<T> {
			if (node.right) return findBottomRight(node.right)

			return node
		}

		function deleteNode(node: BinaryNode<T> | null, value: T): BinaryNode<T> | null {
			if (!node) return null

			if (value < node.value) {
				node.left = deleteNode(node.left, value)

				return node
			} else if (value > node.value) {
				node.right = deleteNode(node.right, value)

				return node
			}

			if (!node.left && !node.right) return null

			if (!node.left) return node.right
			if (!node.right) return node.left

			const bottomRight = findBottomRight(node.left)
			node.value = bottomRight.value
			node.left = deleteNode(node.left, bottomRight.value)

			return node
		}

		this.root = deleteNode(this.root, val)
	}
}
