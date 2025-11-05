import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function WhoWeAre() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(scrolled / maxScroll, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-20 overflow-hidden">
      {/* Circuit Lines Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Horizontal circuit lines that draw with scroll */}
          {[150, 300, 450, 600].map((y, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={y}
              x2="1200"
              y2={y}
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: scrollProgress > i * 0.15 ? 1 : 0,
                opacity: scrollProgress > i * 0.15 ? 0.4 : 0,
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          ))}

          {/* Vertical circuit lines */}
          {[200, 400, 600, 800, 1000].map((x, i) => (
            <motion.line
              key={`v-${i}`}
              x1={x}
              y1="0"
              x2={x}
              y2="800"
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: scrollProgress > 0.2 + i * 0.1 ? 1 : 0,
                opacity: scrollProgress > 0.2 + i * 0.1 ? 0.3 : 0,
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          ))}

          {/* Connection nodes */}
          {[
            { cx: 200, cy: 150 },
            { cx: 600, cy: 300 },
            { cx: 1000, cy: 450 },
            { cx: 400, cy: 600 },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r="4"
              fill="#FFD700"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: scrollProgress > 0.3 + i * 0.1 ? [0.4, 1, 0.4] : 0,
                scale: scrollProgress > 0.3 + i * 0.1 ? [1, 1.3, 1] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        {/* Title with deliberate motion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-32"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6 tracking-wide leading-tight"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            data-testid="text-page-title"
          >
            The Bridge Between<br />Technology and Potential
          </motion.h1>
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-yellow-500 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Main narrative sections with minimal text */}
        <div className="space-y-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl"
          >
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-section-purpose"
            >
              We exist at the intersection where{' '}
              <span className="text-yellow-500">innovation</span> meets{' '}
              <span className="text-yellow-500">humanity</span>.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mt-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Not building technology for its own sake, but crafting tools that amplify human potential across Africa.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl ml-auto text-right"
          >
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-section-mission"
            >
              Intelligence that serves.<br />
              <span className="text-yellow-500">Technology that empowers.</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mt-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Democratizing AI to unlock opportunities, solve complex challenges, and build a future defined by African innovation.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl"
          >
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-section-values"
            >
              Visionary, yet grounded.<br />
              Ambitious, yet <span className="text-yellow-500">intentional</span>.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mt-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We don't chase trends. We shape movements. Every line of code, every algorithm, every partnership—rooted in purpose.
            </motion.p>
          </motion.div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-center py-20 border-t border-gray-900"
          >
            <motion.p
              className="text-3xl md:text-4xl text-gray-400 font-light italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="text-tagline"
            >
              "Where intelligence unfolds."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
