import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      // Smooth lerp trailing effect for ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      animationFrameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="c-dot" ref={dotRef}></div>
      <div id="c-ring" ref={ringRef}></div>

      <style>{`
        #c-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: #a855f7;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px #a855f7;
          transition: width 0.2s, height 0.2s, background-color 0.2s;
        }

        #c-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 34px;
          height: 34px;
          border: 1.5px solid rgba(167, 139, 250, 0.55);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, border-color 0.2s;
          box-shadow: 0 0 15px rgba(167, 139, 250, 0.2);
        }

        @media (max-width: 768px) {
          #c-dot, #c-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Cursor;
