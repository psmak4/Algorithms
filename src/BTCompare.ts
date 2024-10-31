import BinaryNode from './BinaryNode'

export function BTCompare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
	if (a === null && b === null) return true

	if (a === null || b === null) return false

	if (a.value !== b.value) return false

	return BTCompare(a.left, b.left) && BTCompare(a.right, b.right)
}
