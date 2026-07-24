import { useState } from 'react'
import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { t } = useLanguage()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-neutral-950 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=70&w=2000&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950/70" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold-light">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl">
            {t.contact.heading1} <span className="italic text-gold-light">{t.contact.heading2}</span>
          </h2>
          <p className="mt-6 max-w-sm font-inter text-sm leading-relaxed text-white/60">
            {t.contact.description}
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:atelier@vanguard-maison.com"
              className="flex items-center gap-3 font-inter text-sm text-white/75 transition-colors hover:text-gold-light"
            >
              <Mail className="h-4 w-4 text-gold" />
              atelier@vanguard-maison.com
            </a>
            <a
              href="tel:+390212345678"
              className="flex items-center gap-3 font-inter text-sm text-white/75 transition-colors hover:text-gold-light"
            >
              <Phone className="h-4 w-4 text-gold" />
              +39 021 234 5678
            </a>
            <div className="flex items-start gap-3 font-inter text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{t.contact.addressLine}</span>
            </div>
          </div>
        </div>

        <div className="border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-sm sm:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <Check className="h-6 w-6 text-gold-light" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-white">{t.contact.successTitle}</h3>
              <p className="mt-3 max-w-xs font-inter text-sm leading-relaxed text-white/55">
                {t.contact.successBody}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 font-inter text-xs uppercase tracking-widest text-gold-light hover:text-gold"
              >
                {t.contact.submitAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="font-inter text-[10px] uppercase tracking-widest text-white/50">
                  {t.contact.formNameLabel}
                </span>
                <input
                  required
                  type="text"
                  placeholder={t.contact.formNamePlaceholder}
                  className="border border-white/15 bg-transparent px-4 py-3 font-inter text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold/60"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="font-inter text-[10px] uppercase tracking-widest text-white/50">
                  {t.contact.formEmailLabel}
                </span>
                <input
                  required
                  type="email"
                  placeholder={t.contact.formEmailPlaceholder}
                  className="border border-white/15 bg-transparent px-4 py-3 font-inter text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold/60"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="font-inter text-[10px] uppercase tracking-widest text-white/50">
                  {t.contact.formBoutiqueLabel}
                </span>
                <select
                  required
                  defaultValue=""
                  className="border border-white/15 bg-neutral-900 px-4 py-3 font-inter text-sm text-white outline-none transition-colors focus:border-gold/60"
                >
                  <option value="" disabled>
                    {t.contact.formBoutiqueSelect}
                  </option>
                  {t.boutiques.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="font-inter text-[10px] uppercase tracking-widest text-white/50">
                  {t.contact.formDateLabel}
                </span>
                <input
                  required
                  type="date"
                  className="border border-white/15 bg-neutral-900 px-4 py-3 font-inter text-sm text-white outline-none transition-colors focus:border-gold/60"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-inter text-[10px] uppercase tracking-widest text-white/50">
                  {t.contact.formMessageLabel}
                </span>
                <textarea
                  rows={4}
                  placeholder={t.contact.formMessagePlaceholder}
                  className="resize-none border border-white/15 bg-transparent px-4 py-3 font-inter text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold/60"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="group mt-2 flex items-center justify-center gap-3 bg-gold px-7 py-4 font-inter text-xs font-semibold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-gold-light disabled:opacity-60 sm:col-span-2"
              >
                {submitting ? t.contact.sending : t.contact.submit}
                {!submitting && (
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
