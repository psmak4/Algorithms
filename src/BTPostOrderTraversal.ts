import BinaryNode from './BinaryNode'

export default function PostOrderTraversal<T>(head: BinaryNode<T> | null): T[] {
	function walk(node: BinaryNode<T> | null, path: T[]): T[] {
		if (node === null) return path

		walk(node.left, path)
		walk(node.right, path)
		path.push(node.value)

		return path
	}

	return walk(head, [])
}
