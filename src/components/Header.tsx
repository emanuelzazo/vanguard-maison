import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { NAV_LINKS_META } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const navLinks = NAV_LINKS_META.map((link) => ({
    ...link,
    label: t.nav[link.id as keyof typeof t.nav],
  }))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled ? 'bg-neutral-950/85 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div
          className={`absolute inset-x-0 bottom-0 h-px bg-gold/20 transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <a href="#hero" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-medium uppercase tracking-[0.35em] text-white sm:text-3xl">
              Vanguard
            </span>
            <span className="mt-1.5 font-inter text-[8px] uppercase tracking-[0.5em] text-gold sm:text-[9px]">
              {t.brand.tagline}
            </span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="group relative font-inter text-xs uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 border border-gold/40 px-6 py-3 font-inter text-[11px] uppercase tracking-widest text-gold-light transition-all hover:border-gold hover:bg-gold/10 md:flex"
          >
            {t.nav.privateFitting}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            aria-label={t.nav.openMenu}
            onClick={() => setMenuOpen(true)}
            className="space-y-1.5 md:hidden"
          >
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-4 bg-gold" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-display text-2xl font-medium uppercase tracking-[0.35em] text-white sm:text-3xl">
            Vanguard
          </span>
          <button
            type="button"
            aria-label={t.nav.closeMenu}
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="flex h-[calc(100%-88px)] flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-light uppercase tracking-[0.15em] text-white transition-all duration-500 sm:text-5xl"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center gap-2 border border-gold/40 px-6 py-3 font-inter text-xs uppercase tracking-widest text-gold-light transition-all duration-500 hover:border-gold hover:bg-gold/10"
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {t.nav.privateFitting}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}
