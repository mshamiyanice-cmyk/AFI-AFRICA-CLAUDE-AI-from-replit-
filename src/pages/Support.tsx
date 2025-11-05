import { motion } from 'framer-motion';
import { DollarSign, HandshakeIcon, Share2 } from 'lucide-react';

function Support() {
  const supportWays = [
    {
      icon: DollarSign,
      title: 'Fund an Idea',
      description: 'Your investment fuels innovation. Every contribution accelerates Africa\'s AI-powered transformation.',
      action: 'Support financially',
    },
    {
      icon: HandshakeIcon,
      title: 'Partner with Us',
      description: 'Strategic collaboration amplifies impact. Co-create solutions that define the future.',
      action: 'Explore partnership',
    },
    {
      icon: Share2,
      title: 'Shape the Future',
      description: 'Your network, expertise, or voice—each contribution matters in building the movement.',
      action: 'Get involved',
    },
  ];

  const impact = [
    { number: '50+', label: 'Initiatives Funded' },
    { number: '10,000+', label: 'Lives Transformed' },
    { number: '15', label: 'Strategic Partners' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Minimal ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.02) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-32 max-w-4xl mx-auto text-center"
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
            transition={{ duration: 1.2, delay: 0.2 }}
            data-testid="text-page-title"
          >
            Support the Mission
          </motion.h1>
          <motion.p
            className="text-xl text-gray-500 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            data-testid="text-page-subtitle"
          >
            Trust. Transparency. Transformation.
          </motion.p>
        </motion.div>

        {/* Support options - calm, minimal */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {supportWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group text-center"
                data-testid={`card-support-${index}`}
              >
                {/* Icon with subtle interaction */}
                <motion.div
                  className="mb-8 inline-flex"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 blur-xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
                      }}
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <div className="relative w-16 h-16 flex items-center justify-center border border-gray-800 group-hover:border-gray-700 transition-colors duration-500">
                      <Icon className="w-7 h-7 text-yellow-500" strokeWidth={1} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-light text-white mb-4">
                  {way.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  {way.description}
                </p>

                {/* Action link */}
                <motion.button
                  className="relative text-gray-400 hover:text-yellow-500 font-light text-sm tracking-wider uppercase transition-colors duration-500"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`button-${way.action.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {way.action}
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Impact metrics - restrained presentation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="py-20 border-t border-b border-gray-900 mb-32"
        >
          <motion.h2
            className="text-2xl font-light text-center text-gray-400 mb-16 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="text-impact-title"
          >
            Impact to Date
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16">
            {impact.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`stat-${i}`}
              >
                <div className="text-5xl md:text-6xl font-light mb-4 text-yellow-500">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-light tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transparency statement - whispered credibility */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.h3
            className="text-2xl font-light text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="text-transparency-title"
          >
            Our Commitment
          </motion.h3>
          <motion.p
            className="text-lg text-gray-500 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-transparency-description"
          >
            Complete transparency. Every contribution tracked. Every project documented. Every impact measured.
            You'll receive regular insights on how your support drives change across Africa.
          </motion.p>

          {/* Subtle CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group relative px-10 py-4 border border-gray-800 hover:border-gray-700 transition-all duration-700"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              data-testid="button-view-reports"
            >
              <span className="text-gray-400 group-hover:text-gray-300 font-light tracking-wide transition-colors duration-500">
                View Impact Reports
              </span>
            </motion.button>

            <motion.button
              className="group relative px-10 py-4 border border-gray-700 hover:border-yellow-500 transition-all duration-700"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              data-testid="button-contact-us"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative text-gray-300 group-hover:text-yellow-500 font-light tracking-wide transition-colors duration-300">
                Start a Conversation
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Final quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center pt-20"
        >
          <motion.p
            className="text-2xl text-gray-600 font-light italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="text-closing"
          >
            "Together, we build what lasts."
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Support;
