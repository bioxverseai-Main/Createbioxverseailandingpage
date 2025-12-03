import { motion } from 'framer-motion@10.18.0';
import { Check, Rocket, Lightbulb, Trophy, Globe, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function FoundingTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill_set: "",
    reason: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1e676e04/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ 
          ...formData, 
          source: 'founding_team_application' 
        })
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      toast.success("Application received! We'll review it shortly.");
      setFormData({ name: "", email: "", skill_set: "", reason: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#F8FAFB]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 flex items-center justify-center gap-3">
            <span>🛠️</span> Join the Founding Team
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're not just building a product. We're building a movement.
            <br className="hidden md:block" />
            BioXverse is in its earliest days — and we're looking for exceptional people to help shape it.
          </p>
        </div>


        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[600px] mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1a1a1a]">Tell us about yourself:</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={isLoading}
                className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] bg-white transition-all disabled:opacity-70"
              />
            </div>

            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                disabled={isLoading}
                className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] bg-white transition-all disabled:opacity-70"
              />
            </div>

            <div>
              <div className="relative">
                <select 
                  name="skill_set"
                  value={formData.skill_set}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] bg-white transition-all appearance-none text-gray-600 disabled:opacity-70"
                >
                  <option value="" disabled>What's your skill set?</option>
                  <option value="engineering">Engineering</option>
                  <option value="medical">Medical/Clinical</option>
                  <option value="design">Design</option>
                  <option value="operations">Operations</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div>
              <textarea 
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Why do you want to join BioXverse? What can you bring to the team?"
                rows={4}
                disabled={isLoading}
                className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] bg-white transition-all resize-none disabled:opacity-70"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 bg-[#0066FF] text-white rounded-lg hover:bg-[#0052cc] transition-all font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Join the Team
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
