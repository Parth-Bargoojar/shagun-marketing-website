import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import CTABanner from '../components/layout/CTABanner';
import ScrollReveal from '../components/common/ScrollReveal';
import { submitContactForm } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.subject) return alert('Please select a subject');
    
    setStatus('sending');
    setErrorMessage('');

    // Attempt centralized robust submission (handles validation, rate limiting, and fallback simulation)
    const res = await submitContactForm(formData);
    if (res && res.success) {
      // Execute optional emailjs trigger alongside main API handler if public key is configured
      try {
        emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          'YOUR_PUBLIC_KEY'
        ).catch(() => {});
      } catch {
        // Ignored gracefully to preserve robust offline fallback logic
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus('error');
      setErrorMessage(res?.error || "Submission encountered latency. Please verify your details and retry.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-beige text-deep-green min-h-screen pt-32 pb-20 overflow-hidden relative"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green/10 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-mustard/10 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-5xl md:text-6xl text-deep-green mb-6"
          >
            We'd Love to Hear From You
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-xl text-deep-green/80 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you are starting your journey or need help with details, our team is here to assist you in planning your perfect day.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal distance={30} className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-10 border border-white shadow-xl group hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-green mb-6 group-hover:bg-mustard group-hover:text-white transition-colors">
                <span className="material-symbols-outlined fill-1">mail</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-deep-green mb-1">shagunhq@gmail.com</h3>
              <p className="font-body text-deep-green/60 font-medium">We reply within 24 hours</p>
            </ScrollReveal>

            <ScrollReveal distance={30} delay={0.1} className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-10 border border-white shadow-xl group hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-green group-hover:bg-mustard group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined fill-1">chat</span>
                </div>
                <span className="px-4 py-1.5 bg-mustard/10 rounded-full border border-mustard/20 text-[10px] font-black text-mustard uppercase tracking-widest">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-deep-green mb-1">Chat with our team</h3>
              <p className="font-body text-deep-green/60 font-medium">Direct support on the go</p>
            </ScrollReveal>

            <ScrollReveal distance={30} delay={0.2} className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-10 border border-white shadow-xl group hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-green mb-6 group-hover:bg-mustard group-hover:text-white transition-colors">
                <span className="material-symbols-outlined fill-1">location_on</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-deep-green mb-1">Based in India</h3>
              <p className="font-body text-deep-green/60 font-medium">Serving families nationwide</p>
            </ScrollReveal>

            <div className="flex gap-4 p-4">
              <a 
                href="https://www.instagram.com/shagun.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center hover:bg-mustard hover:scale-110 transition-all shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center hover:bg-mustard hover:scale-110 transition-all shadow-md"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center hover:bg-mustard hover:scale-110 transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ScrollReveal distance={30} className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-16 border border-green/10 h-full relative overflow-hidden">
               <div className="absolute top-[-48px] right-[-48px] w-32 h-32 bg-green/5 rounded-full blur-2xl"></div>
               
               <h2 className="font-heading font-black text-3xl text-deep-green mb-10">Send a Message</h2>
               
               {status === 'success' ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-center py-20"
                 >
                   <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-8 text-green">
                     <span className="material-symbols-outlined text-5xl">check_circle</span>
                   </div>
                   <h3 className="font-heading font-black text-2xl text-deep-green mb-3">Message Sent!</h3>
                   <p className="font-body text-deep-green/60 text-lg mb-10">We'll get back to you within 24 hours.</p>
                   <button 
                     onClick={() => setStatus('')} 
                     className="px-10 py-4 bg-green text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                   >
                     Send Another
                   </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                       <label className="font-body text-xs font-black tracking-widest text-deep-green/40 uppercase px-1">Full Name</label>
                       <input 
                         type="text" 
                         name="name"
                         required
                         placeholder="Rahul Sharma"
                         value={formData.name}
                         onChange={handleChange}
                         className="w-full bg-beige/30 border-2 border-green/5 focus:border-green/20 focus:bg-white px-6 py-4 rounded-2xl font-body text-deep-green outline-none transition-all placeholder:text-deep-green/20"
                       />
                     </div>
                     <div className="space-y-3">
                       <label className="font-body text-xs font-black tracking-widest text-deep-green/40 uppercase px-1">Email Address</label>
                       <input 
                         type="email" 
                         name="email"
                         required
                         placeholder="rahul@example.com"
                         value={formData.email}
                         onChange={handleChange}
                         className="w-full bg-beige/30 border-2 border-green/5 focus:border-green/20 focus:bg-white px-6 py-4 rounded-2xl font-body text-deep-green outline-none transition-all placeholder:text-deep-green/20"
                       />
                     </div>
                   </div>

                   <div className="space-y-3">
                     <label className="font-body text-xs font-black tracking-widest text-deep-green/40 uppercase px-1">Subject</label>
                     <div className="relative">
                       <select 
                         name="subject"
                         required
                         value={formData.subject}
                         onChange={handleChange}
                         className="w-full bg-beige/30 border-2 border-green/5 focus:border-green/20 focus:bg-white px-6 py-4 rounded-2xl font-body text-deep-green outline-none transition-all appearance-none cursor-pointer"
                       >
                         <option value="" disabled>Select an option</option>
                         <option value="General Enquiry">General Enquiry</option>
                         <option value="Payment Issue">Payment Issue</option>
                         <option value="Feature Request">Feature Request</option>
                         <option value="Bug Report">Bug Report</option>
                         <option value="Other">Other</option>
                       </select>
                       <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-deep-green/30">expand_more</span>
                     </div>
                   </div>

                   <div className="space-y-3">
                     <label className="font-body text-xs font-black tracking-widest text-deep-green/40 uppercase px-1">Message</label>
                     <textarea 
                       name="message"
                       required
                       rows="5"
                       placeholder="How can we help you prepare for the big day?"
                       value={formData.message}
                       onChange={handleChange}
                       className="w-full bg-beige/30 border-2 border-green/5 focus:border-green/20 focus:bg-white px-6 py-4 rounded-2xl font-body text-deep-green outline-none transition-all resize-none placeholder:text-deep-green/20"
                     ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     disabled={status === 'sending'}
                     className="w-full bg-mustard text-white font-body font-black text-lg py-5 rounded-2xl flex items-center justify-center gap-4 shadow-[0_10px_20px_rgba(212,160,23,0.3)] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0 cursor-pointer"
                   >
                     {status === 'sending' ? 'Sending...' : 'Send Message'}
                     <span className="material-symbols-outlined text-xl">send</span>
                   </button>
                   {errorMessage && (
                     <p className="text-mustard font-body text-xs mt-4 text-center bg-black/5 py-2 px-4 rounded-xl border border-mustard/20">
                       {errorMessage}
                     </p>
                   )}
                 </form>
               )}
            </ScrollReveal>
          </div>
        </div>
      </div>

      <CTABanner />
    </motion.div>
  );
};

export default Contact;
