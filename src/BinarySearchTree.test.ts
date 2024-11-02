import BinaryNode from './BinaryNode'
import { BinarySearchTree } from './BinarySearchTree'

describe('BinarySearchTree', () => {
	let bst: BinarySearchTree<number>

	beforeEach(() => {
		bst = new BinarySearchTree<number>()
	})

	test('should insert a single node', () => {
		bst.insert(10)
		expect(bst.root?.value).toBe(10)
		expect(bst.root?.left).toBeNull()
		expect(bst.root?.right).toBeNull()
	})

	test('should insert multiple nodes correctly', () => {
		bst.insert(10)
		bst.insert(5)
		bst.insert(15)
		bst.insert(3)
		bst.insert(7)

		expect(bst.root?.value).toBe(10)
		expect(bst.root?.left?.value).toBe(5)
		expect(bst.root?.right?.value).toBe(15)
		expect(bst.root?.left?.left?.value).toBe(3)
		expect(bst.root?.left?.right?.value).toBe(7)
	})

	test('should not insert duplicate values', () => {
		bst.insert(10)
		bst.insert(5)
		bst.insert(15)
		bst.insert(5)

		expect(bst.root?.value).toBe(10)
		expect(bst.root?.left?.value).toBe(5)
		expect(bst.root?.left?.left).toBeNull()
		expect(bst.root?.left?.right).toBeNull()
	})

	test('should delete a leaf node', () => {
		bst.insert(10)
		bst.insert(5)
		bst.insert(15)
		bst.insert(3)

		bst.delete(3)

		expect(bst.root?.left?.left).toBeNull()
		expect(bst.root?.value).toBe(10)
		expect(bst.root?.left?.value).toBe(5)
		expect(bst.root?.right?.value).toBe(15)
	})

	test('should delete a node with one child', () => {
		bst.insert(10)
		bst.insert(5)
		bst.insert(15)
		bst.insert(3)
		bst.insert(4)

		bst.delete(3)

		expect(bst.root?.left?.left?.value).toBe(4)
		expect(bst.root?.value).toBe(10)
		expect(bst.root?.left?.value).toBe(5)
		expect(bst.root?.right?.value).toBe(15)
	})

	test('should delete a node with two children', () => {
		bst.insert(10)
		bst.insert(5)
		bst.insert(15)
		bst.insert(3)
		bst.insert(7)
		bst.insert(6)

		bst.delete(5)

		expect(bst.root?.left?.value).toBe(3)
		expect(bst.root?.left?.right?.value).toBe(7)
		expect(bst.root?.value).toBe(10)
		expect(bst.root?.right?.value).toBe(15)
	})

	test('should delete the root node with two children', () => {
		bst.insert(10)
		bst.insert(5)
		bst.insert(15)
		bst.insert(3)
		bst.insert(7)
		bst.insert(12)
		bst.insert(18)

		bst.delete(10)

		expect(bst.root?.value).toBe(7) // In-order predecessor of 10 replaces it
		expect(bst.root?.left?.value).toBe(5)
		expect(bst.root?.right?.value).toBe(15)
		expect(bst.root?.right?.left?.value).toBe(12)
		expect(bst.root?.right?.right?.value).toBe(18)
	})

	test('should delete the root node when it is the only node', () => {
		bst.insert(10)
		bst.delete(10)

		expect(bst.root).toBeNull()
	})

	test('should delete the root node with only one child', () => {
		bst.insert(10)
		bst.insert(5)

		bst.delete(10)

		expect(bst.root?.value).toBe(5)
		expect(bst.root?.left).toBeNull()
		expect(bst.root?.right).toBeNull()
	})

	test('should not alter the tree if deleting a non-existent value', () => {
		bst.insert(10)
		bst.insert(5)
		bst.insert(15)

		bst.delete(999) // Non-existent value

		expect(bst.root?.value).toBe(10)
		expect(bst.root?.left?.value).toBe(5)
		expect(bst.root?.right?.value).toBe(15)
	})
})
