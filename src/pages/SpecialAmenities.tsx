import FeatureSection from '../components/FeatureSection';

export default function SpecialAmenities() {
    return (
        <div className="pt-24 pb-16">
            <FeatureSection
                badge="Special Amenities"
                heading="Luxury Facilities for Ultimate Recovery"
                checklist={[
                    { text: 'Infrared saunas and cold plunge pools' },
                    { text: 'Luxury locker rooms with premium products' },
                    { text: 'Smoothie bar and nutrition lounge' },
                ]}
                image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                imageAlt="Luxury gym amenities"
                reversed
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <h2 className="text-3xl font-black text-white italic mb-10 text-center">Beyond the Workout</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group overflow-hidden rounded-xl">
                        <img src="/ami1.png" alt="Cafeteria" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Cafeteria</h3>
                                <p className="text-gray-300">Refuel post-workout at our premium nutrition bar with custom protein blends and artisanal refreshments.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative group overflow-hidden rounded-xl">
                        <img src="/ami2.jpg" alt="Storage" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Storage</h3>
                                <p className="text-gray-300">A dedicated space to keep your personal items safely and securely while you focus on your workout.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-xl">
                        <img src="/ami3.jpg" alt="Steam Room" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Steam Room</h3>
                                <p className="text-gray-300">Relax and rejuvenate in our state-of-the-art steam rooms designed to accelerate your recovery.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-xl">
                        <img src="/ami4.jpg" alt="Ice Bath" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Ice Bath</h3>
                                <p className="text-gray-300">Experience premium contrast therapy suites featuring cold plunges to elevate your daily routine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
