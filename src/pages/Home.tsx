import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/background/bg.jpeg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Avishkar 2K2'5
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-12"
            >
              Elevate Your Ideas
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors"
              >
                Register
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
              Event Starts In
            </h2>
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img 
            src="/logo/AVK_LOGO.png" 
            alt="AVK Logo Background" 
            className="w-[600px] object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Avishkar</h2>
            <p className="text-3xl  text-gray-600 max-w-6xl mx-auto text-justify">
              Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award' in recognition of conducting Avishkar consecutively for five years. Avishkar significantly contributes to the experience of first-year VBIT students by offering a platform where they can present their innovative ideas and improve their communication abilities through technical presentations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Glimpses of our previous events and memorable moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/footer/f1.jpg"
                alt="Event 1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/footer/f2.jpg"
                alt="Event 2"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/footer/f3.jpg"
                alt="Event 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;
