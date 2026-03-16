"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, CheckCircle2 } from "lucide-react";
import logo from "../../public/logo.png";
import hrimg from "../../public/chiller-roof.jpg";

export default function Hero({ dict }: { dict: any }) {
    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden py-10 md:py-0 pb-24 md:pb-0">
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={hrimg}
                    alt="NewStyle Chiller"
                    fill
                    className="object-cover object-center brightness-[0.35] md:brightness-[0.55]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black md:bg-gradient-to-r md:from-black md:via-black/60 md:to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
                <div className="max-w-6xl">
                    {/* LOGO */}
                    <div className="relative mb-8 md:mb-12 -ml-5 md:-ml-12">
                        <div className="relative w-64 h-20 md:w-[500px] md:h-32">
                            <Image src={logo} alt="NewStyle Logo" fill className="object-contain object-left scale-125 md:scale-150 origin-left" priority />
                        </div>
                    </div>

                    {/* TITLE */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-[1000] leading-[1] md:leading-[0.85] mb-8 uppercase italic">
                        {dict.hero.title1} <br />
                        <span className="text-[#E31E24]">{dict.hero.title2}</span> <br />
                        {dict.hero.title3} <br />
                        <span className="text-white">{dict.hero.title4}</span>
                    </h1>

                    {/* FEATURES */}
                    <div className="mb-10 md:mb-16 max-w-xl">
                        <p className="text-lg md:text-2xl text-white/90 font-bold mb-6 italic">{dict.hero.desc}</p>
                        <div className="space-y-3 md:space-y-4">
                            {dict.hero.features.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-3 md:gap-4">
                                    <CheckCircle2 className="text-green-500 font-bold" size={22} strokeWidth={3} />
                                    <span className="text-base md:text-xl font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CONTACTS */}
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start sm:items-center">
                        <a href="tel:+998912570000" className="bg-[#E31E24] text-white px-10 py-5 rounded-full font-black text-xl md:text-2xl uppercase italic shadow-lg hover:scale-105 active:scale-95 transition-all">
                            {dict.hero.contactBtn}
                        </a>

                        <a href="tel:+998912570000" className="flex items-center gap-4 text-white group cursor-pointer">
                            <div className="bg-white/10 p-3 md:p-4 rounded-full group-hover:bg-[#E31E24] transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xl md:text-3xl font-black group-hover:text-[#E31E24] transition-colors">+998 91 257 00 00</p>
                                <p className="text-xs md:text-sm text-white/50 uppercase font-bold italic">{dict.hero.support}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}