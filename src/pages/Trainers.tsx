import FeatureSection from '../components/FeatureSection';

export default function Trainers() {
    return (
        <div className="pt-24 pb-16">
            <FeatureSection
                badge="Expert Trainers"
                heading="World-Class Coaching for Your Fitness Journey"
                checklist={[
                    { text: 'Certified personal trainers' },
                    { text: 'Customized workout programming' },
                    { text: 'Nutritional guidance and support' },
                ]}
                image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                imageAlt="Group fitness trainers"
                objectFit="cover"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
                <h2
                    className="text-4xl md:text-6xl font-black italic uppercase tracking-widest text-[#4ade80] mb-12"
                    style={{
                        textShadow: '0 0 10px rgba(74, 222, 128, 0.5), 0 0 20px rgba(74, 222, 128, 0.3), 0 0 30px rgba(74, 222, 128, 0.2)',
                    }}
                >
                    Let's Meet Our Trainers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5 transition-all hover:border-white/20">
                            <div className="aspect-[4/5] w-full bg-[#111] overflow-hidden">
                                <img
                                    src={`https://images.unsplash.com/photo-${[
                                        '1567013127542-490d1b5e51f4',
                                        '1534438327276-14e5300c3a48',
                                        '1594381898411-846e7d193883',
                                        '1549476464-37392f717551',
                                        '1517836357463-d25dfeac3438'
                                    ][i - 1]}?w=800&q=80`}
                                    alt={`Trainer ${i}`}
                                    className="h-full w-full object-cover opacity-100 lg:opacity-60 transition-transform duration-500 lg:group-hover:scale-110 lg:group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="text-2xl font-black text-white italic mb-2 tracking-tighter">Trainer Name</h3>
                                <p className="text-gray-400 text-sm font-mono uppercase tracking-[0.2em] mb-4">Lead Strength Coach</p>
                                <div className="h-auto lg:h-0 overflow-hidden transition-all duration-300 lg:group-hover:h-24">
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Specializing in high-performance conditioning and metabolic structural training. Dedicated to pushing your boundaries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

