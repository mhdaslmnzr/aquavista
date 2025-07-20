import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-deep-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary-turquoise mb-4">
              AquaVista
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your gateway to unforgettable luxury travel experiences in the
              pristine Lakshadweep islands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#why-us"
                  className="hover:text-primary-turquoise transition-colors"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="#packages"
                  className="hover:text-primary-turquoise transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-primary-turquoise transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-primary-turquoise transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-turquoise" />
                <a
                  href="mailto:aslam99955@gmail.com"
                  className="hover:text-primary-turquoise transition-colors"
                >
                  aslam99955@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-turquoise" />
                <a
                  href="https://wa.me/919539333732"
                  className="hover:text-primary-turquoise transition-colors"
                >
                  +91 95393 33732
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-turquoise" />
                <span>Lakshadweep, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Get travel tips & deals direct to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-md bg-sky-800 text-white focus:outline-none focus:ring-2 focus:ring-accent-coral text-sm"
              />
              <button
                type="submit"
                className="bg-accent-coral px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-800 pt-6 text-center text-gray-400 text-xs">
          <p>
            &copy; {new Date().getFullYear()} AquaVista. All rights reserved.
            Personalized bookings via WhatsApp or Email only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;