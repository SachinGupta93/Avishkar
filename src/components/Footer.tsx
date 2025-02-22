import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#B7B7FD] text-white py-4">
      <div className="flex flex-col items-center justify-center space-y-2">
        <Instagram className="w-6 h-6 text-black hover:text-white transition-colors" />
        <p className="text-sm text-black">
          Designed and Developed by Web Designing Team | Avishkar 2K25
        </p>
      </div>
    </footer>
  );
};

export default Footer;