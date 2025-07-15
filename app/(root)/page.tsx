import Image from "next/image";
import SearchForm from "@/componets/SearchForm";
import { auth } from "@/auth";
import StartupCard, { StartupTypeCard } from "@/componets/StartupCard";
 import { STARTUPS_QUERY } from "@/sanity/lib/queries";
 import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams, }: {
  searchParams: Promise<{ query?: string }>;}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const session = await auth();
  // console.log(session?.id);
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  //  const posts = await client.fetch(STARTUPS_QUERY)
   console.log(JSON.stringify(posts , null , 2))
  return (
    <>
      <section
        className="w-full bg-[#5f364e] min-h-[530px]  flex justify-center items-center flex-col py-10 px-6"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%)",
          backgroundSize: "5% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
      >
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words;">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />

      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="text-30-semibold text-black">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="text-black-100 text-sm font-normal">No startups found</p>
          )}
        </ul>

      </section>

      <SanityLive/>


    </>
  );
}
