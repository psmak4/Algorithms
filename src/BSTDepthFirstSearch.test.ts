import BSTDepthFirstSearch from './BSTDepthFirstSearch'
import BinaryNode from './BinaryNode'

describe('BSTDepthFirstSearch', () => {
	let root: BinaryNode<number>

	beforeEach(() => {
		// Set up a binary search tree for testing
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
		expect(BSTDepthFirstSearch(root, 10)).toBe(true)
	})

	it('should return true if the needle is in the left subtree', () => {
		expect(BSTDepthFirstSearch(root, 5)).toBe(true)
		expect(BSTDepthFirstSearch(root, 2)).toBe(true)
		expect(BSTDepthFirstSearch(root, 7)).toBe(true)
	})

	it('should return true if the needle is in the right subtree', () => {
		expect(BSTDepthFirstSearch(root, 15)).toBe(true)
		expect(BSTDepthFirstSearch(root, 12)).toBe(true)
		expect(BSTDepthFirstSearch(root, 20)).toBe(true)
	})

	it('should return false if the needle is not in the tree', () => {
		expect(BSTDepthFirstSearch(root, 3)).toBe(false)
		expect(BSTDepthFirstSearch(root, 8)).toBe(false)
		expect(BSTDepthFirstSearch(root, 13)).toBe(false)
		expect(BSTDepthFirstSearch(root, 30)).toBe(false)
	})

	it('should return false if the tree is empty', () => {
		expect(BSTDepthFirstSearch(null, 10)).toBe(false)
	})

	it('should return true for a single-node tree when the needle matches the root value', () => {
		const singleNodeTree = new BinaryNode(10)
		expect(BSTDepthFirstSearch(singleNodeTree, 10)).toBe(true)
	})

	it('should return false for a single-node tree when the needle does not match the root value', () => {
		const singleNodeTree = new BinaryNode(10)
		expect(BSTDepthFirstSearch(singleNodeTree, 5)).toBe(false)
	})
})
