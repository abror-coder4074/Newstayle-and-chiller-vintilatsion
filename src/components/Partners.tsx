"use client";
import { motion } from "framer-motion";
import { Building2, School, Hospital, Factory } from "lucide-react";

export default function Partners({ dict }: { dict: any }) {
    const clients = [
        { name: "Prezident Maktablari", city: "Namangan", icon: <School size={20} /> },
        { name: "Navro'z Mall", city: "Namangan, Farg'ona, Andijon", icon: <Building2 size={20} /> },
        { name: "Globus", city: "Asaka", icon: <Building2 size={20} /> },
        { name: "Axsiket Plaza", city: "Namangan", icon: <Building2 size={20} /> },
        { name: "Mexmash Zavodi", city: "Namangan", icon: <Factory size={20} /> },
        { name: "Oydin Plaza", city: "Namangan", icon: <Building2 size={20} /> },
        { name: "Shedever Plaza", city: "Namangan", icon: <Building2 size={20} /> },
        { name: "Uzbegim Mall", city: "Andijon", icon: <Building2 size={20} /> },
        { name: "IT Park", city: "Andijon", icon: <Building2 size={20} /> },
        { name: "Isbotli Tibbiyot", city: "Andijon", icon: <Hospital size={20} /> },
        { name: "Flagman Mall", city: "Farg'ona", icon: <Building2 size={20} /> },
        { name: "Registon Maktabi", city: "Farg'ona, Toshkent", icon: <School size={20} /> },
        { name: "Karantin Zonalari", city: "Namangan, Toshkent, Samarqand", icon: <Hospital size={20} /> },
    ];

    return (
        <section className="py-24 bg-[#0D0D0D] overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2
                            className="text-4xl md:text-7xl font-[1000] text-white uppercase italic leading-[0.9] tracking-tighter mb-6"
                            dangerouslySetInnerHTML={{ __html: dict.partners?.title }}
                        />
                        <p className="text-white/40 text-lg uppercase tracking-widest font-bold">
                            {dict.partners?.subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-[#E31E24] px-8 py-4 rounded-2xl hidden lg:block shadow-xl shadow-[#E31E24]/20"
                    >
                        <span className="text-white font-black italic text-2xl uppercase">
                            {dict.partners?.projectsCount}
                        </span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-6 bg-[#141414] border border-white/5 rounded-2xl hover:bg-[#1A1A1A] hover:border-[#E31E24]/30 transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-black rounded-xl text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-colors duration-300">
                                    {client.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight mb-1 uppercase tracking-tight">
                                        {client.name}
                                    </h3>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-wider">
                                        {client.city}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-white/20 mt-16 font-medium italic"
                >
                    {dict.partners?.moreInfo}
                </motion.p>
            </div>
        </section>
    );
}