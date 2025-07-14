// sanity/lib/write-client.ts
import { createClient } from 'next-sanity'

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_WRITE_TOKEN, // Optional: Only needed for write access
  apiVersion: '2024-07-01',
  useCdn: false,
})
