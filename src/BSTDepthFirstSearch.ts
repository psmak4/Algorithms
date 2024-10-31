import BinaryNode from './BinaryNode'

export default function BSTDepthFirstSearch<T>(head: BinaryNode<T> | null, needle: T): boolean {
	function search(curr: BinaryNode<T> | null, needle: T): boolean {
		if (!curr) return false

		if (curr.value === needle) return true

		if (curr.value < needle) return search(curr.right, needle)

		return search(curr.left, needle)
	}

	return search(head, needle)
}
