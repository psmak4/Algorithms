class TrieNode<T> {
	value: T
	children: Map<T, TrieNode<T>>
	wordEnd: boolean

	constructor(val: T) {
		this.value = val
		this.children = new Map<T, TrieNode<T>>()
		this.wordEnd = false
	}
}

export default TrieNode
