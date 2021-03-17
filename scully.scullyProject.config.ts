import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scullyProject",
  outDir: './dist/static',
  routes: {
    '/home/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfile"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};