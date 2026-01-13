import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl">✈️</span>
            <span className="ml-2 text-xl font-semibold text-deeppink">India Tour Company</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('destinations')} className="text-foreground hover:text-primary transition-colors">Destinations</button>
            <button onClick={() => scrollToSection('tours')} className="text-foreground hover:text-primary transition-colors">Tours</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-foreground hover:text-primary transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
              Book Now
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('destinations')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">Destinations</button>
            <button onClick={() => scrollToSection('tours')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">Tours</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">Contact</button>
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 text-foreground hover:text-primary transition-colors border rounded-lg">
                Sign In
              </button>
              <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}