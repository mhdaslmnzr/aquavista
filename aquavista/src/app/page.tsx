'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Leaf,
  Mail,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

// --- Reusable Components ---

const Section = ({
  id,
  children,
  className = '',
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">{children}</div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
    {children}
  </h2>
);

const CtaButton = ({
  href,
  children,
  className = '',
  icon,
}: {
  href:string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-3 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${className}`}
  >
    {icon}
    {children}
  </Link>
);

// --- Gallery Data & Components ---

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    category: 'diving',
    alt: 'A diver explores a vibrant coral reef.',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    category: 'islands',
    alt: 'A pristine white sand beach with turquoise water.',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    category: 'snorkeling',
    alt: 'Snorkelers swim in crystal-clear water.',
  },
  {
    src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80',
    category: 'culture',
    alt: 'Local cultural artifacts on display.',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    category: 'diving',
    alt: 'Close-up of a scuba diver with professional gear.',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    category: 'islands',
    alt: 'A dramatic sunset over the ocean islands.',
  },
];

const galleryFilters = [
  { label: 'All', value: 'all' },
  { label: 'Diving', value: 'diving' },
  { label: 'Islands', value: 'islands' },
  { label: 'Snorkeling', value: 'snorkeling' },
  { label: 'Culture', value: 'culture' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <>
      <div className="flex justify-center gap-2 md:gap-4 mb-10">
        {galleryFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
              activeFilter === filter.value
                ? 'bg-primary-turquoise text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {filteredImages.map((img, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Discover Lakshadweep
            <span className="block text-primary-turquoise mt-2">
              with AquaVista
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl font-lato font-light">
            Dive into an island paradise. Tailor-made tours & unforgettable
            adventures await.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <CtaButton
              href="https://wa.me/919539333732"
              className="bg-accent-coral hover:bg-orange-600"
              icon={<MessageCircle />}
            >
              Enquire on WhatsApp
            </CtaButton>
            <CtaButton
              href="mailto:aslam99955@gmail.com"
              className="bg-primary-deep-blue hover:bg-sky-800"
              icon={<Mail />}
            >
              Email Us
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Section id="why-us" className="bg-white">
        <SectionTitle>Why Choose AquaVista?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <ShieldCheck className="w-12 h-12 text-primary-turquoise" />,
              title: 'PADI Certified',
              text: 'Your safety is our priority. Our instructors are PADI-certified professionals.',
            },
            {
              icon: <Award className="w-12 h-12 text-primary-turquoise" />,
              title: 'Local Experts',
              text: 'Get an authentic experience with guides who know Lakshadweep by heart.',
            },
            {
              icon: <Users className="w-12 h-12 text-primary-turquoise" />,
              title: 'Custom Packages',
              text: 'We tailor every tour to your interests for a truly personal adventure.',
            },
            {
              icon: <Leaf className="w-12 h-12 text-primary-turquoise" />,
              title: 'Eco-Friendly',
              text: 'We are committed to sustainable tourism to preserve the beauty of the islands.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-8 bg-background-soft-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 font-lato">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Popular Packages Section */}
      <Section id="packages" className="bg-background-soft-white">
        <SectionTitle>Popular Packages</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
              title: 'Beginner Scuba Course',
              desc: 'Your first breath underwater! Get PADI certified with our expert instructors.',
              price: 'From ₹6,999',
            },
            {
              img: 'https://images.unsplash.com/photo-1574953948-3472743586f4?auto=format&fit=crop&w=800&q=80',
              title: 'Island Hopping Tour',
              desc: 'Explore the culture, cuisine, and hidden gems of multiple islands.',
              price: 'From ₹4,999',
            },
            {
              img: 'https://images.unsplash.com/photo-1593369457993-4e339a0f0a88?auto=format&fit=crop&w=800&q=80',
              title: 'Snorkeling Safari',
              desc: 'Witness the vibrant marine life in crystal-clear lagoons. Fun for all ages.',
              price: 'From ₹2,999',
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                src={pkg.img}
                alt={pkg.title}
                width={800}
                height={600}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 font-lato">{pkg.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary-turquoise">
                    {pkg.price}
                  </span>
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 text-primary-deep-blue font-bold hover:text-primary-turquoise transition-colors"
                  >
                    Enquire <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" className="bg-white">
        <SectionTitle>Glimpses of Paradise</SectionTitle>
        <Gallery />
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="bg-accent-sandy-beige">
        <SectionTitle>What Our Guests Say</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            {
              img: 'https://randomuser.me/api/portraits/women/44.jpg',
              name: 'Priya S.',
              text: 'An unforgettable experience! AquaVista’s team was so friendly and professional. They handled everything perfectly for our honeymoon.',
            },
            {
              img: 'https://randomuser.me/api/portraits/men/32.jpg',
              name: 'Arjun M.',
              text: 'Best diving trip ever. The instructors were knowledgeable and made us feel safe. Highly recommend AquaVista for any adventure in Lakshadweep!',
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <Image
                src={t.img}
                alt={`Photo of ${t.name}`}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 border-4 border-primary-turquoise"
              />
              <p className="text-lg text-gray-600 mb-4 font-lato italic">
                “{t.text}”
              </p>
              <h4 className="font-bold text-gray-800 text-lg">– {t.name}</h4>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white">
        <SectionTitle>Plan Your Adventure</SectionTitle>
        <div className="max-w-3xl mx-auto bg-background-soft-white p-8 md:p-12 rounded-xl shadow-2xl">
          <p className="text-center text-lg text-gray-600 mb-8">
            Have questions or ready to book? Send us a message, and we’ll get
            back to you with a personalized plan.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-turquoise focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-turquoise focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message (e.g., interested packages, travel dates)"
              rows={5}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-turquoise focus:outline-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-primary-turquoise text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Enquiry
              </button>
            </div>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              For a faster response, contact us directly:
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://wa.me/919539333732"
                className="font-bold text-primary-deep-blue hover:text-primary-turquoise transition-colors flex items-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a
                href="mailto:aslam99955@gmail.com"
                className="font-bold text-primary-deep-blue hover:text-primary-turquoise transition-colors flex items-center gap-2"
              >
                <Mail size={20} /> Email
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}