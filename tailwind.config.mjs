const starlightPlugin = require('@astrojs/starlight-tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#ff0080',
				gray: {
					'100': '#f7fafc',
					'200': '#edf2f7',
					'300': '#e2e8f0',
					'400': '#cbd5e0',
					'500': '#a0aec0',
					'600': '#718096',
					'700': '#4a5568',
					'800': '#2d3748',
					'900': '#1a202c',
				},
			},
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
	plugins: [starlightPlugin()],
}
