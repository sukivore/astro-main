import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	  output: 'server',
  adapter: netlify(),
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
