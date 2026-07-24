import { PRESS_QUOTE_IDS } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Press() {
  const { t } = useLanguage()

  const quotes = PRESS_QUOTE_IDS.map((id) => ({ id, ...t.press.quotes[id] }))

  return (
    <section id="press" className="border-y border-white/10 bg-neutral-900 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold-light">
            {t.press.eyebrow}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
          {quotes.map((item) => (
            <figure key={item.id} className="text-center sm:text-left">
              <blockquote className="font-display text-lg italic leading-snug text-white/85 sm:text-xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 font-inter text-[11px] uppercase tracking-[0.3em] text-gold-light/80">
                {item.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
