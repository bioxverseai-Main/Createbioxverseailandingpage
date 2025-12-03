import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer({ onAdminClick, onNavigate }: { onAdminClick?: () => void; onNavigate?: (path: string) => void }) {
  return (
    <footer className="bg-[#050B1A] py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-gray-400 text-sm flex items-center gap-4">
          <span 
            onClick={onAdminClick}
            className="cursor-default select-none hover:text-white/80 transition-colors"
            title="© 2024"
          >
            © 2024 BioXverse.ai
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <button 
            onClick={() => onNavigate?.('/privacy-policy')}
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-gray-700">|</span>
          <button 
            onClick={() => onNavigate?.('/terms-of-service')}
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </button>
          <span className="text-gray-700">|</span>
          <a href="mailto:bioxverse.ai@gmail.com" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
