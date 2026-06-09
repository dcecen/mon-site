/* global React, Icons */
const { useState, useEffect, useRef } = React;

// ---------- ICONS (custom set) ----------
const {
  Menu, X, ChevronRight, ChevronDown, ArrowRight, ArrowUpRight, ArrowLeft,
  Phone, Mail, MapPin, Clock, ExternalLink,
  Building2, Hammer, Wrench, Key, Compass, Ruler, ClipboardCheck,
  Users, ShieldCheck, Eye, CheckCircle2,
  HardHat, PencilRuler, FileText, BadgeCheck, Send,
  Facebook, Instagram, Linkedin,
} = window.Icons;

// ---------- SITE DATA ----------
const NAV = [
  { id: 'home',        label: 'Accueil' },
  { id: 'expertises',  label: 'Expertises' },
  { id: 'gestion',     label: 'Gestion Locative' },
  { id: 'logiciels',   label: 'Logiciels' },
  { id: 'projets',     label: 'Nos Projets' },
  { id: 'contact',     label: 'Contact' },
];

const COMPANY = {
  name: 'RENOV CONSEIL EST',
  addressLine1: '45 Route du Rhin, Escalier B',
  addressLine2: '67400 Illkirch-Graffenstaden',
  phone: '+33 (0)6 61 74 75 91',
  email: 'contact@renovconseilest.fr',
  siret: '94457268400016',
  ape: '4120A',
  portalUrl: 'https://immobilier.renovconseilest.fr',
  portalLabel: 'immobilier.renovconseilest.fr',
  gestionPortalUrl: 'https://gestion.renovconseil.fr',
  gestionPortalLabel: 'gestion.renovconseil.fr',
};

// ---------- LOGO ----------
function Logo({ tone = 'dark', compact = false, size = 36 }) {
  const navy = tone === 'light' ? '#ffffff' : '#1f3a5f';
  const orange = '#d87a2e';
  return (
    <div className="flex items-center gap-3 select-none">
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
        {/* Square split diagonally: top-left triangle orange, bottom-right triangle navy */}
        <polygon points="2,2 38,2 2,38" fill={orange} />
        <polygon points="38,2 38,38 2,38" fill={navy} />
      </svg>
      {!compact && (
        <div className="leading-none">
          <div
            className="font-bold tracking-tight whitespace-nowrap"
            style={{
              color: navy,
              fontSize: '15px',
              letterSpacing: '0.06em',
              lineHeight: 1,
            }}
          >
            RENOV CONSEIL EST
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- TOP BAR ----------
function TopBar() {
  return (
    <div className="bg-ink-950 text-ink-100 text-[13px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-center">
        <div className="inline-flex items-center gap-2">
          <span className="opacity-70 text-[11px] font-mono tracking-[0.18em] uppercase">Nos portails</span>
        </div>
        <a
          href={COMPANY.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sand-300 hover:text-sand-200 transition font-medium"
        >
          <Building2 className="w-3.5 h-3.5 opacity-80" />
          {COMPANY.portalLabel}
        </a>
        <a
          href={COMPANY.gestionPortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sand-300 hover:text-sand-200 transition font-medium"
        >
          <Key className="w-3.5 h-3.5 opacity-80" />
          {COMPANY.gestionPortalLabel}
          <span className="hidden sm:inline text-ink-400 font-normal">· espace client</span>
        </a>
      </div>
    </div>
  );
}

// ---------- HEADER ----------
function Header({ current, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'bg-white/95 backdrop-blur border-b border-ink-100 shadow-soft' : 'bg-white border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <button onClick={() => onNavigate('home')} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-500/40 rounded-md">
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link text-[14px] font-medium tracking-tight transition ${current === item.id ? 'is-active text-ink-900' : 'text-ink-600 hover:text-ink-900'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-ink-900 hover:bg-ink-800 text-white text-[13px] font-medium px-4 py-2.5 rounded-md transition"
            >
              Devis gratuit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md border border-ink-200 text-ink-700"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-ink-100 pt-3">
            <div className="flex flex-col">
              {NAV.map(item => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setOpen(false); }}
                  className={`text-left px-3 py-3 rounded-md text-[15px] font-medium ${current === item.id ? 'bg-ink-50 text-ink-900' : 'text-ink-700 hover:bg-ink-50'}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { onNavigate('contact'); setOpen(false); }}
                className="mt-3 inline-flex items-center justify-center gap-2 bg-ink-900 text-white text-sm font-medium px-4 py-3 rounded-md"
              >
                Demander un devis gratuit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ---------- FOOTER ----------
function Footer({ onNavigate }) {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 text-sm text-ink-300 leading-relaxed max-w-xs">
              Un interlocuteur unique pour la rénovation, l'ingénierie et la gestion de votre patrimoine en Alsace.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-sand-400 shrink-0" />
                <div className="text-ink-200">
                  <div>{COMPANY.addressLine1}</div>
                  <div>{COMPANY.addressLine2}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sand-400 shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g,'')}`} className="hover:text-white transition">{COMPANY.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sand-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition">{COMPANY.email}</a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] text-ink-400 uppercase mb-5">Navigation</div>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {NAV.map(item => (
                <li key={item.id}>
                  <button onClick={() => onNavigate(item.id)} className="text-ink-200 hover:text-sand-300 transition flex items-center gap-1.5 group">
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux & portail */}
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] text-ink-400 uppercase mb-5">Suivez-nous</div>
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-ink-800 hover:border-sand-400 hover:text-sand-300 transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="text-[11px] font-mono tracking-[0.2em] text-ink-400 uppercase mt-8 mb-4">Portails</div>
            <div className="flex flex-col gap-2">
              <a
                href={COMPANY.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-sand-300 hover:text-sand-200 transition"
              >
                <Building2 className="w-3.5 h-3.5 opacity-80" />
                {COMPANY.portalLabel}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY.gestionPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-sand-300 hover:text-sand-200 transition"
              >
                <Key className="w-3.5 h-3.5 opacity-80" />
                {COMPANY.gestionPortalLabel}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-800/80 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[12px] text-ink-400">
          <div>© 2026 RENOV CONSEIL EST — SIRET : {COMPANY.siret} — Code APE : {COMPANY.ape}</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-sand-300 transition">Mentions légales</a>
            <a href="#" className="hover:text-sand-300 transition">Politique de confidentialité</a>
            <a href="#" className="hover:text-sand-300 transition">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- SHARED UI PRIMITIVES ----------
function Button({ children, variant = 'primary', icon: Icon, onClick, type = 'button', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-medium text-[14px] px-5 py-3 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const styles = {
    primary:   'bg-sand-600 hover:bg-sand-700 text-white focus-visible:ring-sand-500',
    dark:      'bg-ink-900 hover:bg-ink-800 text-white focus-visible:ring-ink-700',
    ghost:     'bg-transparent border border-ink-300 text-ink-800 hover:border-ink-800 focus-visible:ring-ink-400',
    light:     'bg-white text-ink-900 hover:bg-ink-50 focus-visible:ring-white/50',
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
}

function Eyebrow({ children, tone = 'dark' }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.22em] uppercase ${tone === 'light' ? 'text-sand-300' : 'text-sand-700'}`}>
      <span className={`w-6 h-px ${tone === 'light' ? 'bg-sand-400' : 'bg-sand-600'}`}></span>
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, lead, align = 'left', tone = 'dark' }) {
  const isCenter = align === 'center';
  return (
    <div className={`${isCenter ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] font-semibold tracking-tight ${tone === 'light' ? 'text-white' : 'text-ink-900'}`} style={{ textWrap: 'balance' }}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-[16px] leading-relaxed ${tone === 'light' ? 'text-ink-300' : 'text-ink-600'}`} style={{ textWrap: 'pretty' }}>
          {lead}
        </p>
      )}
    </div>
  );
}

// Image placeholder — striped with monospace label (per design system)
function Placeholder({ label, ratio = '16/9', tone = 'stripes', className = '', children }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-ink-200 ${tone === 'sand' ? 'placeholder-sand' : 'placeholder-stripes'} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-500">
          {label}
        </div>
      </div>
      {children}
    </div>
  );
}

function PageHero({ eyebrow, title, lead, kicker }) {
  return (
    <section className="relative bg-ink-950 text-white overflow-hidden">
      {/* subtle topographic lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {kicker && (
          <div className="text-[11px] font-mono tracking-[0.22em] text-sand-300 uppercase mb-4">{kicker}</div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
            <h1 className="mt-5 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
              {title}
            </h1>
          </div>
          {lead && (
            <div className="lg:col-span-4">
              <p className="text-[16px] leading-relaxed text-ink-300 max-w-md" style={{ textWrap: 'pretty' }}>
                {lead}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* bottom accent line */}
      <div className="relative h-1.5 w-full">
        <div className="h-full w-1/3 bg-sand-500"></div>
      </div>
    </section>
  );
}

// Expose to window
Object.assign(window, {
  NAV, COMPANY,
  Logo, TopBar, Header, Footer,
  Button, Eyebrow, SectionTitle, Placeholder, PageHero,
});
