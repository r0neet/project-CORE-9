import { CometCard } from './ui/comet-card';

const services = [
    {
        title: 'Group Fitness Classes',
        subtitle: 'Group Fitness',
        id: '#GF-01',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    },
    {
        title: 'Strength Training',
        subtitle: 'Strength',
        id: '#ST-02',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    },
    {
        title: 'Personal Training',
        subtitle: '1-on-1 coaching',
        id: '#PT-03',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    },
    {
        title: 'Member Only Events',
        subtitle: 'Events',
        id: '#ME-04',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-16 italic">
                    We offer something for everybody
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-center">
                            <CometCard>
                                <button
                                    type="button"
                                    className="flex w-full sm:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 transition-all hover:saturate-100 md:p-4"
                                    aria-label={`View ${service.title}`}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transform: "none",
                                        opacity: 1,
                                    }}
                                >
                                    <div className="mx-2 flex-1">
                                        <div className="relative mt-2 aspect-[3/4] w-full">
                                            <img
                                                loading="lazy"
                                                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                                                alt={service.title}
                                                src={service.image}
                                                style={{
                                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                    opacity: 1,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                                        <div className="text-xs">{service.subtitle}</div>
                                        <div className="text-xs text-gray-300 opacity-50">{service.id}</div>
                                    </div>
                                </button>
                            </CometCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
