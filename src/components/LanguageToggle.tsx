import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.languageToggle.label}
      className="fixed top-[92px] right-4 z-50 flex items-center gap-0.5 rounded-full border border-gold/30 bg-neutral-950/80 p-1 backdrop-blur-md sm:right-6"
    >
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        className={`rounded-full px-3 py-1.5 font-inter text-[10px] font-semibold uppercase tracking-widest transition-colors sm:text-[11px] ${
          language === 'es'
            ? 'bg-gold text-neutral-950'
            : 'text-white/50 hover:text-white'
        }`}
      >
        {t.languageToggle.es}
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`rounded-full px-3 py-1.5 font-inter text-[10px] font-semibold uppercase tracking-widest transition-colors sm:text-[11px] ${
          language === 'en'
            ? 'bg-gold text-neutral-950'
            : 'text-white/50 hover:text-white'
        }`}
      >
        {t.languageToggle.en}
      </button>
    </div>
  )
}
