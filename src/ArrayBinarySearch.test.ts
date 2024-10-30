import ArrayBinarySearch from './ArrayBinarySearch'

describe('ArrayBinarySearch', () => {
	test('should return true when needle is found', () => {
		expect(ArrayBinarySearch([1, 2, 3, 4, 5], 3)).toBe(true)
	})

	test('should return false when needle is not found', () => {
		expect(ArrayBinarySearch([1, 3, 5, 7, 9], 4)).toBe(false)
	})

	test('should handle an empty array and return false', () => {
		expect(ArrayBinarySearch([], 1)).toBe(false)
	})

	test('should handle a single-element array when needle is present', () => {
		expect(ArrayBinarySearch([1], 1)).toBe(true)
	})

	test('should handle a single-element array when needle is absent', () => {
		expect(ArrayBinarySearch([1], 2)).toBe(false)
	})
})
