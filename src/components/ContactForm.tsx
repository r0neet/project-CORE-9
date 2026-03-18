import { useState } from 'react';
import { submitMembership } from '../services/membershipApi';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        membershipPlan: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [dateFocused, setDateFocused] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        
        const today = new Date();
        const joinDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        
        const payload = {
            ...formData,
            photoUrl: "",
            joinDate,
            memberId: crypto.randomUUID()
        };

        await submitMembership(payload);
        
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ fullName: '', email: '', phoneNumber: '', dateOfBirth: '', membershipPlan: '' });
        }, 3000);
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
                                    name="fullName"
                                    placeholder="Full Name"
                                    required
                                    value={formData.fullName}
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
                                    name="phoneNumber"
                                    placeholder="Phone number"
                                    required
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-900 placeholder-gray-500 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                                />
                                <div className="relative w-full">
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        required
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        onFocus={() => setDateFocused(true)}
                                        onBlur={() => setDateFocused(false)}
                                        className={`w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-accent transition-all text-base ${
                                            !formData.dateOfBirth && !dateFocused ? 'text-transparent' : 'text-gray-900'
                                        }`}
                                    />
                                    {!formData.dateOfBirth && !dateFocused && (
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base">
                                            DOB
                                        </div>
                                    )}
                                </div>
                                <select
                                    name="membershipPlan"
                                    required
                                    value={formData.membershipPlan}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-900 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-accent transition-all text-base appearance-none cursor-pointer"
                                    style={{ color: formData.membershipPlan === "" ? '#6b7280' : '#111827' }}
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
