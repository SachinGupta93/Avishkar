import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [messageLength, setMessageLength] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'message') {
      setMessageLength(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_tmj6d53',
        'template_0jrv38j',
        {
          to_email: 'test0009r@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email
        },
        'xbYtz_r-dpRjp_ZZQ'
      );

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setMessageLength(0);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="text-center mb-8 mt-16">
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">Contact Us</h2>
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="w-full max-w-7xl bg-[#0077B6]/10 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8 bg-white/80 rounded-2xl p-6 shadow-lg">
              <p className="text-lg text-gray-700">
                Email, call, or complete the form to resolve queries about Avishkar
              </p>

              {/* Email Contact */}
              <div className="flex items-center gap-4">
                <Mail className="text-gray-700" />
                <a href="mailto:avishkar2k25@gmail.com" className="text-gray-700 hover:text-blue-600">
                  avishkar2k25@gmail.com
                </a>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-center gap-4">
                <Phone className="text-gray-700" />
                <div>
                  <a href="tel:+911234567890" className="block text-gray-700 hover:text-blue-600">Venkat Ajay - 9014454476</a>
                  <a href="tel:+911234567890" className="block text-gray-700 hover:text-blue-600">Lohitaksh - 8851909766</a>
                </div>
              </div>

              {/* Help Desk Section */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Help Desk Support</h2>
                <p className="text-gray-600">
                  Our support team is available from 3:30 PM - 4:20 PM to address any concerns or queries...
                </p>
              </div>

              {/* Feedback Section */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Feedback and Suggestions</h2>
                <p className="text-gray-600">
                  We value your feedback and are continuously working to improvise our work.
                </p>
              </div>

              {/* Event Inquiries Section */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Event Inquiries</h2>
                <p className="text-gray-600">
                  For Event-related questions or press inquiries, please contact us at given numbers
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-6">You can reach us anytime</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    rows={4}
                    maxLength={120}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  ></textarea>
                  <span className="absolute bottom-2 right-2 text-sm text-gray-500">
                    {messageLength}/120
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-slate-300 text-black rounded-lg font-semibold hover:bg-slate-400 active:bg-slate-400 transition-colors disabled:bg-blue-400"
                >
                  {status === 'sending' ? 'Submitting...' : 'Submit'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;