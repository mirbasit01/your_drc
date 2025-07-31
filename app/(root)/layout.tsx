  
 import Navbar from "@/componets/Navbar" 
 import LavaLampWrapper from "@/componets/ui/LavaLampWrapper"; // ✅ This is the client component
 export default function Latout({ children} : Readonly <{ children : React.ReactNode}>) {
    return(
        <>
        {/* <div className="relative w-full min-h-screen overflow-hidden"> */}
  {/* <LavaLampWrapper /> */}
         <main className="font-work-sans">
            <Navbar/>
            {children}
        </main>
        {/* </div> */}
      
        </> 
       
    )
}