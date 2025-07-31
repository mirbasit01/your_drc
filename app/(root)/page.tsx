// import Image from "next/image";
// import SearchForm from "@/componets/SearchForm";
// import { auth } from "@/auth";
// import StartupCard, { StartupTypeCard } from "@/componets/StartupCard";
//  import { STARTUPS_QUERY } from "@/sanity/lib/queries";
// //  import { sanityFetch, SanityLive } from "@/sanity/lib/live";
// import { client } from "@/sanity/lib/client";

// export default async function Home({ searchParams, }: {
//   // searchParams: Promise<{ query?: string }>
//     searchParams: Promise<{ query?: string }>;

//   }) {
//   const session = await auth();
//   console.log(searchParams , 'searchParams')
//   console.log(session?.id , 'idddddddddddddd');
//     const { query = null } = await searchParams;
//     console.log(query, 'queryyyyyyyyyyyyyyyyyyyyyy');
// const params = query ? { search: query } : { search: null };

// const data = await client.fetch(STARTUPS_QUERY, params);

//     console.log(JSON.stringify(data , null , 2))
//   return (
//     <>
//       <section
//         className="w-full bg-[#5f364e] min-h-[530px]  flex justify-center items-center flex-col py-10 px-6"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%)",
//           backgroundSize: "5% 100%",
//           backgroundPosition: "center",
//           backgroundRepeat: "repeat-x",
//         }}
//       >
//         <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
//           Pitch Your Startup, <br />
//           Connect With Entrepreneurs
//         </h1>
//         <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words;">
//           Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
//           Competitions.
//         </p>

//         <SearchForm query={query ?? undefined} />

//       </section>
//       <section className="px-6 py-10 max-w-7xl mx-auto">
//         <p className="text-30-semibold text-black">
//           {query ? `Search results for "${query}"` : "All Startups"}
//         </p>

//         <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
//           {data?.length > 0 ? (
//             data.map((post: StartupTypeCard) => (
//               <StartupCard key={post?._id} post={post} />
//             ))
//           ) : (
//             <p className="text-black-100 text-sm font-normal">No startups found</p>
//           )}
//         </ul>

//       </section>

//       {/* <SanityLive/> */}


//     </>
//   );
// }

import SearchForm from "@/componets/SearchForm";
import { auth } from "@/auth";
import StartupCard, { StartupTypeCard } from "@/componets/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import LavaLampWrapper from "@/componets/ui/LavaLampWrapper"; // ✅ This is the client component
import { useEffect, useState } from 'react';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>;
}) {
  const session = await auth();
  const { query = null } = await searchParams;
  const params = query ? { search: query } : { search: null };
  const data = await client.fetch(STARTUPS_QUERY, params);

  return (
    <div className="min-h-[530px] w-full flex flex-col justify-center items-center relative">
      <div className="relative w-full min-h-screen overflow-hidden">
        <LavaLampWrapper />

        {/* <section
        className="w-full min-h-[530px] flex justify-center items-center flex-col py-10 px-6 relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%)",
          backgroundSize: "5% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
      >
        <h1 className="uppercase px-6 py-3 font-work-sans font-extrabold text-black sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 mix-blend-exclusion">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="font-medium text-[20px] text-black max-w-2xl text-center break-words mix-blend-exclusion">
        <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed mt-1">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query ?? undefined} />
      </section> */}

        <section
          className="w-full min-h-[530px] flex justify-center items-center flex-col py-10 px-6 relative"
        >
          <h1
            className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mix-blend-exclusion text-white text-center leading-tight"
          >
            Pitch Your Startup, <br className="hidden sm:block" />
            Connect With Entrepreneurs
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed mt-3"
          >
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>

          <SearchForm query={query ?? undefined} />
        </section>

        <section className="px-6 py-10 max-w-7xl mx-auto relative z-10">
          {/* <p className="relative z-10 border text-foreground text-base py-2 px-5 rounded-[20px]
        bg-gradient-to-b from-background/90 to-muted/90 border-border/40
        dark:from-background dark:to-muted dark:border-border">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p> */}
          <p className="w-fit relative z-10 border text-foreground text-base py-2 px-5 rounded-[20px]
  bg-gradient-to-b from-background/90 to-muted/90 border-border/40
  dark:from-background dark:to-muted dark:border-border font-bold">
            {query ? `Search results for "${query}"` : "All Startups"}
          </p>


          <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {data?.length > 0 ? (
              data.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="text-black text-sm font-normal">No startups found</p>
            )}
          </ul>
        </section>
      </div>
    </div>

  );
}
