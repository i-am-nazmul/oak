"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface JoinCreatorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinCreatorsModal({ isOpen, onClose }: JoinCreatorsModalProps) {
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
                Join <span className="text-[#dfb871]">Creators</span> Oak
              </h2>
              <p className="text-white/60 text-sm">
                Tell us about yourself and let's create amazing<br />collaborations together.
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
                  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                  const response = await fetch(`${apiUrl}/api/creators`, {
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
                {/* Full Name */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
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

                {/* Social Links Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-2">Instagram Link</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </span>
                      <input
                        type="text"
                        name="instagramLink"
                        placeholder="instagram.com/yourusername"
                        className="w-full bg-[#111] border border-white/10 rounded-md pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-2">YouTube Link</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                      </span>
                      <input
                        type="text"
                        name="youtubeLink"
                        placeholder="youtube.com/@yourchannel"
                        className="w-full bg-[#111] border border-white/10 rounded-md pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Other Social Media */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Other Social Media Link (Optional)</label>
                  <input
                    type="text"
                    name="otherSocialMediaLink"
                    placeholder="tiktok.com/@yourusername or any other link"
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all placeholder:text-white/30"
                  />
                </div>

                {/* Niche */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">What Niche Do You Create Content In?</label>
                  <div className="relative">
                    <select name="niche" className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/50 transition-all appearance-none outline-none">
                      <option value="" disabled defaultValue="">Choose your niche</option>
                      <option value="fashion">Fashion & Beauty</option>
                      <option value="tech">Technology</option>
                      <option value="lifestyle">Lifestyle & Vlogs</option>
                      <option value="gaming">Gaming</option>
                      <option value="education">Education</option>
                      <option value="comedy">Comedy & Entertainment</option>
                      <option value="fitness">Fitness & Health</option>
                      <option value="finance">Finance & Business</option>
                      <option value="travel">Travel</option>
                      <option value="food">Food & Cooking</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/40">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Tell us about content */}
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-2">Tell Us About Your Content</label>
                  <textarea
                    name="aboutContent"
                    rows={4}
                    required
                    placeholder="What kind of content do you create? What makes your content unique?"
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
                      "Submit Application"
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
