import { astroExpressiveCode, ExpressiveCodeTheme, pluginFramesTexts } from 'astro-expressive-code';
import path from 'path';
import { theme } from './syntax-highlighting-theme';

// Allow creation of a pre-configured Expressive Code integration that matches the Astro Docs theme
export const astroDocsExpressiveCode = () =>
    astroExpressiveCode({
        theme: new ExpressiveCodeTheme(theme),
        styleOverrides: {
            codeBackground: "var(--theme-code-bg)",
            borderColor: "var(--accent-alt-color)",
            scrollbarThumbColor: "hsl(269deg 20% 90% / 0.25)",
            scrollbarThumbHoverColor: "hsl(269deg 20% 90% / 0.5)",
        },
        frames: {
            styleOverrides: {
                editorTabBarBackground: "var(--theme-code-tabs)",
                editorActiveTabBackground: "black",
                editorActiveTabBorderBottom: "hsl(269deg 35% 55%)",
                editorTabBarBorderBottom: "var(--theme-code-tabs)",

                terminalTitlebarBackground: "var(--theme-code-tabs)",
                terminalTitlebarBorderBottom: "transparent",
                terminalBackground: "var(--theme-code-bg)",
            },
        },
        textMarkers: {
            styleOverrides: {
                defaultChroma: "55",
            },
        },
        getBlockLocale: ({ file }) => {
            // Path format: `src/content/docs/en/getting-started.mdx`
            // Part indices:  0     1      2   3         4
            const pathParts = path.relative(file.cwd, file.path).split(/[\\/]/);
            return pathParts[3];
        },
    });