// Base Jest setup for @oui/react library

// Support for custom elements from Stencil in Jest environment
if (!window.customElements) {
	window.customElements = {
		define: jest.fn(),
		get: jest.fn(),
		whenDefined: jest.fn(() => Promise.resolve())
	};
}
