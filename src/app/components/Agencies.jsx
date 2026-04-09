// import React from 'react'
// import { Quote } from 'lucide-react';
// import Image from 'next/image';

// export default function Agencies() {
//     return (
//         <>
//             <div className=''>
//                 <div className=''>
//                     <div className='flex justify-center mt-[100px]'>
//                         <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[220px] py-2 px-3 text-center' >
//                             <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
//                             <p className='text-black'>What Our Clients Say</p>
//                         </div>
//                     </div>
//                     <div className='flex justify-center mt-[16px]'>
//                         <h1 className='text-black font-bold text-3xl'>Trusted by Growing Brands & Agencies</h1>
//                     </div>
//                 </div>
//                 {/* Card Section */}
//                 <div className='flex flex-wrap gap-5 p-5 justify-center mx-40'>
//                     {/* Card 1 */}
//                     <div className="w-[628px] h-[243px] bg-[#F5F5F5] p-6 rounded-[32px] flex flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0">

//                         {/* Left Side: Video Thumbnail Section */}
//                         {/* হাইট ফিক্সড থাকায় এখানে w-full এর বদলে নির্দিষ্ট উইডথ এবং ফুল হাইট ব্যবহার করা হয়েছে */}
//                         <div className="relative w-[230px] h-full rounded-2xl overflow-hidden shadow-md shrink-0">
//                             <Image
//                                 src="/image 47.png"
//                                 alt="David R."
//                                 fill
//                                 className="object-cover"
//                             />

//                             {/* Play Button Overlay */}
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <button className="group relative flex items-center justify-center">
//                                     {/* White Outer Circle with Blur */}
//                                     <div className="absolute w-12 h-12 bg-white/30 backdrop-blur-md rounded-full group-hover:scale-110 transition-transform duration-300"></div>
//                                     {/* White Inner Circle */}
//                                     <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl">
//                                         {/* Blue Play Arrow */}
//                                         <svg
//                                             viewBox="0 0 24 24"
//                                             className="w-4 h-4 text-blue-600 fill-current translate-x-0.5"
//                                         >
//                                             <path d="M8 5v14l11-7z" />
//                                         </svg>
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Right Side: Content Section */}
//                         <div className="flex-1 relative flex flex-col justify-center h-full overflow-hidden">

//                             {/* Floating Quote Icon - আপনার কাস্টম SVG আইকন অনুযায়ী */}
//                             <div className="absolute top-0 right-2 opacity-20">
//                                 <div
//                                     className='bg-center bg-no-repeat w-12 h-12 grayscale'
//                                     style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}
//                                 ></div>
//                             </div>

//                             <div className="mb-3">
//                                 <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
//                                     David R.
//                                 </h3>
//                                 <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
//                                     E-commerce Brand Owner
//                                 </p>
//                             </div>

//                             <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
//                                 “After months of ad account issues, switching here made everything smooth.
//                                 Stable accounts, quick support, and real results.”
//                             </blockquote>
//                         </div>
//                     </div>
//                     {/* Card 2 */}
//                     <div className="w-[628px] h-[243px] bg-[#F7F7F7] p-6 rounded-[32px] flex flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0">

//                         {/* Left Side: Video Thumbnail Section */}
//                         {/* হাইট ফিক্সড থাকায় এখানে w-full এর বদলে নির্দিষ্ট উইডথ এবং ফুল হাইট ব্যবহার করা হয়েছে */}
//                         <div className="relative w-[230px] h-full rounded-2xl overflow-hidden shadow-md shrink-0">
//                             <Image
//                                 src="/image 48.png"
//                                 alt="David R."
//                                 fill
//                                 className="object-cover"
//                             />

//                             {/* Play Button Overlay */}
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <button className="group relative flex items-center justify-center">
//                                     {/* White Outer Circle with Blur */}
//                                     <div className="absolute w-12 h-12 bg-white/30 backdrop-blur-md rounded-full group-hover:scale-110 transition-transform duration-300"></div>
//                                     {/* White Inner Circle */}
//                                     <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl">
//                                         {/* Blue Play Arrow */}
//                                         <svg
//                                             viewBox="0 0 24 24"
//                                             className="w-4 h-4 text-blue-600 fill-current translate-x-0.5"
//                                         >
//                                             <path d="M8 5v14l11-7z" />
//                                         </svg>
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Right Side: Content Section */}
//                         <div className="flex-1 relative flex flex-col justify-center h-full overflow-hidden">

//                             {/* Floating Quote Icon - আপনার কাস্টম SVG আইকন অনুযায়ী */}
//                             <div className="absolute top-0 right-2 opacity-20">
//                                 <div
//                                     className='bg-center bg-no-repeat w-12 h-12 grayscale'
//                                     style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}
//                                 ></div>
//                             </div>

//                             <div className="mb-3">
//                                 <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
//                                     Sarah M.
//                                 </h3>
//                                 <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
//                                     Performance Marketing Manager
//                                 </p>
//                             </div>

//                             <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
//                                 “The setup was incredibly easy, and the support team helped  us scale campaigns without
//                                 worrying about restrictions or
//                                 downtime.”
//                             </blockquote>
//                         </div>
//                     </div>
//                     {/* Card 3*/}
//                     <div className="w-[302px] h-[243px] bg-[#F5F5F5] p-6 rounded-[32px] flex flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0">

//                         {/* Right Side: Content Section */}
//                         <div className="flex-1 relative flex flex-col justify-center h-full overflow-hidden">

//                             {/* Floating Quote Icon - আপনার কাস্টম SVG আইকন অনুযায়ী */}
//                             <div className="absolute top-0 right-2 opacity-20">
//                                 <div
//                                     className='bg-center bg-no-repeat w-12 h-12 grayscale'
//                                     style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}
//                                 ></div>
//                             </div>

//                             <div className="mb-3">
//                                 <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
//                                     James L.
//                                 </h3>
//                                 <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
//                                     Founder, Digital Agency
//                                 </p>
//                             </div>

//                             <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
//                                 “This platform allowed us to manage multiple clients efficiently. Reliable infrastructure and great service — highly recommended.”
//                             </blockquote>
//                         </div>
//                     </div>
//                     {/* Card 4 */}
//                     <div className="w-[628px] h-[243px] bg-[#F7F7F7] p-6 rounded-[32px] flex flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0">

//                         {/* Left Side: Video Thumbnail Section */}
//                         {/* হাইট ফিক্সড থাকায় এখানে w-full এর বদলে নির্দিষ্ট উইডথ এবং ফুল হাইট ব্যবহার করা হয়েছে */}
//                         <div className="relative w-[230px] h-full rounded-2xl overflow-hidden shadow-md shrink-0">
//                             <Image
//                                 src="/image 49.png"
//                                 alt="David R."
//                                 fill
//                                 className="object-cover"
//                             />

//                             {/* Play Button Overlay */}
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <button className="group relative flex items-center justify-center">
//                                     {/* White Outer Circle with Blur */}
//                                     <div className="absolute w-12 h-12 bg-white/30 backdrop-blur-md rounded-full group-hover:scale-110 transition-transform duration-300"></div>
//                                     {/* White Inner Circle */}
//                                     <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl">
//                                         {/* Blue Play Arrow */}
//                                         <svg
//                                             viewBox="0 0 24 24"
//                                             className="w-4 h-4 text-blue-600 fill-current translate-x-0.5"
//                                         >
//                                             <path d="M8 5v14l11-7z" />
//                                         </svg>
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Right Side: Content Section */}
//                         <div className="flex-1 relative flex flex-col justify-center h-full overflow-hidden">

//                             {/* Floating Quote Icon - আপনার কাস্টম SVG আইকন অনুযায়ী */}
//                             <div className="absolute top-0 right-2 opacity-20">
//                                 <div
//                                     className='bg-center bg-no-repeat w-12 h-12 grayscale'
//                                     style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}
//                                 ></div>
//                             </div>

//                             <div className="mb-3">
//                                 <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
//                                     Michael T.
//                                 </h3>
//                                 <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
//                                     Growth Marketing Lead
//                                 </p>
//                             </div>

//                             <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
//                                 “After testing various platforms, this one truly excels in stability and support. Our ad performance has improved, and operational issues have significantly decreased.”
//                             </blockquote>
//                         </div>
//                     </div>
//                     {/* Card 5 */}
//                     <div className="w-[302px] h-[243px] bg-[#F5F5F5] p-6 rounded-[32px] flex flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0">


//                         {/* Right Side: Content Section */}
//                         <div className="flex-1 relative flex flex-col justify-center h-full overflow-hidden">

//                             {/* Floating Quote Icon - আপনার কাস্টম SVG আইকন অনুযায়ী */}
//                             <div className="absolute top-0 right-2 opacity-20">
//                                 <div
//                                     className='bg-center bg-no-repeat w-12 h-12 grayscale'
//                                     style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}
//                                 ></div>
//                             </div>

//                             <div className="mb-3">
//                                 <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
//                                     Aisha K.
//                                 </h3>
//                                 <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
//                                     E-commerce Brand Owner
//                                 </p>
//                             </div>

//                             <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
//                                 “Everything works smoothly, from funding to campaign performance. It’s now a core
//                                 part of our advertising
//                                 workflow.”
//                             </blockquote>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


import React from 'react'
import { Quote } from 'lucide-react';
import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Agencies() {
    return (
        <>
            <div className='px-4 pb-20 overflow-hidden'>
                <div className=''>
                    <div className='flex justify-center mt-10 md:mt-[100px]' data-aos="fade-up" data-aos-delay="700">
                        <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[220px] py-2 px-3 text-center' >
                            <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
                            <p className='text-black'>What Our Clients Say</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[16px] text-center' data-aos="fade-up" data-aos-delay="700">
                        <h1 className='text-black font-bold text-3xl'>Trusted by Growing Brands & Agencies</h1>
                    </div>
                </div>

                {/* Card Section - ডেস্কটপে আপনার অরিজিনাল লুকের জন্য mx-auto ও max-w ব্যবহার করেছি */}
                <div className='flex flex-wrap gap-5 p-5 justify-center max-w-[1350px] mx-auto mt-10'>

                    {/* Card 1 - আপনার অরিজিনাল কোড */}
                    <div className="w-full md:w-[628px] min-h-[243px] bg-[#F5F5F5] p-6 rounded-[32px] flex flex-col md:flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0" data-aos="fade-up" data-aos-delay="400">
                        <div className="relative w-full md:w-[230px] h-[200px] md:h-full rounded-2xl overflow-hidden shadow-md shrink-0">
                            <Image src="/image 47.png" alt="David R." fill className="object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="group relative flex items-center justify-center">
                                    <div className="absolute w-12 h-12 bg-white/30 backdrop-blur-md rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                    <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600 fill-current translate-x-0.5"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col justify-center h-full">
                            <div className="absolute top-0 right-2 opacity-20">
                                <div className='bg-center bg-no-repeat w-12 h-12 grayscale' style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}></div>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-[22px] font-bold text-gray-900 leading-tight">David R.</h3>
                                <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">E-commerce Brand Owner</p>
                            </div>
                            <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
                                “After months of ad account issues, switching here made everything smooth. Stable accounts, quick support, and real results.”
                            </blockquote>
                        </div>
                    </div>

                    {/* Card 2 - আপনার অরিজিনাল কোড */}
                    <div className="w-full md:w-[628px] min-h-[243px] bg-[#F7F7F7] p-6 rounded-[32px] flex flex-col md:flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0" data-aos="fade-up" data-aos-delay="500">
                        <div className="relative w-full md:w-[230px] h-[200px] md:h-full rounded-2xl overflow-hidden shadow-md shrink-0">
                            <Image src="/image 48.png" alt="Sarah M." fill className="object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="group relative flex items-center justify-center">
                                    <div className="absolute w-12 h-12 bg-white/30 backdrop-blur-md rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                    <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600 fill-current translate-x-0.5"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col justify-center h-full">
                            <div className="absolute top-0 right-2 opacity-20">
                                <div className='bg-center bg-no-repeat w-12 h-12 grayscale' style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}></div>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-[22px] font-bold text-gray-900 leading-tight">Sarah M.</h3>
                                <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">Performance Marketing Manager</p>
                            </div>
                            <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
                                “The setup was incredibly easy, and the support team helped us scale campaigns without worrying about restrictions or downtime.”
                            </blockquote>
                        </div>
                    </div>

                    {/* Card 3 - আপনার অরিজিনাল কোড */}
                    <div className="w-full md:w-[302px] min-h-[243px] bg-[#F5F5F5] p-6 rounded-[32px] flex flex-col md:flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0" data-aos="fade-up" data-aos-delay="600">
                        <div className="flex-1 relative flex flex-col justify-center h-full">
                            <div className="absolute top-0 right-2 opacity-20">
                                <div className='bg-center bg-no-repeat w-12 h-12 grayscale' style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}></div>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-[22px] font-bold text-gray-900 leading-tight">James L.</h3>
                                <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">Founder, Digital Agency</p>
                            </div>
                            <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
                                “This platform allowed us to manage multiple clients efficiently. Reliable infrastructure and great service — highly recommended.”
                            </blockquote>
                        </div>
                    </div>

                    {/* Card 4 - আপনার অরিজিনাল কোড */}
                    <div className="w-full md:w-[628px] min-h-[243px] bg-[#F7F7F7] p-6 rounded-[32px] flex flex-col md:flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0" data-aos="fade-up" data-aos-delay="700">
                        <div className="relative w-full md:w-[230px] h-[200px] md:h-full rounded-2xl overflow-hidden shadow-md shrink-0">
                            <Image src="/image 49.png" alt="Michael T." fill className="object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="group relative flex items-center justify-center">
                                    <div className="absolute w-12 h-12 bg-white/30 backdrop-blur-md rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                    <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600 fill-current translate-x-0.5"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col justify-center h-full">
                            <div className="absolute top-0 right-2 opacity-20">
                                <div className='bg-center bg-no-repeat w-12 h-12 grayscale' style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}></div>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-[22px] font-bold text-gray-900 leading-tight">Michael T.</h3>
                                <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">Growth Marketing Lead</p>
                            </div>
                            <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
                                “After testing various platforms, this one truly excels in stability and support. Our ad performance has improved, and operational issues have significantly decreased.”
                            </blockquote>
                        </div>
                    </div>

                    {/* Card 5 - আপনার অরিজিনাল কোড */}
                    <div className="w-full md:w-[302px] min-h-[243px] bg-[#F5F5F5] p-6 rounded-[32px] flex flex-col md:flex-row gap-6 items-center font-sans border border-gray-100 shadow-sm overflow-hidden shrink-0" data-aos="fade-up" data-aos-delay="800">
                        <div className="flex-1 relative flex flex-col justify-center h-full">
                            <div className="absolute top-0 right-2 opacity-20">
                                <div className='bg-center bg-no-repeat w-12 h-12 grayscale' style={{ backgroundImage: `url("/iconmonstr-quote-3 (1) 1.svg")`, backgroundSize: 'contain' }}></div>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-[22px] font-bold text-gray-900 leading-tight">Aisha K.</h3>
                                <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">E-commerce Brand Owner</p>
                            </div>
                            <blockquote className="text-gray-700 text-[15px] leading-[1.4] font-medium">
                                “Everything works smoothly, from funding to campaign performance. It’s now a core part of our advertising workflow.”
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}