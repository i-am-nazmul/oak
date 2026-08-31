"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface JoinBrandsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinBrandsModal({ isOpen, onClose }: JoinBrandsModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-[600px] bg-[#080808] border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
               onClick={onClose}
               className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors z-10"
             >
               <X className="w-5 h-5" />
             </button>

            {/* Header */}
            <div className="text-center pt-10 pb-6 px-8 shrink-0">
              <h2 className="text-3xl font-serif text-white mb-2">
                Partner with <span className="text-[#dfb871]">Us</span>
              </h2>
              <p className="text-white/60 text-sm">
                Tell us about your brand and let's create impactful campaigns together.
              </p>
            </div>

            {/* Form */}
            <div className="overflow-y-auto px-8 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <form className="space-y-5" onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                try {
                  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://oak-server-m6hr.onrender.com';
                  const response = await fetch(`${apiUrl}/api/brands`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });
                  if (response.ok) {
                    onClose();
                  } else {
                    console.error('Failed to submit');
                  }
                } catch (error) {
                  console.error('Error submitting form:', error);
                } finally {
                  setIsSubmitting(false);
                }
              }}>
                {/* Name */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Phone Number</label>
                  <div className="flex gap-2">
                    <select name="phoneCode" className="bg-[#111] border border-white/10 rounded-md px-3 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 transition-all outline-none">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+61</option>
                      <option>+971</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="Enter your phone number"
                      className="flex-1 bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Brand Name</label>
                  <input
                    type="text"
                    name="brandName"
                    required
                    placeholder="Enter your brand name"
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                  />
                </div>

                {/* Website Link */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Website Link</label>
                  <input
                    type="text"
                    name="websiteLink"
                    required
                    placeholder="yourbrand.com"
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                  />
                </div>

                {/* Instagram (Optional) */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Instagram Link (Optional)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </span>
                    <input
                      type="text"
                      name="instagram"
                      placeholder="instagram.com/yourbrand"
                      className="w-full bg-[#111] border border-white/10 rounded-md pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Tell us about your brand */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Description of the Brand</label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Tell us a little bit about what your brand does..."
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30 resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-4 pb-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#dfb871] hover:bg-[#c9a55e] text-black font-semibold py-3 rounded-md transition-colors disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
