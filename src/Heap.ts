export default class MinHeap<T> {
	public length: number
	private data: T[]
	private compare: (a: T, b: T) => number

	constructor(compareFn: (a: T, b: T) => number) {
		this.data = []
		this.length = 0
		this.compare = compareFn
	}

	private parent(idx: number): number {
		return Math.floor((idx - 1) / 2)
	}

	private leftChild(idx: number): number {
		return idx * 2 + 1
	}

	private rightChild(idx: number): number {
		return idx * 2 + 2
	}

	private heapifyUp(idx: number): void {
		if (idx === 0) return

		const pIdx = this.parent(idx)
		const pV = this.data[pIdx]
		const v = this.data[idx]

		if (this.compare(pV, v) > 0) {
			this.data[idx] = pV
			this.data[pIdx] = v
			this.heapifyUp(pIdx)
		}
	}

	private heapifyDown(idx: number): void {
		const lIdx = this.leftChild(idx)
		const rIdx = this.rightChild(idx)

		if (idx >= this.length || lIdx >= this.length) return

		const lV = this.data[lIdx]
		const rV = this.data[rIdx]
		const v = this.data[idx]

		if (this.compare(lV, rV) >= 0 && this.compare(v, rV) > 0) {
			this.data[idx] = rV
			this.data[rIdx] = v
			this.heapifyDown(rIdx)
		} else if (this.compare(rV, lV) > 0 && this.compare(v, lV) > 0) {
			this.data[idx] = lV
			this.data[lIdx] = v
			this.heapifyDown(lIdx)
		}
	}

	insert(value: T): void {
		this.data[this.length] = value
		this.heapifyUp(this.length)
		this.length++
	}

	delete(): T | undefined {
		if (this.length === 0) return undefined

		const out = this.data[0]
		this.length--

		if (this.length === 0) {
			this.data = []

			return out
		}

		this.data[0] = this.data[this.length]
		this.heapifyDown(0)

		return out
	}

	peek(): T | undefined {
		if (this.length === 0) return undefined

		return this.data[0]
	}
}
