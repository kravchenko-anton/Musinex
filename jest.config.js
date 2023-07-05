/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'jest-expo',
	testEnvironment: 'node',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: ['**/tests/**/*.test.(ts|js)', '**/?(*.)+(spec|test).[ty]s?(x)'],
	setupFilesAfterEnv: [
		'./jest.setup.js',
		'@testing-library/jest-dom/extend-expect',
		'@testing-library/jest-native/extend-expect'
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/app/$1',
		'^/app/(.*)$': '<rootDir>/app/$1'
	}
}
