
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Coffee, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cream py-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-coffee-dark" />
          <span className="font-heading font-bold text-xl text-coffee-dark">Happy Coffee</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors">Home</a>
          <a href="#menu" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors">Menu</a>
          <a href="#about" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors">About</a>
          <a href="#location" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors">Location</a>
          <Button className="bg-coffee-dark hover:bg-coffee-medium">Order Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-coffee-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-cream py-4 px-6 absolute top-full left-0 right-0 shadow-md">
          <div className="flex flex-col gap-4">
            <a href="#" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors py-2">Home</a>
            <a href="#menu" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors py-2">Menu</a>
            <a href="#about" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors py-2">About</a>
            <a href="#location" className="font-medium text-coffee-medium hover:text-coffee-dark transition-colors py-2">Location</a>
            <Button className="bg-coffee-dark hover:bg-coffee-medium w-full">Order Now</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
