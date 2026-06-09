/* global React, Icons */
const { useState: useStateP, useMemo, useEffect: useEffectP } = React;

const {
  ArrowRight: ArrowRightP, ArrowUpRight: ArrowUpRightP, ChevronRight: ChevronRightP,
  Phone: PhoneP, Mail: MailP, MapPin: MapPinP, Clock: ClockP, Send: SendP,
  Compass, Ruler, Wrench, Key, Building2, Hammer,
  HardHat, PencilRuler, ClipboardCheck, FileText, BadgeCheck,
  Users, ShieldCheck, Eye, CheckCircle2,
  Thermometer, Zap, Droplets, Wind, Layers, FileCheck2, Receipt, Scale,
  CalendarClock, ScrollText, Sparkles, Target,
  Code, Cpu, Smartphone, LineChart, Lock, Bell, HeartHandshake, Database, FileSpreadsheet,
} = window.Icons;

// =============================================================
// HOME PAGE
// =============================================================
function HomePage({ onNavigate }) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950">
        {/* Background placeholder for interior shot */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 placeholder-stripes opacity-[0.55]" style={{ backgroundColor: '#1f3a5f', backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 16px)' }}></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(100deg, rgba(14,31,58,0.94) 0%, rgba(14,31,58,0.80) 45%, rgba(14,31,58,0.38) 100%)',
          }}></div>
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-20">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 hidden lg:block">
              [ photo — intérieur rénové ]
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Bureau d'études & gestion</Eyebrow>
            <h1 className="mt-6 text-white text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
              Confiez la gestion et l'ingénierie de vos projets à un partenaire de confiance.
            </h1>
            <p className="mt-7 text-[17px] lg:text-[18px] leading-relaxed text-ink-200 max-w-2xl" style={{ textWrap: 'pretty' }}>
              De l'étude technique à la réalisation, RENOV CONSEIL EST vous accompagne dans la réhabilitation et la valorisation de vos bâtiments résidentiels et professionnels.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" icon={ArrowRightP} onClick={() => onNavigate('contact')}>
                Demander un devis gratuit
              </Button>
              <Button variant="ghost" onClick={() => onNavigate('conseil')} className="!text-white !border-white/30 hover:!border-white">
                Découvrir nos expertises
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-1.5 w-full">
          <div className="h-full w-1/3 bg-sand-500"></div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS — sobre */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Placeholder label="Photo — bâtiment en réhabilitation" ratio="4/5" />
            </div>

            <div className="lg:col-span-6">
              <Eyebrow>Qui sommes-nous ?</Eyebrow>
              <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
                Un accompagnement sur-mesure, du diagnostic à la livraison.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-600" style={{ textWrap: 'pretty' }}>
                <p>
                  RENOV CONSEIL EST est un bureau d'études et de gestion dédié à la rénovation et à la valorisation du bâti. Nous intervenons aussi bien auprès des particuliers que des copropriétés et des professionnels.
                </p>
                <p>
                  Notre métier : structurer votre projet, lever les incertitudes techniques et financières, puis le piloter jusqu'à sa livraison — avec un interlocuteur unique tout au long du parcours.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button variant="dark" icon={ArrowRightP} onClick={() => onNavigate('contact')}>
                  Prendre rendez-vous
                </Button>
                <button onClick={() => onNavigate('projets')} className="text-[14px] font-medium text-ink-700 hover:text-ink-900 inline-flex items-center gap-1.5 group">
                  Voir nos projets
                  <ArrowUpRightP className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINES D'INTERVENTION */}
      <section className="py-20 lg:py-28 bg-ink-50/60 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionTitle
              eyebrow="Ce que nous faisons"
              title="Trois pôles d'activité, un même engagement de qualité."
            />
            <p className="lg:max-w-sm text-[15px] text-ink-600 leading-relaxed">
              Études, chantiers, gestion locative et outils numériques : un même interlocuteur, un cadre clair pour chaque mission.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'expertises',
                num: '01',
                icon: Compass,
                title: 'Expertises',
                desc: 'Conseil, ingénierie technique et petites rénovations clé en main. De l\'étude à la livraison.',
                cta: 'Voir nos expertises',
              },
              {
                id: 'gestion',
                num: '02',
                icon: Key,
                title: 'Gestion locative',
                desc: 'Recherche de locataires, baux, quittances, suivi technique du bien — avec nos propres équipes de maintenance.',
                cta: 'Découvrir la gestion',
              },
              {
                id: 'logiciels',
                num: '03',
                icon: Code,
                title: 'Logiciels',
                desc: 'Nos outils de gestion locative et de suivi de chantier, augmentés par l\'IA, ouverts à nos confrères.',
                cta: 'Voir les produits',
              },
            ].map(card => (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="group text-left bg-white border border-ink-200 rounded-xl p-7 hover:border-sand-500 hover:shadow-card transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-sand-100 text-sand-700 inline-flex items-center justify-center group-hover:bg-sand-500 group-hover:text-white transition-colors">
                    <card.icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400">{card.num}</div>
                </div>
                <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-ink-900">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-600">{card.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-900">
                  {card.cta}
                  <ArrowRightP className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-sand-100/0 group-hover:bg-sand-100/40 transition-colors"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IA & OUTILS NUMÉRIQUES */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Eyebrow>Technologie & IA</Eyebrow>
              <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
                Des logiciels propriétaires propulsés par l'intelligence artificielle.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-600" style={{ textWrap: 'pretty' }}>
                <p>
                  Nous développons et utilisons des outils internes, augmentés par l'IA, qui industrialisent les tâches répétitives — relevés, métrés, descriptifs, suivi de chantier, gestion documentaire — pour libérer du temps d'expertise.
                </p>
                <p>
                  Concrètement : des études plus rapides, des chiffrages plus fiables, et un reporting transparent pour le client à chaque étape du projet.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Sparkles, title: 'Études accélérées', desc: 'Estimations & DPGF générées en quelques minutes.' },
                  { icon: ClipboardCheck, title: 'Suivi traçable', desc: 'Plateforme client : avancement, photos, documents.' },
                  { icon: ShieldCheck, title: 'Conformité', desc: 'Contrôle automatique des normes en cours d\'étude.' },
                ].map((f, i) => (
                  <div key={i} className="p-4 rounded-lg border border-ink-200 bg-ink-50/40">
                    <f.icon className="w-5 h-5 text-sand-600" strokeWidth={1.7} />
                    <div className="mt-3 text-[14px] font-semibold tracking-tight text-ink-900">{f.title}</div>
                    <div className="mt-1 text-[13px] leading-relaxed text-ink-600">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                {/* Stylised IA panel mock */}
                <div className="rounded-2xl border border-ink-200 bg-white shadow-card overflow-hidden">
                  <div className="px-5 py-3 flex items-center gap-2 border-b border-ink-100 bg-ink-50/60">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-200"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-200"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-200"></span>
                    </div>
                    <div className="ml-3 font-mono text-[11px] tracking-[0.14em] uppercase text-ink-500">rce · assistant études</div>
                  </div>
                  <div className="p-5 space-y-3 font-mono text-[12px]">
                    <div className="text-ink-500">› analyse plans /maison-obernai/RDC.pdf</div>
                    <div className="rounded-md bg-ink-50 px-3 py-2 text-ink-700">
                      <span className="text-sand-600">●</span> Surface utile : <strong>118,4 m²</strong> · 5 pièces
                    </div>
                    <div className="text-ink-500">› estimer coût rénovation BBC</div>
                    <div className="rounded-md bg-ink-50 px-3 py-2 text-ink-700 leading-relaxed">
                      <span className="text-sand-600">●</span> Enveloppe estimée :{' '}
                      <strong>148 000 € HT</strong>
                      <div className="mt-1 text-[11px] text-ink-500">Isolation 38k · Menuiseries 22k · CVC 31k · Finitions 57k</div>
                    </div>
                    <div className="text-ink-500">› générer DPGF par lot</div>
                    <div className="flex items-center gap-2 text-ink-600">
                      <span className="inline-flex w-2 h-2 rounded-full bg-sand-500 animate-pulse"></span>
                      <span>génération en cours…</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-sand-500 text-white text-[11px] font-mono tracking-[0.14em] uppercase shadow-soft">
                  IA · interne
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-20 lg:py-28 bg-ink-50/60 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Pourquoi nous choisir ?"
            title="Trois engagements simples, tenus à chaque projet."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Users,
                title: 'Interlocuteur unique',
                desc: 'Un seul référent vous accompagne, de la première visite à la livraison.',
              },
              {
                icon: ShieldCheck,
                title: 'Conformité & rigueur',
                desc: 'Respect des normes en vigueur, dossiers techniques traçables, assurance décennale.',
              },
              {
                icon: Eye,
                title: 'Vision globale',
                desc: 'Ingénierie et exploitation pensées sur l\'ensemble du cycle de vie du bâtiment.',
              },
            ].map((b, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-ink-900 text-sand-300 inline-flex items-center justify-center">
                  <b.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight text-ink-900">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600 max-w-sm mx-auto">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <Eyebrow tone="light">Un projet ?</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
                Parlons de votre rénovation. Premier échange gratuit, sans engagement.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Button variant="primary" icon={ArrowRightP} onClick={() => onNavigate('contact')}>
                Démarrer un projet
              </Button>
              <a href={`tel:${COMPANY.phone.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 text-[14px] text-ink-200 hover:text-white transition">
                <PhoneP className="w-4 h-4" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// =============================================================
// EXPERTISES — prestations groupées en 3 piliers (sans descriptions verbeuses)
const EXPERTISES_GROUPS = [
  {
    id: 'conseil',
    num: '01',
    icon: Compass,
    title: 'Conseil & accompagnement',
    lead: 'Cadrer, chiffrer, sécuriser vos décisions avant les travaux.',
    items: [
      'Assistance à Maîtrise d\'Ouvrage (AMO)',
      'Maîtrise d\'Œuvre (MOE)',
      'Études de faisabilité',
      'Audit d\'acquisition',
      'Réseau d\'artisans qualifiés',
      'Conseil stratégique & arbitrages',
    ],
  },
  {
    id: 'ingenierie',
    num: '02',
    icon: Ruler,
    title: 'Études techniques',
    lead: 'Structure, sol, thermique — les fondations de votre projet.',
    items: [
      'Structure (béton, bois, métal)',
      'Géotechnique (G1 à G5)',
      'Fondations spéciales',
      'Études thermiques RE2020',
      'Audit énergétique',
      'Suivi d\'exécution',
    ],
  },
  {
    id: 'travaux',
    num: '03',
    icon: Hammer,
    title: 'Petites rénovations clé en main',
    lead: 'Du diagnostic à la livraison, avec nos équipes coordonnées.',
    items: [
      'Rénovation complète (salle de bain, cuisine…)',
      'Embellissement ponctuel',
      'Mises aux normes',
      'Dépannages techniques',
      'Remise en état entre locations',
      'Contrats d\'entretien',
    ],
  },
];

// =============================================================
// EXPERTISES PAGE — toutes les expertises mélangées
// =============================================================
function ExpertisesPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <PageHero
        kicker="Expertises"
        eyebrow="Notre savoir-faire"
        title="Études, ingénierie technique et petites rénovations clé en main."
        lead="Un même bureau pour cadrer votre projet, en réaliser les études, puis le piloter jusqu'à la livraison — sans cloison entre conception et chantier."
      />

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Eyebrow>Notre approche</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.15] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
                Un seul interlocuteur, de la première visite à la remise des clés.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-600" style={{ textWrap: 'pretty' }}>
                <p>
                  Nous abordons chaque mission avec la même méthode : un diagnostic honnête, des scénarios chiffrés, et un pilotage transparent jusqu'à la livraison.
                </p>
                <p>
                  Conseil, études techniques, petites rénovations : ces expertises se nourrissent l'une de l'autre. Un ingénieur structure qui dialogue avec le maçon, un conseil AMO qui connaît le coût réel d'un sol défavorable — c'est cette cohérence qui sécurise vos projets.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Placeholder label="Atelier — étude & coordination chantier" ratio="4/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Prestations — 3 piliers thématiques, sans verbiage */}
      <section className="py-20 lg:py-24 bg-ink-50/60 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nos prestations"
            title="Trois piliers, un fil continu : de l'étude à la livraison."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {EXPERTISES_GROUPS.map(group => (
              <div key={group.id} className="bg-white border border-ink-200 rounded-xl p-7 lg:p-8 flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-md bg-sand-100 text-sand-700 inline-flex items-center justify-center">
                    <group.icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400">{group.num}</div>
                </div>
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight text-ink-900">{group.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{group.lead}</p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                      <span className="mt-2 w-1 h-1 rounded-full bg-sand-500 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-[13px] text-ink-500">
            Besoin d'une prestation qui n'apparaît pas ici ?{' '}
            <button onClick={() => onNavigate('contact')} className="font-medium text-ink-900 underline underline-offset-4 decoration-sand-500/60 hover:decoration-sand-700">
              Parlons-en
            </button>.
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionTitle eyebrow="Notre méthode" title="Quatre étapes, du diagnostic à la livraison." />
            <p className="lg:max-w-sm text-[15px] text-ink-600 leading-relaxed">
              Un déroulé clair, des livrables identifiés, des points de validation à chaque jalon.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Écoute & diagnostic', desc: 'Visite du site, recueil des contraintes, formalisation de vos objectifs.' },
              { title: 'Études & chiffrage', desc: 'Scénarios comparés, notes de calcul, devis détaillés, planning maître.' },
              { title: 'Pilotage du chantier', desc: 'Consultation des artisans, coordination des corps d\'état, contrôle qualité.' },
              { title: 'Livraison & garanties', desc: 'Réception, levée des réserves, remise du dossier d\'ouvrage exécuté.' },
            ].map((step, i, arr) => (
              <li key={i} className="relative">
                <div className="font-mono text-[12px] tracking-[0.18em] text-sand-700 uppercase">Étape 0{i + 1}</div>
                <h4 className="mt-2 text-[18px] font-semibold tracking-tight text-ink-900">{step.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{step.desc}</p>
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-1 right-[-12px] w-6 h-px bg-ink-300"></div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projets en cours — toutes catégories sauf gestion */}
      <ProjectsInProgressGrid
        filterFn={p => p.catKey !== 'gestion'}
        onNavigate={onNavigate}
        eyebrow="Projets en cours"
        title="Ce sur quoi nous travaillons en ce moment."
        cta={() => onNavigate('projets')}
      />

      {/* CTA */}
      <section className="bg-ink-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Eyebrow tone="light">Étape suivante</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.1] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
                Décrivez-nous votre projet — premier échange gratuit, sans engagement.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Button variant="primary" icon={ArrowRightP} onClick={() => onNavigate('contact')}>Demander un devis</Button>
              <Button variant="ghost" onClick={() => onNavigate('projets')} className="!text-white !border-white/30 hover:!border-white">Voir nos projets</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// =============================================================
// GESTION LOCATIVE PAGE — distincte
// =============================================================
function GestionPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <PageHero
        kicker="Gestion locative"
        eyebrow="Administration de biens"
        title="Gestion locative & administration de biens."
        lead="De la recherche du locataire au suivi technique du bien : déléguez-nous l'opérationnel, gardez la sérénité."
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Eyebrow>Notre approche</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.15] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
                Une gestion locative adossée à un vrai savoir-faire technique.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-600" style={{ textWrap: 'pretty' }}>
                <p>
                  La gestion locative n'est pas qu'une question d'encaissements : c'est un mélange de relations humaines, de droit, de technique et d'anticipation.
                </p>
                <p>
                  Notre atout : nous sommes aussi un bureau d'études et un opérateur de petites rénovations. Travaux d'entretien, remise en état entre deux locataires, mises aux normes — nos équipes interviennent directement, sans sous-traitance opaque ni délais d'attente.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Placeholder label="Remise des clés — appartement géré" ratio="4/5" tone="sand" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-ink-50/60 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Nos prestations" title="Une offre complète, transparente, sans frais cachés." />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users, title: 'Recherche de locataires', desc: 'Annonces multi-portails, visites, étude de solvabilité, sélection rigoureuse du candidat.' },
              { icon: ScrollText, title: 'Rédaction de baux', desc: 'Baux d\'habitation, professionnels, meublés. Conformité juridique et clauses adaptées.' },
              { icon: Receipt, title: 'Quittances & encaissements', desc: 'Appels de loyers, quittances mensuelles, relances, gestion des régularisations de charges.' },
              { icon: ClipboardCheck, title: 'États des lieux', desc: 'Entrée et sortie, photos détaillées, chiffrage précis des éventuelles dégradations.' },
              { icon: Wrench, title: 'Maintenance intégrée', desc: 'Petites rénovations, dépannages et remises en état par nos propres équipes — réactivité, transparence.' },
              { icon: Building2, title: 'Suivi technique du bien', desc: 'Coordination des interventions, devis chiffrés en interne, suivi des travaux locatifs.' },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-ink-200 rounded-xl p-6 hover:border-sand-400 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-md bg-ink-900 text-sand-300 inline-flex items-center justify-center">
                    <p.icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.16em] text-ink-400">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-900">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionTitle eyebrow="Notre méthode" title="Un cycle locatif sans friction." />
            <p className="lg:max-w-sm text-[15px] text-ink-600 leading-relaxed">
              Un mandat clair, un référent unique, un reporting trimestriel.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Mise en gestion', desc: 'Visite du bien, conseils d\'optimisation, signature du mandat, mise en location.' },
              { title: 'Sélection locataire', desc: 'Diffusion multi-canal, visites, dossier, garantie loyer impayé, signature du bail.' },
              { title: 'Gestion courante', desc: 'Encaissements, charges, interventions techniques par nos équipes, reporting trimestriel.' },
              { title: 'Sortie & relocation', desc: 'État des lieux, restitution du dépôt, remise en état en interne, relocation rapide.' },
            ].map((step, i, arr) => (
              <li key={i} className="relative">
                <div className="font-mono text-[12px] tracking-[0.18em] text-sand-700 uppercase">Étape 0{i + 1}</div>
                <h4 className="mt-2 text-[18px] font-semibold tracking-tight text-ink-900">{step.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{step.desc}</p>
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-1 right-[-12px] w-6 h-px bg-ink-300"></div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projets en cours — gestion uniquement */}
      <ProjectsInProgressGrid
        filterFn={p => p.catKey === 'gestion'}
        onNavigate={onNavigate}
        eyebrow="Mandats en cours"
        title="Quelques biens que nous gérons actuellement."
        cta={() => onNavigate('projets:gestion')}
      />

      {/* Lien portail */}
      <section className="bg-ink-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Eyebrow tone="light">Espace client</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.1] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
                Suivez vos biens, vos quittances et vos interventions sur votre espace dédié.
              </h2>
              <p className="mt-4 text-[15px] text-ink-300 max-w-2xl">
                Connectez-vous à <span className="font-mono text-sand-300">{COMPANY.gestionPortalLabel}</span> pour accéder à vos documents, suivre l'avancement des interventions et échanger avec votre référent.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <a
                href={COMPANY.gestionPortalUrl}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sand-500 hover:bg-sand-600 text-white text-[14px] font-medium px-5 py-3 rounded-md transition"
              >
                Se connecter
                <ArrowUpRightP className="w-4 h-4" />
              </a>
              <Button variant="ghost" onClick={() => onNavigate('contact')} className="!text-white !border-white/30 hover:!border-white">Confier un bien</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// =============================================================
// LOGICIELS PAGE — édition SaaS
// =============================================================
const SOFTWARE_PRODUCTS = [
  {
    id: 'gestion',
    name: 'RCE · Gestion',
    tagline: 'Gestion locative augmentée',
    status: 'Disponible',
    statusTone: 'live',
    desc: 'L\'outil de gestion locative que nous utilisons au quotidien : baux, quittances, états des lieux numériques, et un suivi technique intégré qui parle aux artisans.',
    features: [
      'Baux & quittances générés automatiquement',
      'États des lieux mobiles, photos horodatées',
      'Suivi des interventions techniques',
      'Espace locataire & propriétaire',
      'Export comptable et fiscal',
    ],
    price: 'à partir de 12 € / lot / mois',
    icon: Key,
    mock: 'gestion',
  },
  {
    id: 'chantier',
    name: 'RCE · Chantier',
    tagline: 'Suivi de chantier pour artisans',
    status: 'Disponible',
    statusTone: 'live',
    desc: 'Pensé pour les petites équipes du bâtiment : planning, photos, rapports d\'avancement et génération assistée de devis et de DPGF.',
    features: [
      'Planning multi-chantiers',
      'Rapports d\'avancement avec photos',
      'Devis & DPGF assistés par IA',
      'Pointage et notes de frais',
      'Partage client en temps réel',
    ],
    price: 'à partir de 29 € / utilisateur / mois',
    icon: HardHat,
    mock: 'chantier',
  },
  {
    id: 'etudes',
    name: 'RCE · Études IA',
    tagline: 'Estimation et métré assistés par IA',
    status: 'Bêta privée',
    statusTone: 'beta',
    desc: 'À partir de plans ou de photos, génère un métré, une estimation par lot et un descriptif prêt à diffuser aux entreprises. Sur invitation.',
    features: [
      'Métrés extraits de plans PDF',
      'Estimations par lot, par ratio régional',
      'Génération de descriptifs CCTP',
      'Comparaison de scénarios',
      'API & exports interopérables',
    ],
    price: 'Sur invitation',
    icon: Cpu,
    mock: 'etudes',
  },
];

function ProductMock({ kind }) {
  if (kind === 'gestion') {
    return (
      <div className="rounded-xl border border-ink-200 bg-white overflow-hidden shadow-soft">
        <div className="px-4 py-2.5 border-b border-ink-100 bg-ink-50/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key className="w-3.5 h-3.5 text-sand-600" />
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-600">rce · gestion</span>
          </div>
          <span className="text-[10px] text-ink-400">Tableau de bord</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: 'Lots gérés', v: '14' },
              { l: 'Loyers du mois', v: '11 240 €' },
              { l: 'Impayés', v: '0' },
            ].map((s, i) => (
              <div key={i} className="rounded-md border border-ink-100 p-2.5">
                <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-ink-400">{s.l}</div>
                <div className="text-[14px] font-semibold text-ink-900 mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
          {[
            { name: 'T2 · Rue d\'Or', status: 'Quittance envoyée', tone: 'emerald' },
            { name: 'T3 · Quai des Bateliers', status: 'EDL prévu vendredi', tone: 'sand' },
            { name: 'T4 · Av. de Colmar', status: 'Intervention plombier', tone: 'sand' },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between text-[12px] py-1.5 border-b border-ink-100 last:border-0">
              <span className="text-ink-800 font-medium">{row.name}</span>
              <span className={`inline-flex items-center gap-1.5 ${row.tone === 'emerald' ? 'text-emerald-700' : 'text-sand-700'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${row.tone === 'emerald' ? 'bg-emerald-500' : 'bg-sand-500'}`}></span>
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'chantier') {
    return (
      <div className="rounded-xl border border-ink-200 bg-white overflow-hidden shadow-soft">
        <div className="px-4 py-2.5 border-b border-ink-100 bg-ink-50/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HardHat className="w-3.5 h-3.5 text-sand-600" />
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-600">rce · chantier</span>
          </div>
          <span className="text-[10px] text-ink-400">Planning · sem. 14</span>
        </div>
        <div className="p-4 space-y-2.5">
          {[
            { l: 'L', tasks: [{ w: '60%', c: 'bg-sand-500' }, { w: '30%', c: 'bg-ink-700' }] },
            { l: 'M', tasks: [{ w: '90%', c: 'bg-sand-500' }] },
            { l: 'M', tasks: [{ w: '40%', c: 'bg-ink-700' }, { w: '50%', c: 'bg-sand-500' }] },
            { l: 'J', tasks: [{ w: '70%', c: 'bg-sand-500' }] },
            { l: 'V', tasks: [{ w: '85%', c: 'bg-ink-700' }] },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px]">
              <span className="w-4 font-mono text-ink-500">{row.l}</span>
              <div className="flex-1 flex gap-1 h-3">
                {row.tasks.map((t, j) => (
                  <div key={j} className={`${t.c} rounded-sm`} style={{ width: t.w }}></div>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-2 mt-2 border-t border-ink-100 flex items-center justify-between text-[11px]">
            <span className="text-ink-500">Avancement global</span>
            <span className="font-semibold text-ink-900">68%</span>
          </div>
        </div>
      </div>
    );
  }
  // etudes
  return (
    <div className="rounded-xl border border-ink-200 bg-white overflow-hidden shadow-soft">
      <div className="px-4 py-2.5 border-b border-ink-100 bg-ink-50/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-sand-600" />
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-600">rce · études</span>
        </div>
        <span className="text-[10px] text-ink-400">Métré IA · 2.4</span>
      </div>
      <div className="p-4 space-y-2 font-mono text-[11px]">
        <div className="text-ink-500">› analyser plan.pdf</div>
        <div className="rounded-md bg-ink-50 px-2.5 py-2 text-ink-700">
          <span className="text-sand-600">●</span> Surface relevée : <strong>118,4 m²</strong>
        </div>
        <div className="text-ink-500">› générer métré par lot</div>
        <div className="rounded-md bg-ink-50 px-2.5 py-2 text-ink-700 space-y-1">
          <div className="flex justify-between"><span>Gros œuvre</span><strong>32 400 €</strong></div>
          <div className="flex justify-between"><span>Menuiseries</span><strong>21 800 €</strong></div>
          <div className="flex justify-between"><span>CVC</span><strong>30 600 €</strong></div>
          <div className="flex justify-between pt-1 border-t border-ink-200 text-ink-900"><span>Total HT</span><strong>148 000 €</strong></div>
        </div>
      </div>
    </div>
  );
}

function LogicielsPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <PageHero
        kicker="Logiciels"
        eyebrow="Édition logicielle"
        title="Des outils de gestion construits par des opérateurs du bâtiment."
        lead="Nous éditons nos propres logiciels de gestion locative et de suivi de chantier — augmentés par l'IA — et les ouvrons à nos clients et confrères."
      />

      {/* Pourquoi */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Notre conviction"
            title="Le meilleur outil métier est celui que ses créateurs utilisent eux-mêmes."
            lead="Nos logiciels naissent de problèmes concrets rencontrés sur nos chantiers et dans la gestion de nos lots. Nous les développons en interne, nous les utilisons quotidiennement, et nous les commercialisons quand ils sont mûrs."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: HardHat, title: 'Conçus par des praticiens', desc: 'Chaque fonctionnalité naît d\'un usage réel. Pas de gadget : ce que vous voyez, nous nous en servons.' },
              { icon: Cpu, title: 'IA intégrée nativement', desc: 'Métrés, devis, comptes-rendus : l\'IA accélère les tâches répétitives sans remplacer votre jugement.' },
              { icon: HeartHandshake, title: 'Support humain & réactif', desc: 'Une équipe technique joignable par téléphone. Pas de ticket perdu dans une file d\'attente.' },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-sand-100 text-sand-700 inline-flex items-center justify-center">
                  <f.icon className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-ink-900">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600 max-w-xs mx-auto">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="py-20 lg:py-24 bg-ink-50/60 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Nos produits" title="Trois outils, une même philosophie." />

          <div className="mt-14 space-y-10">
            {SOFTWARE_PRODUCTS.map((prod, i) => (
              <ProductCard key={prod.id} prod={prod} reverse={i % 2 === 1} onContact={() => onNavigate('contact')} />
            ))}
          </div>
        </div>
      </section>

      {/* Sur-mesure */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Développement sur-mesure</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.15] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
                Un besoin spécifique ? Nous développons aussi.
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-ink-600 max-w-2xl" style={{ textWrap: 'pretty' }}>
                Foncières, copropriétés, bureaux d'études : nous construisons des outils internes adaptés à votre flux de travail. Audit, prototype, mise en production — méthode agile, livraisons rapides.
              </p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Code, label: 'Web & mobile' },
                  { icon: Database, label: 'API & intégrations' },
                  { icon: Cpu, label: 'IA appliquée' },
                  { icon: Lock, label: 'Hébergement souverain' },
                ].map((t, i) => (
                  <div key={i} className="p-3 rounded-lg border border-ink-200 bg-white">
                    <t.icon className="w-5 h-5 text-sand-600" strokeWidth={1.7} />
                    <div className="mt-2 text-[13px] font-medium text-ink-800">{t.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <Button variant="dark" icon={ArrowRightP} onClick={() => onNavigate('contact')}>
                  Discuter de votre besoin
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-200 bg-ink-950 text-ink-100 p-6 shadow-card">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-400">build.log</span>
                </div>
                <div className="font-mono text-[11.5px] leading-relaxed space-y-1.5">
                  <div className="text-ink-300">$ rce build --target client-foncière</div>
                  <div className="text-sand-300">→ modules: gestion · portail · facturation</div>
                  <div className="text-sand-300">→ stack: react · postgres · openai</div>
                  <div className="text-ink-300">$ rce deploy --eu-west</div>
                  <div className="text-sand-300">✓ build success · 1.2 MB</div>
                  <div className="text-sand-300">✓ deployed · https://app.client.fr</div>
                  <div className="text-ink-300 inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-sand-500 rounded-full animate-pulse"></span>
                    live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Eyebrow tone="light">Essayer nos logiciels</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.1] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
                Réservez une démo — 20 minutes pour voir si nos outils vous font gagner du temps.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Button variant="primary" icon={ArrowRightP} onClick={() => onNavigate('contact')}>Réserver une démo</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ prod, reverse, onContact }) {
  const statusCls = prod.statusTone === 'beta'
    ? 'bg-sand-100 text-sand-800 border-sand-200'
    : 'bg-emerald-50 text-emerald-800 border-emerald-200';
  return (
    <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-ink-900 text-sand-300 inline-flex items-center justify-center">
            <prod.icon className="w-5 h-5" strokeWidth={1.6} />
          </div>
          <div className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border ${statusCls}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${prod.statusTone === 'beta' ? 'bg-sand-500' : 'bg-emerald-500 animate-pulse'}`}></span>
            {prod.status}
          </div>
        </div>
        <h3 className="mt-5 text-[26px] sm:text-[30px] font-semibold tracking-tight text-ink-900">{prod.name}</h3>
        <div className="mt-1 text-[14px] font-mono tracking-[0.12em] uppercase text-sand-700">{prod.tagline}</div>
        <p className="mt-5 text-[16px] leading-relaxed text-ink-600 max-w-xl" style={{ textWrap: 'pretty' }}>{prod.desc}</p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {prod.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-[14px] text-ink-700">
              <CheckCircle2 className="w-4 h-4 text-sand-600 mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <div className="text-[14px]">
            <span className="text-ink-500 mr-1">Tarif :</span>
            <span className="font-semibold text-ink-900">{prod.price}</span>
          </div>
          <Button variant="primary" icon={ArrowRightP} onClick={onContact}>
            {prod.statusTone === 'beta' ? 'Demander un accès' : 'Réserver une démo'}
          </Button>
        </div>
      </div>

      <div className="lg:col-span-5">
        <ProductMock kind={prod.mock} />
      </div>
    </article>
  );
}

// =============================================================
// Projets en cours — composant générique
// =============================================================
function ProjectsInProgressGrid({ filterFn, onNavigate, eyebrow, title, cta }) {
  const list = PROJECTS.filter(filterFn);
  const enCours = list.filter(p => p.status === 'en-cours');
  const display = (enCours.length > 0 ? enCours : list).slice(0, 3);
  if (display.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.1] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
              {title}
            </h2>
          </div>
          <button
            onClick={cta}
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-900 hover:text-sand-700 transition group"
          >
            Voir tous les projets
            <ArrowRightP className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
// =============================================================
// PROJECTS PAGE
// =============================================================
const PROJECTS = [
  {
    id: 1,
    title: 'Réhabilitation maison alsacienne',
    category: 'Conseil',
    catKey: 'conseil',
    status: 'en-cours',
    location: 'Obernai · 67',
    year: '2026',
    description: 'AMO sur une bâtisse à colombages : diagnostic patrimonial, dialogue ABF et coordination des corps d\'état.',
    imageLabel: 'Façade colombages — chantier en cours',
    tone: 'stripes',
  },
  {
    id: 2,
    title: 'Étude de structure & fondations',
    category: 'Ingénierie',
    catKey: 'ingenierie',
    status: 'en-cours',
    location: 'Strasbourg · 67',
    year: '2026',
    description: 'Étude géotechnique et dimensionnement de fondations spéciales pour une extension sur sol hétérogène.',
    imageLabel: 'Plans techniques — détail structure',
    tone: 'sand',
  },
  {
    id: 3,
    title: 'Étude thermique RE2020',
    category: 'Ingénierie',
    catKey: 'ingenierie',
    status: 'livre',
    location: 'Illkirch-Graffenstaden · 67',
    year: '2025',
    description: 'Simulation thermique dynamique et attestation RE2020 sur un projet de maison individuelle neuve.',
    imageLabel: 'Plan thermique — schéma isolation',
    tone: 'stripes',
  },
  {
    id: 4,
    title: 'Rénovation salle de bain clé en main',
    category: 'Maintenance',
    catKey: 'maintenance',
    status: 'livre',
    location: 'Schiltigheim · 67',
    year: '2025',
    description: 'Refonte complète d\'une salle de bain de 7 m² : plomberie, faïence, douche italienne, mise aux normes électriques.',
    imageLabel: 'Salle de bain rénovée — vue d\'ensemble',
    tone: 'stripes',
  },
  {
    id: 5,
    title: 'Remise en état entre locataires',
    category: 'Maintenance',
    catKey: 'maintenance',
    status: 'en-cours',
    location: 'Strasbourg · 67',
    year: '2026',
    description: 'Peinture complète, reprise des revêtements de sol et menues réparations sur un T3 avant relocation.',
    imageLabel: 'Appartement vidé — chantier peinture',
    tone: 'sand',
  },
  {
    id: 6,
    title: 'Mandat de gestion locative',
    category: 'Gestion Locative',
    catKey: 'gestion',
    status: 'en-cours',
    location: 'Strasbourg · 67',
    year: 'depuis 2025',
    description: 'Mise en location et suivi locatif d\'un T2 meublé pour un investisseur, avec interventions techniques internalisées.',
    imageLabel: 'Salon T2 meublé — prêt à louer',
    tone: 'stripes',
  },
];

const PROJECT_FILTERS = [
  { key: 'all',         label: 'Tous' },
  { key: 'conseil',     label: 'Conseil' },
  { key: 'ingenierie',  label: 'Ingénierie' },
  { key: 'gestion',     label: 'Gestion Locative' },
  { key: 'maintenance', label: 'Maintenance' },
];

const STATUS_FILTERS = [
  { key: 'all',     label: 'Tous statuts' },
  { key: 'en-cours', label: 'En cours' },
  { key: 'livre',   label: 'Livrés' },
];

function ProjetsPage({ onNavigate, defaultFilter = 'all' }) {
  const [filter, setFilter] = useStateP(defaultFilter);
  const [status, setStatus] = useStateP('all');

  useEffectP(() => { setFilter(defaultFilter); }, [defaultFilter]);

  const visible = useMemo(() => {
    let list = PROJECTS;
    if (filter !== 'all') list = list.filter(p => p.catKey === filter);
    if (status !== 'all') list = list.filter(p => p.status === status);
    return list;
  }, [filter, status]);

  return (
    <div className="page-enter">
      <PageHero
        kicker="Portfolio"
        eyebrow="Nos projets"
        title="Études, chantiers et missions de gestion menés en Alsace."
        lead="Un échantillon de réalisations récentes, classées par expertise. Chaque projet a son histoire — n'hésitez pas à demander un dossier détaillé."
      />

      {/* Filters */}
      <section className="py-10 lg:py-14 bg-white border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-ink-500">
              Filtrer · <span className="text-ink-800">{visible.length} projet{visible.length > 1 ? 's' : ''}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PROJECT_FILTERS.map(f => {
                const active = filter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`px-4 py-2 rounded-full text-[13px] font-medium border transition ${
                      active
                        ? 'bg-ink-900 text-white border-ink-900'
                        : 'bg-white text-ink-700 border-ink-200 hover:border-ink-400'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-ink-400 mr-1">Statut</span>
            {STATUS_FILTERS.map(s => {
              const active = status === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setStatus(s.key)}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition ${
                    active
                      ? 'bg-sand-500 text-white border-sand-500'
                      : 'bg-white text-ink-600 border-ink-200 hover:border-sand-400'
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 lg:py-20 bg-ink-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {visible.length === 0 ? (
            <div className="text-center py-20 text-ink-500">Aucun projet pour ce filtre.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {visible.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <Eyebrow>Et le vôtre ?</Eyebrow>
          <h2 className="mt-4 text-[28px] sm:text-[36px] leading-[1.1] font-semibold tracking-tight text-ink-900 max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Votre projet rejoindra peut-être cette page l'an prochain.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="primary" icon={ArrowRightP} onClick={() => onNavigate('contact')}>Démarrer un projet</Button>
            <Button variant="ghost" onClick={() => onNavigate('home')}>Retour à l'accueil</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project: p }) {
  const catColor = {
    conseil:     { bg: 'bg-ink-800',  text: 'text-white' },
    ingenierie:  { bg: 'bg-sand-600', text: 'text-white' },
    maintenance: { bg: 'bg-ink-900',  text: 'text-white' },
    gestion:     { bg: 'bg-sand-700', text: 'text-white' },
  }[p.catKey] || { bg: 'bg-ink-900', text: 'text-white' };

  const statusBadge = p.status === 'en-cours'
    ? { label: 'En cours',  cls: 'bg-white/95 text-ink-900 border border-ink-200', dot: 'bg-sand-500' }
    : { label: 'Livré',     cls: 'bg-white/95 text-ink-700 border border-ink-200', dot: 'bg-emerald-500' };

  return (
    <article className="group bg-white border border-ink-200 rounded-xl overflow-hidden hover:shadow-card transition-all">
      <div className="relative">
        <Placeholder label={p.imageLabel} ratio="16/9" tone={p.tone} className="!rounded-none !border-0 !border-b !border-ink-200" />
        <div className={`absolute top-3 left-3 ${catColor.bg} ${catColor.text} text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full`}>
          {p.category}
        </div>
        {p.status && (
          <div className={`absolute top-3 right-3 ${statusBadge.cls} text-[11px] font-medium px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-soft`}>
            <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dot} ${p.status === 'en-cours' ? 'animate-pulse' : ''}`}></span>
            {statusBadge.label}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.16em] uppercase text-ink-500">
          <span>{p.location}</span>
          <span className="w-1 h-1 rounded-full bg-ink-300"></span>
          <span>{p.year}</span>
        </div>
        <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-ink-900 leading-snug">{p.title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{p.description}</p>
        <button className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-900 group/link">
          Voir le projet
          <ArrowRightP className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}

// =============================================================
// CONTACT PAGE
// =============================================================
function ContactPage({ onNavigate }) {
  const [form, setForm] = useStateP({ nom: '', prenom: '', email: '', telephone: '', sujet: 'Conseil', message: '' });
  const [errors, setErrors] = useStateP({});
  const [sent, setSent] = useStateP(false);

  function update(k, v) {
    setForm(s => ({ ...s, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: null }));
  }

  function validate() {
    const e = {};
    if (!form.nom.trim()) e.nom = 'Requis';
    if (!form.prenom.trim()) e.prenom = 'Requis';
    if (!form.email.trim()) e.email = 'Requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message trop court (10 caractères min.)';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => {
      setForm({ nom: '', prenom: '', email: '', telephone: '', sujet: 'Conseil', message: '' });
    }, 200);
  }

  return (
    <div className="page-enter">
      <PageHero
        kicker="Contact"
        eyebrow="Parlons de votre projet"
        title="Un projet ? Contactez-nous."
        lead="Décrivez-nous votre besoin en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première analyse et, si besoin, une visite sur site."
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-ink-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-soft">
                <Eyebrow>Formulaire</Eyebrow>
                <h2 className="mt-3 text-[24px] sm:text-[28px] font-semibold tracking-tight text-ink-900">
                  Écrivez-nous
                </h2>

                {sent ? (
                  <div className="mt-8 p-6 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white inline-flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-emerald-900">Message envoyé !</div>
                        <p className="mt-1 text-[14px] text-emerald-800">
                          Merci pour votre message. Nous revenons vers vous sous 48 heures ouvrées.
                        </p>
                        <button onClick={() => setSent(false)} className="mt-4 text-[13px] font-medium text-emerald-900 underline underline-offset-4 decoration-emerald-400 hover:decoration-emerald-700">
                          Envoyer un autre message
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Nom" value={form.nom} onChange={v => update('nom', v)} error={errors.nom} required />
                    <Field label="Prénom" value={form.prenom} onChange={v => update('prenom', v)} error={errors.prenom} required />
                    <Field label="Email" type="email" value={form.email} onChange={v => update('email', v)} error={errors.email} required />
                    <Field label="Téléphone" type="tel" value={form.telephone} onChange={v => update('telephone', v)} error={errors.telephone} />

                    <div className="sm:col-span-2">
                      <label className="text-[13px] font-medium text-ink-700 mb-1.5 block">Type de projet</label>
                      <select
                        value={form.sujet}
                        onChange={e => update('sujet', e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-ink-300 bg-white text-[15px] text-ink-900 focus:outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10"
                      >
                        {['Conseil', 'Ingénierie', 'Maintenance', 'Gestion Locative', 'Immobilier', 'Autre'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-[13px] font-medium text-ink-700 mb-1.5 flex items-center justify-between">
                        <span>Message <span className="text-rose-500">*</span></span>
                        <span className={`text-[11px] font-mono ${form.message.length > 600 ? 'text-rose-500' : 'text-ink-400'}`}>{form.message.length}/600</span>
                      </label>
                      <textarea
                        rows="5"
                        maxLength="600"
                        value={form.message}
                        onChange={e => update('message', e.target.value)}
                        placeholder="Décrivez votre projet, vos contraintes, vos délais…"
                        className={`w-full px-4 py-3 rounded-md border bg-white text-[15px] text-ink-900 focus:outline-none focus:ring-2 ${errors.message ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/10' : 'border-ink-300 focus:border-ink-900 focus:ring-ink-900/10'}`}
                      />
                      {errors.message && <div className="mt-1 text-[12px] text-rose-600">{errors.message}</div>}
                    </div>

                    <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-[12px] text-ink-500 max-w-md">
                        Vos données sont utilisées uniquement pour vous recontacter. Voir notre <a href="#" className="underline underline-offset-2 hover:text-ink-700">politique de confidentialité</a>.
                      </p>
                      <Button variant="primary" type="submit" icon={SendP}>
                        Envoyer le message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* SIDE — coords + map */}
            <div className="lg:col-span-5">
              <div className="bg-ink-950 text-white rounded-2xl p-8 lg:p-10">
                <Eyebrow tone="light">Coordonnées</Eyebrow>
                <h3 className="mt-3 text-[22px] font-semibold tracking-tight">RENOV CONSEIL EST</h3>

                <div className="mt-6 space-y-5">
                  {[
                    { icon: MapPinP, title: 'Adresse', lines: [COMPANY.addressLine1, COMPANY.addressLine2] },
                    { icon: PhoneP, title: 'Téléphone', lines: [COMPANY.phone] },
                    { icon: MailP, title: 'Email', lines: [COMPANY.email] },
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 inline-flex items-center justify-center text-sand-300 shrink-0">
                        <b.icon className="w-4.5 h-4.5" strokeWidth={1.6} />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-ink-400">{b.title}</div>
                        <div className="mt-1 text-[14px] leading-relaxed">
                          {b.lines.map((l, j) => <div key={j}>{l}</div>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <span className="text-[12px] text-ink-300">Portail immobilier :</span>
                  <a href={COMPANY.portalUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand-300 hover:text-sand-200 inline-flex items-center gap-1.5">
                    {COMPANY.portalLabel}
                    <ArrowUpRightP className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* MAP */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-ink-200">
                <div className="relative aspect-[4/3] bg-ink-100">
                  {/* Stylised map placeholder */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="400" height="300" fill="#eef2f6" />
                    {/* park */}
                    <rect x="20" y="180" width="120" height="80" rx="6" fill="#dbe7d8" />
                    {/* river */}
                    <path d="M -10 60 C 80 80, 160 30, 260 70 S 410 90, 420 110" stroke="#bcd5e8" strokeWidth="22" fill="none" strokeLinecap="round" />
                    <path d="M -10 60 C 80 80, 160 30, 260 70 S 410 90, 420 110" stroke="#a9c8e0" strokeWidth="2" fill="none" />
                    {/* roads */}
                    <path d="M 0 220 L 400 200" stroke="white" strokeWidth="10" />
                    <path d="M 0 220 L 400 200" stroke="#cbd5e1" strokeWidth="1" />
                    <path d="M 160 0 L 200 300" stroke="white" strokeWidth="8" />
                    <path d="M 160 0 L 200 300" stroke="#cbd5e1" strokeWidth="1" />
                    <path d="M 240 40 L 290 290" stroke="white" strokeWidth="6" />
                    <path d="M 240 40 L 290 290" stroke="#cbd5e1" strokeWidth="1" />
                    {/* blocks */}
                    {[[40, 80, 60, 40], [120, 100, 30, 30], [220, 130, 40, 30], [310, 140, 50, 30], [310, 220, 60, 50], [60, 250, 70, 30]].map((b, i) => (
                      <rect key={i} x={b[0]} y={b[1]} width={b[2]} height={b[3]} rx="3" fill="#dde3ea" />
                    ))}
                  </svg>
                  {/* Pin */}
                  <div className="absolute" style={{ left: '52%', top: '54%' }}>
                    <div className="relative -translate-x-1/2 -translate-y-full">
                      <div className="w-9 h-9 rounded-full bg-sand-600 border-2 border-white shadow-lg flex items-center justify-center text-white">
                        <MapPinP className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <div className="w-2 h-2 bg-sand-600 rotate-45 mx-auto -mt-1.5"></div>
                    </div>
                  </div>
                  {/* Address tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur border border-ink-200 rounded-lg px-3 py-2 shadow-soft">
                    <div className="text-[12px] font-semibold text-ink-900">RENOV CONSEIL EST</div>
                    <div className="text-[11px] text-ink-600">{COMPANY.addressLine1} · {COMPANY.addressLine2}</div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white flex items-center justify-between text-[12px]">
                  <span className="text-ink-500 font-mono tracking-[0.14em] uppercase">[ carte interactive — Google Maps ]</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=45+Route+du+Rhin+Illkirch-Graffenstaden"
                    target="_blank" rel="noopener noreferrer"
                    className="text-ink-700 hover:text-ink-900 font-medium inline-flex items-center gap-1"
                  >
                    Ouvrir Maps <ArrowUpRightP className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', error, required }) {
  return (
    <div>
      <label className="text-[13px] font-medium text-ink-700 mb-1.5 flex items-center justify-between">
        <span>{label} {required && <span className="text-rose-500">*</span>}</span>
        {error && <span className="text-[11px] text-rose-600 font-normal">{error}</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-md border bg-white text-[15px] text-ink-900 focus:outline-none focus:ring-2 ${error ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/10' : 'border-ink-300 focus:border-ink-900 focus:ring-ink-900/10'}`}
      />
    </div>
  );
}

// Expose
Object.assign(window, {
  HomePage, ExpertisesPage, GestionPage, LogicielsPage, ProjetsPage, ContactPage,
  PROJECTS, PROJECT_FILTERS,
});
