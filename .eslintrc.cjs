module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	env: {
		node: true
	},
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		"no-mixed-spaces-and-tabs": 0,
		"arrow-body-style": ["error", "as-needed"],
		"@typescript-eslint/naming-convention": [
			"warn",
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"]
			},
			{
				selector: "variable",
				types: ["function"],
				format: ["camelCase", "PascalCase"]
			},
			{
				selector: "variable",
				format: ["camelCase", "UPPER_CASE"]
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