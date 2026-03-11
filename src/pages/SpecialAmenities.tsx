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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-gray-300 space-y-6">
                <h2 className="text-3xl font-black text-white italic">Beyond the Workout</h2>
                <p>
                    Your fitness journey doesn't end when your workout is over. We offer a suite of premium amenities designed to accelerate your recovery and elevate your daily routine. Relax and rejuvenate in our state-of-the-art contrast therapy suites featuring infrared saunas and cold plunges.
                </p>
                <p>
                    Prepare for the day ahead in our immaculate locker rooms, appointed with luxurious towels, rainfall showers, and high-end grooming products. Refuel post-workout at our nutrition bar with custom protein blends and artisanal refreshments. Experience fitness where every detail is considered.
                </p>
            </div>
        </div>
    );
}
