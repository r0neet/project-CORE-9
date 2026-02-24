export default function About() {
    return (
        <section id="about" className="py-24 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block border border-olive-light/40 text-olive-light px-5 py-2 rounded-full text-sm font-medium mb-8">
                    About Core 9 Luxury Fitness
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl mx-auto">
                    Hi! We're a luxury fitness gym in{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive-light to-accent">
                        Sri Vijaya Puram.
                    </span>
                </h2>

                <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
                    Core 9 Luxury Fitness was founded with a single mission — to help the
                    people of Sri Vijaya Puram get fit, stay healthy, and live life on
                    their terms without fitness being an obstacle. Whether you're a
                    beginner or an experienced athlete, our world-class trainers and
                    state-of-the-art equipment will help you achieve your goals in a
                    premium, supportive environment.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                    {[
                        { number: '500+', label: 'Members' },
                        { number: '10+', label: 'Expert Trainers' },
                        { number: '50+', label: 'Classes/Week' },
                        { number: '4.9', label: 'Google Rating' },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-primary-light border border-primary-border rounded-2xl p-6 hover:border-olive/50 transition-all"
                        >
                            <div className="text-3xl sm:text-4xl font-black text-accent mb-1">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
