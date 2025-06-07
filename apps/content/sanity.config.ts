'use client';

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from '@iiitdwd/schema';
import { structure } from './src/sanity/structure';
import { CustomNavbar } from '@/sanity/components/CustomNavbar';
import { apiVersion, dataset, projectId } from './src/sanity/env';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  name: 'default',
  title: 'IIIT Dharwad Content',
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
  studio: {
    components: {
      navbar: CustomNavbar,
    },
  },
});
