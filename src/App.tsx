import { Hero } from './components/Hero';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { FutureVision } from './components/FutureVision';
import { TrustSafety } from './components/TrustSafety';
import { FinalCTA } from './components/FinalCTA';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Platform />
      <HowItWorks />
      <Benefits />
      <FutureVision />
      <TrustSafety />
      <FinalCTA />
    </div>
  );
}
