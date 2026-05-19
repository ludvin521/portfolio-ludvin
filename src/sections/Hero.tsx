import { useRef, useEffect, useState } from 'react';
import AmberCascades from './AmberCascades';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { heroConfig } from '../config';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  if (!heroConfig.title) {
    return null;
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <AmberCascades />
      <div
        className="relative z-10 flex flex-col justify-between pointer-events-none"
        style={{
          height: '100%',
          padding: '22vh 5vw 8vh',
        }}
      >
        <div>
          {/* Profile photo and title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 40px)', marginBottom: 'clamp(32px, 4vw, 56px)', flexWrap: 'wrap' }}>
            {heroConfig.profilePhoto && (
              <div
                className="pointer-events-auto"
                style={{
                  width: 'clamp(72px, 10vw, 130px)',
                  height: 'clamp(72px, 10vw, 130px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                  flexShrink: 0,
                }}
              >
                <img
                  src={heroConfig.profilePhoto}
                  alt="Ludvin GATSE"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            )}
            <h1
              ref={titleRef}
              className="text-white"
              style={{
                fontFamily: "'GeistMono', monospace",
                fontWeight: 400,
                fontSize: 'clamp(40px, 5.5vw, 88px)',
                lineHeight: 1.0,
                letterSpacing: '-3px',
                textShadow: '0 4px 24px rgba(0,0,0,0.8)',
                width: 'fit-content',
              }}
            >
              {heroConfig.title}
            </h1>
          </div>
          {heroConfig.subtitleLine1 && (
            <p
              style={{
                fontFamily: "'GeistMono', monospace",
                fontWeight: 200,
                fontSize: 'clamp(15px, 1.5vw, 22px)',
                lineHeight: 1.7,
                letterSpacing: '-0.3px',
                color: '#ffffff',
                margin: '0 0 12px 0',
                width: titleWidth || 'auto',
                maxWidth: '100%',
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              {heroConfig.subtitleLine1}
            </p>
          )}
          {heroConfig.subtitleLine2 && (
            <p
              style={{
                fontFamily: "'GeistMono', monospace",
                fontWeight: 200,
                fontSize: 'clamp(15px, 1.5vw, 22px)',
                lineHeight: 1.7,
                letterSpacing: '-0.3px',
                color: '#ffffff',
                margin: 0,
                width: titleWidth || 'auto',
                maxWidth: '100%',
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              {heroConfig.subtitleLine2}
            </p>
          )}
        </div>

        {heroConfig.ctaText && (
          <div style={{ display: 'flex', justifyContent: 'center' }} className="pointer-events-auto">
            <LiquidGlassButton
              onClick={() => {
                document.querySelector('#curriculum')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {heroConfig.ctaText}
            </LiquidGlassButton>
          </div>
        )}
      </div>
    </section>
  );
}
