import { Navigation } from './components/Navigation';
import { HospitalHero } from './components/hospital/HospitalHero';
import { HospitalProblem } from './components/hospital/HospitalProblem';
import { HospitalSolution } from './components/hospital/HospitalSolution';
import { HospitalUseCases } from './components/hospital/HospitalUseCases';
import { EnterprisePricing } from './components/hospital/EnterprisePricing';
import { PilotRequest } from './components/hospital/PilotRequest';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function Hospitals() {
  return (
    <div className="bg-black min-h-screen antialiased">
      <Navigation />
      <main>
        <HospitalHero />
        <HospitalProblem />
        <HospitalSolution />
        <HospitalUseCases />
        <EnterprisePricing />
        <FAQ />
        <PilotRequest />
      </main>
      <Footer />
    </div>
  );
}
