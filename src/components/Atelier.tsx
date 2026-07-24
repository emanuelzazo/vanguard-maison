import { ArrowUpRight } from 'lucide-react'
import { PROCESS_STEPS_META } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Atelier() {
  const { t } = useLanguage()

  const steps = PROCESS_STEPS_META.map((step) => ({
    ...step,
    ...t.atelier.steps[step.id as keyof typeof t.atelier.steps],
  }))

  return (
    <section id="atelier" className="relative overflow-hidden bg-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[420px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600&auto=format&fit=crop"
            alt={t.atelier.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold-light">
            {t.atelier.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl">
            {t.atelier.heading1}
            <br />
            <span className="italic text-gold-light">{t.atelier.heading2}</span>
          </h2>
          <p className="mt-6 max-w-md font-inter text-sm leading-relaxed text-white/60">
            {t.atelier.description}
          </p>

          <div className="mt-12 space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
                <span className="font-display text-3xl font-light text-gold/60">{step.n}</span>
                <div>
                  <h3 className="font-display text-xl text-white">{step.title}</h3>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-white/55">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-3 bg-gold px-7 py-4 font-inter text-xs font-semibold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-gold-light"
          >
            {t.atelier.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
