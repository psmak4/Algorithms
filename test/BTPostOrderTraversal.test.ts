import PostOrderTraversal from '../src/BTPostOrderTraversal'
import BinaryNode from '../src/BinaryNode'

describe('PostOrderTraversal', () => {
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

	it('should return an array in post-order for a full tree', () => {
		const result = PostOrderTraversal(root)
		expect(result).toEqual([2, 7, 5, 12, 20, 15, 10])
	})

	it('should return an array with only root value for a single-node tree', () => {
		const singleNodeTree = new BinaryNode(10)
		const result = PostOrderTraversal(singleNodeTree)
		expect(result).toEqual([10])
	})

	it('should return an empty array for an empty tree', () => {
		const result = PostOrderTraversal(null)
		expect(result).toEqual([])
	})

	it('should handle a tree with only left children', () => {
		const leftOnlyTree = new BinaryNode(10)
		leftOnlyTree.left = new BinaryNode(5)
		leftOnlyTree.left.left = new BinaryNode(2)
		const result = PostOrderTraversal(leftOnlyTree)
		expect(result).toEqual([2, 5, 10])
	})

	it('should handle a tree with only right children', () => {
		const rightOnlyTree = new BinaryNode(10)
		rightOnlyTree.right = new BinaryNode(15)
		rightOnlyTree.right.right = new BinaryNode(20)
		const result = PostOrderTraversal(rightOnlyTree)
		expect(result).toEqual([20, 15, 10])
	})
})
