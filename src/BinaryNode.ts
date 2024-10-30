class BinaryNode<T> {
	value: T
	left: BinaryNode<T> | null
	right: BinaryNode<T> | null

	constructor(val: T, left?: BinaryNode<T> | null, right?: BinaryNode<T> | null) {
		this.value = val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

export default BinaryNode
