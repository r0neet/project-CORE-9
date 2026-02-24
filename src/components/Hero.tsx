export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                    alt="Core 9 Luxury Fitness gym interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
                <div className="animate-fade-in-up">
                    <span className="inline-block bg-accent/10 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                        #1 Premium Gym in Sri Vijaya Puram
                    </span>
                </div>

                <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 opacity-0">
                    Crush your health and{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-olive-light">
                        fitness goals
                    </span>{' '}
                    in no time
                </h1>

                <p className="animate-fade-in-up delay-200 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0">
                    It doesn't matter if your goal is to get stronger, burn fat, or to
                    just stay fit — our world-class coaches will guide you every step of
                    the way.
                </p>

                <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
                    <a
                        href="#contact"
                        className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-accent/30 hover:scale-105 animate-pulse-glow"
                    >
                        Sign Up
                    </a>
                    <a
                        href="#services"
                        className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/5 backdrop-blur-sm"
                    >
                        Explore Benefits
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
