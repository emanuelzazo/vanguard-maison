import { ArrowUpRight, Award, Crown } from 'lucide-react'
import { COLLECTION_META, STAT_IDS } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const railItems = COLLECTION_META.slice(0, 3).map((item) => ({
    ...item,
    ...t.collection.items[item.id as keyof typeof t.collection.items],
  }))

  const stats = STAT_IDS.map((id) => ({ id, ...t.stats[id] }))

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      {/* Cinematic background photo — slow Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=85&w=2400&auto=format&fit=crop"
          alt={t.hero.bgAlt}
          className="animate-slow-zoom h-full w-full object-cover"
        />
      </div>
      {/* Cinematic grade: vignette + directional shadow for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

      {/* Hero content */}
      <main className="relative z-10 flex min-h-screen items-center px-6 pt-32 pb-24 sm:px-10 sm:pt-36 lg:px-16">
        <div className="flex-1">
          <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
            <Crown className="h-4 w-4 text-gold" />
            <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold-light sm:text-xs">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-display font-light leading-[0.95] text-white">
            <span className="block text-[clamp(3rem,8.5vw,7.5rem)]">{t.hero.headline1}</span>
            <span className="block text-[clamp(3rem,8.5vw,7.5rem)] italic text-gold-light">
              {t.hero.headline2}
            </span>
            <span className="block text-[clamp(3rem,8.5vw,7.5rem)]">{t.hero.headline3}</span>
          </h1>

          <div className="animate-line-grow mt-6 h-px w-24 bg-gold lg:mt-8" />

          <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
            {t.hero.subheadLine1}
            <br />
            {t.hero.subheadLine2}
            <span className="font-semibold text-white">{t.hero.subheadBold}</span>
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
            <a
              href="#collection"
              className="group flex items-center gap-3 bg-gold px-5 py-3 font-inter text-[11px] font-semibold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-gold-light sm:px-7 sm:py-4 sm:text-xs"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#atelier"
              className="group flex items-center gap-3 border border-white/25 px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition-all hover:border-white/60 hover:bg-white/5 sm:px-7 sm:py-4 sm:text-xs"
            >
              {t.hero.ctaSecondary}
            </a>

            <div className="hidden items-center gap-3 sm:flex">
              <Award className="h-8 w-8 text-gold/70" />
              <div className="font-inter text-[10px] uppercase tracking-wider text-white/60">
                <div>{t.hero.awardLine1}</div>
                <div>{t.hero.awardLine2}</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="font-display text-2xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial collection rail — desktop only */}
        <aside className="animate-fade-in-delay hidden w-64 flex-col gap-5 xl:flex">
          {railItems.map((item) => (
            <a key={item.id} href="#collection" className="group block">
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-36 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-2.5 flex items-baseline justify-between">
                <span className="font-display text-base italic text-white">
                  {item.name}
                </span>
                <span className="font-inter text-[9px] uppercase tracking-widest text-gold-light/80">
                  {item.material} · {item.price}
                </span>
              </div>
            </a>
          ))}
        </aside>
      </main>

      {/* Bottom bar */}
      <footer className="absolute inset-x-0 bottom-0 z-10 hidden items-center justify-between px-6 pb-5 sm:px-10 md:flex lg:px-16">
        <span className="animate-fade-in-delay font-inter text-[9px] uppercase tracking-[0.35em] text-white/40">
          {t.hero.bottomLocations}
        </span>
        <span className="animate-fade-in-delay font-inter text-[9px] uppercase tracking-[0.35em] text-white/40">
          {t.hero.bottomAppointment}
        </span>
      </footer>

      {/* Scroll cue */}
      <a
        href="#collection"
        aria-label={t.hero.scrollLabel}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="h-9 w-px bg-white/30" />
      </a>
    </section>
  )
}
