import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <nav className="fixed top-0 w-full bg-[#B7B7FD]/90 backdrop-blur-sm z-50 shadow-md">
      <div className="px-4 sm:px-6 lg:px-40">
        <div className="flex items-center justify-between h-24">
          {/* Left section: Logo Images */}
          <div className="flex-shrink-0 flex items-center space-x-10 justify-center">
            <Link to="/">
              <img src="/logo/VBIT_LOGO.png" alt="VBIT Logo" className="h-20 w-auto" />
            </Link>
            <Link to="/">
              <img src="/logo/AVK_LOGO.png" alt="AVK Logo" className="h-32 mt-8 w-auto" />
            </Link>
            <Link to="/">
              <img src="/logo/IEEE_LOGO.png" alt="IEEE Logo" className="h-20 w-35" />
            </Link>
          </div>

          {/* Right section: Navigation Items (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              !item.items ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-base text-gray-700 hover:bg-indigo-50"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </div>

          {/* Mobile Menu Toggle (always on the right) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
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
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  {!item.items ? (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center w-full px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
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
