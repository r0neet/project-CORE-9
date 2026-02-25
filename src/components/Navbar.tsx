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
                    <a href="#home" className="flex items-center group relative z-50">
                        <div className="h-28 w-28 bg-white rounded-full transition-all duration-300 group-hover:scale-110 shadow-xl shadow-black/40 overflow-hidden translate-y-4 flex items-center justify-center border-4 border-accent/20">
                            <img
                                src="/branding.jpeg"
                                alt="Core 9 Luxury Fitness Logo"
                                className="w-[120%] h-auto max-w-none object-contain mix-blend-multiply"
                            />
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
