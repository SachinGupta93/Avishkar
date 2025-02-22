import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown} from 'lucide-react';

// FAQ data
const faqData = [
  {
    question: "When and where will Avishkar 2K25 be conducted?",
    answer: "Avishkar 2K25 will be conducted on 3rd March, 2025 and 4th March, 2025 at Vignana Bharathi Institute of Technology."
  },
  {
    question: "What is the registration fee for Avishkar 2K25?",
    answer: "The registration fee for Avishkar 2K25 is Rs. 500 per team (maximum 3 members per team)."
  },
  {
    question: "What are the eligibility criteria for participating?",
    answer: "Avishkar is exclusively for first-year B.Tech students of VBIT. Teams can have 1-3 members from the same branch."
  },
  {
    question: "What is the format of the presentation?",
    answer: "Each team will get 8 minutes for presentation and 2 minutes for Q&A. The presentation should be in PowerPoint format."
  },
  {
    question: "What are the judging criteria?",
    answer: "Presentations will be judged based on innovation, technical depth, presentation skills, and practical applicability."
  },
  {
    question: "Are there any prizes?",
    answer: "Yes, winners will receive cash prizes, certificates, and special recognition during the college annual day."
  },
  {
    question: "How can I register for the event?",
    answer: "Registration can be done through the official website or by visiting the IEEE office at VBIT."
  },
  {
    question: "What should the presentation include?",
    answer: "The presentation should cover problem statement, proposed solution, technical details, implementation plan, and expected outcomes."
  },
  {
    question: "Is there a specific theme for the presentations?",
    answer: "While there's no specific theme, presentations should focus on innovative technical solutions to real-world problems."
  },
  {
    question: "Will we get participation certificates?",
    answer: "Yes, all participants will receive digital participation certificates from IEEE-VBIT Student Branch."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="text-center mb-16 mt-24">
          <h1 className="text-6xl font-bold text-[#4A90E2] mb-8">
            FAQ's
          </h1>
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-1 bg-[#4A90E2]"></div>
            <div className="w-16 h-1 bg-[#4A90E2]"></div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border ${openIndex === index ? 'border-[#4A90E2]' : 'border-[#E8F4F8]'} rounded-lg overflow-hidden shadow-sm`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full px-8 py-6 flex justify-between items-center transition-colors duration-200 ${
                  openIndex === index ? 'bg-[#E8F4F8]' : 'bg-white hover:bg-[#F8FBFD]'
                }`}
              >
                <span className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-8 h-8 text-[#4A90E2]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#E8F4F8]"
                  >
                    <div className="px-8 py-6 text-gray-600 text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;