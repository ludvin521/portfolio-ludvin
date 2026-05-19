import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { siteConfig, navigationConfig } from '../config';
import type { NavLink } from '../types/config';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('#/')) {
      navigate(href.slice(1));
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 150);
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      return;
    }
  };

  const isActive = (href: string) => {
    const path = href.replace('#', '');
    return location.pathname === path;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
      style={{
        height: 80,
        padding: '0 5vw',
        backgroundColor: scrolled || location.pathname !== '/' ? 'rgba(3, 3, 8, 0.95)' : 'transparent',
        backdropFilter: scrolled || location.pathname !== '/' ? 'blur(12px)' : 'none',
        borderBottom: scrolled || location.pathname !== '/' ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        className="text-white no-underline"
        style={{
          fontFamily: "'GeistMono', monospace",
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: '-0.5px',
        }}
      >
        {siteConfig.brandName}
      </a>

      <div className="hidden md:flex items-center" style={{ gap: 32 }}>
        {navigationConfig.links.map((link: NavLink) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="nav-link"
            style={{
              color: isActive(link.href.replace('#', '')) ? '#D4A853' : undefined,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {navigationConfig.ctaText && (
        <a
          href="#/contact"
          onClick={(e) => handleClick(e, '#/contact')}
          className="nav-link hidden md:inline-block"
          style={{
            padding: '8px 20px',
            border: '1px solid rgba(212, 168, 83, 0.3)',
            borderRadius: 4,
            color: '#D4A853',
          }}
        >
          {navigationConfig.ctaText}
        </a>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: '80px 5vw 40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: '#030308',
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
          Contact
        </div>
        <div
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
            marginBottom: 48,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 48, marginBottom: 60 }}>
          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#D4A853',
                marginBottom: 20,
              }}
            >
              Contact
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 2 }}>
              Ludvin Nynson Gatse<br />
              <a href="mailto:ludvin.gatse@opencyberai.com" style={{ color: '#D4A853', textDecoration: 'none' }}>ludvin.gatse@opencyberai.com</a><br />
              +33 7 69 25 90 48<br />
              Île-de-France, France
            </p>
          </div>

          {/* Formation */}
          <div>
            <h4
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#D4A853',
                marginBottom: 20,
              }}
            >
              Formation
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 2 }}>
              ESIEA Paris — Mastère Expert Cybersécurité<br />
              Titre RNCP Niveau 7 (2023–2026)<br />
              Université de Lille — Licence MI<br />
              DUT Informatique — Année spéciale
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h4
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#D4A853',
                marginBottom: 20,
              }}
            >
              Certifications
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 2 }}>
              CompTIA Security+ (validée)<br />
              Cisco CyberOps Associate (validée)<br />
              OSCP — en préparation<br />
              Terraform Associate — en préparation
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 11,
              color: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            © 2026 Ludvin GATSE. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a
              href="https://www.linkedin.com/in/ludvin-gatse-b3a27031b"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 11,
                color: 'rgba(255, 255, 255, 0.4)',
                textDecoration: 'none',
              }}
              className="hover:text-amber-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ludvingatse"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 11,
                color: 'rgba(255, 255, 255, 0.4)',
                textDecoration: 'none',
              }}
              className="hover:text-amber-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#030308', minHeight: '100vh', color: '#fff' }}>
      <Navigation />
      <div style={{ paddingTop: 80 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
