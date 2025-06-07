import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from '@iiitdwd/schema';
import { structure } from './src/sanity/structure';
import { apiVersion, dataset, projectId } from './src/sanity/env';

export default defineConfig({
  name: 'default',
  title: 'IIIT Dharwad Website',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schema,
  },
}); 