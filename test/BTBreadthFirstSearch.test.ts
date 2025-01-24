import BTBreadthFirstSearch from '../src/BTBreadthFirstSearch'
import BinaryNode from '../src/BinaryNode'

describe('BTBreadthFirstSearch', () => {
	let root: BinaryNode<number>

	beforeEach(() => {
		// Set up a binary tree for testing
		//      10
		//     /  \
		//    5    15
		//   / \   / \
		//  2   7 12  20
		root = new BinaryNode(10)
		root.left = new BinaryNode(5)
		root.right = new BinaryNode(15)
		root.left.left = new BinaryNode(2)
		root.left.right = new BinaryNode(7)
		root.right.left = new BinaryNode(12)
		root.right.right = new BinaryNode(20)
	})

	it('should return true if the needle is the root node', () => {
		expect(BTBreadthFirstSearch(root, 10)).toBe(true)
	})

	it('should return true if the needle is in the left subtree', () => {
		expect(BTBreadthFirstSearch(root, 5)).toBe(true)
		expect(BTBreadthFirstSearch(root, 2)).toBe(true)
		expect(BTBreadthFirstSearch(root, 7)).toBe(true)
	})

	it('should return true if the needle is in the right subtree', () => {
		expect(BTBreadthFirstSearch(root, 15)).toBe(true)
		expect(BTBreadthFirstSearch(root, 12)).toBe(true)
		expect(BTBreadthFirstSearch(root, 20)).toBe(true)
	})

	it('should return false if the needle is not in the tree', () => {
		expect(BTBreadthFirstSearch(root, 3)).toBe(false)
		expect(BTBreadthFirstSearch(root, 8)).toBe(false)
		expect(BTBreadthFirstSearch(root, 13)).toBe(false)
		expect(BTBreadthFirstSearch(root, 30)).toBe(false)
	})

	it('should return false if the tree is empty', () => {
		expect(BTBreadthFirstSearch(null, 10)).toBe(false)
	})

	it('should return true for a single-node tree when the needle matches the root value', () => {
		const singleNodeTree = new BinaryNode(10)
		expect(BTBreadthFirstSearch(singleNodeTree, 10)).toBe(true)
	})

	it('should return false for a single-node tree when the needle does not match the root value', () => {
		const singleNodeTree = new BinaryNode(10)
		expect(BTBreadthFirstSearch(singleNodeTree, 5)).toBe(false)
	})
})
