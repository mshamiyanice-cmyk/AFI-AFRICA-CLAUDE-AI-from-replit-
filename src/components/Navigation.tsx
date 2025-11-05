import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/who-we-are', label: 'Who We Are' },
    { path: '/services', label: 'Services' },
    { path: '/explore-vision', label: 'Explore Vision' },
    { path: '/join-movement', label: 'Join the Movement' },
    { path: '/support', label: 'Support' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 blur-lg opacity-50 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:opacity-75 transition-opacity" />
                <h1
                  className="relative text-2xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AFI AFRICA
                </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <span
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-yellow-500 ${
                    location === item.path ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {location === item.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-500 transition-colors"
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium tracking-wide transition-colors duration-300 hover:text-yellow-500 py-2 ${
                    location === item.path ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
