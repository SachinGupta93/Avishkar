import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Team', href: '/team' },
    {
      name: 'More',
      items: [
        { name: 'FAQs', href: '/faqs' },
        { name: 'Resources', href: '/resources' },
        { name: 'Sample', href: '/sample' }
      ],
      href: '/resources'
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0077B6] z-50 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Left section: Logo Images - consistent spacing */}
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <Link to="/" className="flex items-center">
              <img 
                src={getImagePath('/logo/VBIT_LOGO.png')} 
                alt="VBIT Logo" 
                className="h-8 sm:h-12 lg:h-16 w-auto object-contain"
              />
            </Link>
            <Link to="/" className="flex items-center">
              <img 
                src={getImagePath('/logo/AVK_LOGO.png')} 
                alt="AVK Logo" 
                className="h-8 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
            <Link to="/" className="flex items-center">
              <img 
                src={getImagePath('/logo/IEEE_LOGO.png')} 
                alt="IEEE Logo" 
                className="h-8 sm:h-12 lg:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right section: Navigation Items (Desktop) */}
          <div className="hidden min-[1128px]:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) =>
              !item.items ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-black px-3 py-2 rounded-md text-base lg:text-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-white hover:text-black px-3 py-2 rounded-md text-base lg:text-lg font-medium transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#6eb7df] rounded-md shadow-lg py-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={handleNavClick}
                          className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-[#86c3e4] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="min-[1128px]:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="min-[1128px]:hidden"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 bg-[#0077B6]/90 backdrop-blur-sm">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  {!item.items ? (
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-black hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-white hover:text-black hover:bg-white/10 transition-colors"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-4 rounded-md mt-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={handleNavClick}
                              className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-white/10 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
