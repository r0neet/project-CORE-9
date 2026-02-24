const testimonials = [
    {
        stars: 5,
        quote:
            '"Since joining Core 9, I\'ve lost 12kgs and I\'m getting stronger every day. The trainers here are incredible!"',
        name: 'Rahul S.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        stars: 5,
        quote:
            '"I\'ve gotten so much stronger after joining Core 9. My deadlift increased by 30kg in just 3 months. Highly recommend!"',
        name: 'Priya M.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        stars: 5,
        quote:
            '"While I am passionate about health and fitness, this gym is more like a community to me than anything! Best gym in the islands."',
        name: 'Arun K.',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
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
        <section className="py-24 bg-olive">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-4">
                    What our members say
                </h2>
                <p className="text-white/70 text-center text-lg mb-16 max-w-2xl mx-auto">
                    Real results from real people at Core 9 Luxury Fitness
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-olive-dark/30 border border-olive-light/20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center hover:border-olive-light/40 transition-all hover:-translate-y-1"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <StarIcon key={j} />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/90 text-base leading-relaxed mb-6 flex-1">
                                {t.quote}
                            </p>

                            {/* Avatar */}
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-olive-light/40 mb-2"
                            />
                            <span className="text-white/70 text-sm font-medium">
                                {t.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
