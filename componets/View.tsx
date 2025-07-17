// //  import Ping from "./Ping";
// //  import { client } from "@/sanity/lib/client";
// // import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
// // import { writeClient } from "@/sanity/lib/write-client";
// //  import { unstable_after as after } from "next/server";

// // const View = async ({ id }: { id: string }) => {
// //   const { views: totalViews } = await client
// //     .withConfig({ useCdn: false })
// // .fetch(STARTUP_VIEWS_QUERY, { id });

// //   after(
// //     async () =>
// //       await writeClient
// //         .patch(id)
// //         .set({ views: totalViews + 1 })
// //         .commit(),
// //   );

// //   return (
// //     <div className="view-container">
// //       <div className="absolute -top-2 -right-2">
// //         <Ping/>
// //       </div>

// //       <p className="view-text">
// //         <span className="font-black">Views: {totalViews}</span>
// //       </p>
// //     </div>
// //   );
// // };
// // export default View;
// 'use client'

// import { useEffect, useState } from 'react'
// import { client } from '@/sanity/lib/client'
// import { writeClient } from '@/sanity/lib/write-client'
// import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
// import Ping from './Ping'

// const View = ({ id }: { id: string }) => {
//   const [views, setViews] = useState<number | null>(null)

//   useEffect(() => {
//     const fetchAndUpdateViews = async () => {
//       try {
//         const data = await client
//           .withConfig({ useCdn: false })
//           .fetch(STARTUP_VIEWS_QUERY, { id })

//         const currentViews = data?.views || 0
//         setViews(currentViews)

//         // Increment and save new view count
//         await writeClient
//           .patch(id)
//           .set({ views: currentViews + 1 })
//           .commit()
//       } catch (error) {
//         console.error('Error fetching or updating views:', error)
//       }
//     }

//     fetchAndUpdateViews()
//   }, [id])

//   return (
//     <div className="view-container relative">
//       <div className="absolute -top-2 -right-2">
//         <Ping />
//       </div>

//       <p className="view-text">
//         <span className="font-black">
//           Views: {views !== null ? views : '...'}
//         </span>
//       </p>
//     </div>
//   )
// }

// export default View

'use client'

import { useEffect, useState } from 'react';

interface ViewProps {
  id: string;
  initialViews: number;
}

export default function View({ id, initialViews }: ViewProps) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    const updateViews = async () => {
      try {
        const res = await fetch('/api/increment-views', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, currentViews: initialViews }),
        });

        if (!res.ok) throw new Error('Failed to update views');

        const data = await res.json();
        if (data?.success) setViews(prev => prev + 1);
      } catch (err) {
        console.error(err);
      }
    };

    updateViews();
  }, [id, initialViews]);

  return (
    <p className="fixed bottom-3 right-3 bg-zinc-900 text-white px-4 py-2 rounded-lg z-50">
      {views} views
    </p>
  );
}
