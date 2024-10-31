import BinaryNode from './BinaryNode'

export default function BTBreadthFirstSearch<T>(head: BinaryNode<T> | null, needle: T): boolean {
	const q: (BinaryNode<T> | null)[] = [head]

	while (q.length) {
		const curr = q.shift()
		if (!curr) continue

		if (curr.value === needle) return true

		q.push(curr.left)
		q.push(curr.right)
	}

	return false
}
