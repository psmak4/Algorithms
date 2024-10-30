import { describe, test, expect } from '@jest/globals'
import MinHeap from './MinHeap'

describe('MinHeap with T = number', () => {
	const heap = new MinHeap<number>((a, b) => a - b)
	heap.insert(5)
	heap.insert(2)
	heap.insert(8)
	heap.insert(1)

	test('Has the correct length', () => {
		expect(heap.length).toEqual(4)
	})

	test('Peaks first item correctly', () => {
		const peeked = heap.peek()

		expect(peeked).toBe(1)
	})

	test('Deletes items correctly', () => {
		const first = heap.delete()
		const second = heap.delete()
		const third = heap.delete()
		const fourth = heap.delete()
		const udf = heap.delete()

		expect(first).toBe(1)
		expect(second).toBe(2)
		expect(third).toBe(5)
		expect(fourth).toBe(8)
		expect(udf).toBeUndefined()
	})
})
