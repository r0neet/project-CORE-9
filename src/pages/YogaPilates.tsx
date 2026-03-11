import FeatureSection from '../components/FeatureSection';

export default function YogaPilates() {
    return (
        <div className="pt-24 pb-16">
            <FeatureSection
                badge="Yoga & Pilates"
                heading="Find Balance, Flexibility, and Core Strength"
                checklist={[
                    { text: 'Vinyasa, Hatha, and restorative yoga' },
                    { text: 'Mat and reformer Pilates classes' },
                    { text: 'Expert instructors in a serene environment' },
                ]}
                image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                imageAlt="Yoga and Pilates classes"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-gray-300 space-y-6">
                <h2 className="text-3xl font-black text-white italic">Mind and Body Harmony</h2>
                <p>
                    Our dedicated mind-body studio provides a tranquil sanctuary away from the high-energy gym floor. Immerse yourself in our comprehensive yoga and Pilates programs designed to improve flexibility, build core stability, and cultivate mental clarity.
                </p>
                <p>
                    Our scheduled classes cater to all levels, from beginners discovering their practice to experienced practitioners seeking advanced challenges. Enhance your recovery and perfect your movement mechanics in an environment optimized for focus and flow.
                </p>
            </div>
        </div>
    );
}
