import Heap from './Heap'

describe('Heap', () => {
	describe('MinHeap', () => {
		let minHeap: Heap<number>

		beforeEach(() => {
			minHeap = new Heap((a, b) => a - b)
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

	describe('MaxHeap', () => {
		let maxHeap: Heap<number>

		beforeEach(() => {
			maxHeap = new Heap((a, b) => b - a)
		})

		test('should initialize an empty heap', () => {
			expect(maxHeap.length).toBe(0)
			expect(maxHeap.peek()).toBeUndefined()
		})

		test('should insert values and maintain heap property', () => {
			maxHeap.insert(10)
			expect(maxHeap.length).toBe(1)
			expect(maxHeap.peek()).toBe(10)

			maxHeap.insert(5)
			expect(maxHeap.length).toBe(2)
			expect(maxHeap.peek()).toBe(10) // 10 should bubble up to the top

			maxHeap.insert(20)
			expect(maxHeap.length).toBe(3)
			expect(maxHeap.peek()).toBe(20) // 20 should still be at the top

			maxHeap.insert(3)
			expect(maxHeap.length).toBe(4)
			expect(maxHeap.peek()).toBe(20) // 20 should bubble up to the top
		})

		test('should delete the maximum element and maintain heap property', () => {
			maxHeap.insert(10)
			maxHeap.insert(5)
			maxHeap.insert(20)
			maxHeap.insert(3)

			expect(maxHeap.delete()).toBe(20) // Removing the top element
			expect(maxHeap.length).toBe(3)
			expect(maxHeap.peek()).toBe(10)

			expect(maxHeap.delete()).toBe(10)
			expect(maxHeap.length).toBe(2)
			expect(maxHeap.peek()).toBe(5)

			expect(maxHeap.delete()).toBe(5)
			expect(maxHeap.length).toBe(1)
			expect(maxHeap.peek()).toBe(3)

			expect(maxHeap.delete()).toBe(3)
			expect(maxHeap.length).toBe(0)
			expect(maxHeap.peek()).toBeUndefined()
		})

		test('should return undefined when deleting from an empty heap', () => {
			expect(maxHeap.delete()).toBeUndefined()
		})

		test('should handle inserting duplicate values', () => {
			maxHeap.insert(10)
			maxHeap.insert(10)
			maxHeap.insert(5)
			maxHeap.insert(5)

			expect(maxHeap.length).toBe(4)
			expect(maxHeap.peek()).toBe(10)

			expect(maxHeap.delete()).toBe(10)
			expect(maxHeap.delete()).toBe(10)
			expect(maxHeap.delete()).toBe(5)
			expect(maxHeap.delete()).toBe(5)
			expect(maxHeap.delete()).toBeUndefined()
		})

		test('should cover the case where the right child is larger during heapifyDown', () => {
			maxHeap.insert(10)
			maxHeap.insert(15)
			maxHeap.insert(5)
			maxHeap.insert(3)
			maxHeap.insert(4)
			maxHeap.insert(17)

			expect(maxHeap.delete()).toBe(17) // Removes 3, triggers heapifyDown
			expect(maxHeap.peek()).toBe(15) // 4 should now be at the top
		})
	})
})
