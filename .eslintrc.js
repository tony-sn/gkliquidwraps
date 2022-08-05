// eslintrc.js
module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:@next/next/recommended',
		'eslint:recommended',
		'airbnb',
		'prettier',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		requireConfigFile: false,
		sourceType: 'module',
		babelOptions: {
			parserOpts: {
				plugins: ['jsx', 'typescript'],
			},
		},
	},
	parser: '@babel/eslint-parser',
	plugins: ['react'],
	rules: {
		'arrow-body-style': 'off',
		'import/extensions': 0,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/alt-text': 0,
		'jsx-a11y/no-autofocus': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['to', 'hrefLeft', 'hrefRight'],
				aspects: ['noHref', 'invalidHref', 'preferButton'],
			},
		],
		'linebreak-style': 0,
		'max-len': 'off',
		'no-irregular-whitespace': 'off',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
			},
		],
		'no-underscore-dangle': [
			'error',
			{
				allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
			},
		],
		'object-curly-newline': 0,
		'react/function-component-definition': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/no-array-index-key': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'react/react-in-jsx-scope': 'off',
		'react/state-in-constructor': 0,
	},
}
