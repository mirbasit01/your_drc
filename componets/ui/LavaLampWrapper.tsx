// components/ui/LavaLampWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const LavaLamp = dynamic(() =>
  import("..//../componets/fluid-blob").then(mod => mod.LavaLamp), {
    ssr: false,
  }
);

export default LavaLamp;
