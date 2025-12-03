import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { WhyBioXverse } from './components/WhyBioXverse';
import { TrustSafety } from './components/TrustSafety';
import { FoundingTeam } from './components/FoundingTeam';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner@2.0.3';
import { AdminDashboard } from './components/AdminDashboard';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { useState, useEffect } from 'react';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  if (currentPath === '/privacy-policy' || currentPath === '/privacy') {
    return (
      <>
        <Navigation onNavigate={navigate} />
        <PrivacyPolicy onBack={() => navigate('/')} />
      </>
    );
  }

  if (currentPath === '/terms-of-service' || currentPath === '/terms') {
    return (
      <>
        <Navigation onNavigate={navigate} />
        <TermsOfService onBack={() => navigate('/')} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0066FF] selection:text-white">
      <Navigation onNavigate={navigate} />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhyBioXverse />
      <TrustSafety />
      <FoundingTeam />
      <FinalCTA />
      <Footer 
        onAdminClick={() => setIsAdminOpen(true)} 
        onNavigate={navigate}
      />
      <Toaster position="top-center" richColors />
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
