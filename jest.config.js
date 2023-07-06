/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'jest-expo',
	testEnvironment: 'node',
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: ['**/tests/**/*.test.(ts|js)', '**/?(*.)+(spec|test).[ty]s?(x)'],
	setupFilesAfterEnv: [
		'./jest.setup.js',
		'@testing-library/jest-dom/extend-expect',
		'@testing-library/jest-native/extend-expect'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/app/$1',
		'^/app/(.*)$': '<rootDir>/app/$1'
	}
}
