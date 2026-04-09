// "use client"
// import React from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function Navbar() {
//     useEffect(() => {
//         AOS.init({
//             duration: 800,  // এনিমেশন সময় (মিলিসেকেন্ডে)
//             easing: 'ease-in-out', // easing প্রপার্টি
//             once: true,  // একবার এনিমেট করবে
//         });
//     }, []);
//     return (
//         <>
//             <nav className=''>
//                 <div className="w-full px-56 py-10 bg-white border-b border-indigo-100 inline-flex justify-center items-center gap-48" data-aos="fade-down" data-aos-delay="500">



//                     <div className='flex' data-aos="fade-down" data-aos-delay="800">
//                         <Image src="/Frame.svg" alt="logo" width={40} height={40} className='' />
//                         <div className="w-44 justify-start text-black text-3xl font-semibold font-['Poppins'] leading-10">MetaDrive</div>
//                     </div>

//                     <div className="p-1.5 bg-stone-50 rounded-[100px] flex gap-1">

//                         <Link href="/" data-aos="fade-down" data-aos-delay="700">
//                             <div className="px-3 py-1.5 bg-blue-600 rounded-full text-white">
//                                 Home
//                             </div>
//                         </Link>

//                         <Link href="/feature" data-aos="fade-down" data-aos-delay="600">
//                             <div className="px-3 py-1.5 text-neutral-800">
//                                 Feature
//                             </div>
//                         </Link>

//                         <Link href="/solutions" data-aos="fade-down" data-aos-delay="500">
//                             <div className="px-3 py-1.5 text-neutral-800">
//                                 Solutions
//                             </div>
//                         </Link>

//                         <Link href="/pricing" data-aos="fade-down" data-aos-delay="400">
//                             <div className="px-3 py-1.5 text-neutral-800">
//                                 Pricing
//                             </div>
//                         </Link>

//                         <Link href="/about" data-aos="fade-down" data-aos-delay="300">
//                             <div className="px-3 py-1.5 text-neutral-800">
//                                 About Us
//                             </div>
//                         </Link>

//                     </div>


//                     <div className="flex gap-[5px]">

//                         <Link href="/signup" data-aos="fade-down" data-aos-delay="500">
//                             <div className="px-6 py-3 rounded-lg flex justify-center items-center cursor-pointer">
//                                 <span className="text-stone-950 text-base">
//                                     Sign Up
//                                 </span>
//                             </div>
//                         </Link>

//                         <Link href="/login" data-aos="fade-down" data-aos-delay="400">
//                             <div className="px-6 py-3 bg-blue-600 hover:bg-blue-700 duration-300 rounded-full flex justify-center items-center cursor-pointer">
//                                 <span className="text-white text-base font-medium">
//                                     Log In
//                                 </span>
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });

        // মেনু ওপেন থাকলে বডি স্ক্রল বন্ধ রাখার জন্য
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav className="bg-white border-b border-indigo-100 sticky top-0 z-[100] w-full">
            {/* Desktop & Main Header Container */}
            <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

                {/* Logo */}
                <div className='flex items-center gap-2' data-aos="fade-down" data-aos-delay="800">
                    <Image src="/Frame.svg" alt="logo" width={40} height={40} />
                    <div className="text-black text-2xl md:text-3xl font-semibold font-['Poppins']">MetaDrive</div>
                </div>

                {/* Desktop Links (Hidden on Mobile) */}
                <div className="hidden lg:flex p-1.5 bg-stone-50 rounded-[100px] gap-1 items-center">
                    <Link href="/"><div className="px-4 py-2 bg-blue-600 rounded-full text-white text-sm">Home</div></Link>
                    <Link href="/feature"><div className="px-4 py-2 text-neutral-800 text-sm hover:text-blue-600 transition">Feature</div></Link>
                    <Link href="/solutions"><div className="px-4 py-2 text-neutral-800 text-sm hover:text-blue-600 transition">Solutions</div></Link>
                    <Link href="/pricing"><div className="px-4 py-2 text-neutral-800 text-sm hover:text-blue-600 transition">Pricing</div></Link>
                    <Link href="/about"><div className="px-4 py-2 text-neutral-800 text-sm hover:text-blue-600 transition">About Us</div></Link>
                </div>

                {/* Desktop Auth (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/signup"><div className="text-stone-950 font-medium">Sign Up</div></Link>
                    <Link href="/login" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white font-medium">Log In</Link>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden z-[110] p-2 text-black"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 bg-white z-[105] flex flex-col p-8 transition-all duration-300 transform ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                <div className="flex flex-col gap-8 mt-20">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-semibold pb-2 text-black">Home</Link>
                    <Link href="/feature" onClick={() => setIsOpen(false)} className="text-xl font-semibold pb-2 text-black">Feature</Link>
                    <Link href="/solutions" onClick={() => setIsOpen(false)} className="text-xl font-semibold pb-2 text-black">Solutions</Link>
                    <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-xl font-semibold pb-2 text-black">Pricing</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-semibold pb-2 text-black">About Us</Link>

                    <div className="flex flex-col gap-4 mt-10">
                        <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full py-4 text-center border-2 border-blue-600 rounded-full font-bold text-blue-600">Sign Up</Link>
                        <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-4 text-center bg-blue-600 text-white rounded-full font-bold">Log In</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}