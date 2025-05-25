
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/products';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, this would navigate to search results page
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isScrolled ? 'bg-clovermall-green' : 'bg-white'
          }`}>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-white' : 'text-clovermall-green'
            }`}>C</span>
          </div>
          <span className={`ml-2 text-xl font-bold ${
            isScrolled ? 'text-clovermall-green' : 'text-white'
          }`}>CLOVERMALL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {categories.slice(0, 5).map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className={`text-sm font-medium hover:text-clovermall-blue ${
                isScrolled ? 'text-clovermall-gray' : 'text-white'
              }`}
            >
              {category.name}
            </Link>
          ))}
          <Link 
            to="/stores" 
            className={`text-sm font-medium hover:text-clovermall-blue ${
              isScrolled ? 'text-clovermall-gray' : 'text-white'
            }`}
          >
            Stores
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
            <Input 
              type="text"
              placeholder="Search products..."
              className="w-40 lg:w-64 h-9 bg-white/20 border-none focus-visible:ring-clovermall-blue"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="sm" 
              variant="ghost" 
              className="absolute right-0"
            >
              <Search size={18} className={isScrolled ? 'text-clovermall-gray' : 'text-white'} />
            </Button>
          </form>
          
          <Button variant="ghost" size="icon">
            <ShoppingBag size={20} className={isScrolled ? 'text-clovermall-gray' : 'text-white'} />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            <Menu size={24} className={isScrolled ? 'text-clovermall-gray' : 'text-white'} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-clovermall-green z-50 p-4">
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <X size={24} className="text-white" />
            </Button>
          </div>
          
          <div className="mt-10 flex flex-col space-y-6 items-center">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`}
                className="text-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link 
              to="/stores" 
              className="text-white text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Stores
            </Link>
            
            <form onSubmit={handleSearch} className="w-full mt-6">
              <div className="relative">
                <Input 
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-10 bg-white/20 text-white border-none focus-visible:ring-clovermall-blue placeholder:text-white/70"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full"
                >
                  <Search size={18} className="text-white" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
