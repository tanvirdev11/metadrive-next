import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="relative w-full bg-[#F9F9FB] pt-10 mt-96 overflow-hidden font-sans border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Top Section: Logo and Slogan */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/Frame.svg" alt="MetaDrive Logo" width={20} height={40} className="h-auto" />
                            <p className='text-black font-bold text-2xl'>MetaDrive</p>
                        </div>
                        <p className="max-w-2xl text-gray-600 leading-relaxed">
                            Powering smarter advertising through reliable infrastructure,
                            expert support, and performance-driven solutions.
                        </p>

                        <div className="flex justify-between w-full mt-[-90px] text-[12px] text-gray-400">
                            <span>© 2026 MetaDrive.</span>
                            <span>All rights reserved.</span>
                        </div>
                    </div>

                    {/* Middle Section: Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 pt-10">

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li><Link href="/solutions" className="hover:text-blue-600 transition-colors">Solutions</Link></li>
                                <li><Link href="/how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link></li>
                                <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                                <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Features */}
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-lg">Features</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li><Link href="#" className="hover:text-blue-600">Ad Account Access</Link></li>
                                <li><Link href="#" className="hover:text-blue-600">Budget & Fund Management</Link></li>
                                <li><Link href="#" className="hover:text-blue-600">Campaign Optimization</Link></li>
                                <li><Link href="#" className="hover:text-blue-600">Performance Analytics</Link></li>
                                <li><Link href="#" className="hover:text-blue-600">Expert Support</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-lg">Resources</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li><Link href="/help" className="hover:text-blue-600">Help Center</Link></li>
                                <li><Link href="/faqs" className="hover:text-blue-600">FAQs</Link></li>
                                <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
                                <li><Link href="/terms" className="hover:text-blue-600">Terms & Policies</Link></li>
                            </ul>
                        </div>

                        {/* Get In Touch & Socials */}
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-lg">Get In Touch</h4>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>support@metadrive.com</li>
                                <li>Mon – Fri, 9:00 AM – 6:00 PM</li>
                                <li>24/7 Online Assistance</li>
                            </ul>

                            {/* Social Icons using your SVG names */}
                            <div className="flex gap-4 pt-10">
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Image src="/Frame (1).svg" alt="Facebook" width={32} height={32} />
                                </Link>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Image src="/Frame (2).svg" alt="LinkedIn" width={32} height={32} />
                                </Link>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Image src="/Frame (3).svg" alt="YouTube" width={32} height={32} />
                                </Link>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Image src="/Frame (4).svg" alt="X" width={32} height={32} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Large Banner Text */}
                <div className="w-full flex justify-center pt-12 opacity-30 pointer-events-none">
                    <Image
                        src="/MetaDrive.png"
                        alt="MetaDrive Large Banner"
                        width={1200}
                        height={300}
                        className="w-full max-w-[1400px] h-auto object-contain"
                    />
                </div>
            </footer>
        </>
    )
}
