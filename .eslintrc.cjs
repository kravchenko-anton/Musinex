module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"]
			},
			{
				selector: "interface",
				format: ["PascalCase"],
				custom: {
					regex: "^I[A-Z]",
					match: false
				}
			},
		]
	}
};