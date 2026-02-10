/**
 * TypeScript declarations for design tokens Storybook implementation
 */

export interface TokenObject {
	name: string;
	cssVar: string;
	value: string;
	category: string | null;
}

export interface TokensStructure {
	core: {
		[key: string]: TokenObject[];
	};
	tier2: {
		colors: {
			background: TokenObject[];
			content: TokenObject[];
			border: TokenObject[];
		};
		borders: {
			radius: TokenObject[];
			width: TokenObject[];
		};
		shadows: TokenObject[];
		typography: {
			display: Record<string, any>;
			title: Record<string, any>;
			body: Record<string, any>;
			label: Record<string, any>;
		};
	};
	tier3: {
		'app-bar': TokenObject[];
		button: TokenObject[];
		'focus-ring': TokenObject[];
		form: TokenObject[];
		link: TokenObject[];
	};
}

declare global {
	interface Window {
		ouiTokens: TokensStructure;
	}
}

export {};
