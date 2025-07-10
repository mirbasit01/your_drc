// 'use client';

// import { signIn, signOut } from "next-auth/react";
// import Link from "next/link";
// import { BadgePlus, LogOut } from "lucide-react";
// // import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

// const NavbarClient = ({ session }: { session: any }) => {
//   return (
//     <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
//       <nav className="flex justify-between items-center">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" width={144} height={30} />
//         </Link>

//         <div className="flex items-center gap-5 text-black">
//           {session?.user ? (
//             <>
//               <Link href="/startup/create">
//                 <span className="max-sm:hidden">Create</span>
//                 <BadgePlus className="size-6 sm:hidden" />
//               </Link>

//               <button onClick={() => signOut()}>
//                 <span className="max-sm:hidden">Logout</span>
//                 <LogOut className="size-6 sm:hidden text-red-500" />
//               </button>

//               <Link href={`/user/${session.id}`}>
//                 {/* <Avatar className="size-10">
//                   <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
//                   <AvatarFallback>{session.user.name?.[0]?.toUpperCase() || 'AV'}</AvatarFallback>
//                 </Avatar> */}
//               </Link>
//             </>
//           ) : (
//             <button onClick={() => signIn("github")}>
//               Login
//             </button>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default NavbarClient;
