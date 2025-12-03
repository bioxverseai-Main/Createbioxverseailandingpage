interface Props {
  onBack: () => void;
}

export function TermsOfService({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-24">
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-gray-500 mb-8 md:mb-12">Last Updated: December 2, 2024</p>

        <div className="prose prose-gray max-w-none space-y-8 md:space-y-12">
          <section>
            <p className="text-lg text-gray-600 leading-relaxed">
              Please read these Terms of Service ("Terms") carefully before using BioXverse.ai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using BioXverse.ai ("Service"), you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              BioXverse is an AI-powered symptom analysis platform that provides educational health guidance. Our Service helps users understand their symptoms and guides them toward appropriate care.
            </p>
          </section>

          <section className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h2 className="text-2xl font-bold mb-4 text-red-800">3. MEDICAL DISCLAIMER — IMPORTANT</h2>
            <p className="text-red-800 font-medium mb-4">BioXverse is NOT a medical service and does NOT provide medical advice, diagnosis, or treatment.</p>
            <ul className="list-disc pl-5 space-y-2 text-red-700/80">
              <li>We provide educational information and guidance only</li>
              <li>Our AI does not replace professional medical advice</li>
              <li>Always consult qualified healthcare professionals for medical decisions</li>
              <li>Never disregard professional medical advice or delay seeking care based on information from BioXverse</li>
              <li>In case of emergency, call 911 or your local emergency services immediately</li>
            </ul>
            <p className="mt-4 text-red-800 text-sm">By using our Service, you acknowledge and accept these limitations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">4. User Responsibilities</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">You agree to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Provide accurate information</li>
              <li>Use the Service for lawful purposes only</li>
              <li>Not misuse or attempt to circumvent our systems</li>
              <li>Be at least 18 years old to use the Service</li>
              <li>Understand that our Service is for informational purposes only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">5. Privacy and Data</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy. By using BioXverse, you consent to our data practices as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">6. Intellectual Property</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All content, features, and functionality of the Service are owned by BioXverse.ai and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600 mb-4">You may not:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Reverse engineer or attempt to extract our AI models</li>
              <li>Use our Service to create competing products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4 leading-relaxed uppercase text-sm font-semibold tracking-wider">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>BioXverse is provided "AS IS" without warranties of any kind</li>
              <li>We are not liable for any damages arising from your use of the Service</li>
              <li>We do not guarantee the accuracy, completeness, or reliability of our AI analysis</li>
              <li>We are not responsible for any medical decisions made based on information from our Service</li>
            </ul>
            <p className="mt-4 text-gray-600 italic">Your use of BioXverse is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">8. Account Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Service at any time, for any reason, including violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by the laws of the United States. Any disputes will be resolved in the courts of the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">11. Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">For questions about these Terms, contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="text-gray-600">Email: <a href="mailto:legal@bioxverse.ai" className="text-[#0066FF] hover:underline">legal@bioxverse.ai</a></p>
              <p className="text-gray-600">Website: bioxverse.ai</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">© 2024 BioXverse.ai</p>
        </div>
      </footer>
    </div>
  );
}