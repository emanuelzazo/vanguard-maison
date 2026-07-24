import { useState } from 'react'
import { ChevronDown, Quote } from 'lucide-react'
import { TIMELINE_META } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Heritage() {
  const [expanded, setExpanded] = useState(false)
  const { t } = useLanguage()

  const allEntries = TIMELINE_META.map((entry) => ({
    ...entry,
    ...t.heritage.timeline[entry.id as keyof typeof t.heritage.timeline],
  }))
  const visible = expanded ? allEntries : allEntries.slice(0, 3)

  return (
    <section id="heritage" className="bg-neutral-950 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold-light">
            {t.heritage.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl">
            {t.heritage.heading1}
            <br />
            <span className="italic text-gold-light">{t.heritage.heading2}</span>
          </h2>

          <div className="mt-8 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=1200&auto=format&fit=crop"
              alt={t.heritage.imageAlt}
              className="h-72 w-full object-cover"
            />
          </div>

          <blockquote className="mt-8 border-l-2 border-gold/50 pl-6">
            <Quote className="h-5 w-5 text-gold/50" />
            <p className="mt-3 font-display text-xl italic leading-snug text-white/85">
              {t.heritage.quote}
            </p>
            <footer className="mt-3 font-inter text-[11px] uppercase tracking-widest text-white/45">
              {t.heritage.quoteAuthor}
            </footer>
          </blockquote>
        </div>

        <div>
          <ol className="relative space-y-10 border-l border-white/10 pl-8">
            {visible.map((entry) => (
              <li key={entry.id} className="relative">
                <span className="absolute -left-[calc(2rem+4.5px)] top-1 h-2.5 w-2.5 rounded-full bg-gold" />
                <span className="font-display text-2xl font-medium text-gold-light">
                  {entry.year}
                </span>
                <h3 className="mt-1 font-display text-xl text-white">{entry.title}</h3>
                <p className="mt-2 max-w-lg font-inter text-sm leading-relaxed text-white/55">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>

          {allEntries.length > 3 && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="group mt-10 flex items-center gap-2 pl-8 font-inter text-xs uppercase tracking-widest text-gold-light transition-colors hover:text-gold"
            >
              {expanded ? t.heritage.archiveCollapse : t.heritage.archiveExpand}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
