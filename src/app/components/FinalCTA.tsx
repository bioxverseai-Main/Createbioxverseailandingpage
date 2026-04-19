import { motion } from 'framer-motion@10.18.0';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signupCount, setSignupCount] = useState(0);

  useEffect(() => {
    const fetchSignupCount = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1e676e04/signups/count`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setSignupCount(data.count || 0);
        }
      } catch (error) {
        console.error('Failed to fetch signup count:', error);
      }
    };
    
    fetchSignupCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
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
        body: JSON.stringify({ email, source: 'footer_cta' })
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      toast.success("You're on the list! We'll be in touch soon.");
      setEmail("");
      setSignupCount(prev => prev + 1);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0066FF] to-[#00D4AA]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Stop Managing Your Health.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl mb-12 opacity-90"
        >
          Let BioXverse do it for you. Join {signupCount} early adopters.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-md mx-auto w-full"
        >
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            disabled={isLoading}
            className="w-full px-6 py-4 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 text-lg placeholder:text-gray-400 disabled:opacity-70"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#0066FF] rounded-lg hover:bg-gray-50 transition-all font-bold text-lg whitespace-nowrap flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6 text-sm font-medium opacity-80"
        >
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4" /> Free during beta
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4" /> No credit card required
          </span>
        </motion.div>
      </div>
    </section>
  );
}
