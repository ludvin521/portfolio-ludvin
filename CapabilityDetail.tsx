import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function Curriculum() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 40 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const index = cards.indexOf(target);
            gsap.to(target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: 'power3.out',
            });
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      style={{
        padding: '120px 5vw',
        minHeight: '80vh',
        background: 'transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#dadada',
            opacity: 0.6,
            marginBottom: 24,
          }}
        >
          Compétences
        </div>
        <div
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
            marginBottom: 60,
          }}
        />

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 18,
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: 700,
          marginBottom: 60,
        }}>
          Cinq compétences techniques centrées sur le développement logiciel sécurisé, la cryptographie et l'infrastructure.
          Cinq compétences humaines animées par la conviction que la cybersécurité repose avant tout sur les personnes.
        </p>

        <div className="flex flex-col md:flex-row" style={{ gap: 32 }}>
          <div
            ref={(el) => { cardsRef.current[0] = el; }}
            onClick={() => navigate('/competences-techniques')}
            className="cursor-pointer group"
            style={{
              flex: 1,
              padding: '48px 40px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 4,
              transition: 'border-color 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(212, 168, 83, 0.3)';
              e.currentTarget.style.background = 'rgba(212, 168, 83, 0.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            }}
          >
            <span style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 11,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#D4A853',
              opacity: 0.8,
              display: 'block',
              marginBottom: 16,
            }}>
              5 Compétences
            </span>
            <h3 style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: 0,
              marginBottom: 16,
              transition: 'color 0.4s ease',
            }} className="group-hover:text-amber-300">
              Techniques
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
            }}>
              Python & FastAPI, Sécurité des Systèmes, Prompt Engineering,
              Infrastructure as Code, Chiffrement & Cryptographie
            </p>
            <span style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              color: '#D4A853',
              marginTop: 24,
              display: 'inline-block',
              letterSpacing: '0.5px',
            }}>
              Explorer →
            </span>
          </div>

          <div
            ref={(el) => { cardsRef.current[1] = el; }}
            onClick={() => navigate('/competences-humaines')}
            className="cursor-pointer group"
            style={{
              flex: 1,
              padding: '48px 40px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 4,
              transition: 'border-color 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(212, 168, 83, 0.3)';
              e.currentTarget.style.background = 'rgba(212, 168, 83, 0.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            }}
          >
            <span style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 11,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#D4A853',
              opacity: 0.8,
              display: 'block',
              marginBottom: 16,
            }}>
              5 Compétences
            </span>
            <h3 style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: 0,
              marginBottom: 16,
              transition: 'color 0.4s ease',
            }} className="group-hover:text-amber-300">
              Humaines
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
            }}>
              Coordination, Autonomie, Esprit Critique,
              Gestion de la Pression, Communication Technique
            </p>
            <span style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              color: '#D4A853',
              marginTop: 24,
              display: 'inline-block',
              letterSpacing: '0.5px',
            }}>
              Explorer →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
