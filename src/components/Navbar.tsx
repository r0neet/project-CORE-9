import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Benefits', href: '#services' },
    { label: 'Membership', href: '#membership' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center font-black text-primary text-lg transition-transform group-hover:scale-110">
                            C9
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-white font-bold text-lg leading-tight block">
                                Core 9
                            </span>
                            <span className="text-gray-400 text-xs tracking-widest uppercase">
                                Luxury Fitness
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Book a Meal Dropdown */}
                        <div className="relative group/meal">
                            <button className="text-gray-300 group-hover/meal:text-white transition-colors text-sm font-medium flex items-center gap-1">
                                Book a Meal
                                <svg className="w-4 h-4 transition-transform group-hover/meal:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full right-0 mt-2 w-40 bg-primary-light border border-primary-border rounded-xl opacity-0 invisible group-hover/meal:opacity-100 group-hover/meal:visible transition-all duration-300 transform translate-y-2 group-hover/meal:translate-y-0 shadow-2xl">
                                <ul className="py-2">
                                    <li>
                                        <a href="#menu" className="block px-4 py-2 text-sm text-gray-300 hover:text-accent hover:bg-white/5 transition-colors">Menu</a>
                                    </li>
                                    <li>
                                        <a href="#cart" className="block px-4 py-2 text-sm text-gray-300 hover:text-accent hover:bg-white/5 transition-colors">Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="bg-accent hover:bg-accent-hover text-primary font-semibold px-6 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
                        >
                            Sign Up
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-primary-light/95 backdrop-blur-md border-t border-primary-border px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="block bg-accent text-primary font-semibold px-6 py-3 rounded-full text-center text-sm mt-4"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}
