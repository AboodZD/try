
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <footer className="bg-clovermall-gray text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-clovermall-green">C</span>
              </div>
              <span className="ml-2 text-xl font-bold">CLOVERMALL</span>
            </div>
            <p className="text-white/70 text-sm">
              A premium shopping destination with a diverse range of products, 
              from fashion and electronics to groceries and home goods.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/stores" className="text-white/70 hover:text-white transition-colors text-sm">
                  Store Directory
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to receive updates on new arrivals and special offers.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-white/10 border-none focus-visible:ring-clovermall-blue"
                  required
                />
                <Button type="submit" className="ml-2 bg-clovermall-blue hover:bg-clovermall-blue-light">
                  Join
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-white/70 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@clovermall.com</span>
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Shopping Ave, Retail City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div>
            © {new Date().getFullYear()} CLOVERMALL. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0">
            Designed with ♥ for shopping enthusiasts
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
