import Image from "next/image";
 import SearchForm from "@/componets/SearchForm";
export default function Home() {
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

        <SearchForm />

     </section>
     </>
  );
}
