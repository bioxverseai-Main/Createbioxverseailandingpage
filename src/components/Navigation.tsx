export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl text-[#0A1530] tracking-tight">
            Bio<span className="text-[#266FFE]">X</span>verse<span className="text-[#266FFE]">.</span>AI
          </span>
        </div>
        
        <button className="px-8 py-3 bg-[#0A1530] text-white rounded-lg hover:bg-[#1a2850] transition-all">
          Get Early Access
        </button>
      </div>
    </nav>
  );
}
