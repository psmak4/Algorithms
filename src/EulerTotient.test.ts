import EulerTotient from './EulerTotient'

describe('EulerTotient', () => {
	test('should return 1 for input 1', () => {
		expect(EulerTotient(1)).toBe(1)
	})

	test('should return correct result for a prime number', () => {
		expect(EulerTotient(7)).toBe(6)
	})

	test('should return correct result for a composite number', () => {
		expect(EulerTotient(10)).toBe(4)
	})

	test('should return correct result for a large prime number', () => {
		expect(EulerTotient(13)).toBe(12)
	})

	test('should return correct result for a number with multiple prime factors', () => {
		expect(EulerTotient(30)).toBe(8)
	})

	test('should handle a power of a prime number correctly', () => {
		expect(EulerTotient(16)).toBe(8) // 16 = 2^4
	})

	test('should return correct result for 0 (edge case)', () => {
		expect(EulerTotient(0)).toBe(0)
	})
})
