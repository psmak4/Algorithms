/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	collectCoverageFrom: ['src/**/*.ts'],
	testEnvironment: 'node',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
}
