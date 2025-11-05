import { useEffect, useRef, useState } from 'react';

function FluidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailSize, setTrailSize] = useState(40);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      currentPosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' ||
                           target.tagName === 'A' ||
                           target.closest('button') !== null ||
                           target.closest('a') !== null;

      if (isInteractive) {
        setIsHovering(true);
        setTrailSize(60);
      } else {
        setIsHovering(false);
        setTrailSize(40);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: `${trailSize}px`,
          height: `${trailSize}px`,
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      >
        <div
          className="w-full h-full rounded-full blur-xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
          }}
        />
      </div>

      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[10000]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`,
          transition: 'transform 0.2s ease',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          className="drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
        >
          <path
            d="M50 10 C30 15, 20 25, 15 40 C10 55, 10 70, 20 82 C30 94, 45 98, 50 90 C55 98, 70 94, 80 82 C90 70, 90 55, 85 40 C80 25, 70 15, 50 10 Z M45 25 L40 50 L30 60 L45 65 L50 75 L55 65 L70 60 L60 50 L55 25 Z"
            fill="none"
            stroke="#FFD700"
            strokeWidth="2.5"
            className="animate-pulse"
          />
          <circle cx="50" cy="50" r="3" fill="#FFD700" className="opacity-80" />
        </svg>
      </div>
    </>
  );
}

export default FluidCursor;
