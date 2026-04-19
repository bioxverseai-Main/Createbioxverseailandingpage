interface Props {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-24">
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 md:mb-12">Last Updated: December 2, 2024</p>

        <div className="prose prose-gray max-w-none space-y-8 md:space-y-12">
          <section>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to BioXverse.ai ("we," "us," or "our"). We are committed to protecting your privacy and handling your personal information responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Email address (when you join our waitlist or sign up)</li>
              <li>Name (if provided)</li>
              <li>Symptom information you enter into our platform</li>
              <li>Usage data and analytics (how you interact with our site)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Provide and improve our symptom analysis service</li>
              <li>Send you product updates and early access information</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Analyze usage patterns to enhance our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">We do not sell your personal information. We may share your information only in these circumstances:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>With service providers who help us operate our platform (e.g., hosting, analytics)</li>
              <li>If required by law or to protect our legal rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">5. Health Information Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              BioXverse provides educational guidance only and does not provide medical diagnoses or treatment. While we handle your symptom information with care, you should not consider our platform a substitute for professional medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">6. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="text-gray-600 mt-4">To exercise these rights, contact us at: <a href="mailto:privacy@bioxverse.ai" className="text-[#0066FF] hover:underline">privacy@bioxverse.ai</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">7. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar technologies to improve your experience and analyze site usage. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              BioXverse is not intended for users under 18. We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0A1530]">10. Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">If you have questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="text-gray-600">Email: <a href="mailto:privacy@bioxverse.ai" className="text-[#0066FF] hover:underline">privacy@bioxverse.ai</a></p>
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