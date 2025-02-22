import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Anirudh',
    role: 'Hospitality',
    image: '/images/KSAnirudh.jpg',
    text: "Avishkar 2K24 was a transformative experience that played a crucial role in building my confidence and sharpening my technical skills. Explaining innovative ideas to a diverse audience enhanced my ability to communicate complex concepts effectively. This experience fueled my passion for continuous learning, innovating and encouraging me to explore new opportunities in technology and research. Avishkar not only expanded my knowledge but also set me on a path of professional growth with greater confidence and enthusiasm."
  },
  {
    name: 'Deepa',
    role: 'Poster Designing',
    image: '/images/Deepa.jpg',
    text: "I am delighted to share my experience with Avishkar 2K24, a premier paper presentation event that has significantly contributed to my academic and professional growth. Avishkar provides a unique platform for students to showcase their research, innovations, and ideas, fostering a culture of critical thinking and problem-solving. Participating in Avishkar has been an enriching experience. The event's emphasis on research and innovation has encouraged me to delve deeper into my field of study and present my findings to a knowledgeable audience. The constructive feedback and insights from the judges and peers have been invaluable in refining my research and presentation skills."
  },
  {
    name: 'Thanmayee',
    role: 'Hospitality',
    image: '/images/Thanmayee.png',
    text: "Being part of Avishkar 2K24 has been a wonderful experience, offering me an incredible opportunity to present my research and ideas on a recognized platform. This prestigious paper presentation event is dedicated to promoting intellectual curiosity, innovation, and analytical thinking among students.Engaging in Avishkar allowed me to explore my subject in greater depth, pushing me to think critically and articulate my findings effectively. The event not only honed my presentation skills but also provided me with valuable feedback from experts and fellow participants. The insights I gained have been essential in enhancing my research approach and academic growth."
  },
  {
    name: 'Shreshta',
    role: 'Marketing',
    image: '/images/Shreshta.jpeg',
    text: "Being part of Avishkar 2K24 was an incredible experience for me as a first-year student at VBIT. It gave me a chance to share my research and ideas, which really helped me grow both academically and personally. The event inspired me to explore my field more deeply, and the feedback I received from judges and peers was so helpful in improving my research and presentation skills. It also helped me conquer my fear of speaking in front of people, boosting my confidence and pushing me to dive even deeper into my academic interests."
  },
];

const cardVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction * 50,
  }),
  animate: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction * -50,
  }),
};

const Testimonials = () => {
  // Initialize direction to 1 for consistency.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-advance every 6 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Precompute previous and next indexes to avoid recalculations.
  const previousIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  const handleDotClick = useCallback((index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  return (
    <section className="py-24 bg-[#3B5B63] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Testimonials</h2>
        </div>

        <div className="relative max-w-7xl mx-auto flex justify-center items-center gap-8">
          {/* Previous Card */}
          <div className="w-[400px] h-[500px] bg-[#E8F4F8] rounded-3xl p-8 shadow-lg opacity-50">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[previousIndex].image}
                alt={testimonials[previousIndex].name}
                className="w-20 h-20 rounded-full object-cover bg-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default-avatar.png';
                }}
              />
              <div>
                <h3 className="font-bold text-xl text-gray-900">
                  {testimonials[previousIndex].name}
                </h3>
                <p className="text-gray-600">{testimonials[previousIndex].role}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
              {testimonials[previousIndex].text}
            </p>
          </div>

          {/* Animated Current Card */}
          <div className="relative w-[400px] h-[500px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full bg-[#E8F4F8] rounded-3xl p-8 shadow-xl z-10"
              >
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover bg-gray-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/default-avatar.png';
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                  {testimonials[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Card */}
          <div className="w-[400px] h-[500px] bg-[#E8F4F8] rounded-3xl p-8 shadow-lg opacity-50">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[nextIndex].image}
                alt={testimonials[nextIndex].name}
                className="w-20 h-20 rounded-full object-cover bg-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default-avatar.png';
                }}
              />
              <div>
                <h3 className="font-bold text-xl text-gray-900">
                  {testimonials[nextIndex].name}
                </h3>
                <p className="text-gray-600">{testimonials[nextIndex].role}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
              {testimonials[nextIndex].text}
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
