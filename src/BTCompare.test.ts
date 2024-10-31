import { BTCompare } from './BTCompare'
import BinaryNode from './BinaryNode'

describe('BTCompare', () => {
	test('should return true for two null trees', () => {
		expect(BTCompare(null, null)).toBe(true)
	})

	test('should return false if one tree is null and the other is not', () => {
		const treeA = new BinaryNode(1)
		expect(BTCompare(treeA, null)).toBe(false)
		expect(BTCompare(null, treeA)).toBe(false)
	})

	test('should return false for trees with different root values', () => {
		const treeA = new BinaryNode(1)
		const treeB = new BinaryNode(2)
		expect(BTCompare(treeA, treeB)).toBe(false)
	})

	test('should return true for identical trees with one node', () => {
		const treeA = new BinaryNode(1)
		const treeB = new BinaryNode(1)
		expect(BTCompare(treeA, treeB)).toBe(true)
	})

	test('should return true for identical multi-level trees', () => {
		const treeA = new BinaryNode(1, new BinaryNode(2), new BinaryNode(3))
		const treeB = new BinaryNode(1, new BinaryNode(2), new BinaryNode(3))
		expect(BTCompare(treeA, treeB)).toBe(true)
	})

	test('should return false for trees with different structures', () => {
		const treeA = new BinaryNode(1, new BinaryNode(2), null)
		const treeB = new BinaryNode(1, new BinaryNode(2), new BinaryNode(3))
		expect(BTCompare(treeA, treeB)).toBe(false)
	})

	test('should return false for trees with same structure but different values', () => {
		const treeA = new BinaryNode(1, new BinaryNode(2), new BinaryNode(3))
		const treeB = new BinaryNode(1, new BinaryNode(4), new BinaryNode(3))
		expect(BTCompare(treeA, treeB)).toBe(false)
	})
})
