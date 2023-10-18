import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Foxdocs',
	logo: {
		light: './src/assets/light-logo.webp',
		dark: './src/assets/dark-logo.webp',
	},
	customCss: [
		// Path to your Tailwind base styles:
		'./src/tailwind.css',
	],
    social: {
      github: 'https://github.com/foxxgreeley'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }, {
        label: 'Test Document',
        link: '/guides/test/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind(
	{
		// Disable the default base styles:
		applyBaseStyles: false,
	}
  )]
});