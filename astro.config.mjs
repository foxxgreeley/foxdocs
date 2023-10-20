import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank',
      content: {
        type: 'element',
        tagName: 'svg',
        properties: {
          viewBox: '0 0 24 24',
          id: 'lucide-external-link',
          width: 14,
          height: 14,
          fill: 'none',
          stroke: 'currentColor',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 2,
        },
        children: [
          {
            type: 'element',
            tagName: 'path',
            properties: {
              d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3',
            },
          },
        ],
      },
    }]]
  },
  integrations: [starlight({
    title: 'FoxDocs',
    customCss: [
    // Path to your Tailwind base styles:
    './src/tailwind.css'],
    components: {
      Header: './src/components/Header.astro',
      Footer: './src/components/Footer.astro',
      Hero: './src/components/Hero.astro',
      SocialIcons: './src/components/SocialIcons.astro',
      Pagination: './src/components/Pagination.astro',
      MarkdownContent: './src/components/MarkdownContent.astro',
      PageTitle: './src/components/PageTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
    },
    social: {
      github: 'https://github.com/foxxgreeley'
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting-started'
      }
    },
    {
      label: 'Laravel',
      collapsed: false,
      autogenerate: {
        directory: 'laravel'
      }
    },
    {
      label: 'Tools',
      collapsed: false,
      autogenerate: {
        directory: 'tools'
      }
    }
  ]
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  }), vue()]
});