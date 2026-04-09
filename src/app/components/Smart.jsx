// import React from 'react'
// import Image from 'next/image'

// export default function Smart() {
//     return (
//         <>
//             <div className='flex justify-center'>
//                 <div className='w-[1280px] h-[512px] relative rounded-3xl'>
//                     <div className="absolute w-full mt-[266px] h-[512px] bg-gradient-to-b from-transparent rounded-3xl to-blue-400 backdrop-blur-[3px]" >
//                         <div className='flex justify-center'>
//                             <h1 className='text-black font-bold text-3xl mt-[139px]'>Ready to Scale Your Advertising the Smart Way?</h1>
//                         </div>
//                         <div className='flex justify-center'>
//                             <p className='text-[#414348] w-[460px] text-center mt-[25px]'>Join brands and agencies using a reliable, high-performance ad infrastructure to launch, manage, and scale campaigns with confidence.</p>
//                         </div>
//                         <div className='flex justify-center'>
//                             <div className="flex gap-4 mt-[56px]">
//                                 {/* Get Started Now button */}
//                                 <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition duration-300">
//                                     Get Started Now

//                                     <Image src="/arrow-right-02.svg" alt="logo" width={25} height={20} className='' />
//                                 </button>

//                                 {/* Free Consultation button */}
//                                 <button className="bg-white text-gray-900 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
//                                     Book a Free Consultation
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


import React from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Smart() {
    return (
        <>
            <div className='flex justify-center px-4'>
                {/* কন্টেইনার: ডেস্কটপে ফিক্সড h-[512px] থাকবে */}
                <div className='w-full max-w-[1280px] h-auto md:h-[512px] relative rounded-3xl' data-aos="fade-up" data-aos-delay="700">

                    {/* গ্রাডিয়েন্ট বক্স: ল্যাপটপে হুবহু আপনার mt-[266px] থাকবে */}
                    <div className="md:absolute w-full mt-10 md:mt-[266px] h-auto md:h-[512px] bg-gradient-to-b from-transparent rounded-3xl to-blue-400 backdrop-blur-[3px] pb-10 md:pb-0" >

                        <div className='flex justify-center px-4' data-aos="fade-up" data-aos-delay="600">
                            {/* টাইটেল: ডেস্কটপে mt-[139px] থাকবে */}
                            <h1 className='text-black font-bold text-2xl md:text-3xl mt-10 md:mt-[139px] text-center'>
                                Ready to Scale Your Advertising the Smart Way?
                            </h1>
                        </div>

                        <div className='flex justify-center px-4'>
                            {/* প্যারাগ্রাফ: ডেস্কটপে mt-[25px] থাকবে */}
                            <p className='text-[#414348] w-full max-w-[460px] text-center mt-[25px]' data-aos="fade-up" data-aos-delay="600">
                                Join brands and agencies using a reliable, high-performance ad infrastructure to launch, manage, and scale campaigns with confidence.
                            </p>
                        </div>

                        <div className='flex justify-center px-4'>
                            {/* বাটন কন্টেইনার: ডেস্কটপে mt-[56px] থাকবে */}
                            <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-[56px]">
                                {/* Get Started Now button */}
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex justify-center items-center gap-2 hover:bg-blue-700 transition duration-300" data-aos="fade-up" data-aos-delay="500">
                                    Get Started Now
                                    <Image src="/arrow-right-02.svg" alt="logo" width={25} height={20} />
                                </button>

                                {/* Free Consultation button */}
                                <button className="bg-white text-gray-900 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300" data-aos="fade-up" data-aos-delay="500">
                                    Book a Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}