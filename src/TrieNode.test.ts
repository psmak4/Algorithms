import TrieNode from './TrieNode'

describe('TrieNode', () => {
	test('should initialize with a value and wordEnd set to false', () => {
		const node = new TrieNode('a')
		expect(node.value).toBe('a')
		expect(node.children.size).toBe(0)
		expect(node.wordEnd).toBe(false)
	})

	test('should allow adding children nodes', () => {
		const node = new TrieNode('a')
		const childNode = new TrieNode('b')
		node.children.set(childNode.value, childNode)

		expect(node.children.size).toBe(1)
		expect(node.children.get('b')).toBe(childNode)
		expect(node.wordEnd).toBe(false)
	})

	test('should handle multiple children nodes', () => {
		const node = new TrieNode('a')
		const childNode1 = new TrieNode('b')
		const childNode2 = new TrieNode('c')

		node.children.set(childNode1.value, childNode1)
		node.children.set(childNode2.value, childNode2)

		expect(node.children.size).toBe(2)
		expect(node.children.get('b')).toBe(childNode1)
		expect(node.children.get('c')).toBe(childNode2)
		expect(node.wordEnd).toBe(false)
	})

	test('should set wordEnd to true to mark the end of a word', () => {
		const node = new TrieNode('a')
		node.wordEnd = true

		expect(node.wordEnd).toBe(true)
	})
})
