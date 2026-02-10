// Base Jest configuration for @oui mocks

module.exports = {
	// Transform ignore patterns to handle Stencil and @oui modules
	transformIgnorePatterns: ['/node_modules/(?!@oui\\/react)/', '/node_modules/(?!@stencil)/'],

	// Module name mapping to use mocks for @oui/react components
	moduleNameMapper: {
		'^@oui/react$': '@oui/react/dist/oui-mocks.js'
	},

	// Automatically include base setup file
	setupFilesAfterEnv: ['@oui/react/dist/jest-setup.js']
};
