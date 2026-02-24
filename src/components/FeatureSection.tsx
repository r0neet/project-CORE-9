interface CheckItem {
    text: string;
}

interface FeatureSectionProps {
    badge: string;
    heading: string;
    checklist: CheckItem[];
    image: string;
    imageAlt: string;
    reversed?: boolean;
}

export default function FeatureSection({
    badge,
    heading,
    checklist,
    image,
    imageAlt,
    reversed = false,
}: FeatureSectionProps) {
    return (
        <section className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                        } items-center gap-12 lg:gap-20`}
                >
                    {/* Text Content */}
                    <div className="flex-1 w-full">
                        <span className="inline-block border border-olive-light/40 text-olive-light px-5 py-2 rounded-full text-sm font-medium mb-6">
                            {badge}
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                            {heading}
                        </h2>

                        <div className="space-y-6">
                            {checklist.map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-accent"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-[400px] sm:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
