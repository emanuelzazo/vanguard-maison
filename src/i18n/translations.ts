export type Language = 'es' | 'en'

export interface ProductText {
  name: string
  material: string
  price: string
}

export interface ProcessStepText {
  title: string
  body: string
}

export interface TimelineText {
  title: string
  body: string
}

export interface PressQuoteText {
  quote: string
  source: string
}

export interface JournalPostText {
  tag: string
  date: string
  readTime: string
  title: string
  excerpt: string
  body: string[]
}

export interface Translation {
  meta: {
    title: string
  }
  languageToggle: {
    es: string
    en: string
    label: string
  }
  nav: {
    collection: string
    atelier: string
    heritage: string
    journal: string
    privateFitting: string
    openMenu: string
    closeMenu: string
  }
  brand: {
    tagline: string
  }
  hero: {
    eyebrow: string
    headline1: string
    headline2: string
    headline3: string
    subheadLine1: string
    subheadLine2: string
    subheadBold: string
    ctaPrimary: string
    ctaSecondary: string
    awardLine1: string
    awardLine2: string
    bottomLocations: string
    bottomAppointment: string
    scrollLabel: string
    bgAlt: string
  }
  stats: {
    craft: { value: string; label: string }
    editions: { value: string; label: string }
    generations: { value: string; label: string }
  }
  collection: {
    eyebrow: string
    heading1: string
    heading2: string
    description: string
    enquire: string
    showFewer: string
    viewAll: (count: number) => string
    items: {
      noir: ProductText
      celeste: ProductText
      firenze: ProductText
      vendome: ProductText
      marchesa: ProductText
      bellagio: ProductText
    }
  }
  atelier: {
    eyebrow: string
    heading1: string
    heading2: string
    description: string
    cta: string
    imageAlt: string
    steps: {
      last: ProcessStepText
      clicking: ProcessStepText
      welting: ProcessStepText
      polish: ProcessStepText
    }
  }
  heritage: {
    eyebrow: string
    heading1: string
    heading2: string
    imageAlt: string
    quote: string
    quoteAuthor: string
    archiveExpand: string
    archiveCollapse: string
    timeline: {
      y1987: TimelineText
      y1994: TimelineText
      y2003: TimelineText
      y2016: TimelineText
      y2025: TimelineText
    }
  }
  press: {
    eyebrow: string
    quotes: {
      muse: PressQuoteText
      approach: PressQuoteText
      officiel: PressQuoteText
    }
  }
  journal: {
    eyebrow: string
    heading1: string
    heading2: string
    readArticle: string
    askAtelier: string
    closeArticle: string
    posts: {
      welt: JournalPostText
      kept: JournalPostText
      bespoke: JournalPostText
    }
  }
  contact: {
    eyebrow: string
    heading1: string
    heading2: string
    description: string
    addressLine: string
    formNameLabel: string
    formNamePlaceholder: string
    formEmailLabel: string
    formEmailPlaceholder: string
    formBoutiqueLabel: string
    formBoutiqueSelect: string
    formDateLabel: string
    formMessageLabel: string
    formMessagePlaceholder: string
    sending: string
    submit: string
    successTitle: string
    successBody: string
    submitAnother: string
  }
  footer: {
    blurb: string
    instagramLabel: string
    pinterestLabel: string
    exploreHeading: string
    boutiquesHeading: string
    newsletterHeading: string
    newsletterBlurb: string
    subscribed: string
    subscribeLabel: string
    emailPlaceholder: string
    copyright: string
    appointmentOnly: string
  }
  boutiques: [string, string, string, string]
}

export const translations: Record<Language, Translation> = {
  en: {
    meta: {
      title: 'VANGUARD — Maison of Luxury Footwear',
    },
    languageToggle: {
      es: 'ES',
      en: 'EN',
      label: 'Language selector',
    },
    nav: {
      collection: 'Collection',
      atelier: 'Atelier',
      heritage: 'Heritage',
      journal: 'Journal',
      privateFitting: 'Private Fitting',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    brand: {
      tagline: 'Maison de Chaussures',
    },
    hero: {
      eyebrow: 'Handcrafted in Florence · Est. 1987',
      headline1: 'Crafted.',
      headline2: 'Coveted.',
      headline3: 'Eternal.',
      subheadLine1: 'One hundred and twenty hours of Florentine artistry',
      subheadLine2: 'in every numbered pair — leather that outlives trends, ',
      subheadBold: 'and defines them.',
      ctaPrimary: 'Explore the Collection',
      ctaSecondary: 'Bespoke Service',
      awardLine1: 'Grand Prix',
      awardLine2: "de l'Artisanat 2025",
      bottomLocations: 'Florence · Paris · New York · Tokyo',
      bottomAppointment: 'By private appointment only',
      scrollLabel: 'Scroll to collection',
      bgAlt: 'Handcrafted leather monk-strap shoes in dramatic light',
    },
    stats: {
      craft: { value: '120h', label: 'Of Craft per Pair' },
      editions: { value: '1/200', label: 'Numbered Editions' },
      generations: { value: '3', label: 'Generations of Artisans' },
    },
    collection: {
      eyebrow: 'The Collection',
      heading1: 'Numbered, never',
      heading2: 'repeated.',
      description:
        'Each silhouette is produced in a run of two hundred pairs, individually numbered on the insole and retired from production once sold.',
      enquire: 'Enquire',
      showFewer: 'Show Fewer Silhouettes',
      viewAll: (count) => `View All ${count} Silhouettes`,
      items: {
        noir: { name: 'Noir Stiletto', material: 'Nappa Leather', price: '€1,450' },
        celeste: { name: 'Céleste Pump', material: 'Hand-set Crystal', price: '€2,900' },
        firenze: { name: 'Firenze Chukka', material: 'Vegetable-tanned Calf', price: '€1,150' },
        vendome: { name: 'Vendôme Oxford', material: 'Museum Calf', price: '€1,680' },
        marchesa: { name: 'Marchesa Mule', material: 'Suede & Horn Buckle', price: '€1,320' },
        bellagio: { name: 'Bellagio Loafer', material: 'Cordovan Shell', price: '€1,590' },
      },
    },
    atelier: {
      eyebrow: 'The Atelier',
      heading1: 'Four steps.',
      heading2: 'One hundred and twenty hours.',
      description:
        'Nothing here is engineered for speed. Every commission passes through the same four hands, in the same order, our founders set down in 1987.',
      cta: 'Reserve a Private Fitting',
      imageAlt: 'Artisan workbench in the Florence atelier',
      steps: {
        last: {
          title: 'The Last',
          body: 'Every silhouette begins on a hand-carved beechwood last, shaped and re-shaped until the fit disappears entirely from thought.',
        },
        clicking: {
          title: 'Clicking & Cutting',
          body: 'Master cutters read each hide by lamplight, isolating the grain so no two pairs — even numbered twins — are ever quite identical.',
        },
        welting: {
          title: 'Hand-Welting',
          body: 'A single artisan stitches the welt by hand across five uninterrupted hours, a technique taught, not written, across three generations.',
        },
        polish: {
          title: 'Polish & Patina',
          body: 'Seven layers of wax and pigment are burnished by palm until the leather holds a depth no machine finish can replicate.',
        },
      },
    },
    heritage: {
      eyebrow: 'Heritage',
      heading1: 'Three generations,',
      heading2: 'one bench.',
      imageAlt: 'Historic Florentine architecture near the Vanguard atelier',
      quote:
        "We don't chase seasons. We finish what the last generation started, and start what the next will finish.",
      quoteAuthor: 'Elena Vanguardi — Head of Design',
      archiveExpand: 'Discover the Full Archive',
      archiveCollapse: 'Collapse the Archive',
      timeline: {
        y1987: {
          title: 'A Workshop in Oltrarno',
          body: 'Founder Lucia Vanguardi opens a two-room atelier on the left bank of the Arno, with four artisans and one last-making bench.',
        },
        y1994: {
          title: 'The First Boutique',
          body: "The Florence flagship opens on Via de' Tornabuoni, numbering every pair sold from its first day of trade.",
        },
        y2003: {
          title: 'Paris Atelier',
          body: 'A second workshop opens in the Marais, dedicated entirely to bespoke and made-to-order commissions.',
        },
        y2016: {
          title: 'A Third Generation',
          body: "Lucia's granddaughter, Elena Vanguardi, joins as Head of Design, pairing archival technique with a sharper, modern line.",
        },
        y2025: {
          title: "Grand Prix de l'Artisanat",
          body: "Vanguard receives the Grand Prix de l'Artisanat, awarded to one maison annually for sustained excellence in hand craft.",
        },
      },
    },
    press: {
      eyebrow: 'As Recognized By',
      quotes: {
        muse: {
          quote:
            'A house that treats a shoe the way others treat an heirloom — unhurried, numbered, and built to be argued over by grandchildren.',
          source: 'Muse Quarterly',
        },
        approach: {
          quote:
            "Vanguard's hand-welt is the closest thing the trade has to a signature written in leather rather than ink.",
          source: 'The Approach Journal',
        },
        officiel: {
          quote: 'Coveted not for the crest, but for the hundred and twenty hours nobody sees.',
          source: "L'Officiel Atelier",
        },
      },
    },
    journal: {
      eyebrow: 'The Journal',
      heading1: 'Notes from the',
      heading2: 'workshop.',
      readArticle: 'Read Article',
      askAtelier: 'Ask the Atelier',
      closeArticle: 'Close article',
      posts: {
        welt: {
          tag: 'Craft',
          date: '2 July 2026',
          readTime: '6 min read',
          title: 'The Five Hours of a Single Welt',
          excerpt:
            'Inside the uninterrupted stretch of hand-stitching that separates a Vanguard sole from anything mass-produced.',
          body: [
            'There is a particular silence in the welting room by mid-morning — not the absence of sound, but the presence of exactly one: the pull of waxed thread through leather, over and over, for five hours without pause.',
            'Our welters train for six years before touching a client pair. The stitch itself is unremarkable to look at; its value is in the thousand repetitions that came before it, invisible to anyone but the hand that made them.',
            'It is the slowest part of the process by design. A machine could do it in ninety seconds. We have never asked one to.',
          ],
        },
        kept: {
          tag: 'Heritage',
          date: '18 June 2026',
          readTime: '4 min read',
          title: 'What Lucia Kept From the Old Workshop',
          excerpt:
            'When the Oltrarno atelier moved in 2011, only three objects made the journey by hand rather than by van.',
          body: [
            'A cutting board scarred by forty years of blades. A brass bell that once called artisans in from the courtyard. And a single last, the very first Lucia Vanguardi carved in 1987, kept not as decoration but as a reminder of the size of the beginning.',
            'Everything else — the benches, the shelving, even the original signage — was rebuilt. Some things, Elena says, earn their permanence by being used, not preserved.',
          ],
        },
        bespoke: {
          tag: 'Atelier',
          date: '3 June 2026',
          readTime: '5 min read',
          title: 'Inside a Bespoke Commission',
          excerpt:
            'From first cast to final fitting, a made-to-order pair takes fourteen weeks and three in-person appointments.',
          body: [
            'The first appointment is entirely measurement — twenty-two points across each foot, recorded by hand into a ledger that, for repeat clients, now runs three volumes deep.',
            'The second appointment is a fitting in unfinished leather, deliberately raw, so any correction can still be made without waste. Only at the third does the client see the pair as it will leave the atelier.',
            'It is slower than anything the boutique sells off the shelf. Nobody has ever asked us to speed it up.',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Private Fitting',
      heading1: 'Begin with a',
      heading2: 'conversation.',
      description:
        "Whether you're commissioning a bespoke pair or fitting from the current collection, our concierge replies within one business day.",
      addressLine: 'Florence · Paris · New York · Tokyo — by appointment only',
      formNameLabel: 'Full Name',
      formNamePlaceholder: 'Alexandra Moreau',
      formEmailLabel: 'Email',
      formEmailPlaceholder: 'you@email.com',
      formBoutiqueLabel: 'Preferred Boutique',
      formBoutiqueSelect: 'Select a location',
      formDateLabel: 'Preferred Date',
      formMessageLabel: 'Message',
      formMessagePlaceholder: 'Tell us about the pair you have in mind…',
      sending: 'Sending…',
      submit: 'Request a Fitting',
      successTitle: 'Request received.',
      successBody:
        'Thank you. A member of our concierge team will contact you within one business day to confirm your fitting.',
      submitAnother: 'Submit another request',
    },
    footer: {
      blurb: 'Handcrafted leather footwear, numbered and made in Florence since 1987.',
      instagramLabel: 'Vanguard on Instagram',
      pinterestLabel: 'Vanguard on Pinterest',
      exploreHeading: 'Explore',
      boutiquesHeading: 'Boutiques',
      newsletterHeading: 'The Maison Letter',
      newsletterBlurb: 'New silhouettes and atelier notes, sent rarely and never in bulk.',
      subscribed: 'Welcome to the Maison.',
      subscribeLabel: 'Subscribe',
      emailPlaceholder: 'you@email.com',
      copyright: '© 2026 Vanguard Maison de Chaussures. Demo site — for presentation purposes.',
      appointmentOnly: 'By private appointment only',
    },
    boutiques: ["Florence — Via de' Tornabuoni", 'Paris — Le Marais', 'New York — SoHo', 'Tokyo — Aoyama'],
  },
  es: {
    meta: {
      title: 'VANGUARD — Maison de Calzado de Lujo',
    },
    languageToggle: {
      es: 'ES',
      en: 'EN',
      label: 'Selector de idioma',
    },
    nav: {
      collection: 'Colección',
      atelier: 'Atelier',
      heritage: 'Legado',
      journal: 'Diario',
      privateFitting: 'Cita Privada',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    brand: {
      tagline: 'Maison de Chaussures',
    },
    hero: {
      eyebrow: 'Hecho a mano en Florencia · Fundada en 1987',
      headline1: 'Artesanal.',
      headline2: 'Codiciado.',
      headline3: 'Eterno.',
      subheadLine1: 'Ciento veinte horas de artesanía florentina',
      subheadLine2: 'en cada par numerado — piel que sobrevive a las tendencias, ',
      subheadBold: 'y las define.',
      ctaPrimary: 'Explorar la Colección',
      ctaSecondary: 'Servicio a Medida',
      awardLine1: 'Grand Prix',
      awardLine2: "de l'Artisanat 2025",
      bottomLocations: 'Florencia · París · Nueva York · Tokio',
      bottomAppointment: 'Solo con cita previa',
      scrollLabel: 'Ir a la colección',
      bgAlt: 'Zapatos monk-strap de piel hechos a mano bajo una luz dramática',
    },
    stats: {
      craft: { value: '120h', label: 'De Artesanía por Par' },
      editions: { value: '1/200', label: 'Ediciones Numeradas' },
      generations: { value: '3', label: 'Generaciones de Artesanos' },
    },
    collection: {
      eyebrow: 'La Colección',
      heading1: 'Numerado, jamás',
      heading2: 'repetido.',
      description:
        'Cada silueta se produce en una tirada de doscientos pares, numerados individualmente en la plantilla y retirados de producción una vez vendidos.',
      enquire: 'Consultar',
      showFewer: 'Mostrar Menos Siluetas',
      viewAll: (count) => `Ver las ${count} Siluetas`,
      items: {
        noir: { name: 'Noir Stiletto', material: 'Piel Napa', price: '€1.450' },
        celeste: { name: 'Céleste Pump', material: 'Cristal Engastado a Mano', price: '€2.900' },
        firenze: { name: 'Firenze Chukka', material: 'Becerro de Curtido Vegetal', price: '€1.150' },
        vendome: { name: 'Vendôme Oxford', material: 'Becerro de Archivo', price: '€1.680' },
        marchesa: { name: 'Marchesa Mule', material: 'Ante y Hebilla de Cuerno', price: '€1.320' },
        bellagio: { name: 'Bellagio Loafer', material: 'Cordobán', price: '€1.590' },
      },
    },
    atelier: {
      eyebrow: 'El Atelier',
      heading1: 'Cuatro pasos.',
      heading2: 'Ciento veinte horas.',
      description:
        'Nada aquí está pensado para la velocidad. Cada encargo pasa por las mismas cuatro manos, en el mismo orden que establecieron nuestros fundadores en 1987.',
      cta: 'Reservar una Cita Privada',
      imageAlt: 'Banco de trabajo artesanal en el atelier de Florencia',
      steps: {
        last: {
          title: 'La Horma',
          body: 'Cada silueta comienza sobre una horma de haya tallada a mano, moldeada una y otra vez hasta que el calce desaparece por completo del pensamiento.',
        },
        clicking: {
          title: 'Corte y Despiece',
          body: 'Maestros cortadores leen cada piel a la luz de una lámpara, aislando la flor para que no haya dos pares — ni siquiera gemelos numerados — completamente idénticos.',
        },
        welting: {
          title: 'Cosido a Mano de la Vira',
          body: 'Un único artesano cose la vira a mano durante cinco horas ininterrumpidas, una técnica transmitida, no escrita, a lo largo de tres generaciones.',
        },
        polish: {
          title: 'Pulido y Pátina',
          body: 'Siete capas de cera y pigmento se bruñen con la palma de la mano hasta que la piel alcanza una profundidad que ningún acabado mecánico puede replicar.',
        },
      },
    },
    heritage: {
      eyebrow: 'Legado',
      heading1: 'Tres generaciones,',
      heading2: 'un solo banco.',
      imageAlt: 'Arquitectura histórica florentina cerca del atelier de Vanguard',
      quote:
        'No perseguimos temporadas. Terminamos lo que empezó la generación anterior, y empezamos lo que terminará la siguiente.',
      quoteAuthor: 'Elena Vanguardi — Directora de Diseño',
      archiveExpand: 'Descubrir el Archivo Completo',
      archiveCollapse: 'Contraer el Archivo',
      timeline: {
        y1987: {
          title: 'Un Taller en Oltrarno',
          body: 'La fundadora Lucia Vanguardi abre un atelier de dos salas en la orilla izquierda del Arno, con cuatro artesanos y un banco para hacer hormas.',
        },
        y1994: {
          title: 'La Primera Boutique',
          body: "La tienda insignia de Florencia abre en Via de' Tornabuoni, numerando cada par vendido desde su primer día de actividad.",
        },
        y2003: {
          title: 'Atelier de París',
          body: 'Un segundo taller abre en Le Marais, dedicado por completo a encargos a medida y por pedido.',
        },
        y2016: {
          title: 'Una Tercera Generación',
          body: 'La nieta de Lucia, Elena Vanguardi, se incorpora como Directora de Diseño, combinando la técnica de archivo con una línea más moderna y definida.',
        },
        y2025: {
          title: "Grand Prix de l'Artisanat",
          body: "Vanguard recibe el Grand Prix de l'Artisanat, otorgado anualmente a una sola maison por su excelencia sostenida en la artesanía manual.",
        },
      },
    },
    press: {
      eyebrow: 'Reconocido Por',
      quotes: {
        muse: {
          quote:
            'Una casa que trata un zapato como otros tratan una reliquia — sin prisa, numerado, y hecho para que los nietos discutan sobre él.',
          source: 'Muse Quarterly',
        },
        approach: {
          quote:
            'La vira cosida a mano de Vanguard es lo más parecido que tiene el oficio a una firma escrita en piel en lugar de tinta.',
          source: 'The Approach Journal',
        },
        officiel: {
          quote: 'Codiciado no por el escudo, sino por las ciento veinte horas que nadie ve.',
          source: "L'Officiel Atelier",
        },
      },
    },
    journal: {
      eyebrow: 'El Diario',
      heading1: 'Notas desde el',
      heading2: 'taller.',
      readArticle: 'Leer Artículo',
      askAtelier: 'Consultar al Atelier',
      closeArticle: 'Cerrar artículo',
      posts: {
        welt: {
          tag: 'Artesanía',
          date: '2 de julio de 2026',
          readTime: '6 min de lectura',
          title: 'Las Cinco Horas de una Sola Vira',
          excerpt:
            'Dentro del tramo ininterrumpido de costura a mano que separa una suela Vanguard de cualquier producto en masa.',
          body: [
            'Hay un silencio particular en la sala de cosido de viras a media mañana — no la ausencia de sonido, sino la presencia de exactamente uno: el tirón del hilo encerado a través de la piel, una y otra vez, durante cinco horas sin pausa.',
            'Nuestros cosedores de vira se forman durante seis años antes de tocar un par de un cliente. La puntada en sí es poco llamativa a la vista; su valor está en las mil repeticiones que la precedieron, invisibles para cualquiera excepto la mano que las hizo.',
            'Es la parte más lenta del proceso, deliberadamente. Una máquina podría hacerlo en noventa segundos. Nunca le hemos pedido a ninguna que lo haga.',
          ],
        },
        kept: {
          tag: 'Legado',
          date: '18 de junio de 2026',
          readTime: '4 min de lectura',
          title: 'Lo Que Lucia Conservó del Antiguo Taller',
          excerpt:
            'Cuando el atelier de Oltrarno se mudó en 2011, solo tres objetos hicieron el viaje en mano en lugar de en furgoneta.',
          body: [
            'Una tabla de corte marcada por cuarenta años de cuchillas. Una campana de bronce que antaño llamaba a los artesanos desde el patio. Y una sola horma, la primerísima que Lucia Vanguardi talló en 1987, conservada no como decoración sino como recordatorio de la pequeñez de los comienzos.',
            'Todo lo demás — los bancos, las estanterías, incluso el cartel original — fue reconstruido. Algunas cosas, dice Elena, se ganan su permanencia siendo usadas, no conservadas.',
          ],
        },
        bespoke: {
          tag: 'Atelier',
          date: '3 de junio de 2026',
          readTime: '5 min de lectura',
          title: 'Dentro de un Encargo a Medida',
          excerpt:
            'Desde el primer vaciado hasta el ajuste final, un par por encargo lleva catorce semanas y tres citas presenciales.',
          body: [
            'La primera cita consiste enteramente en la toma de medidas — veintidós puntos en cada pie, registrados a mano en un libro que, para clientes recurrentes, ya alcanza tres volúmenes.',
            'La segunda cita es una prueba en piel sin terminar, deliberadamente en bruto, para que cualquier corrección pueda hacerse todavía sin desperdicio. Solo en la tercera el cliente ve el par tal como saldrá del atelier.',
            'Es más lento que cualquier cosa que la boutique venda de estante. Nadie nos ha pedido jamás que lo aceleremos.',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Cita Privada',
      heading1: 'Empieza con una',
      heading2: 'conversación.',
      description:
        'Ya sea que encargues un par a medida o quieras probarte algo de la colección actual, nuestro concierge responde en un día hábil.',
      addressLine: 'Florencia · París · Nueva York · Tokio — solo con cita previa',
      formNameLabel: 'Nombre Completo',
      formNamePlaceholder: 'Alexandra Moreau',
      formEmailLabel: 'Correo Electrónico',
      formEmailPlaceholder: 'tu@email.com',
      formBoutiqueLabel: 'Boutique Preferida',
      formBoutiqueSelect: 'Selecciona una ubicación',
      formDateLabel: 'Fecha Preferida',
      formMessageLabel: 'Mensaje',
      formMessagePlaceholder: 'Cuéntanos sobre el par que tienes en mente…',
      sending: 'Enviando…',
      submit: 'Solicitar una Cita',
      successTitle: 'Solicitud recibida.',
      successBody:
        'Gracias. Un miembro de nuestro equipo de concierge se pondrá en contacto contigo en un día hábil para confirmar tu cita.',
      submitAnother: 'Enviar otra solicitud',
    },
    footer: {
      blurb: 'Calzado de piel hecho a mano, numerado y fabricado en Florencia desde 1987.',
      instagramLabel: 'Vanguard en Instagram',
      pinterestLabel: 'Vanguard en Pinterest',
      exploreHeading: 'Explorar',
      boutiquesHeading: 'Boutiques',
      newsletterHeading: 'La Carta de la Maison',
      newsletterBlurb: 'Nuevas siluetas y notas del atelier, enviadas con poca frecuencia y nunca en cantidad.',
      subscribed: 'Bienvenido a la Maison.',
      subscribeLabel: 'Suscribirse',
      emailPlaceholder: 'tu@email.com',
      copyright: '© 2026 Vanguard Maison de Chaussures. Sitio de demostración — con fines de presentación.',
      appointmentOnly: 'Solo con cita previa',
    },
    boutiques: ["Florencia — Via de' Tornabuoni", 'París — Le Marais', 'Nueva York — SoHo', 'Tokio — Aoyama'],
  },
}
