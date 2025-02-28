import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagePath } from '../utils/imageUtils';

const testimonials = [
  {
    name: 'Shreshta',
    role: 'Marketing',
    image: getImagePath('/images/Shreshta.png'),
    text: "Being part of Avishkar 2K24 was an incredible experience for me as a first-year student at VBIT. It gave me a chance to share my research and ideas, which greatly contributed to my academic and personal growth. The event inspired me to explore my field further and the feedback I received from judges and peers was valuable in improving my research and presentation skills. It also helped me overcome my fear of public speaking, boosting my confidence and encouraging me to explore my academic interests in greater depth."
  },
  {
    name: 'K. Geetha Bhagyasree',
    role: 'Documentation',
    image: getImagePath('/images/Geetha.png'),
    text: "Avishkar 2K24 was a valuable experience that played a crucial role in building my confidence. My teammate and I worked on an innovative project focused on smart street lighting, aiming to enhance energy efficiency and automation. Throughout the event, we worked together to tackle challenges and refine our technical and analytical skills. Our efforts were recognized as we secured the 2nd position in the competition. This experience enhanced my understanding of real-world problem-solving and strengthened my ability to work as part of a team. Avishkar 2K24 provided an excellent platform to showcase creativity, acquire insights from others and gain valuable feedback. I am grateful for the opportunity."
  },
  {
    name: 'K. Sai Kiran',
    role: 'Documentation',
    image: getImagePath('/images/SaiKiran.jpeg'),
    text: "Participating in Avishkar 2K24 Technical Paper Presentation competition was an enriching experience that allowed me to showcase my research and technical knowledge. The event provided a platform to present innovative ideas, connect with individuals and receive valuable feedback. The event's well-structured format and engaging sessions made the experience both insightful and fulfilling. I am thankful for the opportunity to be part of this academic environment and am grateful for the experience of participating in Avishkar."
  },
  {
    name: 'Ruth G',
    role: 'Documentation',
    image: getImagePath('/images/Ruth.png'),
    text: "Participating in the Technical Paper Presentation at Avishkar 2K24 was an intellectually enriching experience. It provided an excellent platform to present my research, receive insightful feedback and enhance both my technical knowledge and presentation skills. Interacting with distinguished judges and like-minded innovators offered valuable perspectives, enhancing my understanding of real-world applications. The event encouraged critical thinking, innovation and academic excellence, making it a truly enriching experience. I am grateful for the opportunity and the experience."
  },
  {
    name: 'Chiluka Deepa',
    role: 'Poster Designing',
    image: getImagePath('/images/Deepa.jpeg'),
    text: "I am delighted to share my experience with Avishkar 2K24 a technical paper presentation event that has significantly contributed to my academic and professional growth. Avishkar provides a unique platform for students to showcase their research, innovations and ideas, promoting critical thinking and problem-solving. Participating in Avishkar has been an enriching experience. The event focus on research and innovation motivated me to further explore my domain and share my findings with a knowledgeable audience. The feedback and insights from the judges and peers have been valuable in refining my research and presentation skills."
  },
  {
    name: 'K S Anirudh',
    role: 'Hospitality',
    image: getImagePath('/images/KSAnirudh.png'),
    text: "Avishkar 2K24 was an enriching experience for me as a first-year student. It provided a platform to explore emerging technologies, enhance my technical skills and develop innovative perspectives. The rigorous evaluation criteria emphasized precision and expertise, reinforcing their importance in my professional journey. Through this event, I gained valuable insights into areas for improvement and became familiar with professional presentation techniques. Avishkar serves as an invaluable opportunity for students eager to refine their skills and embrace technological advancements."
  },
  {
    name: 'B. Thanmayee',
    role: 'Hospitality',
    image: getImagePath('/images/Thanmayee.png'),
    text: "Participating in Avishkar 2K24 has been a great experience, giving me a valuable opportunity to share my research and ideas on a prestigious platform. This event aims to encourage curiosity, innovation and critical thinking among students. Being part of Avishkar allowed me to explore my subject in greater detail, challenging me to think critically and present my findings clearly. The event helped improve my presentation skills while providing valuable feedback from experts and peers. The insights I gained have been valuable in refining my research approach and contributing to my academic development."
  }
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 580 : -580,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -580 : 580,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const paginate = (newDirection: number) => {
    if (document.querySelector('.testimonial-card[data-animating="true"]')) {
      return;
    }

    if (page + newDirection < 0) {
      setPage([testimonials.length - 1, newDirection]);
    } else if (page + newDirection >= testimonials.length) {
      setPage([0, newDirection]);
    } else {
      setPage([page + newDirection, newDirection]);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!document.querySelector('.testimonial-card[data-animating="true"]')) {
        paginate(1);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  const handleDotClick = useCallback((index: number) => {
    if (index === page) return;

    if (document.querySelector('.testimonial-card[data-animating="true"]')) {
      return;
    }

    const direction = index > page ? 1 : -1;
    setPage([index, direction]);
  }, [page]);

  const handleImageLoad = (id: string) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  const prevIndex = (page - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (page + 1) % testimonials.length;

  return (
    <section className="py-12 sm:py-18 bg-[#0077B6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-8 mb-16">
            <div className="w-48 h-1 bg-white"></div>
            <h2 className="text-[36px] sm:text-[48px] font-bold text-white whitespace-nowrap">Testimonials</h2>
            <div className="w-48 h-1 bg-white"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto flex justify-center items-center gap-4 custom:gap-8">
          <div
            className="hidden custom:block w-[450px] h-[600px] bg-[#E8F4F8] rounded-3xl p-6 sm:p-8 shadow-lg opacity-50 transition-opacity duration-300"
            style={{
              opacity: direction > 0 ? 0.3 : 0.5,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-8">
              <img
                src={testimonials[prevIndex].image}
                alt="Previous testimonial"
                onLoad={() => handleImageLoad(`prev-${prevIndex}`)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover bg-gray-200"
              />
              <div>
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900">
                  {testimonials[prevIndex].name}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {testimonials[prevIndex].role}
                </p>
              </div>
            </div>
            <div className="h-auto">
              <p className="text-sm sm:text-base leading-snug sm:leading-relaxed text-gray-700 whitespace-pre-line text-justify">
                {testimonials[prevIndex].text}
              </p>
            </div>
          </div>

          <div className="relative w-[300px] sm:w-[580px] h-[500px] sm:h-[650px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="testimonial-card absolute top-0 left-0 w-full h-full bg-[#E8F4F8] rounded-3xl p-4 sm:p-8 shadow-xl"
                onAnimationStart={() => {
                  const element = document.querySelector('.testimonial-card');
                  if (element) element.setAttribute('data-animating', 'true');
                }}
                onAnimationComplete={() => {
                  const element = document.querySelector('.testimonial-card');
                  if (element) element.setAttribute('data-animating', 'false');
                }}
              >
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-4">
                  {!imageLoaded[`current-${page}`] && (
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-[#15A6F7] border-r-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={testimonials[page].image}
                    alt={testimonials[page].name}
                    onLoad={() => handleImageLoad(`current-${page}`)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getImagePath('/images/default-avatar.png');
                      handleImageLoad(`current-${page}`);
                    }}
                    className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover bg-gray-200 ${!imageLoaded[`current-${page}`] ? 'hidden' : 'block'
                      }`}
                  />
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900">
                      {testimonials[page].name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600">{testimonials[page].role}</p>
                  </div>
                </div>
                <div className="h-auto">
                  <p className="text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed text-gray-700 whitespace-pre-line text-justify">
                    {testimonials[page].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            className="hidden custom:block w-[450px] h-[600px] bg-[#E8F4F8] rounded-3xl p-6 sm:p-8 shadow-lg opacity-50 transition-opacity duration-300"
            style={{
              opacity: direction < 0 ? 0.3 : 0.5,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-8">
              <img
                src={testimonials[nextIndex].image}
                alt="Next testimonial"
                onLoad={() => handleImageLoad(`next-${nextIndex}`)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover bg-gray-200"
              />
              <div>
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900">
                  {testimonials[nextIndex].name}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {testimonials[nextIndex].role}
                </p>
              </div>
            </div>
            <div className="h-auto">
              <p className="text-sm sm:text-base leading-snug sm:leading-relaxed text-gray-700 whitespace-pre-line text-justify">
                {testimonials[nextIndex].text}
              </p>
            </div>
          </div>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L6 10L12 16" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4L14 10L8 16" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute -bottom-16 custom:-bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 custom:w-3 h-2 custom:h-3 rounded-full transition-all duration-300 ${index === page
                  ? 'bg-black w-4 custom:w-6'
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
