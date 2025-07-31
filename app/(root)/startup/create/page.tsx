 import { auth } from "@/auth";
import BackButton from "@/componets/BackButton";
import { LavaLamp } from "@/componets/fluid-blob";
 import StartupForm from "@/componets/StartupForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
    <LavaLamp/>
    
       <section
  className="w-full min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6 mt-[160px]"
  // style={{
  //   backgroundImage:
  //     "linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%)",
  //   backgroundSize: "5% 100%",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "repeat-x",
  // }}
>
  <h1 className="text-[36px] sm:text-[48px] md:text-[54px] font-bold tracking-tight mix-blend-exclusion text-white text-center">
    Submit Your Startup
  </h1>
</section>

 

      <StartupForm />
    </>
  );
};

export default Page;