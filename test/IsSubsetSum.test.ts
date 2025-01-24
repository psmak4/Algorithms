import IsSubsetSum from '../src/IsSubsetSum'

describe('IsSubsetSum', () => {
	test('should return true for an empty set with target 0', () => {
		expect(IsSubsetSum([], 0)).toBe(true)
	})

	test('should return false for an empty set with non-zero target', () => {
		expect(IsSubsetSum([], 10)).toBe(false)
	})

	test('should return true when a subset equals the target', () => {
		expect(IsSubsetSum([3, 34, 4, 12, 5, 2], 9)).toBe(true) // 4 + 5 = 9
	})

	test('should return false when no subset equals the target', () => {
		expect(IsSubsetSum([3, 34, 4, 12, 5, 2], 30)).toBe(false)
	})

	test('should return true when the subset includes all elements to meet the target', () => {
		expect(IsSubsetSum([3, 34, 4, 12, 5, 2], 60)).toBe(true) // 3 + 34 + 4 + 12 + 5 + 2 = 60
	})

	test('should return true when the target can be achieved by including a single element', () => {
		expect(IsSubsetSum([10, 20, 30], 30)).toBe(true)
	})

	test('should return true for large numbers with a subset sum matching the target', () => {
		expect(IsSubsetSum([100, 200, 300, 400, 500], 900)).toBe(true) // 400 + 500 = 900
	})

	test('should return false when target is larger than the sum of all elements', () => {
		expect(IsSubsetSum([1, 2, 3], 10)).toBe(false)
	})

	test('should handle negative numbers correctly when a subset can meet the target', () => {
		expect(IsSubsetSum([3, 4, -2, 5], 7)).toBe(true) // 3 + 4 = 7
	})
})
