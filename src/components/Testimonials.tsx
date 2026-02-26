import { motion } from 'framer-motion';

const testimonials = [
    {
        stars: 5,
        quote: "Core 9 is a game-changer! The yoga and Zumba classes are amazing, and the steam bath and ice bath are the perfect way to relax and recover. The equipment is top-notch and perfectly aligned. Spotless gym, super friendly staff. Highly recommend!",
        name: 'Deepak Gj',
        avatar: 'DG',
    },
    {
        stars: 5,
        quote: "This gym has everything I need - modern equipment, clean facilities, and a fantastic atmosphere for training. The workout floor areas are excellent for functional workouts and the staff is always friendly and helpful. Join now!!",
        name: 'Gaurish Nath',
        avatar: 'GN',
    },
    {
        stars: 5,
        quote: "Core 9 is an amazing gym with good facilities. The owner is very humble and supportive during the workout session. I took a day pass and it was totally worth it. Best experience in Port Blair!",
        name: 'Vishal Raj Chauhan',
        avatar: 'VC',
    },
    {
        stars: 5,
        quote: "Every had a very good experience there and it's totally worth it. The ambience and hospitality which they provide are at a very reasonable price. I really love this place, everyone should check this out.",
        name: 'Arpit Majeji',
        avatar: 'AM',
    },
    {
        stars: 5,
        quote: "It was an amazing experience and I enjoyed the workout. It's a proper gym, the best I have ever seen in Port Blair. High quality machines and great vibes.",
        name: 'RAKIB Khan',
        avatar: 'RK',
    },
    {
        stars: 5,
        quote: "The best in the island ... wow ... Core facilities, best equipment, luxury environment altogether. A must visit place for all fitness aspirators in the islands!",
        name: 'rp siddharth',
        avatar: 'RS',
    },
    {
        stars: 5,
        quote: "It's the best place for fitness for everyone... They provide lots of great things. Great hospitality and luxury equipment for all. I love this place truly. Highly recommended!",
        name: 'Sumit Roy',
        avatar: 'SR',
    }
];

function StarIcon() {
    return (
        <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

export default function Testimonials() {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            {/* Background elements for depth */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                    What Our Members <span className="text-lime-400">Say</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                    Real reports from real people at Port Blair's premier luxury fitness destination.
                </p>
            </div>

            <div className="flex relative items-center">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{
                        x: [0, "-50%"]
                    }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    className="flex gap-8 px-4"
                >
                    {/* Duplicate the testimonials array to create a seamless loop */}
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[350px] md:w-[450px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between hover:border-lime-400/50 transition-colors group cursor-default"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: t.stars }).map((_, j) => (
                                        <StarIcon key={j} />
                                    ))}
                                </div>
                                <p className="text-white/90 text-lg md:text-xl italic leading-relaxed mb-8">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-lg">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-lime-400 transition-colors">
                                        {t.name}
                                    </h4>
                                    <p className="text-white/40 text-sm">Verified Member</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
