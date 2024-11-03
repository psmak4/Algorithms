function IsSubsetSum(nums: Array<number>, target: number): boolean {
	function isSubsetSumRec(count: number, sum: number): boolean {
		// Base Cases
		if (sum === 0) return true
		if (count === 0) return false

		// If the last element is greater than the sum, ignore it
		if (nums[count - 1] > sum) {
			return isSubsetSumRec(count - 1, sum)
		}

		// Check if sum can be obtained by including or excluding the last element
		return isSubsetSumRec(count - 1, sum) || isSubsetSumRec(count - 1, sum - nums[count - 1])
	}

	return isSubsetSumRec(nums.length, target)
}

export default IsSubsetSum
