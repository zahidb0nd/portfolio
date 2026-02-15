import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Home, User, Briefcase, Code, Mail, Award } from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, id: 'hero' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Skills', icon: Code, id: 'skills' },
    { name: 'Projects', icon: Briefcase, id: 'projects' },
    { name: 'Certifications', icon: Award, id: 'certifications' },
    { name: 'Contact', icon: Mail, id: 'contact' },
];

const OrbitalNav = () => {
    const [activeTab, setActiveTab] = useState('hero');
    const [isHovered, setIsHovered] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                className={cn(
                    "flex items-center gap-2 p-2 rounded-full",
                    "bg-black/20 backdrop-blur-xl border border-white/10",
                    "shadow-[0_0_15px_rgba(0,0,0,0.1)]",
                    "hover:bg-black/30 transition-colors duration-300"
                )}
            >
                {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    const isHovering = isHovered === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            onMouseEnter={() => setIsHovered(item.id)}
                            onMouseLeave={() => setIsHovered(null)}
                            className="relative px-4 py-2 rounded-full transition-colors duration-300 group"
                            aria-label={item.name}
                        >
                            {/* Active / Hover Background Spotlight */}
                            {(isActive || isHovering) && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className={cn(
                                        "absolute inset-0 rounded-full",
                                        isActive ? "bg-white/10" : "bg-white/5"
                                    )}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30
                                    }}
                                />
                            )}

                            {/* Icon & Label */}
                            <div className="relative z-10 flex items-center gap-2">
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.1 : 1,
                                        y: isActive ? -2 : 0,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <item.icon
                                        size={20}
                                        className={cn(
                                            "transition-colors duration-300",
                                            isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-slate-400 group-hover:text-slate-200"
                                        )}
                                    />
                                </motion.div>

                                {isActive && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        className="text-sm font-medium text-slate-100 whitespace-nowrap overflow-hidden"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </div>

                            {/* Active Dot indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-dot"
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 blur-[1px]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default OrbitalNav;
