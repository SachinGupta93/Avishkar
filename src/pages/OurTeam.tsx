import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

// Team member data
const teamMembers = [
  ...Array(4).fill(null).map((_, index) => ({
    name: 'K.S',
    role: 'Anirudh',
    image: '/images/KSAnirudh.jpg',
    instagram: 'https://instagram.com/username1',
    linkedin: 'https://linkedin.com/in/username1'
  })),
  ...Array(4).fill(null).map((_, index) => ({
    name: 'K.S',
    role: 'Abhiram',
    image: '/images/Abhiram.png',
    instagram: 'https://instagram.com/username2',
    linkedin: 'https://linkedin.com/in/username2'
  })),
  ...Array(4).fill(null).map((_, index) => ({
    name: 'K.S',
    role: 'KSAnirudh',
    image: '/images/KSAnirudh.jpg',
    instagram: 'https://instagram.com/username3',
    linkedin: 'https://linkedin.com/in/username3'
  })),
  ...Array(4).fill(null).map((_, index) => ({
    name: 'K.S',
    role: 'Abhiram',
    image: '/images/Abhiram.png',
    instagram: 'https://instagram.com/username4',
    linkedin: 'https://linkedin.com/in/username4'
  })),
  ...Array(4).fill(null).map((_, index) => ({
    name: 'K.S',
    role: 'KSAnirudh',
    image: '/images/KSAnirudh.jpg',
    instagram: 'https://instagram.com/username5',
    linkedin: 'https://linkedin.com/in/username5'
  })),
  ...Array(4).fill(null).map((_, index) => ({
    name: 'K.S',
    role: 'Abhiram',
    image: '/images/Abhiram.png',
    instagram: 'https://instagram.com/username6',
    linkedin: 'https://linkedin.com/in/username6'
  }))
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Header */}
        <div className="text-center mb-16 mt-24">
          <h1 className="text-4xl font-bold text-[#4A90E2] mb-8">
            Our Team
          </h1>
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-1 bg-black"></div>
            <div className="w-12 h-1 bg-black"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#E8F4F8] shadow-lg">
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/default-avatar.png';
                    }}
                  />
                  {/* Hover Overlay with Social Icons */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-2 rounded-l-lg">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                {/* Text Container */}
                <div className="p-4 text-center bg-[#E8F4F8]">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;