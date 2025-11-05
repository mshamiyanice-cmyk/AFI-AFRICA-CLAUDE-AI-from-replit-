import { useEffect, useRef } from 'react';

interface SplineBackgroundProps {
  scrollProgress: number;
}

function SplineBackground({ scrollProgress }: SplineBackgroundProps) {
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splineRef.current) {
      const translateY = scrollProgress * 100;
      const scale = 1 + scrollProgress * 0.2;
      splineRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }
  }, [scrollProgress]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.90/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={splineRef}
      className="fixed inset-0 z-0 transition-transform duration-700 ease-out"
      style={{ willChange: 'transform' }}
    >
      {/* <spline-viewer
        url="https://prod.spline.design/xx9QEnS4Qdr3I1km/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      /> */}
    </div>
  );
}

export default SplineBackground;
