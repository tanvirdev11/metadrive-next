// "use client"
// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Infinity } from 'lucide-react';
// import Head from 'next/head';
// export default function Advertising() {
//     return (
//         <>
//             <div className=''>
//                 <div className='flex justify-center mt-20'>
//                     <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[120px] py-1 px-3 text-center' >
//                         <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
//                         <p className='text-black'>Advertising</p>
//                     </div>
//                 </div>
//                 <div className='text-center mt-[33px]'>
//                     <h1 className='font-bold text-black text-3xl'>What we actually do</h1>
//                 </div>
//                 <div className='flex justify-center mt-[20px]'>
//                     <p className='w-[507px] text-[#494949] text-center'>We provide a complete advertising infrastructure designed to help brands launch, manage, and scale Meta ad campaigns with confidence.</p>
//                 </div>


//                 <div className='flex justify-center'>
//                     <div className='w-[618px] border-2 border-gray-200 rounded-xl mt-20'>
//                         <div className="absolute ml-50 w-55 h-55 mt-5 rounded-full border-[0.83px] border-blue-100" />
//                         <div className="absolute ml-58 w-40 h-40 mt-12 rounded-full border-[0.83px] border-blue-100" />
//                         <div className='mt-20'>
//                             <div className='flex justify-center relative'>
//                                 <button className='z-40 absolute bg-[#155EEF] hover:bg-blue-600 duration-300 cursor-pointer rounded-full flex py-2 px-8 items-center '><div className='w-[30px] h-[30px] bg-no-repeat' style={{ backgroundImage: `url("/Group 1000003608.svg")` }}></div>Account Access</button>
//                             </div>
//                             <div className='z-50 w-full h-[185px] bg-no-repeat ml-28' style={{ backgroundImage: `url("/Vector 10.png")` }}></div>
//                             <div className=''>
//                                 <h1 className='text-black text-[22px] ml-5'>Ad Account Access</h1>
//                                 <p className='text-[#545454] ml-5 mt-2 mb-5'>Get instant access to reliable, high quality Meta ad accounts built for
//                                     stability and long term performance no more sudden bans or
//                                     limitations.</p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Card 2 */}
//                     <div className='w-[580px] rounded-xl border-2 border-[#EEEEEE] mt-20 ml-10'>
//                         <div className='w-[359px] bg-white mt-15 ml-25'>
//                             <div className='flex px-3'>
//                                 <p className='text-black mt-1'>Expensive</p>
//                                 <div className='flex items-center ml-30 shadow-lg px-2 py-1 rounded-lg bg-[#f1f1f1]'>
//                                     <div className='bg-no-repeat w-[30px] h-[20]' style={{ backgroundImage: `url("/calendar-03.svg")` }}></div>
//                                     <p className='text-black'>Last 30 days</p>
//                                 </div>
//                             </div>
//                             <div className='border mt-2 border-[#eeeeee] w-full'></div>
//                             <div className='w-full h-[112px] bg-no-repeat ml-5 mt-10' style={{ backgroundImage: `url("/Vector 12.png")` }}>
//                                 <div className='border border-gray-100 w-[300px]'></div>
//                                 <div className='border mt-4 border-gray-100 w-[200px]'></div>
//                                 <div className='border mt-1 border-gray-100 w-[120px]'></div>
//                                 <div className='border mt-3 border-gray-100 w-[50px]'></div>
//                                 <div className='border mt-3 border-gray-100 w-[20px]'></div>
//                             </div>
//                         </div>
//                         <div className=''>
//                             <h1 className='ml-10 text-black font-bold text-[20px] mt-5'>Budget & Fund Management</h1>
//                             <p className='text-[#494949] ml-10 mt-2'>Easily add, manage, and control your ad spend with secure and flexible funding options designed for growing businesses.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex flex-wrap justify-center'>
//                     {/* Card 3 */}
//                     <div className='w-[523px] rounded-2xl border-2 border-gray-200 mt-5 mb-10'>
//                         <div className='flex justify-center relative'>
//                             <button className='bg-black px-2 py-1 rounded-full absolute mt-25'>Campaign</button>
//                         </div>
//                         <div className='flex bg-[#FCFCFC]'>
//                             {/* <div className='border-2 w-10 border-gray-300 rounded-lg ml-10 mt-10 rotate-15 '></div>
//                             <div className='border-2 w-10 border-gray-300 rounded-lg ml-15 rotate-15 mt-15'></div> */}
//                             <div className='flex justify-center'>
//                                 <div className='ml-30 mt-8'>
//                                     <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center ml-10' style={{ backgroundImage: `url("/Simplification.svg")` }}></div>
//                                 </div>
//                                 <div className='ml-30 mt-8'>
//                                     <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/setup-01 (1).svg")` }}></div>
//                                 </div>
//                             </div>

//                         </div>
//                         <div className='flex bg-[#FCFCFC]'>
//                             <div className='ml-30 mt-15'>
//                                 <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/target-01 (1).svg")` }}></div>
//                             </div>
//                             <div className='ml-20 mt-30'>
//                                 <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/meta-12368 1.svg")` }}></div>
//                             </div>
//                             <div className='ml-20 mt-15'>
//                                 <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/live-streaming-01.svg")` }}></div>
//                             </div>
//                         </div>
//                         <div className='mb-10'>
//                             <h1 className='ml-10 text-black font-bold text-[20px] mt-5'>Campaign Management</h1>
//                             <p className='text-[#494949] ml-10 mt-2'>Create, schedule, and optimize your advertising campaigns with our intuitive platform designed for maximum impact.</p>
//                         </div>
//                     </div>
//                     {/* Card 4 */}
//                     <div className="max-w-[550px] h-[390px] bg-white rounded-3xl border-2 border-gray-200 mt-3 font-sans ml-8">
//                         {/* Upper Graphic Section */}
//                         <div className="relative h-60 bg-[#f7f9ff] flex items-center justify-center overflow-hidden border-b border-gray-100">

//                             {/* The Graphic: Representing the 3D Ring with an Overlay */}
//                             <div className="relative w-full h-full flex items-center justify-center">
//                                 {/* Light radial gradient background on the section */}
//                                 <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>

//                                 {/* The Outer Rings (Pseudo-3D representation) */}
//                                 <div className="absolute top-[20px] w-80 h-80 rounded-full border-[1.5px] border-blue-100 flex items-center justify-center z-10">
//                                     <div className="w-64 h-64 rounded-full border-[1.5px] border-blue-200 flex items-center justify-center bg-white/20">
//                                         <div className="w-48 h-48 rounded-full border-[1.5px] border-blue-300 flex items-center justify-center bg-blue-50/40">
//                                             <div className="w-32 h-32 rounded-full border-[1.5px] border-blue-400 flex items-center justify-center bg-blue-100/60">

//                                                 {/* The Center Meta Circle */}
//                                                 <div className='flex items-center justify-center'>
//                                                     <div className="w-16 h-16 mt-5 ml-5 bg-no-repeat" style={{ backgroundImage: `url("/meta-12368 1.svg")` }}>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* The Gradient Ring Overlay (The main blue circular thing) */}
//                                 <div className="absolute top-[20px] w-80 h-80 rounded-full border-[15px] border-transparent border-t-[#2d68ff] border-r-[#2d68ff] -rotate-[75deg] z-20 opacity-90"></div>

//                                 {/* The Black Ring Indicator */}
//                                 <div className="absolute w-6 h-6 bg-white border-[5px] border-[#0a1629] rounded-full z-40 top-[85px] right-[133px] shadow-sm"></div>
//                             </div>
//                         </div>

//                         {/* Bottom Content Section */}
//                         <div className="p-5 pt-2">
//                             <h2 className="text-[26px] font-bold text-[#0a1629] tracking-tight">
//                                 Performance Optimization
//                             </h2>
//                             <p className="text-[#5e6b7e] pt-2 leading-relaxed text-lg font-medium pb-5">
//                                 We continuously monitor and optimize your campaigns to improve ROAS,
//                                 reduce ad waste, and scale winning ads efficiently.
//                             </p>
//                         </div>
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
import { Infinity } from 'lucide-react';
import Head from 'next/head';

export default function Advertising() {
    return (
        <>
            <div className='px-4 pb-20 overflow-hidden'> {/* মোবাইলে সাইড গ্যাপের জন্য */}
                <div className='flex justify-center mt-10 md:mt-20' data-aos="fade-up" data-aos-delay="700">
                    <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[120px] py-1 px-3 text-center' >
                        <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
                        <p className='text-black'>Advertising</p>
                    </div>
                </div>
                <div className='text-center mt-[33px]' data-aos="fade-up" data-aos-delay="700">
                    <h1 className='font-bold text-black text-3xl'>What we actually do</h1>
                </div>
                <div className='flex justify-center mt-[20px]' data-aos="fade-up" data-aos-delay="700">
                    <p className='w-full max-w-[507px] text-[#494949] text-center'>We provide a complete advertising infrastructure designed to help brands launch, manage, and scale Meta ad campaigns with confidence.</p>
                </div>

                {/*  Card 1 & Card 2 */}
                <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 mt-10 md:mt-20'>

                    {/* Card 1 */}
                    <div className='w-full max-w-[618px] border-2 border-gray-200 rounded-xl relative h-auto pb-5 lg:pb-0' data-aos="fade-up" data-aos-delay="800">
                        <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:ml-50 w-55 h-55 mt-5 rounded-full border-[0.83px] border-blue-100" />
                        <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:ml-58 w-40 h-40 mt-12 rounded-full border-[0.83px] border-blue-100" />
                        <div className='mt-20'>
                            <div className='flex justify-center relative'>
                                <button className='z-40 absolute bg-[#155EEF] hover:bg-blue-600 duration-300 cursor-pointer rounded-full flex py-2 px-8 items-center '><div className='w-[30px] h-[30px] bg-no-repeat' style={{ backgroundImage: `url("/Group 1000003608.svg")` }}></div>Account Access</button>
                            </div>
                            <div className='z-50 w-full h-[185px] bg-no-repeat bg-center lg:bg-left lg:ml-28' style={{ backgroundImage: `url("/Vector 10.png")` }}></div>
                            <div className=''>
                                <h1 className='text-black text-[22px] ml-5 font-bold'>Ad Account Access</h1>
                                <p className='text-[#545454] ml-5 mt-2 mb-5 pr-5'>Get instant access to reliable, high quality Meta ad accounts built for stability and long term performance no more sudden bans or limitations.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2  */}
                    <div className='w-full max-w-[580px] rounded-xl border-2 border-[#EEEEEE] flex flex-col' data-aos="fade-up" data-aos-delay="800">
                        <div className='w-full flex justify-center lg:justify-start lg:ml-25 mt-15'>
                            <div className='w-full max-w-[359px] bg-white p-4 lg:p-0'>
                                <div className='flex justify-between items-center px-3 lg:px-0'>
                                    <p className='text-black mt-1'>Expensive</p>
                                    <div className='flex items-center shadow-lg px-2 py-1 rounded-lg bg-[#f1f1f1]'>
                                        <div className='bg-no-repeat w-[30px] h-[20px]' style={{ backgroundImage: `url("/calendar-03.svg")` }}></div>
                                        <p className='text-black'>Last 30 days</p>
                                    </div>
                                </div>
                                <div className='border mt-2 border-[#eeeeee] w-full'></div>
                                <div className='w-full h-[112px] bg-no-repeat bg-center lg:bg-left lg:ml-5 mt-10' style={{ backgroundImage: `url("/Vector 12.png")` }}>
                                    <div className='border border-gray-100 w-[80%] lg:w-[300px]'></div>
                                    <div className='border mt-4 border-gray-100 w-[60%] lg:w-[200px]'></div>
                                    <div className='border mt-1 border-gray-100 w-[40%] lg:w-[120px]'></div>
                                    <div className='border mt-3 border-gray-100 w-[20%] lg:w-[50px]'></div>
                                    <div className='border mt-3 border-gray-100 w-[10%] lg:w-[20px]'></div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 lg:p-0 mt-10'>
                            <h1 className='lg:ml-10 text-black font-bold text-[20px]'>Budget & Fund Management</h1>
                            <p className='text-[#494949] lg:ml-10 mt-2 pb-5 pr-5'>Easily add, manage, and control your ad spend with secure and flexible funding options designed for growing businesses.</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 & Card 4 */}
                <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 mt-10'>

                    {/* Card 3 */}
                    <div className='w-[523px] rounded-2xl border-2 border-gray-200 mt-5 mb-10' data-aos="fade-up" data-aos-delay="700">
                        <div className='flex justify-center relative'>
                            <button className='bg-black px-2 py-1 rounded-full absolute mt-25'>Campaign</button>
                        </div>
                        <div className='flex bg-[#FCFCFC]'>
                            {/* <div className='border-2 w-10 border-gray-300 rounded-lg ml-10 mt-10 rotate-15 '></div>
                             <div className='border-2 w-10 border-gray-300 rounded-lg ml-15 rotate-15 mt-15'></div> */}
                            <div className='flex justify-center'>
                                <div className='ml-30 mt-8'>
                                    <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center ml-10' style={{ backgroundImage: `url("/Simplification.svg")` }}></div>
                                </div>
                                <div className='ml-30 mt-8'>
                                    <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/setup-01 (1).svg")` }}></div>
                                </div>
                            </div>

                        </div>
                        <div className='flex bg-[#FCFCFC]'>
                            <div className='ml-30 mt-15'>
                                <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/target-01 (1).svg")` }}></div>
                            </div>
                            <div className='ml-20 mt-30'>
                                <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/meta-12368 1.svg")` }}></div>
                            </div>
                            <div className='ml-20 mt-15'>
                                <div className='bg-[#165FEF] w-10 h-10 rounded-full bg-no-repeat bg-center' style={{ backgroundImage: `url("/live-streaming-01.svg")` }}></div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <h1 className='ml-10 text-black font-bold text-[20px] mt-5'>Campaign Management</h1>
                            <p className='text-[#494949] ml-10 mt-2'>Create, schedule, and optimize your advertising campaigns with our intuitive platform designed for maximum impact.</p>
                        </div>
                    </div>

                    {/* Card 4  */}
                    <div className="w-full max-w-[550px] min-h-[390px] bg-white rounded-3xl border-2 border-gray-200 font-sans h-auto pb-5 lg:pb-0" data-aos="fade-up" data-aos-delay="700">
                        <div className="relative h-60 bg-[#f7f9ff] flex items-center justify-center overflow-hidden border-b border-gray-100">
                            <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
                                <div className="absolute top-[20px] w-80 h-80 rounded-full border-[1.5px] border-blue-100 flex items-center justify-center z-10">
                                    <div className="w-64 h-64 rounded-full border-[1.5px] border-blue-200 flex items-center justify-center bg-white/20">
                                        <div className="w-48 h-48 rounded-full border-[1.5px] border-blue-300 flex items-center justify-center bg-blue-50/40">
                                            <div className="w-32 h-32 rounded-full border-[1.5px] border-blue-400 flex items-center justify-center bg-blue-100/60">
                                                <div className='flex items-center justify-center'>
                                                    <div className="w-16 h-16 mt-5 ml-5 bg-no-repeat" style={{ backgroundImage: `url("/meta-12368 1.svg")` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[20px] w-80 h-80 rounded-full border-[15px] border-transparent border-t-[#2d68ff] border-r-[#2d68ff] -rotate-[75deg] z-20 opacity-90"></div>
                                <div className="absolute w-6 h-6 bg-white border-[5px] border-[#0a1629] rounded-full z-40 top-[85px] right-[133px] shadow-sm"></div>
                            </div>
                        </div>
                        <div className="p-5 pt-2">
                            <h2 className="text-[26px] font-bold text-[#0a1629] tracking-tight">Performance Optimization</h2>
                            <p className="text-[#5e6b7e] pt-2 leading-relaxed text-lg font-medium pb-5">
                                We continuously monitor and optimize your campaigns to improve ROAS, reduce ad waste, and scale winning ads efficiently.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}