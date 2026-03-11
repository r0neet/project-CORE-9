import FeatureSection from '../components/FeatureSection';

const equipmentList = [
    {
        name: "Cardio Line Up",
        type: "High-Intensity Cardio",
        description: "Cardio Line Up for high-intensity interval training.",
        images: ["/eq2.png", "/eq1.png"],
    },
    {
        name: "Precision Performance",
        type: "Featured Gear",
        description: "The Smith Machine provides a versatile guided barbell system for controlled movements and maximum safety.",
        image: "/eq3.png",
        featured: true,
    },
    {
        name: "Leg Trainers",
        type: "Lower Body Focus",
        description: "Specialized machines designed for maximum lower body isolation and growth.",
        images: ["/eq2.png", "/eq10.png"],
    },
    {
        name: "Push Pull Station",
        type: "Functional & Iso",
        description: "Multi-functional system for endless exercise variations.",
        image: "/eq4.png",
    },
    {
        name: "Premium Dumbbells",
        type: "Free Weights",
        description: "Comprehensive set for unilateral and stabilization training.",
        image: "/eq5.png",
    },
    {
        name: "Deadlift Stage",
        type: "Strength & Power",
        description: "Professional-grade lifting platform for heavy deadlifts and Olympic movements.",
        image: "/eq6.png",
    },
    {
        name: "Elliptical Trainer",
        type: "Low-Impact Cardio",
        description: "Full-body aerobic workout with minimal joint stress.",
        image: "/eq7.png",
    },
    {
        name: "Concept2 Rower",
        type: "Full-Body Conditioning",
        description: "High-intensity machine for stamina and pulling power.",
        image: "/eq8.png",
    },
    {
        name: "Lat Pulldown Machine",
        type: "Back Strength",
        description: "Smooth adjustable resistance for back and core targeting.",
        image: "/eq9.png",
    },

];

export default function Equipment() {
    return (
        <div className="pt-24 pb-16">
            <FeatureSection
                badge="Premium Equipment"
                heading="Train with the Best Gear in the Industry"
                checklist={[
                    { text: 'Top-tier strength and cardio machines' },
                    { text: 'Extensive free weight selection' },
                    { text: 'Specialized functional training rigs' },
                ]}
                image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
                imageAlt="Premium gym equipment"
                reversed
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white italic mb-4">Our Arsenal</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We've outfitted our facility with advanced, biomechanically superior equipment designed to elevate your performance to the next level.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-24">
                    {equipmentList.map((eq, index) => {
                        if (eq.featured) {
                            return (
                                <section key={index} className="w-full space-y-8 animate-in fade-in duration-1000">
                                    <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden relative group">
                                        <img 
                                            src={eq.image} 
                                            alt={eq.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-2xl">
                                            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">Spotlight Gear</span>
                                            <h3 className="text-4xl md:text-6xl font-black text-white italic mb-4">{eq.name}</h3>
                                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">{eq.description}</p>
                                        </div>
                                    </div>
                                </section>
                            );
                        }
                        
                        return (
                            <article key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
                                <div className={`w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    {eq.images ? (
                                        <div className="flex w-full h-full gap-2 md:gap-4">
                                            {eq.images.map((img, i) => (
                                                <div key={i} className="flex-1 w-full h-full overflow-hidden rounded-xl">
                                                    <img 
                                                        src={img} 
                                                        alt={`${eq.name} ${i + 1}`}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <img
                                            src={eq.image}
                                            alt={eq.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    )}
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg pointer-events-none z-10">
                                        {eq.type}
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <div className="flex flex-col mb-4">
                                        <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2">Featured Equipment</span>
                                        <h3 className="text-3xl md:text-4xl font-black text-white italic">{eq.name}</h3>
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">{eq.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
