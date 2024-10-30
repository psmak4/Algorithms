type BinaryNode<T> = {
	value: T
	left: BinaryNode<T> | null
	right: BinaryNode<T> | null
}

export default function BTBreadthFirstSearch(head: BinaryNode<number>, needle: number): boolean {
	const q: (BinaryNode<number> | null)[] = [head]

	while (q.length) {
		const curr = q.shift()
		if (!curr) continue

		if (curr.value === needle) return true

		q.push(curr.left)
		q.push(curr.right)
	}

	return false
}
