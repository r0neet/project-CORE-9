import { useState, useEffect } from 'react';
import { fetchTodayBirthdays, type BirthdayMember } from '../services/membershipApi';

export default function BirthdayBanner() {
    const [birthdays, setBirthdays] = useState<BirthdayMember[]>([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const loadBirthdays = async () => {
            const data = await fetchTodayBirthdays();
            if (data.length > 0) {
                setBirthdays(data);
            }
        };
        loadBirthdays();
    }, []);

    if (birthdays.length === 0 || !isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm sm:max-w-md">
            <div className="bg-gradient-to-r from-accent to-accent-hover rounded-2xl p-1 shadow-2xl overflow-hidden relative">
                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-primary hover:text-white transition-colors z-10 bg-white/20 hover:bg-white/40 rounded-full p-1 cursor-pointer"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="bg-primary/95 backdrop-blur-sm rounded-xl p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl animate-bounce">🎉</span>
                        <h3 className="text-xl font-black text-white italic tracking-wide">Today's Gym Birthdays</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 max-h-72 overflow-y-auto pr-1">
                        {birthdays.map((member, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-accent/30 transition-colors">
                                <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white/10 flex-shrink-0 border-2 border-accent shadow-lg">
                                    {member.photoUrl ? (
                                        <img src={member.photoUrl} alt={member.fullName} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-3xl sm:text-2xl">👤</div>
                                    )}
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h4 className="text-white font-bold text-lg">{member.fullName}</h4>
                                    <p className="text-accent text-sm mt-1 sm:mt-0 font-medium leading-snug">
                                        Happy Birthday from the Core 9 Luxury Gym Family! 🎂
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
