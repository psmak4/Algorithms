type BinaryNode<T> = {
	value: T
	left: BinaryNode<T> | null
	right: BinaryNode<T> | null
}

function walk(node: BinaryNode<number> | null, path: number[]): number[] {
	if (node === null) return path

	walk(node.left, path)
	walk(node.right, path)
	path.push(node.value)

	return path
}

export default function InOrderTraversal(head: BinaryNode<number>): number[] {
	return walk(head, [])
}
