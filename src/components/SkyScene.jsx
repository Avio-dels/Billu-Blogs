import { useEffect, useRef } from 'react';
import './SkyScene.css';

const clouds = [
  { id: 1, size: 'large',  top: '12%', delay: '0s',   duration: '60s',  opacity: 0.85 },
  { id: 2, size: 'medium', top: '28%', delay: '15s',  duration: '80s',  opacity: 0.7  },
  { id: 3, size: 'small',  top: '18%', delay: '30s',  duration: '100s', opacity: 0.55 },
  { id: 4, size: 'large',  top: '45%', delay: '8s',   duration: '70s',  opacity: 0.65 },
  { id: 5, size: 'medium', top: '55%', delay: '40s',  duration: '90s',  opacity: 0.8  },
  { id: 6, size: 'small',  top: '38%', delay: '52s',  duration: '110s', opacity: 0.5  },
];

function Cloud({ size, top, delay, duration, opacity }) {
  return (
    <div
      className={`cloud cloud--${size}`}
      style={{ top, animationDelay: delay, animationDuration: duration, opacity }}
      aria-hidden="true"
    >
      <div className="cloud-body" />
      <div className="cloud-puff cloud-puff--1" />
      <div className="cloud-puff cloud-puff--2" />
    </div>
  );
}

export default function SkyScene({ children }) {
  const sceneRef = useRef(null);

  // Gentle parallax on mouse move
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 6;
      scene.style.setProperty('--parallax-x', `${x}px`);
      scene.style.setProperty('--parallax-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="sky-scene" ref={sceneRef} aria-label="Hero section">
      <div className="sky-gradient" aria-hidden="true" />
      <div className="sky-clouds" aria-hidden="true">
        {clouds.map((c) => (
          <Cloud key={c.id} {...c} />
        ))}
      </div>
      <div className="sky-meadow" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 Q180,20 360,70 Q540,120 720,60 Q900,0 1080,65 Q1260,130 1440,55 L1440,120 L0,120 Z" fill="#d5f5e3" />
          <path d="M0,95 Q200,55 400,90 Q600,125 800,80 Q1000,35 1200,85 Q1350,120 1440,90 L1440,120 L0,120 Z" fill="#a9dfbf" opacity="0.6" />
        </svg>
      </div>
      <div className="sky-content">{children}</div>
    </section>
  );
}
