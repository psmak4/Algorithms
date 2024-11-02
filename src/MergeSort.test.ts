import MergeSort from './MergeSort'

describe('MergeSort', () => {
	it('should sort an array of numbers in ascending order', () => {
		const arr = [4, 3, 5, 2, 1]
		MergeSort(arr)
		expect(arr).toEqual([1, 2, 3, 4, 5])
	})

	it('should sort an already sorted array', () => {
		const arr = [1, 2, 3, 4, 5]
		MergeSort(arr)
		expect(arr).toEqual([1, 2, 3, 4, 5])
	})

	it('should sort an array with negative numbers', () => {
		const arr = [3, -2, -5, 1, 0]
		MergeSort(arr)
		expect(arr).toEqual([-5, -2, 0, 1, 3])
	})

	it('should sort an array with duplicate values', () => {
		const arr = [3, 1, 2, 3, 1]
		MergeSort(arr)
		expect(arr).toEqual([1, 1, 2, 3, 3])
	})

	it('should sort an array with a single element', () => {
		const arr = [1]
		MergeSort(arr)
		expect(arr).toEqual([1])
	})

	it('should sort an empty array', () => {
		const arr: number[] = []
		MergeSort(arr)
		expect(arr).toEqual([])
	})
})
