import Image from "next/image";
import SearchForm from "@/componets/SearchForm";
import { auth } from "@/auth";
import StartupCard, { StartupTypeCard } from "@/componets/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { json } from "stream/consumers";

export default async function Home({ searchParams, }: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  // console.log(session?.id);

  // const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });


   const posts = await client.fetch(STARTUPS_QUERY)

   console.log(JSON.stringify(posts , null , 2))

 
  // const posts = [{
  //   _createdAt: new Date(),
  //   views: '5',
  //   author: { _id: 1, name: 'basit' },
  //   _id: 1,
  //   description: 'this is a description',
  //   image: "https://as2.ftcdn.net/jpg/01/65/58/33/1000_F_165583319_U8ZxvmUjdzo6DI5TwT73gEhSpUC5mbc7.jpg",
  //   category: 'Robots',
  //   title: 'we robots'


  // }]

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
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words; !max-w-3xl">
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
            <p className="no-results">No startups found</p>
          )}
        </ul>

      </section>
    </>
  );
}
