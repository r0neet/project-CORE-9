import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Services from '../components/Services';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Membership from '../components/Membership';
import FamilySection from '../components/FamilySection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Services />

      {/* Feature: Group Fitness Classes */}
      <FeatureSection
        badge="Trainers"
        heading="Get fit while having fun with our group fitness classes"
        checklist={[
          { text: 'Just 30 minutes long' },
          { text: 'Warm up & workout included' },
          { text: 'Fun is guaranteed' },
        ]}
        image="/3.jpeg"
        imageAlt="Group fitness class at Core 9 Luxury Fitness"
        objectFit="contain"
      />

      {/* Feature: Strength Training */}
      <FeatureSection
        badge="Strength Training"
        heading="Build real strength with premium equipment and expert guidance"
        checklist={[
          { text: 'State-of-the-art equipment' },
          { text: 'Personalized programming' },
          { text: 'Track your progress' },
        ]}
        image="/4.jpeg"
        imageAlt="Strength training at Core 9 Luxury Fitness"
        reversed
      />

      {/* Feature: Personal Training */}
      <FeatureSection
        badge="Personal Training"
        heading="One-on-one coaching tailored to your goals"
        checklist={[
          { text: 'Certified expert trainers' },
          { text: 'Custom workout plans' },
          { text: 'Nutrition guidance included' },
          ]}
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
        imageAlt="Personal training at Core 9 Luxury Fitness"
      />

      <Testimonials />
      <About />
      <Membership />
      <FamilySection />
      <ContactForm />
    </>
  );
}
