import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { JOURNAL_POSTS_META } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Journal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const posts = JOURNAL_POSTS_META.map((post) => ({
    ...post,
    ...t.journal.posts[post.id as keyof typeof t.journal.posts],
  }))
  const openPost = openIndex !== null ? posts[openIndex] : null

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [openIndex])

  return (
    <section id="journal" className="bg-neutral-950 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold-light">
              {t.journal.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl">
              {t.journal.heading1} <span className="italic text-gold-light">{t.journal.heading2}</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {posts.map((post, i) => (
            <button
              type="button"
              key={post.id}
              onClick={() => setOpenIndex(i)}
              className="group flex flex-col text-left"
            >
              <div className="overflow-hidden">
                <img
                  src={post.src}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 font-inter text-[10px] uppercase tracking-widest text-gold-light/80">
                <span>{post.tag}</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-white/40">{post.date}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-white">{post.title}</h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-white/55">
                {post.excerpt}
              </p>
              <span className="mt-4 flex items-center gap-2 font-inter text-[11px] uppercase tracking-widest text-white transition-colors group-hover:text-gold-light">
                {t.journal.readArticle}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Article modal */}
      <div
        className={`fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/90 backdrop-blur-sm px-4 py-10 transition-opacity duration-300 sm:items-center sm:px-6 ${
          openPost ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setOpenIndex(null)}
      >
        {openPost && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl animate-scale-in bg-neutral-900 shadow-2xl"
          >
            <button
              type="button"
              aria-label={t.journal.closeArticle}
              onClick={() => setOpenIndex(null)}
              className="absolute right-4 top-4 z-10 text-white/70 transition-colors hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <img src={openPost.src} alt={openPost.title} className="h-56 w-full object-cover sm:h-64" />
            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3 font-inter text-[10px] uppercase tracking-widest text-gold-light/80">
                <span>{openPost.tag}</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-white/40">{openPost.date}</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-white/40">{openPost.readTime}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl font-light text-white sm:text-4xl">
                {openPost.title}
              </h3>
              <div className="mt-6 space-y-4 font-inter text-sm leading-relaxed text-white/65">
                {openPost.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setOpenIndex(null)}
                className="group mt-8 inline-flex items-center gap-3 border border-gold/40 px-6 py-3 font-inter text-[11px] uppercase tracking-widest text-gold-light transition-all hover:border-gold hover:bg-gold/10"
              >
                {t.journal.askAtelier}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
