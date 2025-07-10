  
 import Navbar from "@/app/componets/Navbar" 
export default function Latout({ children} : Readonly <{ children : React.ReactNode}>) {
    return(
        <main className="font-work-sans">

            <Navbar/>
            {children}


        </main>
    )
}