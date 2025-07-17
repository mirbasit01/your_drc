 import { auth } from "@/auth";
import StartupForm from "@/componets/StartupForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="w-full  bg-[#5f364e] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6;" 
       style={{
          backgroundImage:
            "linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%)",
          backgroundSize: "5% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}>
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Page;