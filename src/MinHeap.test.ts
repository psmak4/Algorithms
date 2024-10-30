import MinHeap from './MinHeap'

describe('MinHeap', () => {
	let minHeap: MinHeap<number>

	beforeEach(() => {
		minHeap = new MinHeap((a, b) => a - b)
	})

	test('should initialize an empty heap', () => {
		expect(minHeap.length).toBe(0)
		expect(minHeap.peek()).toBeUndefined()
	})

	test('should insert values and maintain heap property', () => {
		minHeap.insert(10)
		expect(minHeap.length).toBe(1)
		expect(minHeap.peek()).toBe(10)

		minHeap.insert(5)
		expect(minHeap.length).toBe(2)
		expect(minHeap.peek()).toBe(5) // 5 should bubble up to the top

		minHeap.insert(20)
		expect(minHeap.length).toBe(3)
		expect(minHeap.peek()).toBe(5) // 5 should still be at the top

		minHeap.insert(3)
		expect(minHeap.length).toBe(4)
		expect(minHeap.peek()).toBe(3) // 3 should bubble up to the top
	})

	test('should delete the minimum element and maintain heap property', () => {
		minHeap.insert(10)
		minHeap.insert(5)
		minHeap.insert(20)
		minHeap.insert(3)

		expect(minHeap.delete()).toBe(3) // Removing the top element
		expect(minHeap.length).toBe(3)
		expect(minHeap.peek()).toBe(5)

		expect(minHeap.delete()).toBe(5)
		expect(minHeap.length).toBe(2)
		expect(minHeap.peek()).toBe(10)

		expect(minHeap.delete()).toBe(10)
		expect(minHeap.length).toBe(1)
		expect(minHeap.peek()).toBe(20)

		expect(minHeap.delete()).toBe(20)
		expect(minHeap.length).toBe(0)
		expect(minHeap.peek()).toBeUndefined()
	})

	test('should return undefined when deleting from an empty heap', () => {
		expect(minHeap.delete()).toBeUndefined()
	})

	test('should handle inserting duplicate values', () => {
		minHeap.insert(10)
		minHeap.insert(10)
		minHeap.insert(5)
		minHeap.insert(5)

		expect(minHeap.length).toBe(4)
		expect(minHeap.peek()).toBe(5)

		expect(minHeap.delete()).toBe(5)
		expect(minHeap.delete()).toBe(5)
		expect(minHeap.delete()).toBe(10)
		expect(minHeap.delete()).toBe(10)
		expect(minHeap.delete()).toBeUndefined()
	})

	test('should cover the case where the right child is smaller during heapifyDown', () => {
		minHeap.insert(10)
		minHeap.insert(15)
		minHeap.insert(5)
		minHeap.insert(3)
		minHeap.insert(4)
		minHeap.insert(17)

		expect(minHeap.delete()).toBe(3) // Removes 3, triggers heapifyDown
		expect(minHeap.peek()).toBe(4) // 4 should now be at the top
	})
})
