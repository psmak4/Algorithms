import TrieNode from './TrieNode'

class Trie {
	root: TrieNode<string>

	constructor() {
		this.root = new TrieNode('')
	}

	insert(word: string): void {
		let curr: TrieNode<string> = this.root

		for (let letter of word) {
			if (!curr.children.has(letter)) {
				curr.children.set(letter, new TrieNode<string>(letter))
			}

			curr = curr.children.get(letter) as TrieNode<string>
		}

		curr.wordEnd = true
	}

	search(word: string): boolean {
		let curr: TrieNode<string> = this.root

		for (let letter of word) {
			if (!curr.children.has(letter)) return false

			curr = curr.children.get(letter) as TrieNode<string>
		}

		return curr.wordEnd
	}
}

export default Trie
