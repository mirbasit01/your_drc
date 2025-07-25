// // import "server-only";

// import { createClient } from "next-sanity";
// import { apiVersion, dataset, projectId, token } from "../env";

// export const writeClient = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
//   token,
// });

// if (!writeClient.config().token) {
//   throw new Error("Write token not found.");
// }
// sanity/lib/write-client.ts
import { createClient } from "next-sanity";

const token = process.env.SANITY_WRITE_TOKEN;

if (!token) {
  throw new Error("Write token not found. Make sure SANITY_WRITE_TOKEN is defined in .env.local.");
}

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token,
  useCdn: false,
});
