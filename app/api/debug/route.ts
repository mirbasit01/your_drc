// app/api/debug/route.ts
export async function GET() {
  return Response.json({
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  });
}
