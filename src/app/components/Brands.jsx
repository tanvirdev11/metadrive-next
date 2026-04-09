// "use client"
// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';


// export default function Brands() {
//     return (
//         <>
//             <div className=''>
//                 <div className='flex justify-center'>
//                     <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[85px] py-1 px-2 text-center' data-aos="fade-down" data-aos-delay="800">
//                         <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
//                         <p className='text-black'>Brands</p>
//                     </div>
//                 </div>
//                 <div className='text-center mt-5' data-aos="fade-down" data-aos-delay="700">
//                     <h1 className='text-[#1b1919] text-[18px] font-bold'>Trusted By Exceptional Brands</h1>
//                 </div>
//                 <div className='flex justify-center mt-[33px]'>
//                     <div className=''>
//                         <div className='w-[200px] h-[35px] bg-no-repeat' style={{ backgroundImage: `url('/Meta.svg')` }} data-aos="fade-down" data-aos-delay="600"></div>
//                     </div>
//                     <div className=''>
//                         <div className='w-[200px] h-[40px] bg-no-repeat' style={{ backgroundImage: `url('/Google.svg')` }} data-aos="fade-down" data-aos-delay="500"></div>
//                     </div>
//                     <div className=''>
//                         <div className='w-[200px] h-[40px] bg-no-repeat' style={{ backgroundImage: `url('/Company logo.svg')` }} data-aos="fade-down" data-aos-delay="400"></div>
//                     </div>
//                     <div className=''>
//                         <div className='w-[200px] h-[40px] mt-2 bg-no-repeat' style={{ backgroundImage: `url('/Amazon.svg')` }} data-aos="fade-down" data-aos-delay="400"></div>
//                     </div>
//                     <div className=''>
//                         <div className='w-[200px] h-[35px] bg-no-repeat' style={{ backgroundImage: `url('/Instagram.svg')` }} data-aos="fade-down" data-aos-delay="300"></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


"use client"
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Brands() {
    const logos = [
        { url: '/Meta.svg', w: '200px', h: '35px' },
        { url: '/Google.svg', w: '200px', h: '40px' },
        { url: '/Company logo.svg', w: '200px', h: '40px' },
        { url: '/Amazon.svg', w: '200px', h: '40px' },
        { url: '/Instagram.svg', w: '200px', h: '35px' },
    ];

    return (
        <div className='py-10 overflow-hidden'>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-scroll {
                    display: flex;
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }
                .marquee-container:hover .animate-marquee-scroll {
                    animation-play-state: paused;
                }
            `}} />

            <div className='flex justify-center' data-aos="fade-up" data-aos-delay="800">
                <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[95px] py-1 px-2 text-center'>
                    <div className='w-[20px] h-[20px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
                    <p className='text-black text-sm ml-1'>Brands</p>
                </div>
            </div>

            <div className='text-center mt-5 mb-10' data-aos="fade-up" data-aos-delay="700">
                <h1 className='text-[#1b1919] text-[18px] font-bold'>Trusted By Exceptional Brands</h1>
            </div>

            {/* Marquee Section */}
            <div className='flex justify-center' data-aos="fade-up" data-aos-delay="600">
                <div className='w-[1000px] h-[50px]'>
                    <div className='marquee-container relative overflow-hidden'>
                        <div className='animate-marquee-scroll flex gap-5 items-center'>
                            {/* first logo */}
                            {logos.map((logo, index) => (
                                <div
                                    key={`first-${index}`}
                                    className='shrink-0 bg-no-repeat bg-center bg-contain'
                                    style={{
                                        backgroundImage: `url('${logo.url}')`,
                                        width: logo.w,
                                        height: logo.h
                                    }}
                                ></div>
                            ))}
                            {/* 2nd logo (nonstop loop) */}
                            {logos.map((logo, index) => (
                                <div
                                    key={`second-${index}`}
                                    className='shrink-0 bg-no-repeat bg-center bg-contain'
                                    style={{
                                        backgroundImage: `url('${logo.url}')`,
                                        width: logo.w,
                                        height: logo.h
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}