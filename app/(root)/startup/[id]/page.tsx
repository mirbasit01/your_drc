import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import { auth } from '@/auth';
import { formatDate } from '@/lib/utils';
import { Link } from 'lucide-react';


export const experimental_app = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
      const id = (await params).id;
      const session = await auth();
      const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });
      console.log(post, 'usersss')
      if (!post) return notFound()



      return (
            <>


                  {/* <section className="w-full bg-pink-300 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <div className="w-80 px-6 pb-6 pt-20 flex flex-col justify-center items-center bg-[#5f364e] border-[5px] border-black shadow-100 rounded-[30px] relative z-0 h-fit max-lg:w-full">
          <div className="w-11/12 bg-white border-[5px] border-black rounded-[20px] px-5 py-3 absolute -top-9 after:absolute after:content-[''] after:-top-1 after:right-0 after:-skew-y-6 after:bg-black after:-z-[1] after:rounded-[20px] after:w-full after:h-[60px] before:absolute before:content-[''] before:-bottom-1 before:left-0  before:-skew-y-6 before:w-full before:h-[60px] before:bg-black  before:-z-[1] before:rounded-[20px] shadow-100">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>

          <Image
            src={user.image}
            alt={user.name}
            width={220}
            height={220}
            className="rounded-full object-cover border-[3px] border-black"
          />

          <p className="text-30-extrabold mt-7 text-center">
            @{user?.author?.username}
          </p>
          <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.id === id ? "Your" : "All"} Startups
          </p>
          <ul className="grid sm:grid-cols-2 gap-5">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} />
            </Suspense>
          </ul>
        </div>
      </section> */}
                  <section className="w-full bg-pink-300 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
                        <p className={`bg-amber-600 px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative 
  before:content-[''] before:absolute before:top-2 before:left-2 
  before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent 
  after:content-[''] after:absolute after:bottom-2 after:right-2 
  after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent`}>
                              {formatDate(post?._createdAt)}
                        </p>

                        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
                              {post.title}
                        </h1>

                        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
                              {post.description}
                        </p>

                        {/* <SearchForm query={query} /> */}
                  </section>

                  <section className="px-6 py-10 max-w-7xl mx-auto;">

                        <img src={post.image} alt="thamnal" className='w-full h-auto rounded-xl' />

                        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                              <div className='flex-between gap-5'>
                                    <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                                          <Image src={post.author.image} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg' />

                                    </Link>

                              </div>

                        </div>

                  </section>


            </>
      )

}


export default Page;