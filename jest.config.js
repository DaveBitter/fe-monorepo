module.exports = {
	preset: 'ts-jest/presets/js-with-babel',
	testEnvironment: 'jsdom',
	transformIgnorePatterns: [
		'node_modules/(?!(testing-library__dom|@open-wc|lit-html|@lit|lit|lit-element|pure-lit|lit-element-state-decoupler)/)',
	],
	setupFilesAfterEnv: ['<rootDir>/config/tests/testSetup.ts'],
	moduleNameMapper: {
		'^.+\\.(css|less)$': '<rootDir>/config/tests/cssImportStub.ts',
	},
};
