import { describe, test, expect } from '@jest/globals'
import ArrayBinarySearch from './ArrayBinarySearch'

describe('Array Binary Search', () => {
	test('Returns true if needle is found in haystack', () => {
		const haystack = [1, 2, 3, 4]
		const needle = 3

		const found = ArrayBinarySearch(haystack, needle)

		expect(found).toBe(true)
	})

	test('Returns false if needle is not found in haystack', () => {
		const haystack = [1, 2, 3, 4]
		const needle = 5

		const found = ArrayBinarySearch(haystack, needle)

		expect(found).toBe(false)
	})
})
