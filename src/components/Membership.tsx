const plans = [
    {
        name: 'Month to\nMonth',
        price: '₹2,500',
        period: '/mo',
        features: ['All classes', 'All member events', 'Full gym access'],
        note: 'Charges every month\nunless you cancel',
        popular: false,
    },
    {
        name: '6 Month\nMembership',
        price: '₹2,000',
        period: '/mo',
        features: ['All classes', 'All member events', 'Full gym access', 'Diet consultation'],
        note: 'Charges every 6 months\nunless you cancel',
        popular: true,
    },
    {
        name: '1 Year\nMembership',
        price: '₹1,500',
        period: '/mo',
        features: ['All classes', 'All member events', 'Full gym access', 'Diet consultation', 'Priority booking'],
        note: 'Charges every year\nunless you cancel',
        popular: false,
    },
];

export default function Membership() {
    return (
        <section id="membership" className="py-24 bg-olive">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block border border-white/30 text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                        Membership
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white italic leading-tight max-w-2xl mx-auto">
                        Crushing your health and fitness goals starts here...
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-3xl p-8 flex flex-col relative transition-all hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'ring-2 ring-accent shadow-xl shadow-accent/10' : ''
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full">
                                    MOST POPULAR
                                </span>
                            )}

                            <h3 className="text-xl font-black text-olive-dark text-center whitespace-pre-line leading-tight mb-6">
                                {plan.name}
                            </h3>

                            <div className="text-center mb-8">
                                <span className="text-4xl font-black text-olive-dark">
                                    {plan.price}
                                </span>
                                <span className="text-olive-dark/60 text-lg">{plan.period}</span>
                            </div>

                            <div className="space-y-4 flex-1 mb-8">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-olive/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg
                                                className="w-4 h-4 text-olive-dark"
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
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-400 text-sm text-center whitespace-pre-line mb-6">
                                {plan.note}
                            </p>

                            <a
                                href="#contact"
                                className={`block text-center font-bold py-3 rounded-full transition-all hover:scale-105 ${plan.popular
                                        ? 'bg-accent text-primary hover:bg-accent-hover'
                                        : 'bg-olive text-white hover:bg-olive-dark'
                                    }`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
