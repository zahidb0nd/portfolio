import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Home, Layers, Hash, Zap, MessageSquare } from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'The Index', icon: Hash, id: 'projects' },
    { name: 'Philosophy', icon: Layers, id: 'about' },
    { name: 'Method', icon: Zap, id: 'skills' },
    { name: 'Dialogue', icon: MessageSquare, id: 'contact' },
];

const OrbitalNav = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isHovered, setIsHovered] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll spy to update active state
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1 // Delay appearance to let Hero load first
                }}
                className={cn(
                    "flex items-center gap-1 p-2 rounded-full",
                    "bg-[#0E0E0E]/80 backdrop-blur-xl border border-white/10",
                    "shadow-[0_0_20px_rgba(0,0,0,0.3)]",
                    "hover:border-white/20 transition-colors duration-500"
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
                            className="relative px-5 py-3 rounded-full transition-all duration-300 group"
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
                            <div className="relative z-10 flex items-center gap-3">
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.1 : 1,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <item.icon
                                        size={18}
                                        className={cn(
                                            "transition-colors duration-300",
                                            isActive ? "text-indigo-400" : "text-white/40 group-hover:text-white/80"
                                        )}
                                    />
                                </motion.div>

                                {isActive && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        className="text-sm font-medium text-white/90 whitespace-nowrap overflow-hidden font-display tracking-wide"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default OrbitalNav;
