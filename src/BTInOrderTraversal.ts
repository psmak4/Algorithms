import BinaryNode from './BinaryNode'

export default function InOrderTraversal<T>(head: BinaryNode<T> | null): T[] {
	function walk(node: BinaryNode<T> | null, path: T[]): T[] {
		if (node === null) return path

		walk(node.left, path)
		path.push(node.value)
		walk(node.right, path)

		return path
	}

	return walk(head, [])
}
