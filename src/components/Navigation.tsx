import logo from 'figma:asset/7e74b4d7cbfe67d9e031c8d162070c5a24d43008.png';

export function Navigation({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const handleLogoClick = () => {
    if (window.location.pathname !== '/') {
      onNavigate?.('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center">
        <span className="text-xl font-bold tracking-tight text-[#0A1530]">
            Bio<span className="text-[#266FFE]">X</span>verse<span className="text-[#266FFE]">.</span>AI
          </span>
        </div>
        
        <button 
          onClick={() => {
             if (window.location.pathname !== '/') {
                onNavigate?.('/');
                // We can rely on useEffect or a short timeout to scroll after nav, or just nav.
                // If on home page, just scroll.
             } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
             }
          }}
          className="px-4 py-2 md:px-8 md:py-3 text-sm md:text-base bg-[#0A1530] text-white rounded-lg hover:bg-[#1a2850] transition-all"
        >
          Get Early Access
        </button>
      </div>
    </nav>
  );
}
