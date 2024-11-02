function EulerTotient(n: number): number {
	// Initialize result as n
	let result = n

	// Consider all prime factors
	// of n and for every prime
	// factor p, multiply result
	// with (1 - 1/p)
	for (let p = 2; p * p <= n; ++p) {
		// Check if p is
		// a prime factor.
		if (n % p == 0) {
			// If yes, then update
			// n and result
			while (n % p == 0) n /= p

			result *= 1.0 - 1.0 / p
		}
	}

	// If n has a prime factor greater
	// than sqrt(n) (There can be at-most
	// one such prime factor)
	if (n > 1) result -= result / n
	//Since in the set {1,2,....,n-1}, all numbers are relatively prime with n
	//if n is a prime number

	return Math.trunc(result)
}

export default EulerTotient
