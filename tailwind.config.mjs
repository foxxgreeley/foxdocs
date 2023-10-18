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
				// Your preferred text font. Starlight uses a system font stack by default.
				sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
				// Your preferred code font. Starlight uses system monospace fonts by default.
				mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [starlightPlugin()],
}
