import { motion } from 'framer-motion';
import { Brain, Zap, Rocket, Code, Database, Shield } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Consulting',
      subtitle: 'Strategic intelligence',
      description: 'Transform complexity into clarity. We architect AI solutions that align with your vision and amplify your impact.',
    },
    {
      icon: Zap,
      title: 'Automation',
      subtitle: 'Precision at scale',
      description: 'Eliminate friction. Streamline operations. Free your team to focus on what truly matters.',
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      subtitle: 'Future-ready organizations',
      description: 'Not just technology adoption—complete organizational evolution powered by intelligent systems.',
    },
    {
      icon: Code,
      title: 'AI Development',
      subtitle: 'Custom intelligence',
      description: 'Bespoke AI models crafted for your unique challenges. From concept to deployment.',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      subtitle: 'Insight as strategy',
      description: 'Raw data becomes actionable wisdom. Predictive models that illuminate the path forward.',
    },
    {
      icon: Shield,
      title: 'AI Ethics & Governance',
      subtitle: 'Responsible innovation',
      description: 'Build trust through transparency. Deploy AI that respects privacy, fairness, and human dignity.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Data Stream Background */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500 font-mono text-xs"
            style={{
              left: `${(i * 40) % 100}%`,
              top: `-20px`,
            }}
            animate={{
              y: ['0vh', '120vh'],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            {Math.random().toString(2).substring(2, 12)}
          </motion.div>
        ))}
      </div>

      {/* Electric blue accents */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-32 max-w-4xl"
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
            Intelligence. Elegance. Impact.
          </motion.h1>
          <motion.p
            className="text-xl text-gray-500 font-light max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            data-testid="text-page-description"
          >
            Not a pitch deck. A promise of transformation.
          </motion.p>
        </motion.div>

        {/* Flowing service sections */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, margin: '-150px' }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
                data-testid={`card-service-${index}`}
              >
                {/* Icon side */}
                <motion.div
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 blur-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    
                    {/* Icon container */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center border border-gray-800">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Icon
                          className="w-12 h-12 md:w-16 md:h-16 text-yellow-500"
                          strokeWidth={1}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Content side */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-yellow-500 mb-2 tracking-widest uppercase font-light">
                      {service.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                      {service.title}
                    </h3>
                    <motion.p
                      className="text-lg md:text-xl text-gray-400 font-light leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Decorative line */}
                    <motion.div
                      className="mt-8 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      style={{ maxWidth: '200px' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center mt-40 pt-20 border-t border-gray-900"
        >
          <motion.p
            className="text-2xl md:text-3xl text-gray-400 font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="text-cta"
          >
            Ready to evolve?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              className="group relative px-12 py-5 overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-700"
              data-testid="button-get-started"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative text-gray-300 group-hover:text-yellow-500 font-light text-lg tracking-wider transition-colors duration-300">
                Let's begin
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
