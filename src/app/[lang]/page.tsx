"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram } from "lucide-react";
import { getDictionary } from "../../lib/dictionary";
import LangSwitcher from "../../components/LangSwitcher";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Partners from "../../components/Partners";
import Footer from "@/src/components/Footer";

export default function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  if (!dict) return <div className="bg-[#0D0D0D] min-h-screen" />;

  return (
    <main className="bg-[#0D0D0D] text-white">
      <div className="fixed top-6 right-6 md:top-10 md:right-12 z-[100]">
        <LangSwitcher />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 w-full md:w-auto md:left-6 md:bottom-10 z-50 bg-black/60 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-t border-white/10 md:border-none py-4 md:py-0"
      >
        <div className="flex md:flex-col items-center justify-center gap-8 md:gap-6">
          <a href="https://instagram.com/newstyle_nam" target="_blank" className="text-white/60 hover:text-[#E31E24] transition-colors">
            <Instagram size={28} />
          </a>
          <a href="https://t.me/NewStylenam" target="_blank" className="text-white/60 hover:text-[#0088cc] transition-colors">
            <Send size={28} />
          </a>
          <div className="hidden md:block w-[1px] h-20 bg-white/10 mx-auto" />
        </div>
      </motion.div>

      <Hero dict={dict} />
      <Services dict={dict} />

      <Partners dict={dict} />
      <Footer dict={dict} />

    </main>
  );
}