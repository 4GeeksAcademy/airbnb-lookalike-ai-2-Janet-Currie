"use client";

import dynamic from "next/dynamic";

const DynamicLeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[360px] place-items-center rounded-3xl bg-zinc-100 text-sm text-zinc-500">
      Loading map...
    </div>
  ),
});

export default DynamicLeafletMap;
