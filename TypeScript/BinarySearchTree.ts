class BinaryNode {
	value: number
	left: BinaryNode | null
	right: BinaryNode | null

	constructor(val?: number, left?: BinaryNode | null, right?: BinaryNode | null) {
		this.value = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

export class BinarySearchTree {
	root: BinaryNode | null

	constructor() {
		this.root = null
	}

	insert(val: number): void {
		function insert(node: BinaryNode | null, value: number) {
			if (node === null) {
				this.root = new BinaryNode(value)
				return
			}

			if (value <= node.value) {
				if (node.left) {
					// traverse left
					insert(node.left, value)
				} else {
					// insert left
					node.left = new BinaryNode(value)
				}
			} else {
				if (node.right) {
					// traverse right
					insert(node.right, value)
				} else {
					// insert right
					node.right = new BinaryNode(value)
				}
			}
		}

		insert(this.root, val)
	}

	delete(val: number): void {
		function find(node: BinaryNode | null, value: number): BinaryNode | null {
			if (node === null) return null

			if (node.value === value) return node

			if (value < node.value)
				return find(node.left, value)
			
			return find(node.right, value)
		}

		function findBottomRight(node: BinaryNode): BinaryNode | null {
			if (node.right) return findBottomRight(node.right)

			return node
		}

		let node = find(this.root, val)
		if (!node) return

		if (!node.left && !node.right) {
			node = null
			return
		}

		if (node.left && !node.right) {
			node = node.left
			return
		}

		if (!node.left && node.right) {
			node = node.right
			return
		}

		let bottomRight = findBottomRight(node.left as BinaryNode)
		if (!bottomRight) return

		node.value = bottomRight.value
		bottomRight = null
	}
}