import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { siteConfig, navigationConfig } from '../config';
import type { NavLink } from '../types/config';

export default function Navigation() {
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

    // If it's a route (starts with #/ or /), use navigate
    if (href.startsWith('#/')) {
      navigate(href.slice(1)); // Remove the leading #
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // If it's an anchor (starts with #), scroll to element
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate home first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  };

  if (!siteConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-colors duration-500"
      style={{
        height: 80,
        padding: '0 5vw',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
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

      <div className="hidden md:flex items-center" style={{ gap: 40 }}>
        {navigationConfig.links.map((link: NavLink) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="nav-link"
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
        >
          {navigationConfig.ctaText}
        </a>
      )}
    </nav>
  );
}
