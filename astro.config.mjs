import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'FoxDocs',
	logo: {
		replacesTitle: true,
		light: './src/assets/light-logo.png',
		dark: './src/assets/dark-logo.png',
		width: 50,
	},
	customCss: [
		// Path to your Tailwind base styles:
		'./src/tailwind.css',
	],
	components: {
    // Override the default `Header` component.
    Header: './src/components/Header.astro',
    Hero: './src/components/Hero.astro',
		SocialIcons: './src/components/SocialIcons.astro',
		Pagination: './src/components/Pagination.astro',
	},
    social: {
      github: 'https://github.com/foxxgreeley'
    },
    sidebar: [{
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Tools',
      collapsed: true,
      autogenerate: {
        directory: 'tools'
      }
    }]
  }), tailwind(
	{
		// Disable the default base styles:
		applyBaseStyles: false,
	}
  )]
});