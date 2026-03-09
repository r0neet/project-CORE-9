import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Backend hook goes here later
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Form */}
                    <div className="flex-1 w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-10">
                            Sign Up for <span className="text-accent">Core 9</span>
                        </h2>

                        {submitted ? (
                            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
                                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-accent"
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
                                <h3 className="text-white text-xl font-bold mb-2">
                                    You're all set!
                                </h3>
                                <p className="text-gray-400">
                                    We'll be in touch soon to get you started.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-900 placeholder-gray-500 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-900 placeholder-gray-500 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-900 placeholder-gray-500 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                                />
                                <select
                                    name="interest"
                                    required
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-900 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-accent transition-all text-base appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>
                                        Membership interest...
                                    </option>
                                    <option value="monthly">Month to Month</option>
                                    <option value="6month">6 Month Membership</option>
                                    <option value="annual">1 Year Membership</option>
                                </select>
                                <button
                                    type="submit"
                                    className="bg-accent hover:bg-accent-hover text-primary font-bold px-10 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                            <img
                                src="/2.jpeg"
                                alt="Core 9 Luxury Fitness trainers"
                                className="w-full h-[400px] sm:h-[520px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
