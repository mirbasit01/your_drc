
import { client } from '@/sanity/lib/client';
import { PLAYLIST_BY_SLUG_QUERY, STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'
import Image from 'next/image';
import { auth } from '@/auth';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import markdownit from 'markdown-it'
import { Skeleton } from '@/componets/ui/skeleton';
import View from '@/componets/View';
import StartupCard, { StartupTypeCard } from '@/componets/StartupCard';
import LavaLampWrapper from "@/componets/ui/LavaLampWrapper"; // ✅ This is the client component
import BackButton from '@/componets/BackButton';

const md = markdownit()


export const experimental_app = true;

// const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
const Page = async ({ params }: { params: { id: string } }) => {

      const id = (await params).id;
      const session = await auth();


      const [post, playlist] = await Promise.all([
            client.fetch(STARTUPS_BY_ID_QUERY, { id }),
            client.fetch(PLAYLIST_BY_SLUG_QUERY, { slug: "editor-picks-new" }),
      ]);

      const editorPosts = playlist?.select || []; // ✅ safely access select

      const parsedContent = md.render(post?.pitch || '');
      if (!post) return notFound()



      return (
            <>

                  <div className="min-h-[530px] w-full flex flex-col justify-center items-center relative">
                        <LavaLampWrapper />





                        <section className="w-full  min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
                              <BackButton />
                              <p className={`font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap px-6 py-3 font-work-sans  rounded-sm uppercase relative 
  before:content-[''] before:absolute before:top-2 before:left-2 
  before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent 
  after:content-[''] after:absolute after:bottom-2 after:right-2 
  after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent`}>
                                    {formatDate(post?._createdAt)}
                              </p>

                              {/* <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5"> */}
                              <h1 className="text-[36px] font-bold tracking-tight mix-blend-exclusion text-white">

                                    {post.title}
                              </h1>

                              {/* <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words"> */}
                              <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed mt-1">

                                    {post.description}
                              </p>

                              {/* <SearchForm query={query} /> */}
                        </section>

                  </div>

                  {/* <section className="px-6 py-10 max-w-7xl mx-auto">

                        <img src={post.image} alt="thamnal" className='w-full h-auto rounded-xl' />

                        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                              <div className='flex justify-between items-center gap-5'>
                                    <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                                          <Image src={post.author.image} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg' />
                                          <div>
                                                <p className='font-medium text-[20px] text-black'>{post.author.name} </p>
                                                <p className='font-medium text-[16px] text-black'>@{post.author.username} </p>

                                          </div>
                                    </Link>

                                     <p className='
                                    relative z-10 border text-foreground text-center text-base py-2 px-5 rounded-[20px]",
        "bg-gradient-to-b from-background/90 to-muted/90 border-border/40",
        "dark:from-background dark:to-muted dark:border-border'
                                          style={{
                                                background: `radial-gradient(circle, hsl(var(--foreground)), transparent 10%)`,
                                                animationDuration: "6s",
                                          }}>
                                          {post.category}
                                    </p>
                              </div>
                              <h3 className='text-[30px] font-bold text-black'>Pitch Details</h3>
                              {parsedContent ? (
                                    <article
                                          style={{
                                                color: '#000',
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                fontFamily: 'sans-serif',
                                          }}
                                          dangerouslySetInnerHTML={{ __html: parsedContent }}

                                    />
                              ) : (
                                    <p className='text-black text-sm font-normal'>
                                          No Details Provided
                                    </p>
                              )}

                        </div>

                        <hr className='border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto' />

                        {editorPosts?.length > 0 && (
                              <div className='max-w-4xl mx-auto' >
                                    <p className='text-30-semibold'>
                                          Editor Picks

                                    </p>
                                    <ul className='mt-7 card_grid-sm'>
                                          {editorPosts.map((post: StartupTypeCard, i: number) => (
                                                <StartupCard key={i} post={post} />
                                          ))}
                                    </ul>


                              </div>
                        )}

                        <Suspense fallback={<Skeleton className='bg-red-500 h-10 w-24 rounded-lg fixed bottom-3 right-3' />}>

                              <View id={id} initialViews={post?.views || 0} />
                        </Suspense>

                  </section> */}
<section className="px-6 py-10 max-w-7xl mx-auto">
  {/* Thumbnail Image */}
  <img src={post.image} alt="thumbnail" className="w-full h-auto rounded-xl" />

  {/* Post Content */}
  <div className="space-y-5 mt-10 max-w-4xl mx-auto">
    {/* Author + Category */}
    <div className="flex justify-between items-center flex-wrap gap-5">
      <Link href={`/user/${post.author?._id}`} className="flex gap-3 items-center">
        <Image
          src={post.author.image}
          alt="avatar"
          width={64}
          height={64}
          className="rounded-full drop-shadow-lg"
        />
        <div>
          <p className="font-medium text-lg text-black">{post.author.name}</p>
          <p className="font-medium text-sm text-gray-600">@{post.author.username}</p>
        </div>
      </Link>

      {/* Category Pill */}
      <p
        className="relative z-10 border text-foreground text-sm sm:text-base text-center py-2 px-5 rounded-[20px]
        bg-gradient-to-b from-background/90 to-muted/90 border-border/40
        dark:from-background dark:to-muted dark:border-border w-fit"
        style={{
          background: `radial-gradient(circle, hsl(var(--foreground)), transparent 10%)`,
          animationDuration: "6s",
        }}
      >
        {post.category}
      </p>
    </div>

    {/* Post Heading */}
    <h3 className="text-[30px] font-bold text-black">Pitch Details</h3>

    {/* Post Description */}
    {parsedContent ? (
      <article
        style={{
          color: "#000",
          fontSize: "16px",
          lineHeight: "1.6",
          fontFamily: "sans-serif",
        }}
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
    ) : (
      <p className="text-black text-sm font-normal">No Details Provided</p>
    )}
  </div>

  {/* Divider */}
  <hr className="border-dotted border-gray-300 max-w-4xl my-10 mx-auto" />

  {/* Editor Picks */}
  {editorPosts?.length > 0 && (
    <div className="max-w-4xl mx-auto">
      <p className="text-2xl font-semibold text-black">Editor Picks</p>
      <ul className="mt-7 grid gap-5 md:grid-cols-2">
        {editorPosts.map((post: StartupTypeCard, i: number) => (
          <StartupCard key={i} post={post} />
        ))}
      </ul>
    </div>
  )}

  {/* View Counter */}
  <Suspense fallback={<Skeleton className="bg-red-500 h-10 w-24 rounded-lg fixed bottom-3 right-3" />}>
    <View id={id} initialViews={post?.views || 0} />
  </Suspense>
</section>


            </>
      )

}


export default Page;