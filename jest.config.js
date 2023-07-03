/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "jest-expo",
	testEnvironment: 'node',
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	testMatch: [
		'**/tests/**/*.test.(ts|js)',
		"**/?(*.)+(spec|test).[ty]s?(x)",
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/app/$1',
		"^/app/(.*)$": "<rootDir>/app/$1",
	},
	
};