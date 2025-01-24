import Trie from '../src/Trie'

describe('Trie', () => {
	let trie: Trie

	beforeEach(() => {
		trie = new Trie()
	})

	test('should insert a word into the Trie and mark the end of the word', () => {
		trie.insert('hello')
		const nodeH = trie.root.children.get('h')
		const nodeO = trie.root.children.get('h')?.children.get('e')?.children.get('l')?.children.get('l')?.children.get('o')
		expect(nodeH).toBeDefined()
		expect(nodeO?.wordEnd).toBe(true)
	})

	test('should search for a word in the Trie and return true if found', () => {
		trie.insert('world')
		expect(trie.search('world')).toBe(true)
	})

	test('should return false when searching for a word that is not in the Trie', () => {
		trie.insert('world')
		expect(trie.search('word')).toBe(false)
	})

	test('should return false when searching for a prefix that is not a complete word in the Trie', () => {
		trie.insert('hello')
		expect(trie.search('hell')).toBe(false)
	})

	test('should handle inserting and searching for multiple words correctly', () => {
		trie.insert('apple')
		trie.insert('banana')
		trie.insert('grape')
		expect(trie.search('apple')).toBe(true)
		expect(trie.search('banana')).toBe(true)
		expect(trie.search('grape')).toBe(true)
		expect(trie.search('appl')).toBe(false)
		expect(trie.search('grapes')).toBe(false)
	})
})
