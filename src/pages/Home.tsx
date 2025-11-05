import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import FluidCursor from '../components/FluidCursor';
import SplineBackground from '../components/SplineBackground';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <FluidCursor />
      <SplineBackground scrollProgress={scrollProgress} />
      
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-block mb-6">
              <div className="relative">
                <div
                  className="absolute inset-0 blur-2xl opacity-40"
                  style={{
                    background: 'radial-gradient(ellipse at center, #FFD700 0%, transparent 70%)',
                  }}
                />
                <h1
                  className="relative text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #B8860B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  data-testid="text-main-title"
                >
                  AFI AFRICA
                </h1>
              </div>
            </div>

            <div
              className={`mt-8 transition-all duration-1500 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <p className="text-2xl md:text-4xl font-light tracking-wide text-gray-200 mb-4" data-testid="text-subtitle">
                AI For Impact In Africa
              </p>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto" />
            </div>

            <div
              className={`mt-12 transition-all duration-1500 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light" data-testid="text-description">
                Where visionary minds converge to shape the future of technology across the continent.
                <br />
                <span className="text-yellow-500">Collaborate. Innovate. Transform.</span>
              </p>
            </div>

            <div
              className={`mt-16 flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1500 delay-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <Link href="/join-movement" data-testid="button-join">
                <button className="group relative px-8 py-4 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
                    }}
                  />
                  <span className="relative text-black font-semibold text-lg tracking-wide">
                    Join The Movement
                  </span>
                </button>
              </Link>

              <Link href="/explore-vision" data-testid="button-explore">
                <button className="group relative px-8 py-4 overflow-hidden border border-gray-600 hover:border-yellow-500 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative text-gray-300 font-semibold text-lg tracking-wide">
                    Explore Vision
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div
            className={`mt-32 transition-all duration-1500 delay-1000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="inline-flex flex-col items-center gap-3 animate-bounce">
              <p className="text-xs tracking-widest text-gray-500 uppercase">Scroll To Awaken</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-yellow-500"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>
    </div>
  );
}

export default Home;
