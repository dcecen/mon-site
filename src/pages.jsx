import React, { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Send,
  Compass, Ruler, Key, Hammer,
  ClipboardCheck, Users, ShieldCheck, Eye, CheckCircle2,
} from './icons'
import { COMPANY, Button, Eyebrow, SectionTitle, Photo, PageHero } from './components'

// Formspree form ID — remplacez par votre ID après inscription sur formspree.io
const FORMSPREE_ID = 'meewrael'

const IMG = {
  hero:    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  about:   'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
  conseil: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80',
  etudes:  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80',
  renov:   'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1100&q=80',
  gestion: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1100&q=80',
}

const SERVICES = [
  {
    id: 'conseil', num: '01', icon: Compass,
    title: 'Conseil & accompagnement',
    lead: 'Cadrer et sécuriser votre projet avant les travaux.',
    img: IMG.conseil,
    desc: "Nous vous aidons à clarifier votre besoin, à définir un programme réaliste et à arbitrer vos décisions, du premier diagnostic jusqu'au choix des intervenants.",
    items: ["Assistance à maîtrise d'ouvrage (AMO)", "Maîtrise d'œuvre (MOE)", 'Études de faisabilité', 'Mise en relation avec des artisans qualifiés'],
  },
  {
    id: 'etudes', num: '02', icon: Ruler,
    title: 'Études techniques',
    lead: 'Structure, sol et thermique : les fondations de votre projet.',
    img: IMG.etudes,
    desc: 'Nos études apportent les réponses techniques nécessaires à un projet sûr et conforme à la réglementation en vigueur.',
    items: ['Études de structure (béton, bois, métal)', 'Études géotechniques', 'Études thermiques RE2020', "Suivi d'exécution"],
  },
  {
    id: 'renovation', num: '03', icon: Hammer,
    title: 'Petites rénovations',
    lead: 'Du diagnostic à la livraison, avec des équipes coordonnées.',
    img: IMG.renov,
    desc: "Nous prenons en charge des chantiers de rénovation à taille humaine, en coordonnant les corps d'état et en assurant un suivi clair à chaque étape.",
    items: ['Rénovation de pièces (cuisine, salle de bain…)', 'Rafraîchissement et embellissement', 'Mises aux normes', 'Remise en état entre deux locations'],
  },
  {
    id: 'gestion', num: '04', icon: Key,
    title: 'Gestion locative',
    lead: "Déléguez l'opérationnel, gardez la sérénité.",
    img: IMG.gestion,
    desc: 'De la recherche du locataire au suivi technique du bien, nous gérons votre location avec rigueur et transparence.',
    items: ['Recherche et sélection des locataires', 'Rédaction des baux', 'Quittances et encaissements', 'États des lieux et suivi technique'],
  },
]

// =============================================================
// HOME PAGE
// =============================================================
export function HomePage({ onNavigate }) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Bâtiment en rénovation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(14,31,58,0.94) 0%, rgba(14,31,58,0.82) 45%, rgba(14,31,58,0.55) 100%)' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Bureau d'études & rénovation · Alsace</Eyebrow>
            <h1 className="mt-6 text-white text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
              Conseil, ingénierie et rénovation pour vos projets de bâtiment.
            </h1>
            <p className="mt-7 text-[17px] lg:text-[18px] leading-relaxed text-ink-200 max-w-2xl" style={{ textWrap: 'pretty' }}>
              De l'étude technique à la réalisation, RENOV CONSEIL EST vous accompagne avec un interlocuteur unique, du diagnostic à la livraison.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" icon={ArrowRight} onClick={() => onNavigate('contact')}>
                Demander un devis gratuit
              </Button>
              <Button variant="ghost" onClick={() => onNavigate('services')} className="!text-white !border-white/30 hover:!border-white">
                Nos services
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-1.5 w-full">
          <div className="h-full w-1/3 bg-sand-500"></div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Photo src={IMG.about} alt="Chantier de rénovation" ratio="4/5" />
            </div>
            <div className="lg:col-span-6">
              <Eyebrow>Qui sommes-nous ?</Eyebrow>
              <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
                Un accompagnement sur-mesure, du diagnostic à la livraison.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-600">
                <p>RENOV CONSEIL EST est un bureau d'études et de rénovation dédié au bâtiment. Nous intervenons auprès des particuliers comme des professionnels.</p>
                <p>Notre métier : structurer votre projet, lever les incertitudes techniques, puis le piloter jusqu'à sa livraison — avec un interlocuteur unique tout au long du parcours.</p>
              </div>
              <div className="mt-9">
                <Button variant="dark" icon={ArrowRight} onClick={() => onNavigate('contact')}>Nous contacter</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="py-20 lg:py-28 bg-ink-50/60 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionTitle eyebrow="Ce que nous faisons" title="Quatre domaines, un même engagement de qualité." />
            <p className="lg:max-w-sm text-[15px] text-ink-600 leading-relaxed">
              Conseil, études techniques, rénovation et gestion locative : un même interlocuteur, un cadre clair pour chaque mission.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(card => (
              <button
                key={card.id}
                onClick={() => onNavigate('services')}
                className="group text-left bg-white border border-ink-200 rounded-xl p-7 hover:border-sand-500 hover:shadow-card transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-sand-100 text-sand-700 inline-flex items-center justify-center group-hover:bg-sand-500 group-hover:text-white transition-colors">
                    <card.icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400">{card.num}</div>
                </div>
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight text-ink-900">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-600">{card.lead}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-900">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IA & AUTOMATISATION */}
      <section className="py-20 lg:py-28 bg-white border-t border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Technologie & automatisation</Eyebrow>
              <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-semibold tracking-tight text-ink-900" style={{ textWrap: 'balance' }}>
                Des outils développés en interne pour des études plus rapides et plus fiables.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-600">
                <p>Nous développons et utilisons des logiciels d'automatisation maison qui intègrent l'intelligence artificielle pour accélérer les tâches répétitives à haute valeur : métrés, devis, études thermiques, rapports d'avancement.</p>
                <p>Résultat : des délais raccourcis, des livrables plus précis et un reporting transparent pour nos clients à chaque étape.</p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Extraction documentaire (OCR + LLM)', desc: 'Lecture automatique de plans PDF, relevés de surface et extraction des données techniques via reconnaissance optique et modèles de langage.' },
                  { label: 'Génération de DPGF & devis', desc: 'Production assistée de Décompositions du Prix Global et Forfaitaire par lot, à partir des plans et ratios de coûts régionaux actualisés.' },
                  { label: 'Conformité réglementaire (RE2020 / DTU)', desc: "Vérification automatisée des seuils thermiques RE2020 et des règles DTU en cours d'étude, avant transmission aux bureaux de contrôle." },
                  { label: 'Workflows & intégrations API', desc: "Pipelines d'automatisation (webhooks, API REST) reliant nos outils métiers : suivi de chantier, gestion documentaire, alertes clients en temps réel." },
                  { label: 'RAG sur base documentaire', desc: 'Interrogation de notre base de CCTP, normes et réglementations par retrieval-augmented generation pour des descriptifs techniques cohérents et à jour.' },
                  { label: 'Reporting client automatisé', desc: "Génération de comptes-rendus d'avancement, bilans de chantier et synthèses financières sans ressaisie manuelle, distribués directement aux parties prenantes." },
                ].map((f, i) => (
                  <div key={i} className="p-4 rounded-lg border border-ink-200 bg-ink-50/40 hover:border-sand-400 transition-colors">
                    <div className="text-[13px] font-semibold tracking-tight text-ink-900">{f.label}</div>
                    <div className="mt-1.5 text-[13px] leading-relaxed text-ink-600">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-200 bg-ink-950 text-ink-100 overflow-hidden shadow-card">
                <div className="px-5 py-3 flex items-center justify-between border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-400">rce · pipeline études</div>
                </div>
                <div className="p-5 space-y-3 font-mono text-[12px]">
                  <div className="text-ink-400">› ocr.extract plans/RDC.pdf</div>
                  <div className="rounded-md bg-white/5 px-3 py-2 text-ink-200">
                    <span className="text-sand-400">✓</span> Surface brute : <strong className="text-white">118,4 m²</strong> · 5 pièces détectées
                  </div>
                  <div className="text-ink-400">› llm.generate DPGF --lots=all --region=alsace</div>
                  <div className="rounded-md bg-white/5 px-3 py-2 text-ink-200 space-y-1 leading-relaxed">
                    <div><span className="text-sand-400">✓</span> Lot 01 · Gros œuvre — <strong className="text-white">32 400 €</strong></div>
                    <div><span className="text-sand-400">✓</span> Lot 05 · Menuiseries ext. — <strong className="text-white">21 800 €</strong></div>
                    <div><span className="text-sand-400">✓</span> Lot 09 · CVC / plomberie — <strong className="text-white">30 600 €</strong></div>
                    <div className="border-t border-white/10 mt-2 pt-2 text-white font-semibold">Total HT estimé — 148 000 €</div>
                  </div>
                  <div className="text-ink-400">› re2020.check --seuil=Bbio_max</div>
                  <div className="flex items-center gap-2 text-ink-300">
                    <span className="inline-flex w-2 h-2 rounded-full bg-sand-500 animate-pulse"></span>
                    vérification conformité en cours…
                  </div>
                </div>
                <div className="px-5 pb-4">
                  <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-ink-500">outil interne · non commercialisé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Pourquoi nous choisir ?" title="Trois engagements simples, tenus à chaque projet." align="center" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Users,       title: 'Interlocuteur unique',   desc: "Un seul référent vous accompagne, de la première visite à la livraison." },
              { icon: ShieldCheck, title: 'Conformité & rigueur',   desc: 'Respect des normes en vigueur et dossiers techniques traçables.' },
              { icon: Eye,         title: 'Transparence',            desc: 'Un devis détaillé et un suivi clair à chaque étape du projet.' },
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
                Parlons de votre projet. Premier échange sans engagement.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Button variant="primary" icon={ArrowRight} onClick={() => onNavigate('contact')}>Demander un devis gratuit</Button>
              <a href={`tel:${COMPANY.phone.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 text-[14px] text-ink-200 hover:text-white transition">
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// =============================================================
// SERVICES PAGE
// =============================================================
export function ServicesPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <PageHero
        kicker="Nos services"
        eyebrow="Notre savoir-faire"
        title="Conseil, études techniques, rénovation et gestion locative."
        lead="Un même bureau pour cadrer votre projet, en réaliser les études, puis le piloter jusqu'à la livraison."
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Notre approche"
            title="Un seul interlocuteur, de la première visite à la remise des clés."
            lead="Nous abordons chaque mission avec la même méthode : un diagnostic honnête, un devis détaillé, et un suivi transparent jusqu'à la livraison."
            align="center"
          />
        </div>
      </section>

      <section className="pb-8 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {SERVICES.map((s, i) => (
            <article key={s.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="lg:col-span-6">
                <Photo src={s.img} alt={s.title} ratio="4/3" />
              </div>
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-md bg-sand-100 text-sand-700 inline-flex items-center justify-center">
                    <s.icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400">{s.num}</div>
                </div>
                <h2 className="mt-5 text-[26px] sm:text-[30px] font-semibold tracking-tight text-ink-900">{s.title}</h2>
                <p className="mt-1 text-[14px] font-mono tracking-[0.04em] text-sand-700">{s.lead}</p>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-600 max-w-xl">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[14px] text-ink-700">
                      <CheckCircle2 className="w-4 h-4 text-sand-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-ink-50/60 border-y border-ink-100">
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
              { title: 'Études & devis', desc: 'Solutions comparées, notes de calcul si besoin, devis détaillé et planning.' },
              { title: 'Pilotage', desc: "Coordination des artisans et des corps d'état, contrôle de la qualité." },
              { title: 'Livraison', desc: 'Réception, levée des réserves, remise des documents du projet.' },
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

      <section className="bg-ink-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Eyebrow tone="light">Étape suivante</Eyebrow>
              <h2 className="mt-4 text-[28px] sm:text-[34px] leading-[1.1] font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
                Décrivez-nous votre projet — premier échange sans engagement.
              </h2>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button variant="primary" icon={ArrowRight} onClick={() => onNavigate('contact')}>Demander un devis gratuit</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// =============================================================
// CONTACT PAGE — avec envoi réel via Formspree
// =============================================================
export function ContactPage() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', sujet: 'Conseil', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendError, setSendError] = useState(null)

  function update(k, v) {
    setForm(s => ({ ...s, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: null }))
  }

  function validate() {
    const e = {}
    if (!form.nom.trim()) e.nom = 'Requis'
    if (!form.prenom.trim()) e.prenom = 'Requis'
    if (!form.email.trim()) e.email = 'Requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message trop court (10 caractères min.)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function submit(ev) {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setSendError(null)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: form.nom,
          prenom: form.prenom,
          _replyto: form.email,
          telephone: form.telephone || 'Non renseigné',
          sujet: form.sujet,
          message: form.message,
        }),
      })
      if (res.ok) {
        setSent(true)
        setTimeout(() => setForm({ nom: '', prenom: '', email: '', telephone: '', sujet: 'Conseil', message: '' }), 200)
      } else {
        setSendError("Erreur d'envoi. Réessayez ou contactez-nous directement par email.")
      }
    } catch {
      setSendError('Erreur réseau. Vérifiez votre connexion et réessayez.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-enter">
      <PageHero
        kicker="Contact"
        eyebrow="Parlons de votre projet"
        title="Demander un devis gratuit."
        lead="Décrivez-nous votre besoin en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première analyse et, si besoin, une visite sur site."
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-ink-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-soft">
                <Eyebrow>Formulaire</Eyebrow>
                <h2 className="mt-3 text-[24px] sm:text-[28px] font-semibold tracking-tight text-ink-900">Écrivez-nous</h2>

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
                        {['Conseil', 'Études techniques', 'Rénovation', 'Gestion locative', 'Autre'].map(s => (
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
                        rows={5}
                        maxLength={600}
                        value={form.message}
                        onChange={e => update('message', e.target.value)}
                        placeholder="Décrivez votre projet, vos contraintes, vos délais…"
                        className={`w-full px-4 py-3 rounded-md border bg-white text-[15px] text-ink-900 focus:outline-none focus:ring-2 ${errors.message ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/10' : 'border-ink-300 focus:border-ink-900 focus:ring-ink-900/10'}`}
                      />
                      {errors.message && <div className="mt-1 text-[12px] text-rose-600">{errors.message}</div>}
                    </div>

                    {sendError && (
                      <div className="sm:col-span-2 p-4 rounded-lg bg-rose-50 border border-rose-200 text-[13px] text-rose-700">
                        {sendError}
                      </div>
                    )}

                    <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-[12px] text-ink-500 max-w-md">
                        Vos données sont utilisées uniquement pour vous recontacter.
                      </p>
                      <Button variant="primary" type="submit" icon={Send} disabled={loading}>
                        {loading ? 'Envoi en cours…' : 'Envoyer le message'}
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
                    { icon: MapPin, title: 'Adresse',   lines: [COMPANY.addressLine1, COMPANY.addressLine2] },
                    { icon: Phone,  title: 'Téléphone', lines: [COMPANY.phone] },
                    { icon: Mail,   title: 'Email',     lines: [COMPANY.email] },
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 inline-flex items-center justify-center text-sand-300 shrink-0">
                        <b.icon className="w-4 h-4" strokeWidth={1.6} />
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
                <div className="mt-8 pt-6 border-t border-white/10 text-[13px] text-ink-300 leading-relaxed">
                  Du lundi au vendredi, sur rendez-vous.
                </div>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-ink-200">
                <iframe
                  title="Localisation RENOV CONSEIL EST"
                  src="https://www.google.com/maps?q=45%20Route%20du%20Rhin%2C%2067400%20Illkirch-Graffenstaden&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="px-4 py-3 bg-white flex items-center justify-between text-[12px]">
                  <span className="text-ink-500">{COMPANY.addressLine1} · {COMPANY.addressLine2}</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=45+Route+du+Rhin+Illkirch-Graffenstaden"
                    target="_blank" rel="noopener noreferrer"
                    className="text-ink-700 hover:text-ink-900 font-medium inline-flex items-center gap-1"
                  >
                    Ouvrir Maps <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
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
  )
}
