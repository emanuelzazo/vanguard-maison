// Language-independent site data: image URLs, hrefs, and ordering.
// All visible text lives in src/i18n/translations.ts, keyed by the ids below.

export const NAV_LINKS_META = [
  { id: 'collection', href: '#collection' },
  { id: 'atelier', href: '#atelier' },
  { id: 'heritage', href: '#heritage' },
  { id: 'journal', href: '#journal' },
] as const

export const STAT_IDS = ['craft', 'editions', 'generations'] as const

export const COLLECTION_META = [
  {
    id: 'noir',
    src: 'https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'celeste',
    src: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'firenze',
    src: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'vendome',
    src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'marchesa',
    src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bellagio',
    src: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=800&auto=format&fit=crop',
  },
] as const

export const PROCESS_STEPS_META = [
  { id: 'last', n: '01' },
  { id: 'clicking', n: '02' },
  { id: 'welting', n: '03' },
  { id: 'polish', n: '04' },
] as const

export const TIMELINE_META = [
  { id: 'y1987', year: '1987' },
  { id: 'y1994', year: '1994' },
  { id: 'y2003', year: '2003' },
  { id: 'y2016', year: '2016' },
  { id: 'y2025', year: '2025' },
] as const

export const PRESS_QUOTE_IDS = ['muse', 'approach', 'officiel'] as const

export const JOURNAL_POSTS_META = [
  {
    id: 'welt',
    src: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'kept',
    src: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'bespoke',
    src: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=900&auto=format&fit=crop',
  },
] as const
