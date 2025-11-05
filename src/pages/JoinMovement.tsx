import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

function JoinMovement() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', interest: '', message: '' });
    alert('Thank you for joining the movement. We will be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 overflow-hidden">
      {/* Glowing background that responds to interaction */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: focusedField ? [1, 1.15, 1] : 1,
            opacity: focusedField ? [0.5, 0.7, 0.5] : 0.3,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-8 tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            data-testid="text-page-title"
          >
            Join the Movement
          </motion.h1>
          <motion.p
            className="text-xl text-gray-500 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            data-testid="text-page-subtitle"
          >
            Not a call to action. An invitation to create the future together.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          {/* Subtle border glow */}
          <motion.div
            className="absolute -inset-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"
            animate={{
              opacity: focusedField ? 0.5 : 0.2,
            }}
            transition={{ duration: 0.5 }}
          />

          <div className="relative bg-black border border-gray-900 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <label htmlFor="name" className="block text-sm font-light text-gray-500 mb-3 tracking-wider uppercase">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 focus:border-yellow-500 outline-none transition-all duration-500 text-white text-lg font-light"
                    data-testid="input-name"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <label htmlFor="email" className="block text-sm font-light text-gray-500 mb-3 tracking-wider uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 focus:border-yellow-500 outline-none transition-all duration-500 text-white text-lg font-light"
                    data-testid="input-email"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Interest field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <label htmlFor="interest" className="block text-sm font-light text-gray-500 mb-3 tracking-wider uppercase">
                  How You Want to Contribute
                </label>
                <div className="relative">
                  <select
                    id="interest"
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    onFocus={() => setFocusedField('interest')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 focus:border-yellow-500 outline-none transition-all duration-500 text-white text-lg font-light appearance-none"
                    data-testid="select-interest"
                  >
                    <option value="" className="bg-black">Select...</option>
                    <option value="partner" className="bg-black">Partnership</option>
                    <option value="learn" className="bg-black">Learning</option>
                    <option value="contribute" className="bg-black">Expertise</option>
                    <option value="other" className="bg-black">Other</option>
                  </select>
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'interest' ? '100%' : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <label htmlFor="message" className="block text-sm font-light text-gray-500 mb-3 tracking-wider uppercase">
                  Your Vision
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 focus:border-yellow-500 outline-none transition-all duration-500 text-white text-lg font-light resize-none"
                    placeholder="Tell us about the future you want to build..."
                    data-testid="textarea-message"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="pt-8"
              >
                <button
                  type="submit"
                  className="group relative w-full md:w-auto px-16 py-5 overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-700"
                  data-testid="button-submit"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative text-gray-300 group-hover:text-yellow-500 font-light text-lg tracking-wider flex items-center justify-center gap-3 transition-colors duration-300">
                    Begin the Journey
                    <Send size={18} strokeWidth={1.5} />
                  </span>
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <motion.p
            className="text-2xl text-gray-500 font-light italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="text-closing"
          >
            "Alone, we spark ideas. Together, we ignite movements."
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default JoinMovement;
