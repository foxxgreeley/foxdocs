const starlightPlugin = require('@astrojs/starlight-tailwind');

// Generated color palettes 
const accent = { 200: '#acc9ff', 600: '#0453ff', 900: '#082a75', 950: '#0b204f' };
const gray = { 100: '#f6f6f6', 200: '#eeeeee', 300: '#c2c2c2', 400: '#8b8b8b', 500: '#585858', 700: '#383838', 800: '#272727', 900: '#181818' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
			fontFamily: {
				sans: [
					'Inter',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
				serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
				mono: [
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace',
				],
			},
		},
	},
	darkMode: ['class', '[data-theme="dark"]'],
	plugins: [starlightPlugin()],
}
