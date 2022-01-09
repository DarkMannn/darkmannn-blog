import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'Blog',
    outDir: './dist/static',
    routes: {
        '/slow-programmer/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: './blog-posts',
            },
        },
    },
};
