// import React from 'react'

// export default function Seriously() {
//     return (
//         <>
//             <div className='bg-[#F5F5F5] pb-[100px]'>
//                 <div className=''>
//                     <div className='flex justify-center mt-10'>
//                         <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[190px] py-2 px-3 text-center' >
//                             <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
//                             <p className='text-black'>WHY CHOOSE US</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center'>
//                     <h1 className='text-center w-[600px] text-[35px] font-bold mt-7 text-[#0a1629]'>Built for Brands That Take Growth Seriously</h1>
//                 </div>

//                 {/* Card Section */}
//                 <div className='flex justify-center flex-wrap gap-6 mx-45 mt-10'>
//                     {/* Card 1 */}
//                     <div className='w-[376px] h-[252px] bg-white rounded-2xl'>
//                         <div className='p-[24px]'>
//                             <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/unavailable.svg")` }}></div>
//                             <h1 className='text-black font-bold text-[20px] mt-[16px]'>No Account Bans</h1>
//                             <p className='mt-[24px] text-[#626262]'>We offer reliable, high-quality ad accounts that reduce restrictions and ensure smooth campaign operations.</p>
//                         </div>
//                     </div>
//                     {/* Card 2 */}
//                     <div className='w-[376px] h-[252px] bg-white rounded-2xl'>
//                         <div className='p-[24px]'>
//                             <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/zap.svg")` }}></div>
//                             <h1 className='text-black font-bold text-[20px] mt-[16px]'>Faster Approvals</h1>
//                             <p className='mt-[24px] text-[#626262]'>Skip long waiting times. Our optimized setup ensures quick account activation and faster ad approvals.</p>
//                         </div>
//                     </div>
//                     {/* Card 3 */}
//                     <div className='w-[376px] h-[252px] bg-white rounded-2xl'>
//                         <div className='p-[24px]'>
//                             <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/user-group.svg")` }}></div>
//                             <h1 className='text-black font-bold text-[20px] mt-[16px]'>Expert Support Team</h1>
//                             <p className='mt-[24px] text-[#626262]'>Get access to experienced ad specialists who understand scaling, compliance, and performance optimization.</p>
//                         </div>
//                     </div>
//                     {/* Card 4 */}
//                     <div className='w-[376px] h-[252px] bg-white rounded-2xl'>
//                         <div className='p-[24px]'>
//                             <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/account-setting-02.svg")` }}></div>
//                             <h1 className='text-black font-bold text-[20px] mt-[16px]'>Reliable Infrastructure</h1>
//                             <p className='mt-[24px] text-[#626262]'>Built with safety, stability, and performance in mind your ad spend stays protected at every stage.</p>
//                         </div>
//                     </div>
//                     {/* Card 5 */}
//                     <div className='w-[376px] h-[252px] bg-white rounded-2xl'>
//                         <div className='p-[24px]'>
//                             <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/aspect-ratio.svg")` }}></div>
//                             <h1 className='text-black font-bold text-[20px] mt-[16px]'>Built for Scaling</h1>
//                             <p className='mt-[24px] text-[#626262]'>Whether you’re spending $100 or $100,000+, our infrastructure grows with your business without limitations.</p>
//                         </div>
//                     </div>
//                     {/* Card 6 */}
//                     <div className='w-[376px] h-[252px] bg-white rounded-2xl'>
//                         <div className='p-[24px]'>
//                             <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/idea-01.svg")` }}></div>
//                             <h1 className='text-black font-bold text-[20px] mt-[16px]'>Business Solutions</h1>
//                             <p className='mt-[24px] text-[#626262]'>We don’t just provide tools we help you build a profitable, long-term advertising system.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Seriously() {
    return (
        <>
            <div className='bg-[#F5F5F5] pb-[100px] px-4 overflow-hidden'>
                <div className=''>
                    <div className='flex justify-center mt-10' data-aos="fade-up" data-aos-delay="700">
                        <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[190px] py-2 px-3 text-center' >
                            <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
                            <p className='text-black text-sm font-medium'>WHY CHOOSE US</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center' data-aos="fade-up" data-aos-delay="700">
                    {/* Header: মোবাইলে উইডথ ফুল করা হয়েছে */}
                    <h1 className='text-center w-full max-w-[600px] text-[28px] md:text-[35px] font-bold mt-7 text-[#0a1629]'>
                        Built for Brands That Take Growth Seriously
                    </h1>
                </div>

                {/* Card Section: mx-45 সরিয়ে max-w এবং container ব্যবহার করা হয়েছে */}
                <div className='max-w-[1250px] mx-auto flex justify-center flex-wrap gap-6 mt-12'>

                    {/* Card 1 - আপনার অরিজিনাল ডিজাইন */}
                    <div className='w-full max-w-[376px] h-[252px] bg-white rounded-2xl shrink-0' data-aos="fade-up" data-aos-delay="300">
                        <div className='p-[24px]'>
                            <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/unavailable.svg")` }}></div>
                            <h1 className='text-black font-bold text-[20px] mt-[16px]'>No Account Bans</h1>
                            <p className='mt-[24px] text-[#626262] leading-relaxed'>We offer reliable, high-quality ad accounts that reduce restrictions and ensure smooth campaign operations.</p>
                        </div>
                    </div>

                    {/* Card 2 - আপনার অরিজিনাল ডিজাইন */}
                    <div className='w-full max-w-[376px] h-[252px] bg-white rounded-2xl shrink-0' data-aos="fade-up" data-aos-delay="400">
                        <div className='p-[24px]'>
                            <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/zap.svg")` }}></div>
                            <h1 className='text-black font-bold text-[20px] mt-[16px]'>Faster Approvals</h1>
                            <p className='mt-[24px] text-[#626262] leading-relaxed'>Skip long waiting times. Our optimized setup ensures quick account activation and faster ad approvals.</p>
                        </div>
                    </div>

                    {/* Card 3 - আপনার অরিজিনাল ডিজাইন */}
                    <div className='w-full max-w-[376px] h-[252px] bg-white rounded-2xl shrink-0' data-aos="fade-up" data-aos-delay="500">
                        <div className='p-[24px]'>
                            <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/user-group.svg")` }}></div>
                            <h1 className='text-black font-bold text-[20px] mt-[16px]'>Expert Support Team</h1>
                            <p className='mt-[24px] text-[#626262] leading-relaxed'>Get access to experienced ad specialists who understand scaling, compliance, and performance optimization.</p>
                        </div>
                    </div>

                    {/* Card 4 - আপনার অরিজিনাল ডিজাইন */}
                    <div className='w-full max-w-[376px] h-[252px] bg-white rounded-2xl shrink-0' data-aos="fade-up" data-aos-delay="600">
                        <div className='p-[24px]'>
                            <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/account-setting-02.svg")` }}></div>
                            <h1 className='text-black font-bold text-[20px] mt-[16px]'>Reliable Infrastructure</h1>
                            <p className='mt-[24px] text-[#626262] leading-relaxed'>Built with safety, stability, and performance in mind your ad spend stays protected at every stage.</p>
                        </div>
                    </div>

                    {/* Card 5 - আপনার অরিজিনাল ডিজাইন */}
                    <div className='w-full max-w-[376px] h-[252px] bg-white rounded-2xl shrink-0' data-aos="fade-up" data-aos-delay="700">
                        <div className='p-[24px]'>
                            <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/aspect-ratio.svg")` }}></div>
                            <h1 className='text-black font-bold text-[20px] mt-[16px]'>Built for Scaling</h1>
                            <p className='mt-[24px] text-[#626262] leading-relaxed'>Whether you’re spending $100 or $100,000+, our infrastructure grows with your business without limitations.</p>
                        </div>
                    </div>

                    {/* Card 6 - আপনার অরিজিনাল ডিজাইন */}
                    <div className='w-full max-w-[376px] h-[252px] bg-white rounded-2xl shrink-0' data-aos="fade-up" data-aos-delay="800">
                        <div className='p-[24px]'>
                            <div className='p-6 bg-no-repeat bg-center rounded-lg bg-[#F5F5F5] w-[14px] h-[15px]' style={{ backgroundImage: `url("/idea-01.svg")` }}></div>
                            <h1 className='text-black font-bold text-[20px] mt-[16px]'>Business Solutions</h1>
                            <p className='mt-[24px] text-[#626262] leading-relaxed'>We don’t just provide tools we help you build a profitable, long-term advertising system.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}