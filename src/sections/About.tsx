const About = () => {
    return (
        <section id="about" className="section-padding container-px bg-white">
            <div className="max-w-4xl mx-auto">
                <span className="block text-sm font-semibold tracking-widest text-brand-500 uppercase mb-8">
                    About Me
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                    <span className="text-slate-400">Final Year BCA Student</span><br />
                    at BMS College of Commerce and Management.
                </h2>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                        I am a passionate web developer and final year BCA student specializing in building scalable, high-performance web applications. My academic journey at BMS College has provided me with a strong foundation in computer science principles, which I apply to modern web development challenges.
                    </p>
                    <p>
                        I focus on React, Next.js, and TypeScript to create clean, efficient, and user-friendly interfaces. I am constantly learning and exploring new technologies to enhance my skills and deliver better solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
