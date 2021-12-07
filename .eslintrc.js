module.exports = {
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'jest': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 13,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': ['warn', 'single'],
		'semi': [
			'error',
			'never'
		],
		'no-unused-vars': 'warn',
		'no-debugger': 'warn',
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react/jsx-sort-default-props': 'warn',
		'react/jsx-sort-props': 'warn',
		'react/jsx-wrap-multilines': [
			'warn',
			{
				return: 'parens-new-line'
			}
		],
		'react/react-in-jsx-scope': 'off',
		'react/sort-prop-types': 'warn',
	}
}
