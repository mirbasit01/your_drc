// // // app/api/increment-views/route.ts
// // import { writeClient } from "@/sanity/lib/write-client";

// // export async function POST(req: Request) {
// //   try {
// //     const { id, currentViews } = await req.json();

// //     if (!id || currentViews === undefined) {
// //       return new Response("Invalid data", { status: 400 });
// //     }

// //     await writeClient.patch(id)
// //       .set({ views: currentViews + 1 })
// //       .commit();

// //     return new Response(JSON.stringify({ success: true }), { status: 200 });
// //   } catch (error) {
// //     return new Response("Server error", { status: 500 });
// //   }
// // }

// // /pages/api/increment-views.ts or /app/api/increment-views/route.ts (if you're using App Router)
// import { writeClient } from "@/sanity/lib/write-client";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const { id, currentViews } = await req.json();

//   if (!id || typeof currentViews !== "number") {
//     return NextResponse.json({ error: "Invalid request" }, { status: 400 });
//   }

//   try {
//     await writeClient.patch(id).set({ views: currentViews + 1 }).commit();
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json({ error: "Update failed" }, { status: 500 });
//   }
// }

import { writeClient } from '@/sanity/lib/write-client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { id, currentViews } = await req.json();

    if (!id || typeof currentViews !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    await writeClient.patch(id).set({ views: currentViews + 1 }).commit();

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
