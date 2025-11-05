import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ExploreVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  const visionPhrases = [
    {
      phrase: 'Innovation born from purpose',
      delay: 0.1,
    },
    {
      phrase: 'Technology as empathy',
      delay: 0.2,
    },
    {
      phrase: 'Intelligence that liberates',
      delay: 0.3,
    },
    {
      phrase: 'Data transformed into dignity',
      delay: 0.4,
    },
    {
      phrase: 'Africa, imagined anew',
      delay: 0.5,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-[400vh] bg-black text-white pt-20">
      {/* Sticky container for the rotating Africa */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Digital Africa */}
        <div className="relative w-full max-w-3xl aspect-square">
          <motion.div
            style={{
              rotateY,
              scale,
            }}
            className="w-full h-full perspective-1000"
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.2))',
              }}
            >
              <defs>
                <radialGradient id="africaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </radialGradient>
                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>

              {/* Africa outline - more detailed */}
              <motion.path
                d="M 200 50 L 230 55 L 260 65 L 280 80 L 295 100 L 305 130 L 310 160 L 315 190 L 318 220 L 315 250 L 310 280 L 300 310 L 285 335 L 265 355 L 240 370 L 210 380 L 180 385 L 150 380 L 125 370 L 105 355 L 90 335 L 80 310 L 75 285 L 72 260 L 70 230 L 72 200 L 75 170 L 82 140 L 95 110 L 115 85 L 140 65 L 170 55 Z"
                fill="url(#africaGlow)"
                stroke="url(#strokeGradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />

              {/* Energy pulses across the continent */}
              {[
                { cx: 200, cy: 100, r: 3 },
                { cx: 160, cy: 180, r: 2.5 },
                { cx: 240, cy: 200, r: 3 },
                { cx: 190, cy: 280, r: 2.5 },
                { cx: 220, cy: 240, r: 2 },
              ].map((node, i) => (
                <g key={i}>
                  {/* Pulsing outer ring */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r * 4}
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="0.5"
                    animate={{
                      r: [node.r * 2, node.r * 6, node.r * 2],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                  {/* Core node */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="#FFD700"
                    animate={{
                      opacity: [1, 0.4, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </g>
              ))}

              {/* Connecting data streams */}
              {[
                { x1: 200, y1: 100, x2: 160, y2: 180 },
                { x1: 160, y1: 180, x2: 240, y2: 200 },
                { x1: 240, y1: 200, x2: 190, y2: 280 },
                { x1: 240, y1: 200, x2: 220, y2: 240 },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#FFD700"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                    strokeDashoffset: [0, -10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="max-w-4xl px-6 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-light mb-6 tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              data-testid="text-page-title"
            >
              Enter the Future
            </motion.h1>
            <motion.p
              className="text-xl text-gray-500 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              data-testid="text-page-subtitle"
            >
              Scroll to discover
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll-triggered vision phrases */}
      <div className="relative z-10 -mt-[100vh]">
        <div className="min-h-[300vh] flex flex-col justify-around py-40">
          {visionPhrases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: item.delay }}
              viewport={{ once: false, margin: '-20%' }}
              className="min-h-screen flex items-center justify-center px-6"
              data-testid={`vision-phrase-${index}`}
            >
              <div className="max-w-4xl text-center">
                <motion.p
                  className="text-4xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-500 to-white leading-tight"
                  initial={{ backgroundPosition: '0% 50%' }}
                  whileInView={{ backgroundPosition: '100% 50%' }}
                  transition={{ duration: 3 }}
                  viewport={{ once: false }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  {item.phrase}
                </motion.p>

                {/* Decorative element */}
                <motion.div
                  className="mt-12 mx-auto h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: '300px', opacity: 0.5 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: false }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final statement */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl"
        >
          <motion.p
            className="text-3xl md:text-5xl text-gray-300 font-light italic mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="text-closing"
          >
            The future is not something we enter.
          </motion.p>
          <motion.p
            className="text-3xl md:text-5xl text-yellow-500 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
          >
            The future is something we create.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default ExploreVision;
