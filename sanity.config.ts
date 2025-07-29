// 'use client'

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
//  */

// import { visionTool } from '@sanity/vision';
// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './sanity/env'
// import {schema} from './sanity/schemaTypes'
// import {structure} from './sanity/structure'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schema,
//   plugins: [
//     structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })

'use client'

/**
 * This configuration is used for the Sanity Studio mounted at the `app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
// 👇 REMOVE THIS — legacy, not supported
// import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // 👇 REMOVE visionTool
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
})
