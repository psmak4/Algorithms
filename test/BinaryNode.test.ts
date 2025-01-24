import BinaryNode from '../src/BinaryNode'

describe('BinaryNode', () => {
	test('should initialize a node with a value and default left and right as null', () => {
		const node = new BinaryNode(10)
		expect(node.value).toBe(10)
		expect(node.left).toBeNull()
		expect(node.right).toBeNull()
	})

	test('should initialize a node with a value and specified left and right children', () => {
		const leftChild = new BinaryNode(5)
		const rightChild = new BinaryNode(15)
		const node = new BinaryNode(10, leftChild, rightChild)

		expect(node.value).toBe(10)
		expect(node.left).toBe(leftChild)
		expect(node.right).toBe(rightChild)
	})

	test('should initialize a node with a value and specified left child only', () => {
		const leftChild = new BinaryNode(5)
		const node = new BinaryNode(10, leftChild)

		expect(node.value).toBe(10)
		expect(node.left).toBe(leftChild)
		expect(node.right).toBeNull()
	})

	test('should initialize a node with a value and specified right child only', () => {
		const rightChild = new BinaryNode(15)
		const node = new BinaryNode(10, null, rightChild)

		expect(node.value).toBe(10)
		expect(node.left).toBeNull()
		expect(node.right).toBe(rightChild)
	})
})
