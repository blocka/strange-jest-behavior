// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: 'airbnb-base',
	env: {
		browser: true
	},
	// required to lint *.vue files
	plugins: ['html', 'react'],
	// add your custom rules here
	rules: {
		'import/named': 2,
		'react/jsx-uses-vars': 1,
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'no-undef': 2,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'import/no-extraneous-dependencies': 0,
		'comma-dangle': 0,
		semi: [2, 'always'],
		'jsx-quotes': ['off'],
		indent: [2, 'tab', { SwitchCase: 1 }],
		'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
		'no-tabs': 0,
		'space-before-function-paren': ['error', 'always'],
		'guard-for-in': 0,
		'no-restricted-syntax': 0,
		'no-confusing-arrow': 0,
		'no-shadow': 0,
		'no-underscore-dangle': 0,
		'no-mixed-operators': [2, { allowSamePrecedence: true }],
		'no-constant-condition': 0,
		'no-continue': 0
	}
};
