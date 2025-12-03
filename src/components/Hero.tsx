import { motion } from 'framer-motion@10.18.0';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Hero() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        body: JSON.stringify({ email, source: 'hero' })
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      toast.success("You're on the list! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#0066FF] to-[#004bbd] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-10 border border-white/20"
          >
            <div className="w-2 h-2 bg-[#00D4AA] rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Limited Early Access</span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            className="text-white mb-6 text-[42px] md:text-[72px] font-bold tracking-tight leading-[1.1] -tracking-[1px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What's wrong with me?
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-white/90 text-[18px] md:text-2xl mb-12 leading-relaxed max-w-[700px] mx-auto font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get instant, accurate answers from medical-grade AI — in 60 seconds.
          </motion.p>
          
          {/* Email Capture */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full sm:w-[360px] h-[56px] px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00D4AA] text-[16px] sm:text-[18px] bg-white text-gray-900 placeholder:text-gray-400 disabled:opacity-70"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto h-[56px] px-6 bg-[#00D4AA] text-white rounded-xl hover:bg-[#00bc98] transition-all font-semibold text-[16px] sm:text-[18px] whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.form>
          
          {/* Trust Badges */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm md:text-base text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Free during beta</span>
            </div>
            <span className="hidden sm:inline text-white/40">•</span>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <span className="hidden sm:inline text-white/40">•</span>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Join early access</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
