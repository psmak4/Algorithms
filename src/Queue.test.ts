import Queue from './Queue'

describe('Queue', () => {
	let queue: Queue<number>

	beforeEach(() => {
		queue = new Queue<number>()
	})

	test('should initialize an empty queue', () => {
		expect(queue.length).toBe(0)
		expect(queue.peek()).toBeUndefined()
	})

	test('should enqueue elements and increase the length', () => {
		queue.enqueue(1)
		expect(queue.length).toBe(1)
		expect(queue.peek()).toBe(1)

		queue.enqueue(2)
		expect(queue.length).toBe(2)
		expect(queue.peek()).toBe(1) // The head remains 1
	})

	test('should dequeue elements and maintain queue order', () => {
		queue.enqueue(1)
		queue.enqueue(2)
		queue.enqueue(3)

		expect(queue.deque()).toBe(1) // Removes 1, the first enqueued item
		expect(queue.length).toBe(2)
		expect(queue.peek()).toBe(2) // Now the head should be 2

		expect(queue.deque()).toBe(2)
		expect(queue.length).toBe(1)
		expect(queue.peek()).toBe(3)

		expect(queue.deque()).toBe(3)
		expect(queue.length).toBe(0)
		expect(queue.peek()).toBeUndefined()
	})

	test('should return undefined when dequeuing from an empty queue', () => {
		expect(queue.deque()).toBeUndefined()
	})

	test('should reset tail to undefined when the last element is dequeued', () => {
		queue.enqueue(1)
		expect(queue.deque()).toBe(1) // Removing the only element
		expect(queue.length).toBe(0)
		expect(queue.peek()).toBeUndefined()
		expect(queue.deque()).toBeUndefined()
	})

	test('should handle enqueueing after dequeuing all elements', () => {
		queue.enqueue(1)
		queue.enqueue(2)
		queue.deque() // dequeues 1
		queue.deque() // dequeues 2, queue is now empty

		expect(queue.length).toBe(0)
		expect(queue.peek()).toBeUndefined()

		queue.enqueue(3)
		expect(queue.length).toBe(1)
		expect(queue.peek()).toBe(3) // 3 is the new head and tail

		queue.enqueue(4)
		expect(queue.length).toBe(2)
		expect(queue.peek()).toBe(3) // 3 remains the head
	})
})
