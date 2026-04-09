// import React from 'react'
// import Image from 'next/image';



// export default function Meta() {
//     return (

//         <>

//             <div className='mt-25'>

//                 <div className='flex justify-center'>
//                     <div className='w-[304px] h-[40px] mt-10 bg-[#f1f1f1] rounded-2xl' data-aos="fade-up" data-aos-delay="500">
//                         <div className='flex text-black rounded-lg'>
//                             <div className='w-[75px] justify-center flex bg-white py-1 rounded-2xl ml-1 mt-1'>
//                                 <Image src="/meta-logo-facebook-svgrepo-com 2.svg" alt="logo" width={30} height={30} className='pl-1 pr-1' />
//                                 <p className='pr-2'>Meta</p>
//                             </div>
//                             <div className='flex items-center'>
//                                 <p className='text-black text-[14px] flex ml-2 mt-1'>Smart Campaign Management</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='text-center'>
//                     <div className='flex justify-center'>
//                         <div className='mt-10' data-aos="fade-up" data-aos-delay="600">
//                             <h1 className='text-[40px] w-[712px] text-center text-black font-bold'>Scale Your Meta Ads With Smarter Ad Infrastructure</h1>
//                         </div>
//                     </div>
//                     <div className='flex justify-center mt-[13px]' data-aos="fade-up" data-aos-delay="700">
//                         <p className='text-[#484849] w-[712px]'>Robust ad accounts, easy funding, and expert support everything you need to confidently launch, manage, and scale successful Meta campaigns.</p>
//                     </div>
//                     <div className='flex justify-center'>
//                         <div className="flex gap-4 mt-[26px]">
//                             {/* Get Started Now button */}
//                             <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition" data-aos="fade-up" data-aos-delay="800">
//                                 Get Started Now

//                                 <Image src="/arrow-right-02.svg" alt="logo" width={25} height={20} className='' />
//                             </button>

//                             {/* Free Consultation button */}
//                             <button className="bg-white text-gray-900 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition" data-aos="fade-up" data-aos-delay="800">
//                                 Free Consultation
//                             </button>
//                         </div>
//                     </div>
//                     <div className="">
//                         {/* Blur Overlay */}
//                         <div className="absolute w-full mt-[266px] h-61  bg-gradient-to-b from-transparent to-blue-400 backdrop-blur-[3px]" data-aos="fade-up" data-aos-delay="700">
//                             <div className="text-center absolute ml-[870px] mt-2" data-aos="fade-up" data-aos-delay="400">

//                             </div>
//                         </div>
//                         <div className="max-w-7xl mx-auto px-1 relative mt-[46px] justify-center" data-aos="fade-up" data-aos-delay="700">

//                             {/* Main Image Div */}
//                             <div className='flex justify-center'>
//                                 <div className="w-full h-[510px] bg-center bg-no-repeat" style={{ backgroundImage: `url("/image 51.png")` }} >
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div >

//             </div >

//         </>
//     )
// }


import React from 'react'
import Image from 'next/image';

export default function Meta() {
    return (
        <section className='overflow-hidden bg-white mt-25'>
            <div className='px-4'> {/* মোবাইলে সাইডে গ্যাপ রাখার জন্য */}

                {/* Badge Section */}
                <div className='flex justify-center'>
                    <div className='w-full max-w-[304px] h-[40px] mt-10 bg-[#f1f1f1] rounded-2xl' data-aos="fade-up" data-aos-delay="500">
                        <div className='flex text-black rounded-lg h-full items-center'>
                            <div className='w-[75px] justify-center flex bg-white py-1 rounded-2xl ml-1 shadow-sm'>
                                <Image src="/meta-logo-facebook-svgrepo-com 2.svg" alt="logo" width={24} height={24} className='' />
                                <p className='ml-1 text-sm font-medium'>Meta</p>
                            </div>
                            <div className='flex items-center flex-1'>
                                <p className='text-black text-[12px] md:text-[14px] ml-2 font-medium'>Smart Campaign Management</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    {/* Heading Section */}
                    <div className='flex justify-center'>
                        <div className='mt-10' data-aos="fade-up" data-aos-delay="600">
                            {/* h1 এ নির্দিষ্ট w-[712px] থাকবে কিন্তু মোবাইলে max-w-full কাজ করবে */}
                            <h1 className='text-[30px] md:text-[40px] w-full max-w-[712px] text-center text-black font-bold leading-tight'>
                                Scale Your Meta Ads With Smarter Ad Infrastructure
                            </h1>
                        </div>
                    </div>

                    {/* Paragraph Section */}
                    <div className='flex justify-center mt-[13px]' data-aos="fade-up" data-aos-delay="700">
                        <p className='text-[#484849] w-full max-w-[712px] text-[14px] md:text-base px-2'>
                            Robust ad accounts, easy funding, and expert support everything you need to confidently launch, manage, and scale successful Meta campaigns.
                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className='flex justify-center'>
                        <div className="flex flex-col sm:flex-row gap-4 mt-[26px] w-full sm:w-auto px-10 sm:px-0">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex justify-center items-center gap-2 hover:bg-blue-700 transition" data-aos="fade-up" data-aos-delay="800">
                                Get Started Now
                                <Image src="/arrow-right-02.svg" alt="logo" width={20} height={20} />
                            </button>

                            <button className="bg-white text-gray-900 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition" data-aos="fade-up" data-aos-delay="800">
                                Free Consultation
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative mt-10">
                        {/* Blur Overlay - মোবাইলে পজিশন অ্যাডজাস্ট করা হয়েছে */}
                        <div className="absolute w-full bottom-0 left-0 h-32 lg:h-[300px] md:h-64 bg-gradient-to-t from-blue-300 via-blue-100 to-transparent pointer-events-none" data-aos="fade-up" data-aos-delay="700"></div>

                        <div className="max-w-7xl mx-auto px-1 relative mt-[46px] flex justify-center" data-aos="fade-up" data-aos-delay="700">
                            {/* Main Image Div */}
                            <div className='w-full max-w-[1100px] aspect-video md:h-[510px] bg-contain bg-center bg-no-repeat transition-all duration-300'
                                style={{ backgroundImage: `url("/image 51.png")` }} >
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </section>
    )
}