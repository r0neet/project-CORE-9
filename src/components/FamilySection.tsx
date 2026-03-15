import React from 'react';

const FamilySection: React.FC = () => {
    return (
        <section id="family-section" className="relative w-full h-screen min-h-[500px] bg-black overflow-hidden flex flex-col items-center">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/family.png"
                    alt="Core 9 Family"
                    className="w-full h-full object-contain object-center pointer-events-none"
                    onError={(e) => {
                        console.error('Core9 Family image failed to load');
                        const target = e.target as HTMLImageElement;
                        // For debugging/fallback, we could set a background color or alternate image here
                        target.style.display = 'none';
                    }}
                />
                {/* Fixed Overlay Gradient - always visible for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content Container - Forced to top area with padding */}
            <div className="relative z-10 w-full flex flex-col items-center pt-24 sm:pt-32 md:pt-44 lg:pt-52 select-none">
                <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white/10 tracking-[0.25em] uppercase text-center drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] px-4 mix-blend-overlay">
                    core9 <span className="text-accent/30 underline decoration-accent/20 underline-offset-[12px] md:underline-offset-[48px]">FAMILY</span>
                </h2>
            </div>
        </section>
    );
};

export default FamilySection;
