// app/actions/incrementViews.ts
'use server'

import { writeClient } from "@/sanity/lib/write-client"
import { unstable_after } from "next/server"

export async function incrementViews(id: string, currentViews: number) {
  unstable_after(async () => {
    await writeClient.patch(id)
      .set({ views: currentViews + 1 })
      .commit()
  })

  return true
}
