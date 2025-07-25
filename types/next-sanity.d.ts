// types/next-sanity.d.ts
declare module 'next-sanity' {
  export function createClient(config: any): any;
  export function groq(strings: TemplateStringsArray, ...interpolations: any[]): string;
}
