import React from 'react';
import { SITE, CREATOR, CERTS, BOOKS, RECS, POSTS, CIVIC_GALLERY } from './data.js';
import { PageTitle, StatStrip, KpiRow, LogoMark, Reveal, PhoneShowcase, ReceiptWall, asset } from './ui.jsx';

const RECEIPTS = [
  {
    title: 'Cars · @rokjero',
    window: 'Instagram · 26 May — 23 Aug 2026',
    featured: true,
    items: [
      {
        src: 'assets/creator/rokjero-insights-90d.png',
        source: 'Instagram Insights',
        headline: '2,072,274 views',
        sub: '+4,072 followers · 209K interactions · 96.7% non-followers · posts 1.6M vs reels 407K',
        alt: 'Instagram Insights for @rokjero — 2,072,274 views, +4,072 net followers, 209,071 interactions across 90 days',
      },
    ],
  },
  {
    title: 'Gaming · the account before this one',
    window: 'TikTok · Instagram · YouTube — 90-day windows, early 2026',
    items: [
      {
        src: 'assets/creator-analytics.png',
        source: 'TikTok Analytics',
        headline: '2.6M post views',
        sub: '156K likes · 16K shares · 1,300 comments · 11K profile views',
        alt: 'TikTok analytics from the gaming account — 2.6M post views over 90 days',
      },
      {
        src: 'assets/creator-views.png',
        source: 'Instagram Insights',
        headline: '934,686 views',
        sub: '98.9% non-followers · 279,599 accounts reached · 99.9% from Reels',
        alt: 'Instagram views from the gaming account — 934,686 views over 90 days',
      },
      {
        src: 'assets/creator-90d.png',
        source: 'YouTube Studio',
        headline: '805,404 views',
        sub: '+2,718% vs the previous 90 days · top clip 419K',
        alt: 'YouTube Shorts 90-day views from the gaming account — 805,404 views',
      },
    ],
  },
];

const MAINTRA_NOW = [
  { src: 'assets/maintra/v153-garage.jpg', label: '01 · Garage — the polaroid deck' },
  { src: 'assets/maintra/v153-car.jpg',    label: '02 · Car screen — photo hero & history' },
  { src: 'assets/maintra/v153-plan.jpg',   label: '03 · AI plan — what is due, and why' },
  { src: 'assets/maintra/v153-ai.jpg',     label: '04 · AI entry — type it or scan the receipt' },
];

const MAINTRA_BEFORE = [
  { src: 'assets/maintra-garage.png',   label: '01 · Garage — a list of cards' },
  { src: 'assets/maintra-services.png', label: '02 · Services' },
  { src: 'assets/maintra-plan.png',     label: '03 · Plan' },
  { src: 'assets/maintra-ai.png',       label: '04 · AI service entry' },
];

export function MaintraPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="crumb">
          <span className="mono">005 — Maintra</span>
          <span className="dot"></span>
          <span>Side project · 2026</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'center', marginBottom: 24 }}>
          <img src={asset('assets/maintra-logo.png')} alt="Maintra logo" style={{ width: 80, height: 80, display: 'block' }} />
          <div>
            <h1 className="page-title" style={{ margin: 0 }}>Maintra<span className="it" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>.</span></h1>
            <p className="mono small muted" style={{ marginTop: 8 }}>maintra.public · v1.5.3 · 2026</p>
          </div>
        </div>

        <p className="lede">
          An AI-powered service book for car owners. My first fully personal product launch — not on behalf of an employer. Built to solve a real, boring problem I had myself: never being able to keep on top of what had been done to my car and what was due next. It's now past <b>1,000 users</b>.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 40 }}>
          <span className="tag solid">● Live</span>
          <span className="tag">v1.5.3</span>
          <span className="tag">1,000+ users</span>
          <span className="tag">iOS & Android</span>
          <span className="tag">6 languages</span>
          <a className="link mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginLeft: 'auto' }} href="https://rozbeyko.github.io/maintra.public/index.html" target="_blank" rel="noreferrer">Open the app ↗</a>
        </div>

        <KpiRow items={[
          { n: '1,000+', l: 'users' },
          { n: 'v1.5.3', l: 'current release' },
          { n: '1', l: 'solo founder' },
          { n: '6', l: 'languages' },
        ]} />

        {/* ── The app today ───────────────────────────────────────────── */}
        <div className="showcase" style={{ marginTop: 64 }}>
          <div className="showcase-copy">
            <div className="up muted" style={{ marginBottom: 12 }}>Where it is now · v1.5.3</div>
            <h2>A service book that looks like a shoebox of photographs.</h2>
            <p>
              The garage is a <b>polaroid deck</b> — each car a photo print with washi tape, a sticker and a handwritten odometer stamp. Swipe between cars, swipe up to open one. If you hate it, a manual-gearbox shifter in Settings switches the whole app back to a classic table view; both are live skins, so every feature works in either.
            </p>
            <p>
              Underneath the paper: a <b>maintenance plan the AI writes from your own history and notes</b> ("the gearbox clicks when shifting" turns into an urgent transmission inspection with a reason attached), a <b>service log</b> that separates parts you bought from work you actually had done, fuel and consumption measured properly between full tanks, and money that converts at <b>the exchange rate of the day the job happened</b> — not today's.
            </p>
            <p>
              Adding a record is a sentence or a photo. Type <em>"changed oil and filters at 175 000 km, 3 650 UAH at Auto Plus"</em>, or point the camera at the receipt, and it files itself into structured rows you can correct before saving.
            </p>
          </div>
          <PhoneShowcase shots={MAINTRA_NOW} side="right" badge="v1.5.3 · live" />
        </div>

        {/* ── The redesign ────────────────────────────────────────────── */}
        <div className="showcase is-reversed" style={{ marginTop: 88 }}>
          <PhoneShowcase shots={MAINTRA_BEFORE} side="left" badge="before · v1.4.2" />
          <div className="showcase-copy">
            <div className="up muted" style={{ marginBottom: 12 }}>What it looked like before</div>
            <h2>The redesign — 196 commits, one release.</h2>
            <p>
              This is v1.4.2, which is what everybody used until <b>27 July 2026</b>. It worked — every feature the app has today was already in there in some form. It was also a stack of grey cards that told you nothing you couldn't get from a spreadsheet.
            </p>
            <p>
              The problem I couldn't fix with another feature: a service book is a chore. You only open it when something is already wrong, so the app had no reason to exist on a good day. That's a product problem dressed as a design one, and the answer was the same either way — <b>the thing had to be worth looking at.</b> Carbon dark, gold in place of the old teal, a doodle background that drifts as you tilt the phone, and the garage rebuilt as prints in an album rather than rows in a table.
            </p>
            <p>
              It shipped as <b>v1.5.0</b> — 196 commits after v1.4.2, the largest release the app has had. Home-screen widgets on both platforms, the car screen rebuilt around a photo hero, VIN and registration-document scanning, parts-you-bought split from work-you-did, and full data export because your history should be yours.
            </p>
            <p>
              Three releases later — 1.5.1, 1.5.2, and now <b>1.5.3</b> — the shape has held, and the work has moved to the unglamorous half: importing history from other apps without silently mangling it, honest currency conversion, Slavic plural forms, and per-car frames.
            </p>
          </div>
        </div>

        <hr className="rule" />

        <div className="two-col" style={{ marginTop: 56 }}>
          <article className="prose">
            <h2>Why I built it</h2>
            <p>
              I run delivery for a living, but I'd never owned a product end-to-end from idea to public URL by myself. Every PM I respect has, at some point, shipped something with their name and nobody else's on it. This is mine.
            </p>
            <p>
              The "what" was personal. Every car I've owned has accumulated a paper trail in three different notebooks, my phone's notes app, and at least two service shops' SMS history. I never knew what had been done, what was due, or what the next big bill was going to be. There had to be one place that knew everything.
            </p>

            <h2>What it does</h2>
            <ul>
              <li><b>Service book</b> — every record, structured, with the garage saved as a real place rather than a string you retype. Parts you bought sit on a shelf until you mark them fitted, so an oil filter in the boot doesn't reset your oil countdown.</li>
              <li><b>Plan</b> — an AI maintenance plan pegged to mileage <em>and</em> time, with urgency tiers and a stated reason for each item, built from your history and your own notes. EVs get an oil-free plan instead of irrelevant oil changes.</li>
              <li><b>AI entry</b> — type the sentence or photograph the receipt; it comes back as structured rows you check before saving.</li>
              <li><b>VIN & registration scanning</b> — photograph the plate or the document and make, model, year, engine and drivetrain fill themselves in — with anything uncertain marked as a guess rather than quietly asserted.</li>
              <li><b>Fuel & money</b> — consumption measured between full tanks, cost per km, and multi-currency conversion at the rate of the day the job happened.</li>
              <li><b>Your data, portable</b> — full JSON backup or per-car CSV, plus import from other apps' exports. No tier required.</li>
              <li><b>Home-screen widgets</b> on Android and iOS, plus lock-screen complications.</li>
            </ul>

            <h2>Where it got to</h2>
            <p>
              <b>Past 1,000 users.</b> No marketing budget, no team, no paid acquisition — just the app, a public URL, and people telling other people. For a pet project that's the number that matters to me: it's the line where a thing stops being a demo you show your friends and becomes software strangers depend on to remember when they last changed a timing belt.
            </p>
            <p>
              It also changed how I treat the backlog. When it was just my car, every idea was equally interesting. With a thousand people in it, the questions became the real ones — what breaks quietly, what people actually open weekly, what a support message costs when there's exactly one person to answer it.
            </p>

            <h2>What I learned shipping it</h2>
            <p>
              Mostly: I was right about most of what I'd been doing for years with teams. Plans hold up. Scope cuts win. Writing things down beats remembering them. None of that changed.
            </p>
            <p>
              What <em>did</em> change is what one person can ship. With AI in the loop, the <b>MVP I shipped solo today is roughly the working product I'd have planned five engineers for five years ago</b>. That isn't a future prediction — that's what I felt building Maintra in evenings.
            </p>
            <p>
              The other thing: a growing backlog is okay. You can't see the whole picture from the beach. The right move is to ship the next useful thing and let the next-next become visible on its own.
            </p>

            <h2>What's next</h2>
            <ul>
              <li>A regular service as <em>one</em> thing to schedule — oil, filter and a look-over added together, rescheduling as a set.</li>
              <li>Export-to-PDF service book (the stapled thing a buyer or a dealership actually asks for).</li>
              <li>Public garage profile, for people who want to show their service history when they sell.</li>
              <li>More import providers — every app that lets you leave it makes the next one easier to leave too.</li>
            </ul>
          </article>

          <aside style={{ position: 'sticky', top: 90, alignSelf: 'start' }}>
            <div className="side-meta">
              <div className="row"><div className="k">Status</div><div className="v" style={{ color: 'var(--good)' }}>● Live</div></div>
              <div className="row"><div className="k">Version</div><div className="v">1.5.3</div></div>
              <div className="row"><div className="k">Users</div><div className="v">1,000+</div></div>
              <div className="row"><div className="k">Role</div><div className="v">Solo — concept, design, build, launch</div></div>
              <div className="row"><div className="k">Platforms</div><div className="v">Google Play · App Store</div></div>
              <div className="row"><div className="k">Stack</div><div className="v">React Native · Expo · Supabase · offline-first SQLite · Claude</div></div>
              <div className="row"><div className="k">Languages</div><div className="v">EN · UK · PL · FR · IT · ES</div></div>
              <div className="row"><div className="k">Redesign</div><div className="v">v1.5.0 · 27 Jul 2026 · 196 commits</div></div>
              <div className="row"><div className="k">Try it</div><div className="v"><a className="link" href="https://rozbeyko.github.io/maintra.public/index.html" target="_blank" rel="noreferrer">maintra app ↗</a></div></div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export function CreatorPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '006 — Creator' }, { label: 'Side hustle · 2026' }]}
          title='Cars, in English. <em>Eleven weeks in.</em>'
          lede="A car account I started on 10 June 2026 — the ownership side (what breaks, what it costs, what's actually worth doing) and the looking-at-them side (cars shot properly). Two and a half months later it's past two million views, on an audience that is almost entirely people who don't follow me."
        />

        <div className="mono small muted" style={{ marginBottom: 32 }}>{CREATOR.windowLabel}</div>

        <StatStrip items={CREATOR.headlineStats} />

        {/* Content-type breakdown cards */}
        <div className="cards cards-3" style={{ marginTop: 40 }}>
          {CREATOR.contentMix.map((p, i) => (
            <div className="card" key={i} style={{ background: '#0f0f12', color: '#f4f2ec' }}>
              <div className="kicker" style={{ color: '#7a7670' }}>
                <span>{String(i + 1).padStart(2, '0')} · Content type</span>
                <span style={{ color: p.color }}>● {p.name}</span>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', margin: '8px 0 4px' }}>{p.views}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: p.color, letterSpacing: '0.05em' }}>{p.growth}</div>
              <div style={{ marginTop: 16, fontSize: 14, color: '#a8a39a' }}>{p.note}</div>
            </div>
          ))}
        </div>

        <div className="two-col" style={{ marginTop: 56 }}>
          <article className="prose">
            <h2>What it is</h2>
            <p>{CREATOR.bio}</p>
            <p>
              Two halves that turn out to feed each other. One is <b>ownership</b> — what a car actually costs to keep, what fails and when, which jobs are worth paying for and which are a shop upselling you. That's the same itch that produced <a className="link" href="#/maintra">Maintra</a>; I just found out other people have it too. The other is <b>the way cars look</b> — shot deliberately, cut to hold your thumb still for eight seconds.
            </p>
            <p>
              English, because that's where the audience is — and because I'd already paid the price of learning that lesson once (below).
            </p>

            <h2>What the numbers actually say</h2>
            <p>
              <b>2,072,274 views</b> and <b>1,027,277 unique viewers</b> in ninety days, from an account that only existed for seventy-four of them. <b>+4,072 net followers</b>, <b>209,071 interactions</b>. That's the headline. The interesting parts are underneath it.
            </p>
            <p>
              <b>96.7% of reach came from people who don't follow the account.</b> The follower count is a receipt for work that already happened — it isn't the thing that distributes the work. I keep having to re-learn this in every medium I touch.
            </p>
            <p>
              <b>Posts beat Reels roughly four to one</b> — 1.6M against 407K. That is the exact inverse of my gaming account, where <b>99.9%</b> of views came from Reels. Same person, same platform, same instincts, opposite answer. Which is a decent argument against most format advice you'll read: it's almost always someone generalising from one niche.
            </p>
            <p>
              And the shape of the curve is one <b>spike</b>. A single post around <b>23 August</b> did roughly <b>800K views in a day</b> — call it two-fifths of the entire quarter. Everything before it is nearly flat. If I'd judged this account by any given week, I'd have drawn the wrong conclusion twice: once too early, once too late.
            </p>

            <h2>How I got here — two restarts from zero</h2>
            <p>
              This is the fourth account. The first three were about games.
            </p>
            <p>
              I started trying short-form content back in <b>2020</b>. The format clicked in <b>2021</b>: my first TikTok account, <b>@ki_rich</b> ("Кирич"), built up to <b>106.4K followers and 2.8M likes</b> talking about games. In Russian — which is what I'd grown up speaking.
            </p>

            <figure style={{
              maxWidth: 300,
              margin: '20px auto 28px',
              background: '#0a0a0c',
              border: '2px solid #1a1a1d',
              borderRadius: 18,
              overflow: 'hidden',
            }}>
              <img
                src={asset('assets/creator/ki_rich-tiktok.jpg')}
                alt="@ki_rich TikTok profile — 106.4K followers, 2.8M likes"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <figcaption style={{
                padding: '10px 14px 12px',
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: '#ffd400',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                @ki_rich · 106.4K · 2.8M likes · left behind in 2022
              </figcaption>
            </figure>

            <p>
              Then <b>February 2022</b> happened. Continuing to make content in Russian wasn't something I wanted to do anymore. I walked away from the account and started over from zero, in Ukrainian.
            </p>
            <p>
              The Ukrainian account found an audience — but the Ukrainian-speaking gaming market is small, and most of the audience I wanted to reach simply isn't on it. So in <b>2025</b> I made the call to start over <em>again</em>, this time in English. New account, new platform mix, back to zero followers. That one worked: <b>4.3M views in 90 days</b> across TikTok, Reels and Shorts, and eventually <b>monetised on TikTok</b>.
            </p>
            <p>
              The point of telling the long version isn't the metrics — it's that I quietly burnt down two working accounts and rebuilt twice. Once because the values asked for it, once because the ambition did. The day-job version of me makes a living telling teams that scope cuts win. This is what scope cuts cost when it's your own work.
            </p>
            <p>
              Cars are the fourth start, and the first one that isn't a pivot away from something. It's just the subject I'd been boring my friends about anyway.
            </p>

            <h2>Why I keep doing this</h2>
            <p>
              It is the part of my life where nobody is reviewing my work and nobody is paying me to ship. The PM in me wanted to know: when I have full autonomy over scope, cadence, and quality bar, what do I actually do? Turns out: I ship. Two and a half months, two million views, no client.
            </p>

            <h2>What it taught me about delivery</h2>
            <ul>
              {CREATOR.takeaways.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </article>

          <aside style={{ position: 'sticky', top: 90, alignSelf: 'start' }}>
            <div className="side-meta">
              <div className="row"><div className="k">Account</div><div className="v"><a className="link" href="https://www.instagram.com/rokjero/" target="_blank" rel="noreferrer">{CREATOR.handle}</a></div></div>
              <div className="row"><div className="k">Platform</div><div className="v">Instagram</div></div>
              <div className="row"><div className="k">Language</div><div className="v">English</div></div>
              <div className="row"><div className="k">Niche</div><div className="v">Car ownership & maintenance · car cinematography</div></div>
              <div className="row"><div className="k">Started</div><div className="v">10 June 2026</div></div>
              <div className="row"><div className="k">Followers</div><div className="v">4,500</div></div>
              <div className="row"><div className="k">Previously</div><div className="v">Gaming, 2020–2026 · two restarts from zero</div></div>
            </div>
          </aside>
        </div>

        <hr className="rule" />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
          Detail metrics
        </h2>
        <div className="stats" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {CREATOR.detailStats.slice(0, 4).map((s, i) => (
            <div className="stat" key={i}>
              <div className="n mono"><span className="tab">{s.n}</span></div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="stats" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: -1 }}>
          {CREATOR.detailStats.slice(4).map((s, i) => (
            <div className="stat" key={i}>
              <div className="n mono"><span className="tab">{s.n}</span></div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        {/* Receipts */}
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 8px' }}>
          Receipts
        </h2>
        <p className="mono small muted" style={{ margin: '0 0 36px', maxWidth: '62ch' }}>
          Native creator dashboards, unedited. Click any one to read it full size — the numbers on this page all come from these four screens.
        </p>
        <ReceiptWall groups={RECEIPTS} />
      </div>
    </main>
  );
}

export function SpeakingPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '009 — Speaking & civic' }]}
          title='Certificates, <em>credentials</em>, and the occasional plaque.'
          lede="Formal credentials matter mostly because they get past procurement filters. The plaques on the wall are the ones I'm more proud of."
        />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 24px', letterSpacing: '-0.015em' }}>Licenses & certifications</h2>
        <div className="certs">
          {CERTS.map((cert, i) => (
            <div className="cert" key={i}>
              <LogoMark mark={cert.mark} glyph={cert.glyph} size={44} />
              <div style={{ flex: 1 }}>
                <div className="name">{cert.name}</div>
                <div className="org">{cert.org}</div>
                <div className="meta">Issued {cert.issued}{cert.expires ? ` · Expires ${cert.expires}` : ''}</div>
                <div className="meta">ID · {cert.id}</div>
              </div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px', letterSpacing: '-0.015em' }}>Civic recognitions & volunteering</h2>
        <p style={{ color: 'var(--ink-2)', maxWidth: '62ch', marginTop: 0 }}>
          Since the start of the full-scale invasion in 2022 I've been part of fundraising efforts for units of the Ukrainian Armed Forces. <strong>Collectively, over ₴10 M UAH raised</strong>, channelled into vehicles, hard-to-source night-vision optics, drones, and consumables for combat units. Below are some of the letters of appreciation I've received in return. They're not credentials I list on a CV — they sit on a shelf.
        </p>

        <StatStrip items={[
          { n: '₴10M', u: '+', l: 'UAH raised collectively' },
          { n: '4+', u: '',   l: 'Units supported' },
          { n: 'Multiple', u: '', l: 'Vehicles + NVGs delivered' },
          { n: '2022', u: '—',  l: 'Ongoing' },
        ]} />

        {CIVIC_GALLERY.length > 0 && (
          <>
            <div className="up muted" style={{ marginTop: 48, marginBottom: 16 }}>Receipts · on the wall and in the field</div>
            <div className="civic-photos">
              {CIVIC_GALLERY.map((p, i) => (
                <figure className="civic-photo" key={i}>
                  <div className="frame">
                    <img src={asset(p.src)} alt={p.title} loading="lazy" />
                  </div>
                  <figcaption className="meta">
                    <span className="year mono">{p.year}</span>
                    <span className="title">{p.title}</span>
                    {p.caption && <span className="caption">{p.caption}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        <div className="cards cards-2" style={{ marginTop: 40 }}>
          <div className="card">
            <div className="kicker"><span>2022—23</span><span>72nd Separate Mechanised Brigade</span></div>
            <h3>Letter of appreciation — Black Zaporozhians</h3>
            <p>Issued by the brigade commander for substantive contribution toward defending state sovereignty and territorial integrity.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2022—now</span><span>Special Operations Forces (SOF)</span></div>
            <h3>Letter of appreciation — combat capability</h3>
            <p>For active civic stance and significant personal contribution to strengthening the combat capability of Ukraine's Special Operations Forces.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2023</span><span>67th Separate Mechanised Brigade</span></div>
            <h3>Letter of appreciation — military unit A4123</h3>
            <p>For support of the defence of Ukraine's territorial integrity, sovereignty, and independence.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2025</span><span>131st Reconnaissance Battalion</span></div>
            <h3>Plaque — named after Yevhen Konovalets</h3>
            <p>Awarded with a personal inscription. Includes the battalion crest and the line «у вогні перетоплюється залізо у сталь, у боротьбі перетворюється народ у націю».</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2022—26</span><span>Fundraising</span></div>
            <h3>Vehicles, NVGs, drones, consumables</h3>
            <p>Coordinated fundraising and procurement of cars, expensive and hard-to-source night-vision optics, drones, and consumables for active combat units. Happy to share details privately.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2025—26</span><span>Other units · off-list</span></div>
            <h3>Additional letters, kept private</h3>
            <p>Multiple further letters of appreciation from individual units, kept off the public list at the units' preference.</p>
          </div>
        </div>

        <hr className="rule" />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px', letterSpacing: '-0.015em' }}>Speaking</h2>
        <p style={{ color: 'var(--ink-2)', maxWidth: '62ch', marginTop: 0 }}>
          Available for talks on practical AI delivery, multi-stream programme management, Agile rollouts that don't become theatre, and the realities of running 40–50 person distributed teams. Email <a className="link" href={'mailto:' + SITE.email}>{SITE.email}</a> if you're organising something.
        </p>
      </div>
    </main>
  );
}

export function ReadingPage() {
  const groups = {
    Now: BOOKS.filter((b) => b.status === 'Now'),
    Reading: BOOKS.filter((b) => b.status === 'Reading'),
    Read: BOOKS.filter((b) => b.status === 'Read' || b.status === 'Re-read'),
  };
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '010 — Reading' }]}
          title='Books that shaped how I <em>think about delivery.</em>'
          lede="A working bookshelf. Not a curated 'best of'. I'd rather you read one of these all the way through than skim a list of forty."
        />

        {Object.entries(groups).map(([k, items]) => items.length === 0 ? null : (
          <section key={k} style={{ marginBottom: 56 }}>
            <div className="up muted" style={{ marginBottom: 16 }}>{k} · {items.length}</div>
            <div className="books">
              {items.map((b, i) => (
                <div className="book" key={i}>
                  <div className="cover" style={{ background: i % 3 === 0 ? '#e8c4a8' : i % 3 === 1 ? '#d9d0bd' : '#c7bda7' }}>
                    {b.title}
                  </div>
                  <div>
                    <div className="title">{b.title}</div>
                    <div className="author">{b.author}</div>
                  </div>
                  <div className={'status' + (b.status === 'Now' ? ' now' : '')}>{b.status}</div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="quote-card" style={{ marginTop: 32 }}>
          <p className="body" style={{ marginBottom: 0 }}>
            Read fewer books, more carefully. Most management books say the same three things — find the three, then go read fiction.
          </p>
        </div>
      </div>
    </main>
  );
}

export function KindPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '011 — Kind words' }]}
          title='What <em>people I worked with</em> say.'
          lede="Unsolicited LinkedIn recommendations. I lightly edited for line breaks, nothing else."
        />
        <div style={{ display: 'grid', gap: 32 }}>
          {RECS.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="quote-card">
                <p className="body">{r.body}</p>
                <div className="who">
                  <div className="avatar">{r.name.split(' ').map((p) => p[0]).join('')}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="role">{r.role}</div>
                    <div className="role" style={{ color: 'var(--muted-2)' }}>{r.relation}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <hr className="rule" />

        <div className="two-col">
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px' }}>Want to add one?</h2>
            <p style={{ color: 'var(--ink-2)' }}>
              If we've worked together and you'd like to leave a recommendation, the easiest route is LinkedIn — they show up here automatically the next time I update the site.
            </p>
            <a className="link" href="https://www.linkedin.com/in/rozbeiko" target="_blank" rel="noreferrer">Leave one on LinkedIn →</a>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px' }}>Cited in case studies</h2>
            <p style={{ color: 'var(--ink-2)' }}>
              Each of these recommendations is also referenced inside the case study they relate to, so context stays attached to the work.
            </p>
            <a className="link" href="#/cases">Case studies →</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export function WritingPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '008 — Writing' }]}
          title='Notes on <em>delivery</em>, AI, and the slow craft of leading teams.'
          lede="Short essays. I publish when I have something to say, not on a schedule. Most of what I write here comes out of a conversation with someone I'm working with."
        />
        <div className="posts">
          {POSTS.map((p) => (
            <a key={p.slug} href={'#/post/' + p.slug} className="post" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="date">{p.date}</div>
              <div>
                <h3>{p.title}</h3>
                <p className="excerpt">{p.excerpt}</p>
                <div style={{ marginTop: 12 }} className="mono small">
                  <span style={{ color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Read →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export function PostDetail({ slug }) {
  const p = POSTS.find((x) => x.slug === slug) || POSTS[0];
  const idx = POSTS.findIndex((x) => x.slug === p.slug);
  const next = POSTS[(idx + 1) % POSTS.length];
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '008 — Writing', to: 'writing' }, { label: p.date }]}
          title={p.title}
          lede={p.excerpt}
        />
        <article className="prose" style={{ marginTop: 24 }}>
          {p.body.map((para, i) => <p key={i}>{para}</p>)}
          <hr className="rule-thin" />
          <p className="mono small muted">— K · {p.date}</p>
        </article>

        <hr className="rule" />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <a className="link" href="#/writing">← All writing</a>
          <a className="link" href={'#/post/' + next.slug}>Next: {next.title} →</a>
        </div>
      </div>
    </main>
  );
}
