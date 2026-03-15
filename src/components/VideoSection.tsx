import { useRef, useEffect } from 'react';

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(error => {
                        console.log("Video autoplay failed (possibly due to browser policy):", error);
                    });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.2 } // Play when at least 20% visible
        );

        observer.observe(video);

        return () => {
            if (video) observer.unobserve(video);
        };
    }, []);

    return (
        <section id="experience" className="py-20 bg-primary px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Experience <span className="text-accent">Core 9</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get a glimpse into the luxury, intensity, and community that defines our movement.
                        Your transformation starts here.
                    </p>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-gray-900 aspect-video flex items-center justify-center transition-all duration-500 hover:border-accent/30">
                    <video
                        ref={videoRef}
                        src="https://res.cloudinary.com/dsrquoqqm/video/upload/v1773593363/IMG_6049_1_eccdl1.mp4"
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />


                    {/* Subtle Overlay to ensure text readability if any is added later */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/20 rounded-tl-2xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/20 rounded-br-2xl pointer-events-none" />

                    {/* Quality Indicator */}
                    <div className="absolute bottom-6 right-6 z-10 hidden md:block">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                            Premium Experience
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
