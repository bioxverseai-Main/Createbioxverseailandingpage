import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { ThreeStepFlow } from './components/ThreeStepFlow';
import { HowItWorks } from './components/HowItWorks';
import { ProductDemo } from './components/ProductDemo';
import { UseCases } from './components/UseCases';
import { Comparison } from './components/Comparison';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Founder } from './components/Founder';
import { IntegrationNote } from './components/IntegrationNote';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen antialiased">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <ThreeStepFlow />
        <ProductDemo />
        <UseCases />
        <Comparison />
        <HowItWorks />
        <Features />
        <IntegrationNote />
        <Stats />
        <FAQ />
        <Founder />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}