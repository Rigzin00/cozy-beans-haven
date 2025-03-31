
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="font-heading font-bold text-xl">Happy Coffee</span>
            </div>
            <p className="text-cream/80 mb-6">
              A cozy place where happiness is brewed daily. Join us for great coffee, delicious treats, and warm vibes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream hover:text-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream hover:text-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream hover:text-terracotta transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-terracotta transition-colors">Home</a></li>
              <li><a href="#menu" className="text-cream/80 hover:text-terracotta transition-colors">Menu</a></li>
              <li><a href="#about" className="text-cream/80 hover:text-terracotta transition-colors">About Us</a></li>
              <li><a href="#location" className="text-cream/80 hover:text-terracotta transition-colors">Location</a></li>
              <li><a href="#" className="text-cream/80 hover:text-terracotta transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-cream/80 mb-4">
              Subscribe to our newsletter for updates, promotions, and coffee tips.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-coffee-medium/50 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-terracotta text-white" 
              />
              <button className="bg-terracotta px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-coffee-medium/30 pt-6 text-center text-cream/60 text-sm">
          <p>© {new Date().getFullYear()} Happy Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
