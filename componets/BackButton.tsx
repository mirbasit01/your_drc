'use client';

import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import React from "react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className={cn(
        "relative inline-block overflow-hidden rounded-[20px] text-black z-10",
        "absolute top-4 left-4"
      )}
    >
      {/* Star effect (bottom) */}
      <div
        className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom opacity-20 dark:opacity-70 z-0"
        style={{
          background: `radial-gradient(circle, hsl(var(--foreground)), transparent 10%)`,
          animationDuration: "6s",
        }}
      />
      {/* Star effect (top) */}
      <div
        className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top opacity-20 dark:opacity-70 z-0"
        style={{
          background: `radial-gradient(circle, hsl(var(--foreground)), transparent 10%)`,
          animationDuration: "6s",
          
        }}
      />
      {/* Button content */}
      <div className={cn(
        "relative z-10 border text-foreground text-center text-base py-2 px-5 rounded-[20px]",
        "bg-gradient-to-b from-background/90 to-muted/90 border-border/40",
        "dark:from-background dark:to-muted dark:border-border"
      )} 
      style={{
        cursor: "pointer",
      }}>
        ← Back to Home
      </div>
    </button>
  );
}
