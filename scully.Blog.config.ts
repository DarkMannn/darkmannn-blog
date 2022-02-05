import '@scullyio/scully-plugin-puppeteer';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'Blog',
    outDir: './dist/static',
    routes: {
        '/balanced-coder/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: './blog-posts',
            },
        },
    },
};
