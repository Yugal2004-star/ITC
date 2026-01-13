import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl">✈️</span>
              <span className="ml-2 text-xl font-semibold">India Tour Company</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for unforgettable travel experiences around the globe.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => window.open('https://facebook.com', '_blank')}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://twitter.com', '_blank')}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => alert('About Us page')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</button></li>
              <li><button onClick={() => alert('Destinations page')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Destinations</button></li>
              <li><button onClick={() => alert('Tours page')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Tours</button></li>
              <li><button onClick={() => alert('Blog page')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><button onClick={() => alert('Help Center')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Help Center</button></li>
              <li><button onClick={() => alert('Privacy Policy')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => alert('Terms of Service')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</button></li>
              <li><button onClick={() => alert('Contact Us')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <a href="mailto:info@travelworld.com" className="text-primary-foreground/80 hover:text-primary-foreground">info@travelworld.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <a href="tel:+15551234567" className="text-primary-foreground/80 hover:text-primary-foreground">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">123 Travel St, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">Get travel tips and exclusive offers</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2026 TravelWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}