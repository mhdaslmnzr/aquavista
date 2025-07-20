import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Why AquaVista', href: '#why-us' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const CtaButton = () => (
  <Link
    href="https://wa.me/919539333732"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-accent-coral text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 animate-pulse-gentle"
  >
    <MessageCircle size={16} />
    Enquire Now
  </Link>
);

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-primary-turquoise">
          AquaVista
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary-deep-blue transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex">
          <CtaButton />
        </div>
        <button className="md:hidden text-primary-deep-blue">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m4 6h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;