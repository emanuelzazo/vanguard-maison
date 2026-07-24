import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { COLLECTION_META } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Collection() {
  const [showAll, setShowAll] = useState(false)
  const { t } = useLanguage()

  const allItems = COLLECTION_META.map((item) => ({
    ...item,
    ...t.collection.items[item.id as keyof typeof t.collection.items],
  }))
  const visible = showAll ? allItems : allItems.slice(0, 3)

  return (
    <section id="collection" className="bg-neutral-950 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div>
            <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold-light">
              {t.collection.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              {t.collection.heading1}{' '}
              <span className="italic text-gold-light">{t.collection.heading2}</span>
            </h2>
          </div>
          <p className="max-w-sm font-inter text-sm leading-relaxed text-white/60">
            {t.collection.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden bg-neutral-900">
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <a
                  href="#contact"
                  className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-white/95 py-3 font-inter text-[11px] font-semibold uppercase tracking-widest text-neutral-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {t.collection.enquire}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-xl italic text-white">{item.name}</span>
                <span className="font-inter text-xs text-gold-light">{item.price}</span>
              </div>
              <div className="mt-1 font-inter text-[11px] uppercase tracking-widest text-white/45">
                {item.material}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="group flex items-center gap-3 border border-white/25 px-7 py-4 font-inter text-xs uppercase tracking-widest text-white transition-all hover:border-gold/60 hover:bg-gold/10"
          >
            {showAll ? t.collection.showFewer : t.collection.viewAll(allItems.length)}
            <ArrowUpRight
              className={`h-4 w-4 transition-transform ${showAll ? '-rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
