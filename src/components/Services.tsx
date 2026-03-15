"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Services({ dict }: { dict: any }) {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // Brauzerda ishlayotganimizda asosiy URLni olamiz
    setBaseUrl(window.location.origin);
  }, []);

  const servicesItems = dict.services?.items || [];

  return (
    <section id="chillers" className="py-20 bg-[#0D0D0D] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="text-4xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-none text-white">
            {dict.services?.title}
          </h2>
          <p className="text-[#E31E24] font-bold mt-4 uppercase tracking-[3px] italic">
            Industrial Cooling Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {servicesItems.map((item: any, idx: number) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#141414] rounded-3xl overflow-hidden border border-white/5 hover:border-[#E31E24]/40 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent z-10" />

                <img
                  // Absolute path orqali i18n prefiksini (uz/ru) aylanib o'tamiz
                  src={baseUrl ? `${baseUrl}${item.img}` : item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    
                  }}
                />
              </div>

              <div className="p-8 relative z-20 -mt-10">
                <div className="w-12 h-12 bg-[#E31E24] rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-[#E31E24]/20">
                  <CheckCircle2 className="text-white" size={24} strokeWidth={3} />
                </div>

                <h3 className="text-xl md:text-2xl font-black uppercase italic mb-4 text-white group-hover:text-[#E31E24] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-white/50 font-medium leading-relaxed mb-8 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 text-white font-black uppercase italic text-sm tracking-widest group-hover:gap-5 transition-all cursor-pointer">
                  <span>Explore More</span>
                  <ArrowRight size={18} className="text-[#E31E24]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}