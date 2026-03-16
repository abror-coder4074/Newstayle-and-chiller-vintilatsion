"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Instagram } from "lucide-react";

export default function Footer({ dict }: { dict: any }) {
    return (
        <footer className="bg-[#080808] pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic mb-8 leading-none">
                            {dict.footer?.ctaTitle} <br />
                            <span className="text-[#E31E24]">{dict.footer?.ctaSubtitle}</span>
                        </h2>

                        <div className="space-y-6">
                            <a href="tel:+998902570000" className="flex items-center gap-6 group w-fit">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#E31E24] transition-all duration-500">
                                    <Phone className="text-[#E31E24] group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                                        {dict.footer?.phoneLabel}
                                    </p>
                                    <p className="text-white text-xl font-black">+998 91 257 00 00</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#E31E24] transition-all duration-500">
                                    <MapPin className="text-[#E31E24] group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                                        {dict.footer?.addressLabel}
                                    </p>
                                    <p className="text-white text-xl font-black italic uppercase">
                                        {dict.footer?.addressValue}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="https://t.me/NewStylenam" target="_blank" className="p-4 bg-white/5 rounded-xl hover:bg-[#E31E24] transition-all duration-300">
                                <Send size={24} className="text-white" />
                            </a>
                            <a href="https://instagram.com/newstyle_nam" target="_blank" className="p-4 bg-white/5 rounded-xl hover:bg-[#E31E24] transition-all duration-300">
                                <Instagram size={24} className="text-white" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[350px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-red-900/10"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.345!2d71.671!3d41.001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAzLjYiTiA3McKwNDAnMTUuNiJF!5e0!3m2!1suz!2s!4v123456789"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-[10px] md:text-xs font-medium uppercase tracking-[3px] text-center">
                        {dict.footer?.rights}
                    </p>
                    <div className="flex gap-8 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                        <span className="hover:text-[#E31E24] cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-[#E31E24] cursor-pointer transition-colors">Terms of Use</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}