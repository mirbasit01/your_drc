// //   // import { type SchemaTypeDefinition } from 'sanity'

// //   // export const schema: { types: SchemaTypeDefinition[] } = {
// //   //   types: [],
// //   // }
  
// // // import { type SchemaTypeDefinition } from "sanity";

// // import { author } from "@/sanity/schemaTypes/author";
// // import { startup } from "@/sanity/schemaTypes/startup";


// // export const schema: { types: SchemaTypeDefinition[] } = {
// //   types: [author, startup],
// // };
// import { type SchemaTypeDefinition } from "sanity";
// import { author } from "./author";
// import { startup } from "./startup";

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [author, startup],
// };
import { author } from "./author";
import { playlist } from "./playlist";
import { startup } from "./startup";

export const schema = {
  types: [author, startup, playlist],
};