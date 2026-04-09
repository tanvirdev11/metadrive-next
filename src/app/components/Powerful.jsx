// import React from 'react'

// export default function Powerful() {
//     const cardData = {
//         title: "Scale & Optimize",
//         currentStep: 5,
//         totalSteps: 5,
//         percentage: 75,
//     };


//     const radius = 120;
//     const strokeWidth = 15;
//     const circumference = Math.PI * radius;



//     const progressOffset = circumference - (cardData.percentage / 100) * circumference;


//     const tickCount = 50;
//     const tickAngles = Array.from({ length: tickCount + 1 }, (_, i) => i * (180 / tickCount));
//     return (
//         <>
//             <div className='bg-[#FCFCFC]'>
//                 <div className=''>
//                     <div className='flex justify-center mt-[100px]'>
//                         <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[190px] py-2 px-3 text-center' >
//                             <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
//                             <p className='text-black'>HOW IT WORKS</p>
//                         </div>
//                     </div>
//                     <div className='flex justify-center mt-[16px]'>
//                         <h1 className='text-black font-bold text-3xl'>Simple Steps Powerful Results.</h1>
//                     </div>
//                     <div className='flex justify-center mt-[24px]'>
//                         <p className='text-[#494949] w-[482px] text-center'>Our streamlined process makes it easy to launch, manage, and scale your ad campaigns with confidence.</p>
//                     </div>
//                 </div>
//                 {/* Card Section */}
//                 <div className='flex flex-wrap justify-center mx-40 pb-10 mt-[54px] gap-5'>
//                     {/* Card 1 */}
// <div className='w-[400px] h-[385px] bg-[#EEEEF2] rounded-3xl px-[24px] pt-[40px] pb-[43px]'>
//     <div className='flex justify-between'>
//         <h1 className='text-black font-bold text-3xl'>Sing-up</h1>
//         <div className='flex'>
//             <p className='text-black text-2xl'>1/</p>
//             <p className='text-[#9B9B9D] text-2xl'>5</p>
//         </div>
//     </div>
//     <div className='flex justify-center'>
//         <div className='relative'>
//             <div className='absolute w-40 h-52 mt-9 ml-40' style={{ backgroundImage: `url("/Rectangle 686.png")` }}></div>
//         </div>
//         <div className='mt-[43px] w-[311px] h-[197px] rounded-xl bg-[#FFFFFF]'>
//             <div className='py-[35px] px-[26] flex justify-center'>
//                 <div className='bg-[#F2F2F5] rounded-full w-[48px] h-[48px] flex justify-center items-center'>
//                     <div className='bg-no-repeat bg-center w-5 h-5' style={{ backgroundImage: `url("/user.svg")` }}></div>
//                 </div>
//             </div>
//             <div className=''>
//                 <div className='w-[197px] h-[17px] ml-15 rounded-xl bg-[#EBEBEF]'></div>
//                 <div className='w-[254px] h-[12px] ml-7 mt-[9px] rounded-xl bg-[#EBEBEF]'></div>
//                 <div className='w-[254px] h-[12px] ml-7 mt-[6px] rounded-xl bg-[#EBEBEF]'></div>
//             </div>
//         </div>
//     </div>
// </div>
//                     {/* Card 2 */}
//                     <div className='w-[410px] h-[385px] bg-[#EEEEF2] rounded-3xl pt-[40px] pb-[43px] pl-[24px] pr-[24px]'>
//                         <div className='flex justify-between'>
//                             <h1 className='text-black font-bold text-2xl'>Add Funds</h1>
//                             <div className='flex'>
//                                 <p className='text-black text-2xl'>2/</p>
//                                 <p className='text-[#9B9B9D] text-2xl'>5</p>
//                             </div>
//                         </div>
//                         <div className='relative flex justify-center mt-20'>
//                             <div className='absolute w-[199px] h-[161px] bg-[#F7F7F7] rounded-xl -rotate-15'></div>
//                             <div className='absolute w-[200px] h-[161px] bg-[#FEFEFE] rounded-xl -rotate-8 z-30'></div>
//                             <div className='absolute w-[208px] h-[161px] bg-[#E4EBF7] p-[23px] rounded-xl z-40 ml-2 mt-4 p-[23px]'>
//                                 <div className='flex justify-center'>
//                                     <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'>
//                                         <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/wallet-add-02.svg")` }}></div>
//                                     </div>
//                                 </div>
//                                 <div className='flex-1 justify-center'>
//                                     <div className='w-[121px] h-[10px] bg-white rounded-full mt-5 ml-5'></div>
//                                     <div className='w-[161px] h-[7px] bg-[#F1F5FB] rounded-full mt-2'></div>
//                                     <div className='w-[161px] h-[7px] bg-[#F1F5FB] rounded-full mt-2'></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Card 3 */}
//                     <div className='w-[411px] h-[385px] bg-[#EEEEF2] rounded-3xl pt-[40px] pb-[85px] pr-[23px] pl-[24px]'>
//                         <div className='flex justify-between'>
//                             <h1 className='text-black font-bold text-2xl'>Ad Account</h1>
//                             <div className='flex'>
//                                 <p className='text-black text-2xl'>3/</p>
//                                 <p className='text-[#9B9B9D] text-2xl'>5</p>
//                             </div>
//                         </div>
//                         <div className='mt-[86px] relative'>
//                             <div className='absolute w-[331px] h-[81px] bg-[#FFFFFF] rounded-xl z-40 flex'>
//                                 <div className='py-[14px] pl-[14px] pr-[71px] flex'>
//                                     <div className='w-[57px] h-[53px] rounded-lg bg-[#F5F5F5]'></div>
//                                     <div className='ml-3'>
//                                         <div className='w-[181px] h-[11px] bg-[#E8E8E8] rounded-full'></div>
//                                         <div className='w-[181px] h-[6px] bg-[#E8E8E8] rounded-full mt-1'></div>
//                                         <div className='w-[131px] h-[6px] bg-[#E8E8E8] rounded-full mt-1'></div>
//                                         <div className='w-[96px] h-[6px] bg-[#E8E8E8] rounded-full mt-1'></div>
//                                     </div>
//                                     <div className='w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center shadow-lg ml-12 mt-1'>
//                                         <div className='bg-no-repeat w-5 h-5 bg-center' style={{ backgroundImage: `url("/tick-02.svg")` }}></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='absolute w-[277px] h-[66px] bg-[#F8F8F8] rounded-xl z-30 mt-10 ml-7'></div>
//                             <div className='absolute w-[235px] h-[57px] bg-[#F8FAFF] rounded-xl mt-20 ml-12'></div>
//                         </div>
//                     </div>
//                     {/* Card 4 */}
// <div className='w-[628px] h-[385px] rounded-3xl bg-[#EEEEF2] pt-[40px] px-[24px]'>
//     <div className='flex justify-between'>
//         <h1 className='text-black font-bold text-2xl'>Launch Your Campaigns</h1>
//         <div className='flex'>
//             <p className='text-black text-2xl'>4/</p>
//             <p className='text-[#9B9B9D] text-2xl'>5</p>
//         </div>
//     </div>
//     {/* box 1 */}
//     <div className='relative flex justify-center'>
//         <div className='absolute w-[124px] h-[125px] bg-white rounded-full flex justify-center items-center mt-13 z-50'>
//             <div className='w-[75px] h-[85px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Group.svg")` }}></div>
//         </div>
//     </div>
//     {/* box 2 */}
//     <div className='relative'>
//         <div className='absolute w-[60px] h-[60px] bg-[#1961EF] flex justify-center items-center p-[15px] rounded-full mt-30 ml-[470px] z-50'>
//             <div className='bg-center bg-no-repeat w-[30px] h-[30px]' style={{ backgroundImage: `url("/setup-01 (1).svg")` }}></div>
//         </div>
//     </div>
//     <div className='relative'>
//         <div className='absolute w-[60px] h-[60px] bg-[#1961EF] flex justify-center items-center p-[15px] rounded-full mt-30 ml-10 z-50'>
//             <div className='bg-center bg-no-repeat w-[40px] h-[40px]' style={{ backgroundImage: `url("/Simplification.svg")` }}></div>
//         </div>
//     </div>
//     {/* box 3 */}
//     <div className='relative'>
//         <div className='absolute w-[60px] h-[60px] bg-[#1961EF] flex justify-center items-center p-[15px] rounded-full mt-60 ml-18 z-50'>
//             <div className='bg-center bg-no-repeat w-[30px] h-[30px]' style={{ backgroundImage: `url("/target-01.svg")` }}></div>
//         </div>
//     </div>
//     {/* box 4 */}
//     <div className='relative'>
//         <div className='absolute w-[60px] h-[60px] bg-[#1961EF] flex justify-center items-center p-[15px] rounded-full mt-60 ml-[450px] z-50'>
//             <div className='bg-center bg-no-repeat w-[30px] h-[30px]' style={{ backgroundImage: `url("/live-streaming-01.svg")` }}></div>
//         </div>
//     </div>
//     <div className='mt-[46px]'>
//         <div className='mt-[86px] relative'>
//             <div className='absolute w-[235px] h-[57px] bg-[#D8EBFE] rounded-xl flex ml-40 mt-12 shadow-blue-500 shadow-xl'></div>
//             <div className='absolute w-[307px] h-[66px] bg-[#D8EBFE] rounded-xl z-30 mt-15 ml-36'></div>
//             <div className='absolute w-[419px] h-[102px] bg-[#FFFFFF] rounded-xl mt-20 ml-20 z-40'>
//                 <div className='py-2 px-2 ml-5 mt-1'>
//                     <div className='w-[354px] h-[13px] bg-[#E8E8E8] rounded-full mt-3'></div>
//                     <div className='w-[354px] h-[7px] bg-[#E8E8E8] rounded-full mt-2'></div>
//                     <div className='w-[256px] h-[7px] bg-[#E8E8E8] rounded-full mt-2'></div>
//                     <div className='w-[187px] h-[7px] bg-[#E8E8E8] rounded-full mt-2'></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

{/* Card 5 */ }
//                     <div className="w-[628px] h-[385px] bg-[#F2F4F8] p-8 rounded-3xl shadow-sm font-sans border border-gray-100 overflow-hidden relative">


//                         <div className="flex justify-between items-center mb-10">
//                             <h2 className="text-2xl font-bold text-[#1a1c1e]">
//                                 {cardData.title}
//                             </h2>
//                             <div className="flex items-baseline gap-0.5 text-lg font-semibold">
//                                 <span className="text-[#1a1c1e]">{cardData.currentStep}</span>
//                                 <span className="text-gray-400">/</span>
//                                 <span className="text-gray-400">{cardData.totalSteps}</span>
//                             </div>
//                         </div>


//                         <div className="relative flex justify-center w-full h-auto overflow-hidden">


//                             <svg
//                                 viewBox="0 0 280 160"
//                                 className="w-full h-auto"
//                             >
//                                 <defs>
//                                     <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                                         <stop offset="0%" stopColor="#87AFFF" />
//                                         <stop offset="100%" stopColor="#2563EB" />
//                                     </linearGradient>
//                                 </defs>

//                                 <path
//                                     d={`M 20,140 A ${radius},${radius} 0 0,1 ${260},140`}
//                                     fill="none"
//                                     stroke="white"
//                                     strokeWidth={strokeWidth}
//                                     strokeLinecap="round"
//                                 />

//                                 <path
//                                     d={`M 20,140 A ${radius},${radius} 0 0,1 ${260},140`}
//                                     fill="none"
//                                     stroke="url(#progressGradient)"
//                                     strokeWidth={strokeWidth}
//                                     strokeDasharray={circumference}
//                                     strokeDashoffset={progressOffset}
//                                     strokeLinecap="round"
//                                     className="transition-all duration-500 ease-out"
//                                 />


//                                 {tickAngles.map((angle, index) => {
//                                     const innerR = radius - 30;
//                                     const outerR = radius - strokeWidth - 5;
//                                     const angleRad = (angle + 180) * (Math.PI / 180);


//                                     const x1 = 140 + innerR * Math.cos(angleRad);
//                                     const y1 = 140 + innerR * Math.sin(angleRad);
//                                     const x2 = 140 + outerR * Math.cos(angleRad);
//                                     const y2 = 140 + outerR * Math.sin(angleRad);


//                                     const isActive = angle <= (cardData.percentage / 100) * 180;
//                                     const strokeColor = isActive ? "#2563EB" : "white";

//                                     return (
//                                         <line
//                                             key={index}
//                                             x1={x1}
//                                             y1={y1}
//                                             x2={x2}
//                                             y2={y2}
//                                             stroke={strokeColor}
//                                             strokeWidth="1.5"
//                                             strokeLinecap="round"
//                                             className="transition-colors duration-300 ease-out"
//                                         />
//                                     );
//                                 })}


//                                 {(() => {
//                                     const handleRadius = radius;
//                                     const handleAngleRad = (180 + (cardData.percentage / 100) * 180) * (Math.PI / 180);
//                                     const handleX = 140 + handleRadius * Math.cos(handleAngleRad);
//                                     const handleY = 140 + handleRadius * Math.sin(handleAngleRad);

//                                     return (
//                                         <rect
//                                             x={handleX - strokeWidth / 2}
//                                             y={handleY - strokeWidth / 2}
//                                             width={strokeWidth * 1.5}
//                                             height={strokeWidth * 1.5}
//                                             rx="4"
//                                             fill="white"
//                                             stroke="white"
//                                             strokeWidth="2"
//                                             className="shadow-md"
//                                         />
//                                     );
//                                 })()}
//                             </svg>


//                             <div className="absolute inset-0 flex items-center justify-center pt-[110px]">
//                                 <span className="text-6xl font-extrabold text-[#1a1c1e] tracking-tight">
//                                     {cardData.percentage}%
//                                 </span>
//                             </div>
//                          </div>
//                      </div>
//                 </div>
//             </div>


//         </>
//     )
// }



import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Powerful() {
    const cardData = {
        title: "Scale & Optimize",
        currentStep: 5,
        totalSteps: 5,
        percentage: 75,
    };

    const radius = 120;
    const strokeWidth = 15;
    const circumference = Math.PI * radius;
    const progressOffset = circumference - (cardData.percentage / 100) * circumference;
    const tickCount = 50;
    const tickAngles = Array.from({ length: tickCount + 1 }, (_, i) => i * (180 / tickCount));

    return (
        <>
            <div className='bg-[#FCFCFC] px-4 pb-20 overflow-hidden'>
                <div className='text-center'>
                    <div className='flex justify-center mt-10 md:mt-20' data-aos="fade-up" data-aos-delay="700">
                        <div className='flex justify-center items-center bg-[#EBF1FD] rounded-full mt-7 w-[190px] py-2 px-3' >
                            <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/Star 13.svg")` }}></div>
                            <p className='text-black font-medium'>HOW IT WORKS</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[16px]' data-aos="fade-up" data-aos-delay="700">
                        <h1 className='text-black font-bold text-2xl md:text-3xl'>Simple Steps Powerful Results.</h1>
                    </div>
                    <div className='flex justify-center mt-[24px]' data-aos="fade-up" data-aos-delay="700">
                        <p className='text-[#494949] w-full max-w-[482px]'>Our streamlined process makes it easy to launch, manage, and scale your ad campaigns with confidence.</p>
                    </div>
                </div>

                {/* Card Section Container */}
                <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-6 mt-[54px]'>

                    {/* Card 1 - Signup */}

                    <div className='w-[400px] h-[385px] bg-[#EEEEF2] rounded-3xl px-[24px] pt-[40px] pb-[43px] shrink-0' data-aos="fade-up" data-aos-delay="400">
                        <div className='flex justify-between'>
                            <h1 className='text-black font-bold text-3xl'>Sing-up</h1>
                            <div className='flex'>
                                <p className='text-black text-2xl'>1/</p>
                                <p className='text-[#9B9B9D] text-2xl'>5</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='relative'>
                                <div className='absolute w-40 h-52 mt-9 ml-40' style={{ backgroundImage: `url("/Rectangle 686.png")` }}></div>
                            </div>
                            <div className='mt-[43px] w-[311px] h-[197px] rounded-xl bg-[#FFFFFF]'>
                                <div className='py-[35px] px-[26] flex justify-center'>
                                    <div className='bg-[#F2F2F5] rounded-full w-[48px] h-[48px] flex justify-center items-center'>
                                        <div className='bg-no-repeat bg-center w-5 h-5' style={{ backgroundImage: `url("/user.svg")` }}></div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='w-[197px] h-[17px] ml-15 rounded-xl bg-[#EBEBEF]'></div>
                                    <div className='w-[254px] h-[12px] ml-7 mt-[9px] rounded-xl bg-[#EBEBEF]'></div>
                                    <div className='w-[254px] h-[12px] ml-7 mt-[6px] rounded-xl bg-[#EBEBEF]'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 - Add Funds */}
                    <div className='w-full max-w-[410px] h-[385px] bg-[#EEEEF2] rounded-3xl p-[24px] shrink-0' data-aos="fade-up" data-aos-delay="500">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-black font-bold text-2xl'>Add Funds</h1>
                            <div className='flex text-2xl'>
                                <p className='text-black'>2/</p>
                                <p className='text-[#9B9B9D]'>5</p>
                            </div>
                        </div>
                        <div className='relative flex justify-center mt-24 h-40'>
                            <div className='absolute w-[199px] h-[161px] bg-[#F7F7F7] rounded-xl -rotate-15'></div>
                            <div className='absolute w-[200px] h-[161px] bg-[#FEFEFE] rounded-xl -rotate-8 z-10'></div>
                            <div className='absolute w-[208px] h-[161px] bg-[#E4EBF7] p-[23px] rounded-xl z-20 shadow-lg'>
                                <div className='flex justify-center'>
                                    <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'>
                                        <div className='w-[25px] h-[25px] bg-no-repeat bg-center' style={{ backgroundImage: `url("/wallet-add-02.svg")` }}></div>
                                    </div>
                                </div>
                                <div className='mt-5 space-y-2'>
                                    <div className='w-[80%] mx-auto h-[10px] bg-white rounded-full'></div>
                                    <div className='w-full h-[7px] bg-[#F1F5FB] rounded-full'></div>
                                    <div className='w-full h-[7px] bg-[#F1F5FB] rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Ad Account */}
                    <div className='w-full max-w-[411px] h-[385px] bg-[#EEEEF2] rounded-3xl p-[24px] shrink-0 overflow-hidden' data-aos="fade-up" data-aos-delay="600">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-black font-bold text-2xl'>Ad Account</h1>
                            <div className='flex text-2xl'>
                                <p className='text-black'>3/</p>
                                <p className='text-[#9B9B9D]'>5</p>
                            </div>
                        </div>
                        <div className='mt-20 relative flex justify-center'>
                            <div className='absolute w-full max-w-[331px] h-[81px] bg-[#FFFFFF] rounded-xl z-30 flex items-center p-3 shadow-md'>
                                <div className='w-[57px] h-[53px] rounded-lg bg-[#F5F5F5] shrink-0'></div>
                                <div className='ml-3 flex-1'>
                                    <div className='w-[80%] h-[11px] bg-[#E8E8E8] rounded-full'></div>
                                    <div className='w-[60%] h-[6px] bg-[#E8E8E8] rounded-full mt-2'></div>
                                    <div className='w-[40%] h-[6px] bg-[#E8E8E8] rounded-full mt-1'></div>
                                </div>
                                <div className='w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center shadow-lg shrink-0'>
                                    <div className='bg-no-repeat w-4 h-4 bg-center' style={{ backgroundImage: `url("/tick-02.svg")` }}></div>
                                </div>
                            </div>
                            <div className='absolute w-[277px] h-[66px] bg-[#F8F8F8] rounded-xl z-20 mt-10'></div>
                            <div className='absolute w-[235px] h-[57px] bg-[#F8FAFF] rounded-xl z-10 mt-16'></div>
                        </div>
                    </div>

                    {/* Card 4 - Launch Campaigns */}
                    <div className='w-full max-w-[628px] aspect-[628/385] rounded-3xl bg-[#EEEEF2] pt-[6%] px-[4%] relative overflow-hidden' data-aos="fade-up" data-aos-delay="700">
                        {/* Header */}
                        <div className='flex justify-between items-center'>
                            <h1 className='text-black font-bold text-[clamp(1rem,4vw,1.5rem)]'>Launch Your Campaigns</h1>
                            <div className='flex items-center'>
                                <p className='text-black text-[clamp(1rem,4vw,1.5rem)]'>4/</p>
                                <p className='text-[#9B9B9D] text-[clamp(1rem,4vw,1.5rem)]'>5</p>
                            </div>
                        </div>

                        {/* Icons Container - Using absolute positioning relative to parent */}
                        <div className='absolute inset-0 pointer-events-none'>

                            {/* Central Icon (Box 1) */}
                            <div className='absolute left-1/2 top-[35%] -translate-x-1/2 w-[20%] aspect-square bg-white rounded-full flex justify-center items-center z-50 shadow-sm'>
                                <div className='w-[60%] h-[70%] bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url("/Group.svg")` }}></div>
                            </div>

                            {/* Floating Icons (Box 2, 3, 4) */}
                            {/* Top Right */}
                            <div className='absolute right-[10%] top-[40%] w-[10%] aspect-square bg-[#1961EF] flex justify-center items-center rounded-full z-50'>
                                <div className='bg-center bg-no-repeat bg-contain w-[50%] h-[50%]' style={{ backgroundImage: `url("/setup-01 (1).svg")` }}></div>
                            </div>

                            {/* Top Left */}
                            <div className='absolute left-[10%] top-[40%] w-[10%] aspect-square bg-[#1961EF] flex justify-center items-center rounded-full z-50'>
                                <div className='bg-center bg-no-repeat bg-contain w-[60%] h-[60%]' style={{ backgroundImage: `url("/Simplification.svg")` }}></div>
                            </div>

                            {/* Bottom Left */}
                            <div className='absolute left-[15%] top-[70%] w-[10%] aspect-square bg-[#1961EF] flex justify-center items-center rounded-full z-50'>
                                <div className='bg-center bg-no-repeat bg-contain w-[50%] h-[50%]' style={{ backgroundImage: `url("/target-01.svg")` }}></div>
                            </div>

                            {/* Bottom Right */}
                            <div className='absolute right-[15%] top-[70%] w-[10%] aspect-square bg-[#1961EF] flex justify-center items-center rounded-full z-50'>
                                <div className='bg-center bg-no-repeat bg-contain w-[50%] h-[50%]' style={{ backgroundImage: `url("/live-streaming-01.svg")` }}></div>
                            </div>
                        </div>

                        {/* Background Cards (Box 4 area) */}
                        <div className='mt-[10%] relative flex justify-center'>
                            <div className='absolute w-[40%] h-[50px] bg-[#D8EBFE] rounded-xl mt-4 opacity-50 shadow-blue-500/50 shadow-xl'></div>
                            <div className='absolute w-[50%] h-[60px] bg-[#D8EBFE] rounded-xl z-30 mt-8'></div>
                            <div className='absolute w-[70%] h-auto bg-[#FFFFFF] rounded-xl mt-12 z-40 p-[3%] shadow-md'>
                                <div className='space-y-2'>
                                    <div className='w-full h-3 bg-[#E8E8E8] rounded-full'></div>
                                    <div className='w-full h-2 bg-[#E8E8E8] rounded-full'></div>
                                    <div className='w-[70%] h-2 bg-[#E8E8E8] rounded-full'></div>
                                    <div className='w-[50%] h-2 bg-[#E8E8E8] rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 - Scale & Optimize */}
                    <div className="w-[628px] h-[385px] bg-[#F2F4F8] p-8 rounded-3xl shadow-sm font-sans border border-gray-100 overflow-hidden relative" data-aos="fade-up" data-aos-delay="800">


                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl font-bold text-[#1a1c1e]">
                                {cardData.title}
                            </h2>
                            <div className="flex items-baseline gap-0.5 text-lg font-semibold">
                                <span className="text-[#1a1c1e]">{cardData.currentStep}</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-400">{cardData.totalSteps}</span>
                            </div>
                        </div>


                        <div className="relative flex justify-center w-full h-auto overflow-hidden">


                            <svg
                                viewBox="0 0 280 160"
                                className="w-full h-auto"
                            >
                                <defs>
                                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#87AFFF" />
                                        <stop offset="100%" stopColor="#2563EB" />
                                    </linearGradient>
                                </defs>

                                <path
                                    d={`M 20,140 A ${radius},${radius} 0 0,1 ${260},140`}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                />

                                <path
                                    d={`M 20,140 A ${radius},${radius} 0 0,1 ${260},140`}
                                    fill="none"
                                    stroke="url(#progressGradient)"
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={progressOffset}
                                    strokeLinecap="round"
                                    className="transition-all duration-500 ease-out"
                                />


                                {tickAngles.map((angle, index) => {
                                    const innerR = radius - 30;
                                    const outerR = radius - strokeWidth - 5;
                                    const angleRad = (angle + 180) * (Math.PI / 180);


                                    const x1 = 140 + innerR * Math.cos(angleRad);
                                    const y1 = 140 + innerR * Math.sin(angleRad);
                                    const x2 = 140 + outerR * Math.cos(angleRad);
                                    const y2 = 140 + outerR * Math.sin(angleRad);


                                    const isActive = angle <= (cardData.percentage / 100) * 180;
                                    const strokeColor = isActive ? "#2563EB" : "white";

                                    return (
                                        <line
                                            key={index}
                                            x1={x1}
                                            y1={y1}
                                            x2={x2}
                                            y2={y2}
                                            stroke={strokeColor}
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            className="transition-colors duration-300 ease-out"
                                        />
                                    );
                                })}


                                {(() => {
                                    const handleRadius = radius;
                                    const handleAngleRad = (180 + (cardData.percentage / 100) * 180) * (Math.PI / 180);
                                    const handleX = 140 + handleRadius * Math.cos(handleAngleRad);
                                    const handleY = 140 + handleRadius * Math.sin(handleAngleRad);

                                    return (
                                        <rect
                                            x={handleX - strokeWidth / 2}
                                            y={handleY - strokeWidth / 2}
                                            width={strokeWidth * 1.5}
                                            height={strokeWidth * 1.5}
                                            rx="4"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="2"
                                            className="shadow-md"
                                        />
                                    );
                                })()}
                            </svg>


                            <div className="absolute inset-0 flex items-center justify-center pt-[110px]">
                                <span className="text-6xl font-extrabold text-[#1a1c1e] tracking-tight">
                                    {cardData.percentage}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}