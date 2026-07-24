import { useState } from 'react'
import { ArrowUpRight, Instagram, Pin } from 'lucide-react'
import { NAV_LINKS_META } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useLanguage()

  const navLinks = NAV_LINKS_META.map((link) => ({
    ...link,
    label: t.nav[link.id as keyof typeof t.nav],
  }))

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-6 pt-20 pb-8 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-medium uppercase tracking-[0.35em] text-white">
              Vanguard
            </span>
            <p className="mt-4 max-w-xs font-inter text-sm leading-relaxed text-white/50">
              {t.footer.blurb}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.instagramLabel}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-gold/60 hover:text-gold-light"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.pinterestLabel}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-gold/60 hover:text-gold-light"
              >
                <Pin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-widest text-white/40">
              {t.footer.exploreHeading}
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-white/65 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="font-inter text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  {t.nav.privateFitting}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-widest text-white/40">
              {t.footer.boutiquesHeading}
            </h4>
            <ul className="mt-5 space-y-3 font-inter text-sm text-white/65">
              {t.boutiques.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-widest text-white/40">
              {t.footer.newsletterHeading}
            </h4>
            <p className="mt-5 font-inter text-sm leading-relaxed text-white/50">
              {t.footer.newsletterBlurb}
            </p>
            {subscribed ? (
              <p className="mt-4 flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-gold-light">
                {t.footer.subscribed}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex items-stretch gap-2">
                <input
                  required
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full min-w-0 border border-white/15 bg-transparent px-3 py-2.5 font-inter text-sm text-white placeholder:text-white/30 outline-none focus:border-gold/60"
                />
                <button
                  type="submit"
                  aria-label={t.footer.subscribeLabel}
                  className="flex shrink-0 items-center justify-center border border-gold/40 px-3 text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 sm:flex-row">
          <span className="font-inter text-[10px] uppercase tracking-widest text-white/35">
            {t.footer.copyright}
          </span>
          <span className="font-inter text-[10px] uppercase tracking-widest text-white/35">
            {t.footer.appointmentOnly}
          </span>
        </div>
      </div>
    </footer>
  )
}
