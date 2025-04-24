'use client'
import { useState } from 'react';
import { motion } from "framer-motion";
import { BotIcon, Palette, Code, Server, Link, Paintbrush } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "FRONTEND DEVELOPMENT",
        description: "Crafting responsive and interactive web applications using React, Next.js, and TypeScript.",
        icon: Code,
        category: "Development",
        skillLevel: 80
    },
    {
        id: 2,
        title: "BACKEND DEVELOPMENT",
        description: "Building robust server-side applications and APIs using Node.js, Python, and databases.",
        icon: Server,
        category: "Development",
        skillLevel: 75
    },
    {
        id: 3,
        title: "BLOCKCHAIN DEVELOPMENT",
        description: "Developing secure smart contracts and blockchain-integrated applications.",
        icon: Link,
        category: "Development",
        skillLevel: 40
    },
    {
        id: 4,
        title: "ROBOTICS ENGINEERING",
        description: "Designing, programming, and integrating robotic systems for automation, control, and hardware interfacing in real-world environments.",
        icon: BotIcon,
        category: "Engineering",
        skillLevel: 50
    },
    {
        id: 5,
        title: "UI DESIGN",
        description: "Crafting clean, intuitive, and modern user interfaces with a strong focus on usability and efficiency.",
        icon: Palette,
        category: "Design",
        skillLevel: 70
    },
    {
        id: 6,
        title: "ANIMATION",
        description: "Creating short, engaging animations for social media and digital content using lightweight tools and creative techniques.",
        icon: Paintbrush,
        category: "Animation",
        skillLevel: 40
    }
];

const getSkillColor = (level: number): string => {
    return level <= 40 ? "#3b82f6" :
           level <= 70 ? "#2563eb" :
           "#1d4ed8";
};

const getSkillLevel = (level: number): string => {
    return level <= 40 ? "Beginner" :
           level <= 70 ? "Intermediate" :
           "Expert";
};

const Services = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-5"
                >
                    <h1 className="text-2xl md:text-3xl font-clashbold text-white mb-6 tracking-tight">
                        Services
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🔥</span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
                    <p className="text-[#FFFFFF99] text-base md:text-l">
                        Specialized in multiple domains of software and hardware engineering
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const isHovered = hoveredId === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: service.id * 0.05 }}
                                whileHover={{
                                    scale: 1.02,
                                    translateY: -5,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                                }}
                                onMouseEnter={() => setHoveredId(service.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="group relative bg-[#130b1c]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-sky-500" strokeWidth={1.5} />
                                        </span>

                                        <div className="relative w-16 h-16 flex items-center justify-center">
                                            <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                                                <path
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="#ffffff20"
                                                    strokeWidth="2"
                                                />
                                                <motion.path
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke={getSkillColor(service.skillLevel)}
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    initial={{ strokeDasharray: "0 100" }}
                                                    animate={isHovered ? {
                                                        strokeDasharray: `${service.skillLevel} ${100 - service.skillLevel}`
                                                    } : { strokeDasharray: "0 100" }}
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                />
                                            </svg>
                                            <span
                                                className="text-xs font-bold absolute"
                                                style={{ color: getSkillColor(service.skillLevel) }}
                                            >
                                                {service.skillLevel}%
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-white text-xl font-clashbold mb-4 tracking-wide">
                                        {service.title}
                                    </h3>

                                    <p className="text-[#FFFFFF99] text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-[10px] text-center uppercase font-medium tracking-wider"
                                        style={{ color: getSkillColor(service.skillLevel) }}
                                    >
                                        {getSkillLevel(service.skillLevel)}
                                    </motion.div>
                                </div>

                                <div className="h-[2px] w-full bg-gradient-to-r from-sky-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
