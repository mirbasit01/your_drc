// // import { auth } from '@/auth'
// // import { signIn } from 'next-auth/react'
// // import Link from 'next/link'
// // import React from 'react'

// // const Navbar = async () => {

// //     const section = await auth()
// //     return (
// //         <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
// //             <nav className='flex  justify-between  items-center'>
// //                 <Link href="/">
// //                     <img src="/logo.png" alt="logo.png" width={144} height={30} />
// //                 </Link>

// //                 <div className='flex items-center gap-5 text-black'>
// //                     {section && section?.user ? (
// //                         <>
// //                             <Link href='statup/creata'>
// //                                 <span>
// //                                     Create
// //                                 </span>
// //                             </Link>
// //                             <button onClick={signout}>
// //                                 <span>Logout</span>
// //                             </button>

// //                             <Link href={`/user/${section?.id}`}>
// //                                 <span>
// //                                     {section?.user?.name}
// //                                 </span>
// //                             </Link>

// //                         </>
// //                     ) : (
// //                         // <form
// //                         //     action={async () => {
// //                         //         "use server";

// //                         //         await signIn("github");
// //                         //     }}
// //                         // >
// //                         //     <button type="submit">Login</button>
// //                         // </form>
// //                         <form
// //               action={async () => {
// //                 "use server";

// //                 await signIn("github");
// //               }}
// //             >
// //               <button type="submit">Login</button>
// //             </form>
// //                     )}

// //                 </div>

// //             </nav>
// //         </header >
// //     )
// // }
// // export default Navbar;

 
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { auth, signOut } from "@/auth"; // ✅ only import server-side functions here
// // // import { BadgePlus, LogOut } from "lucide-react";
// // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// // // const Navbar = async () => {
// // //   const session = await auth();

// // //   return (
// // //     <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
// // //       <nav className="flex justify-between items-center">
// // //         <Link href="/">
// // //           <Image src="/logo.png" alt="logo" width={144} height={30} />
// // //         </Link>

// // //         <div className="flex items-center gap-5 text-black">
// // //           {session?.user ? (
// // //             <>
// // //               <Link href="/startup/create">
// // //                 <span className="max-sm:hidden">Create</span>
// // //                 <BadgePlus className="size-6 sm:hidden" />
// // //               </Link>

// // //               {/* ✅ logout as a server action is OK */}
// // //               <form
// // //                 action={async () => {
// // //                   "use server";
// // //                   await signOut({ redirectTo: "/" });
// // //                 }}
// // //               >
// // //                 <button type="submit">
// // //                   <span className="max-sm:hidden">Logout</span>
// // //                   <LogOut className="size-6 sm:hidden text-red-500" />
// // //                 </button>
// // //               </form>

// // //               <Link href={`/user/${session?.id}`}>
// // //                 <Avatar className="size-10">
// // //                   <AvatarImage
// // //                     src={session?.user?.image || ""}
// // //                     alt={session?.user?.name || ""}
// // //                   />
// // //                   <AvatarFallback>AV</AvatarFallback>
// // //                 </Avatar>
// // //               </Link>
// // //             </>
// // //           ) : (
// // //             <>
// // //               {/* ✅ Login handled with redirect via JS - works inside server component */}
// // //               <form>
// // //                 <button
// // //                   type="submit"
// // //                   onClick={(e) => {
// // //                     e.preventDefault();
// // //                     window.location.href = "/api/auth/signin/github";
// // //                   }}
// // //                 >
// // //                   Login
// // //                 </button>
// // //               </form>
// // //             </>
// // //           )}
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;



// // app/componets/Navbar.jsx

// // 1. IMPORT `signIn` AND `signOut` FROM YOUR SERVER-SIDE AUTH CONFIG
// import { auth, signIn, signOut } from '@/auth' // Or wherever your auth config is
// import Link from 'next/link'
// import React from 'react'

// const Navbar = async () => {

//     const session = await auth(); // Renamed to 'session' for clarity, which is the standard convention

//     return (
//         <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
//             <nav className='flex  justify-between  items-center'>
//                 <Link href="/">
//                     <img src="/logo.png" alt="logo.png" width={144} height={30} />
//                 </Link>

//                 <div className='flex items-center gap-5 text-black'>
//                     {session?.user ? (
//                         <>
//                             <Link href='/startup/create'> {/* Corrected your link typo 'creata' -> 'create' */}
//                                 <span>
//                                     Create
//                                 </span>
//                             </Link>

//                             {/* 2. LOGOUT: Use a form with a Server Action */}
//                             <form
//                                 action={async () => {
//                                     "use server";
//                                     await signOut();
//                                 }}
//                             >
//                                 <button type="submit">
//                                     <span>Logout</span>
//                                 </button>
//                             </form>

//                             {/* Assuming you want to link to a user profile page */}
//                             <Link href={`/user/${session.user.id}`}> {/* You'd need to add the user ID to the session callback */}
//                                 <span>
//                                     {session.user.name}
//                                 </span>
//                             </Link>
//                         </>
//                     ) : (
//                         // 3. LOGIN: Your form is now correct because it uses the server-side signIn
//                         <form
//                             action={async () => {
//                                 "use server";
//                                 await signIn("github");
//                             }}
//                         >
//                             <button type="submit">Login</button>
//                         </form>
//                     )}

//                 </div>
//             </nav>
//         </header >
//     )
// }
// export default Navbar;
// Make sure this path is correct! It should point to your auth.ts file.
import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {

    const session = await auth()
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans' style={{ background: 'white' }}>
            <nav className='flex  justify-between  items-center'>
                <Link href="/">
                    <img src="/logo.png" alt="logo.png" width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session?.user ? (
                        <>
                            <Link href='/startup/create'>
                                <span>
                                    Create
                                </span>
                            </Link>

                            {/* LOGOUT FORM */}
                            <form
                                action={async () => {
                                    "use server";
                                    await signOut();
                                }}
                            >
                                <button type="submit">Logout</button>
                            </form>

                            <Link href={`/user/${session.user.id}`}>
                                <span>
                                    {session.user.name}
                                </span>
                            </Link>
                        </>
                    ) : (
                        // LOGIN FORM
                        <form
                            action={async () => {
                                "use server";
                                // This signIn now comes from @/auth and works on the server
                                await signIn("github");
                            }}
                        >
                            <button type="submit">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header >
    )
}
export default Navbar;